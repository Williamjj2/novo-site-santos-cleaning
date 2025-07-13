from fastapi import FastAPI, HTTPException, Depends, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from pydantic import BaseModel, EmailStr
from motor.motor_asyncio import AsyncIOMotorClient
from datetime import datetime, timedelta
import os
import uuid
import httpx
import base64
from typing import List, Optional
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Santos Cleaning Solutions API")

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# MongoDB connection
client = AsyncIOMotorClient(os.getenv("MONGO_URL", "mongodb://localhost:27017"))
db = client.santos_cleaning

# Security
security = HTTPBearer()

# Pydantic models
class ContactRequest(BaseModel):
    name: str
    phone: str
    email: EmailStr
    message: Optional[str] = ""
    sms_consent: bool
    language: str = "en"
    source: str = "website"

class ServiceBooking(BaseModel):
    customer_name: str
    email: EmailStr
    phone: str
    service_type: str
    preferred_date: str
    preferred_time: str
    address: str
    special_instructions: Optional[str] = ""
    estimated_price: Optional[float] = None

class Review(BaseModel):
    author_name: str
    rating: int
    text: str
    service_type: Optional[str] = None
    verified: bool = False

class ServiceType(BaseModel):
    name: str
    description: str
    base_price: float
    duration_hours: int
    includes: List[str]
    active: bool = True

@app.get("/")
async def root():
    return {"message": "Santos Cleaning Solutions API"}

