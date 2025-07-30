// Santos Cleaning Solutions - Company Information
export const COMPANY_INFO = {
  name: 'Santos Cleaning Solutions LLC',
  shortName: 'Santos Cleaning',
  phone: '+1-866-350-9407',
  phoneDisplay: '(866) 350-9407',
  email: 'info@santoscsolutions.com',
  website: 'https://santoscsolutions.com',
  
  address: {
    city: 'Marietta',
    state: 'GA',
    stateCode: 'GA',
    country: 'USA',
    zipCode: '30060',
    fullAddress: 'Marietta, GA 30060',
    coordinates: {
      lat: 33.9526,
      lng: -84.5499
    }
  },

  businessHours: {
    weekdays: 'Monday - Friday: 8:00 AM - 6:00 PM',
    saturday: 'Saturday: 9:00 AM - 4:00 PM',
    sunday: 'Sunday: Closed',
    display: 'Mon-Fri 8AM-6PM, Sat 9AM-4PM'
  },

  socialMedia: {
    facebook: 'https://www.facebook.com/profile.php?id=61573880229783',
    instagram: 'https://www.instagram.com/santoscleaningsolutions/',
    google: 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x88f511325b2440b5:0x9e2a519211f7f5e!12e1',
    googleReviews: 'https://g.page/r/CZH15hJ3JaKOEAI/review'
  },

  businessDetails: {
    founded: '2023',
    licenses: ['Licensed', 'Insured', 'Bonded'],
    specialties: ['Residential Cleaning', 'Commercial Cleaning', 'Deep Cleaning', 'Move-in/Move-out'],
    serviceRadius: '25 miles from Marietta, GA',
    languages: ['English', 'Spanish', 'Portuguese'],
    emergencyService: true,
    sameDayService: true
  }
}

// Service Areas - EXPANDED for Atlanta Metro Premium Areas
export const SERVICE_AREAS = [
  // Core Marietta & North Cobb
  'Marietta',
  'East Marietta', 
  'West Marietta',
  'Kennesaw',
  'Acworth',
  'Dallas',
  'Powder Springs',
  
  // North Atlanta Premium
  'Roswell',
  'Alpharetta',
  'Milton',
  'Mountain Park',
  'Johns Creek',
  'Duluth',
  
  // Sandy Springs & Dunwoody  
  'Sandy Springs',
  'Dunwoody',
  'Brookhaven',
  'Chamblee',
  'Doraville',
  
  // Buckhead & Midtown Atlanta
  'Buckhead',
  'Midtown Atlanta',
  'Virginia Highland',
  'Morningside',
  'Ansley Park',
  'Piedmont Park Area',
  
  // Smyrna & Vinings
  'Smyrna',
  'Vinings',
  'Cumberland',
  'Galleria',
  
  // Woodstock & Cherokee County
  'Woodstock',
  'Holly Springs',
  'Canton',
  'Ball Ground',
  
  // East Cobb Premium Areas
  'East Cobb',
  'Johnson Ferry',
  'Lassiter',
  'Walton',
  'Sprayberry',
  
  // Gwinnett Premium
  'Suwanee',
  'Sugar Hill',
  'Buford',
  'Flowery Branch',
  'Gainesville',
  
  // Fulton County North
  'Cumming',
  'Lake Lanier Area',
  'Dawsonville',
  
  // Additional Premium Communities
  'Country Club of the South',
  'St. Ives',
  'Bridgemill',
  'Towne Lake',
  'Bentwater',
  'Governor Towne Club'
]

