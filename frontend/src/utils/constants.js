// Company information
export const COMPANY_INFO = {
  name: process.env.REACT_APP_COMPANY_NAME || 'Santos Cleaning Solutions LLC',
  phone: process.env.REACT_APP_PHONE || '+1-866-350-9407',
  email: process.env.REACT_APP_EMAIL || 'info@santoscsolutions.com',
  address: {
    city: 'Marietta',
    state: 'GA',
    country: 'USA',
    coordinates: {
      lat: 33.9526,
      lng: -84.5499
    }
  },
  hours: 'Mon-Sat 8AM-6PM',
  socialMedia: {
    facebook: 'https://www.facebook.com/profile.php?id=61573880229783',
    instagram: 'https://www.instagram.com/santoscleaningsolutions/',
    google: 'https://www.google.com/maps/place//data=!4m3!3m2!1s0x88f511325b2440b5:0x9e2a519211f7f5e!12e1'
  }
};

// Service areas
export const SERVICE_AREAS = [
  'Marietta',
  'Roswell', 
  'Alpharetta',
  'Sandy Springs',
  'Smyrna',
  'Kennesaw',
  'Acworth',
  'Woodstock',
  'Buckhead Atlanta',
  'Cobb County'
];

// Default service types (fallback data)
export const DEFAULT_SERVICES = [
  {
    id: 'deep-cleaning',
    name: 'Deep Cleaning',
    description: 'Complete top-to-bottom cleaning ideal for first-time visits, post-renovation, or long periods without service. Includes hidden and hard-to-reach spots.',
    basePrice: 89,
    duration: 3,
    includes: [
      'All rooms cleaned thoroughly',
      'Kitchen deep clean & appliances',
      'Bathroom sanitization & grout', 
      'Window cleaning (interior)',
      'Baseboards and moldings',
      'Light fixtures and ceiling fans',
      'Closet organization',
      'Deep vacuum carpets & mop floors'
    ],
    icon: 'fa-broom',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'regular-maintenance',
    name: 'Regular Maintenance',
    description: 'Ongoing cleaning to keep your space fresh. Includes kitchen, bathrooms, bedrooms, floors, and all visible surfaces.',
    basePrice: 65,
    duration: 2,
    includes: [
      'Surface cleaning all rooms',
      'Vacuuming all floors',
      'Mopping hard surfaces',
      'Bathroom cleaning & sanitizing',
      'Kitchen cleaning & counters',
      'Dusting all surfaces',
      'Trash removal',
      'Basic organizing'
    ],
    icon: 'fa-home',
    color: 'from-green-500 to-green-600'
  },
  {
    id: 'move-in-out',
    name: 'Move-In / Move-Out Cleaning',
    description: 'Detailed cleaning to prepare a home for new occupants or leave it spotless after moving. Includes inside cabinets, baseboards, and appliances.',
    basePrice: 149,
    duration: 4,
    includes: [
      'Complete deep clean',
      'Cabinet interiors & exteriors',
      'All appliances (inside & out)',
      'Wall washing & spot cleaning',
      'Closet deep cleaning',
      'Garage/basement cleaning',
      'Light fixture deep clean',
      'Window sills & tracks'
    ],
    icon: 'fa-truck-moving',
    color: 'from-purple-500 to-purple-600'
  },
  {
    id: 'appliance-cleaning',
    name: 'Fridge & Oven Add-On',
    description: 'Deep scrubbing of inside and outside of appliances to remove grease, residue, and odors.',
    basePrice: 35,
    duration: 1,
    includes: [
      'Refrigerator deep clean (inside/out)',
      'Oven interior deep cleaning',
      'Grease & grime removal',
      'Odor elimination treatment',
      'Exterior polishing',
      'Coil cleaning (if accessible)'
    ],
    icon: 'fa-fire',
    color: 'from-red-500 to-red-600'
  },
  {
    id: 'laundry-services',
    name: 'Laundry Service Add-On',
    description: 'Washing, drying, folding and organizing clothes upon request.',
    basePrice: 25,
    duration: 1,
    includes: [
      'Washing and drying',
      'Folding and organizing',
      'Sorting by type/color',
      'Hanging delicate items',
      'Linen organization'
    ],
    icon: 'fa-tshirt',
    color: 'from-yellow-500 to-yellow-600'
  },
  {
    id: 'cabinet-cleaning',
    name: 'Cabinet Deep Clean Add-On',
    description: 'Remove dust, crumbs and buildup from kitchen and bathroom cabinets.',
    basePrice: 45,
    duration: 1,
    includes: [
      'Cabinet interior cleaning',
      'Shelf deep cleaning & organizing',
      'Hardware polishing',
      'Liner replacement (if needed)',
      'Pantry organization'
    ],
    icon: 'fa-door-open',
    color: 'from-indigo-500 to-indigo-600'
  }
];

// Before/After images (placeholder URLs - should be replaced with actual images)
export const BEFORE_AFTER_IMAGES = {
  bathroom: {
    before: '/assets/galeria/antes4.jpg',
    after: '/assets/galeria/depois4.jpg',
    title: 'Bathroom Transformation',
    description: 'From neglected grout to gleaming bathroom tiles'
  },
  kitchen: {
    before: '/assets/galeria/antes5.jpg', 
    after: '/assets/galeria/depois5.jpg',
    title: 'Kitchen Restoration',
    description: 'Kitchen restored from grease to sparkle'
  },
  room: {
    before: '/assets/galeria/antes3.jpg',
    after: '/assets/galeria/depois3.jpg', 
    title: 'Room Transformation',
    description: 'Dusty bedroom transformed into a cozy sanctuary'
  }
};

// Animation configurations
export const ANIMATION_CONFIG = {
  stagger: 0.1,
  duration: 0.7,
  ease: [0.4, 0, 0.2, 1],
  threshold: 0.1
};

// Form validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  name: /^[a-zA-Z\s'-]{2,50}$/
};

// Error messages
export const ERROR_MESSAGES = {
  required: 'This field is required',
  email: 'Please enter a valid email address',
  phone: 'Please enter a valid phone number',
  name: 'Please enter a valid name'
};