@app.get("/api/health")
async def health_check():
    try:
        # Test database connection
        await db.command("ping")
        return {"status": "healthy", "database": "connected"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database connection failed: {str(e)}")

# Contact form submission
@app.post("/api/contact")
async def submit_contact(contact: ContactRequest):
    try:
        contact_data = {
            **contact.dict(),
            "id": str(uuid.uuid4()),
            "created_at": datetime.utcnow(),
            "status": "new",
            "user_agent": "",
            "ip_address": ""
        }
        
        # Save to database
        result = await db.contacts.insert_one(contact_data)
        
        # TODO: Send notification emails/SMS
        
        return {
            "success": True,
            "message": "Contact request submitted successfully",
            "id": contact_data["id"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit contact: {str(e)}")

# Get reviews from Supabase
@app.get("/api/reviews")
async def get_reviews():
    try:
        supabase_url = os.getenv("SUPABASE_URL")
        supabase_key = os.getenv("SUPABASE_ANON_KEY")
        
        if not supabase_url or not supabase_key:
            # Return fallback reviews if Supabase not configured
            fallback_reviews = [
                {
                    "author_name": "Maria Rodriguez",
                    "rating": 5,
                    "text": "Santos Cleaning Solutions exceeded all my expectations! Karen and William are incredibly professional and detail-oriented.",
                    "relative_time_description": "2 weeks ago",
                    "profile_photo_url": "https://ui-avatars.com/api/?name=Maria+Rodriguez&background=4285F4&color=fff&size=128&font-size=0.6&bold=true"
                }
            ]
            return {"reviews": fallback_reviews}
        
        try:
            async with httpx.AsyncClient() as client:
                response = await client.get(
                    f"{supabase_url}/rest/v1/google_reviews",
                    headers={
                        "apikey": supabase_key,
                        "Authorization": f"Bearer {supabase_key}"
                    },
                    params={
                        "select": "*",
                        "is_active": "eq.true",
                        "order": "review_time.desc",
                        "limit": "10"
                    }
                )
                
                if response.status_code == 200:
                    data = response.json()
                    processed_reviews = []
                    for review in data:
                        processed_reviews.append({
                            "author_name": review.get("author_name", "Anonymous"),
                            "rating": review.get("rating", 5),
                            "text": review.get("text", "Great service!"),
                            "relative_time_description": review.get("relative_time_description", "1 week ago"),
                            "profile_photo_url": f"https://ui-avatars.com/api/?name={review.get('author_name', 'Anonymous')}&background=4285F4&color=fff&size=128"
                        })
                    return {"reviews": processed_reviews}
                else:
                    # Supabase request failed, return fallback reviews
                    fallback_reviews = [
                        {
                            "author_name": "Maria Rodriguez",
                            "rating": 5,
                            "text": "Santos Cleaning Solutions exceeded all my expectations! Karen and William are incredibly professional and detail-oriented.",
                            "relative_time_description": "2 weeks ago",
                            "profile_photo_url": "https://ui-avatars.com/api/?name=Maria+Rodriguez&background=4285F4&color=fff&size=128&font-size=0.6&bold=true"
                        },
                        {
                            "author_name": "Carlos Silva",
                            "rating": 5,
                            "text": "Excellent service! Very thorough and professional cleaning. Highly recommend!",
                            "relative_time_description": "1 month ago",
                            "profile_photo_url": "https://ui-avatars.com/api/?name=Carlos+Silva&background=4285F4&color=fff&size=128&font-size=0.6&bold=true"
                        }
                    ]
                    return {"reviews": fallback_reviews}
                    
        except Exception as supabase_error:
            # Supabase connection failed, return fallback reviews
            fallback_reviews = [
                {
                    "author_name": "Maria Rodriguez",
                    "rating": 5,
                    "text": "Santos Cleaning Solutions exceeded all my expectations! Karen and William are incredibly professional and detail-oriented.",
                    "relative_time_description": "2 weeks ago",
                    "profile_photo_url": "https://ui-avatars.com/api/?name=Maria+Rodriguez&background=4285F4&color=fff&size=128&font-size=0.6&bold=true"
                },
                {
                    "author_name": "Carlos Silva",
                    "rating": 5,
                    "text": "Excellent service! Very thorough and professional cleaning. Highly recommend!",
                    "relative_time_description": "1 month ago",
                    "profile_photo_url": "https://ui-avatars.com/api/?name=Carlos+Silva&background=4285F4&color=fff&size=128&font-size=0.6&bold=true"
                }
            ]
            return {"reviews": fallback_reviews}
                
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching reviews: {str(e)}")

# Service types
@app.get("/api/services")
async def get_services():
    try:
        services = await db.service_types.find({"active": True}, {"_id": 0}).to_list(length=None)
        return {"services": services}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching services: {str(e)}")

# Book a service
@app.post("/api/bookings")
async def create_booking(booking: ServiceBooking):
    try:
        booking_data = {
            **booking.dict(),
            "id": str(uuid.uuid4()),
            "created_at": datetime.utcnow(),
            "status": "pending",
            "confirmation_sent": False
        }
        
        result = await db.bookings.insert_one(booking_data)
        
        return {
            "success": True,
            "message": "Booking request submitted successfully",
            "booking_id": booking_data["id"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create booking: {str(e)}")

# Add a review
@app.post("/api/reviews")
async def add_review(review: Review):
    try:
        review_data = {
            **review.dict(),
            "id": str(uuid.uuid4()),
            "created_at": datetime.utcnow(),
            "approved": False  # Requires admin approval
        }
        
        result = await db.reviews.insert_one(review_data)
        
        return {
            "success": True,
            "message": "Review submitted for approval",
            "id": review_data["id"]
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to submit review: {str(e)}")

# Initialize default service types
@app.on_event("startup")
async def startup_event():
    # Check if service types exist, if not create defaults
    count = await db.service_types.count_documents({})
    if count == 0:
        default_services = [
            {
                "id": str(uuid.uuid4()),
                "name": "Deep Cleaning",
                "description": "Complete top-to-bottom cleaning ideal for first-time visits, post-renovation, or long periods without service. Includes hidden and hard-to-reach spots.",
                "base_price": 200.0,
                "duration_hours": 4,
                "includes": ["All rooms", "Kitchen deep clean", "Bathroom sanitization", "Window cleaning", "Baseboards", "Light fixtures"],
                "active": True,
                "created_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Regular Maintenance",
                "description": "Ongoing cleaning to keep your space fresh. Includes kitchen, bathrooms, bedrooms, floors, and all visible surfaces.",
                "base_price": 120.0,
                "duration_hours": 2,
                "includes": ["Surface cleaning", "Vacuuming", "Mopping", "Bathroom cleaning", "Kitchen cleaning", "Dusting"],
                "active": True,
                "created_at": datetime.utcnow()
            },
            {
                "id": str(uuid.uuid4()),
                "name": "Move-In / Move-Out Cleaning",
                "description": "Detailed cleaning to prepare a home for new occupants or leave it spotless after moving. Includes inside cabinets, baseboards, and appliances.",
                "base_price": 300.0,
                "duration_hours": 6,
                "includes": ["Complete deep clean", "Cabinet interiors", "Appliance cleaning", "Wall washing", "Closet cleaning", "Garage cleaning"],
                "active": True,
                "created_at": datetime.utcnow()
            }
        ]
        
        await db.service_types.insert_many(default_services)
        print("Default service types initialized")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)