// Service Categories
export const SERVICES = [
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    shortDescription: 'Comprehensive top-to-bottom cleaning',
    description: 'Our deep cleaning service includes detailed cleaning of all areas including baseboards, light fixtures, ceiling fans, inside cabinets, and detailed bathroom and kitchen cleaning.',
    features: [
      'Detailed kitchen appliance cleaning',
      'Bathroom tile and grout scrubbing', 
      'Baseboards and window sills',
      'Inside cabinets and drawers',
      'Light fixtures and ceiling fans',
      'Behind furniture cleaning'
    ],
    startingPrice: 150,
    duration: '4-6 hours',
    popular: true
  },
  {
    id: 'regular-maintenance',
    name: 'Regular Cleaning',
    shortDescription: 'Consistent weekly, bi-weekly, or monthly service',
    description: 'Keep your home consistently clean with our regular maintenance cleaning. We focus on all essential areas including kitchens, bathrooms, living spaces, and bedrooms.',
    features: [
      'Kitchen cleaning and sanitizing',
      'Bathroom deep cleaning',
      'Dusting all surfaces',
      'Vacuuming and mopping',
      'Trash removal',
      'General organization'
    ],
    startingPrice: 80,
    duration: '2-4 hours',
    popular: true
  },
  {
    id: 'move-in-out',
    name: 'Move-In / Move-Out Cleaning',
    shortDescription: 'Complete cleaning for moving transitions',
    description: 'Perfect for moving transitions, our move-in/move-out cleaning ensures your new or former home is spotless.',
    features: [
      'Empty house cleaning',
      'Cabinet cleaning inside/out',
      'Appliance deep cleaning',
      'Floor deep cleaning',
      'Wall washing',
      'Window cleaning'
    ],
    startingPrice: 200,
    duration: '5-7 hours',
    popular: false
  },
  {
    id: 'appliance-cleaning',
    name: 'Fridge & Oven Cleaning',
    shortDescription: 'Deep cleaning for kitchen appliances',
    description: 'Professional deep cleaning of refrigerators, ovens, and other kitchen appliances.',
    features: [
      'Refrigerator interior/exterior',
      'Oven deep cleaning',
      'Microwave sanitizing',
      'Dishwasher cleaning',
      'Range hood cleaning'
    ],
    startingPrice: 50,
    duration: '1-2 hours',
    popular: false,
    addon: true
  },
  {
    id: 'laundry-services',
    name: 'Laundry Services',
    shortDescription: 'Wash, dry, and fold service',
    description: 'Complete laundry service including washing, drying, folding, and organizing.',
    features: [
      'Wash and dry',
      'Folding and organizing',
      'Bed sheet changing',
      'Towel service',
      'Ironing available'
    ],
    startingPrice: 30,
    duration: '2-3 hours',
    popular: false,
    addon: true
  },
  {
    id: 'cabinet-cleaning',
    name: 'Interior Cabinet Cleaning',
    shortDescription: 'Deep cleaning inside cabinets and drawers',
    description: 'Thorough cleaning and organizing of kitchen and bathroom cabinets, inside and out.',
    features: [
      'Remove all items',
      'Clean interior surfaces',
      'Organize and replace items',
      'Cabinet door cleaning',
      'Drawer cleaning'
    ],
    startingPrice: 40,
    duration: '1-2 hours',
    popular: false,
    addon: true
  }
]

// Pricing Factors
export const PRICING_FACTORS = {
  baseRates: {
    'deep-cleaning': 0.15, // per sq ft
    'regular-maintenance': 0.08, // per sq ft  
    'move-in-out': 0.18, // per sq ft
  },
  minimumPrices: {
    'deep-cleaning': 150,
    'regular-maintenance': 80,
    'move-in-out': 200,
  },
  addons: {
    'appliance-cleaning': 50,
    'laundry-services': 30,
    'cabinet-cleaning': 40,
    'garage-cleaning': 60,
    'basement-cleaning': 80
  },
  discounts: {
    weekly: 0.15,      // 15% off
    biweekly: 0.10,    // 10% off
    monthly: 0.05,     // 5% off
    firstTime: 0.10,   // 10% off first cleaning
    referral: 25       // $25 credit
  }
}

// Trust Indicators
export const TRUST_INDICATORS = [
  {
    icon: 'shield',
    text: 'Licensed & Insured',
    description: 'Fully licensed and insured for your peace of mind'
  },
  {
    icon: 'star',
    text: '5-Star Rated Service',
    description: 'Consistently rated 5 stars by our customers'
  },
  {
    icon: 'home',
    text: 'Family Owned',
    description: 'Local family business serving the community'
  },
  {
    icon: 'check',
    text: 'Free Estimates',
    description: 'No obligation free estimates for all services'
  },
  {
    icon: 'clock',
    text: 'Same-Day Response',
    description: 'Quick response to all inquiries and bookings'
  }
]

// FAQ Data
export const FAQ_DATA = [
  {
    question: 'How much do your cleaning services cost?',
    answer: 'Our pricing varies based on the size of your home, type of cleaning, and frequency. Deep cleaning starts at $150, regular cleaning at $80. We provide free, no-obligation estimates.'
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, Santos Cleaning Solutions is fully licensed, insured, and bonded. We carry comprehensive liability insurance for your protection and peace of mind.'
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Marietta, GA and surrounding areas including Kennesaw, Roswell, Alpharetta, Sandy Springs, Buckhead, and more. Contact us to confirm service in your area.'
  },
  {
    question: 'Do I need to be home during the cleaning?',
    answer: 'No, you don\'t need to be home. Many clients provide us with access instructions or a key. We\'re fully insured and background-checked for your security.'
  },
  {
    question: 'What if I\'m not satisfied with the cleaning?',
    answer: 'We offer a 24-hour satisfaction guarantee. If you\'re not completely satisfied, we\'ll return within 24 hours to make it right at no additional charge.'
  },
  {
    question: 'Do you bring your own cleaning supplies?',
    answer: 'Yes, we bring all necessary cleaning supplies and equipment. We use eco-friendly, professional-grade products. If you prefer specific products, just let us know.'
  }
]

export default {
  COMPANY_INFO,
  SERVICE_AREAS,
  SERVICES,
  PRICING_FACTORS,
  TRUST_INDICATORS,
  FAQ_DATA
}
