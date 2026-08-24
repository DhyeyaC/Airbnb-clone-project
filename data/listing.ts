export interface Image {
  id: string;
  url: string;
  alt: string;
  room: string;
}

export interface Host {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  since: string;
  responseRate: number;
  responseTime: string;
  reviewCount: number;
  rating: number;
  about: string;
}

export interface Amenity {
  id: string;
  icon: string;
  label: string;
  category: string;
  description?: string;
}

export interface Review {
  id: string;
  author: string;
  avatar: string;
  date: string;
  rating: number;
  text: string;
  location?: string;
}

export interface SleepingArrangement {
  room: string;
  beds: string[];
}

export interface PricingBreakdown {
  nightlyRate: number;
  nights: number;
  cleaningFee: number;
  serviceFee: number;
}

export interface Location {
  city: string;
  state: string;
  country: string;
  neighborhood: string;
  lat: number;
  lng: number;
  description: string;
}

export interface Highlight {
  icon: string;
  title: string;
  description: string;
}

export interface Listing {
  id: string;
  title: string;
  type: string;
  location: Location;
  rating: number;
  reviewCount: number;
  host: Host;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  description: string;
  images: Image[];
  amenities: Amenity[];
  sleepingArrangements: SleepingArrangement[];
  reviews: Review[];
  pricing: PricingBreakdown;
  highlights: Highlight[];
}

export const listing: Listing = {
  id: "mirashya-ug10",
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  type: "Entire serviced apartment",
  location: {
    city: "Candolim",
    state: "Goa",
    country: "India",
    neighborhood: "Candolim",
    lat: 15.5189,
    lng: 73.7620,
    description:
      "Candolim is a charming beach town in North Goa, known for its long stretch of golden sands, watersports, and vibrant shacks. The neighborhood offers easy access to Calangute and Baga beaches while maintaining a more relaxed, upscale atmosphere. Enjoy the best of Goa – pristine beaches, fresh seafood, and lush tropical surroundings.",
  },
  rating: 4.93,
  reviewCount: 28,
  host: {
    name: "Mirashya Homes",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face",
    isSuperhost: true,
    since: "2021",
    responseRate: 100,
    responseTime: "within an hour",
    reviewCount: 42,
    rating: 4.97,
    about:
      "Welcome to Mirashya Homes! We are a professional hospitality company offering premium serviced apartments in Goa. Our mission is to provide guests with a luxury home-away-from-home experience. Each of our apartments is thoughtfully designed with high-end amenities and personalised service.",
  },
  guests: 2,
  bedrooms: 1,
  beds: 1,
  bathrooms: 1,
  description: `Welcome to Mirashya UG10 — our most romantic private retreat in the heart of Candolim, Goa!

Step into a world of luxury and intimacy. This beautifully appointed 1BHK serviced apartment features a private jacuzzi, perfect for couples seeking a romantic escape. Every detail has been thoughtfully curated to create an unforgettable experience.

The apartment boasts a spacious, air-conditioned bedroom with a king-size bed, premium linens, and an ensuite bathroom with rain shower and soaking jacuzzi. The living area is elegantly furnished with smart TV and high-speed WiFi. The kitchen is fully equipped for self-catering.

Located in a secure gated complex just 5 minutes from Candolim Beach, you'll have easy access to the best of North Goa's restaurants, markets, and nightlife. Our dedicated concierge team is available around the clock to assist with anything you need.

**What makes this place special:**
- Private Jacuzzi for two
- King-size bed with luxury linens
- Fully equipped modern kitchen
- High-speed WiFi & Smart TV
- 24/7 security and concierge service
- 5 mins from Candolim Beach`,
  images: [
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&h=900&fit=crop",
      alt: "Romantic bedroom with king-size bed and warm lighting",
      room: "Bedroom",
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=600&fit=crop",
      alt: "Private jacuzzi tub in bathroom",
      room: "Bathroom",
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&h=600&fit=crop",
      alt: "Modern living room with comfortable sofa and smart TV",
      room: "Living Room",
    },
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&h=600&fit=crop",
      alt: "Fully equipped modern kitchen",
      room: "Kitchen",
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop",
      alt: "Outdoor pool and tropical garden area",
      room: "Outdoor Area",
    },
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&h=600&fit=crop",
      alt: "Luxurious bathroom with rain shower",
      room: "Bathroom",
    },
    {
      id: "7",
      url: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&h=600&fit=crop",
      alt: "Elegant dining area",
      room: "Dining Room",
    },
    {
      id: "8",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
      alt: "Building exterior and entrance",
      room: "Exterior",
    },
    {
      id: "9",
      url: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=600&fit=crop",
      alt: "Bedroom closet and storage",
      room: "Bedroom",
    },
    {
      id: "10",
      url: "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?w=800&h=600&fit=crop",
      alt: "Balcony with garden view",
      room: "Balcony",
    },
    {
      id: "11",
      url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=800&h=600&fit=crop",
      alt: "Relaxing sitting area with tropical decor",
      room: "Living Room",
    },
    {
      id: "12",
      url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=600&fit=crop",
      alt: "Premium bedding and night stands",
      room: "Bedroom",
    },
  ],
  amenities: [
    { id: "wifi", icon: "Wifi", label: "Fast WiFi – 200 Mbps", category: "Internet" },
    { id: "kitchen", icon: "UtensilsCrossed", label: "Kitchen", category: "Kitchen", description: "Space where guests can cook their own meals" },
    { id: "ac", icon: "Wind", label: "Air conditioning", category: "Cooling" },
    { id: "jacuzzi", icon: "Bath", label: "Jacuzzi", category: "Bathroom" },
    { id: "washer", icon: "Sparkles", label: "Washer", category: "Laundry" },
    { id: "tv", icon: "Tv", label: "Smart TV with Netflix", category: "Entertainment" },
    { id: "iron", icon: "Shirt", label: "Iron", category: "Essentials" },
    { id: "essentials", icon: "Package", label: "Essentials – towels, bed sheets, soap, toilet paper", category: "Essentials" },
    { id: "hangers", icon: "Shirt", label: "Hangers", category: "Essentials" },
    { id: "security", icon: "Shield", label: "Security cameras on property", category: "Security" },
    { id: "pool", icon: "Waves", label: "Pool", category: "Outdoor" },
    { id: "parking", icon: "Car", label: "Free parking on premises", category: "Parking" },
    { id: "workspace", icon: "Monitor", label: "Dedicated workspace", category: "Office" },
    { id: "coffee", icon: "Coffee", label: "Coffee maker", category: "Kitchen" },
    { id: "refrigerator", icon: "Refrigerator", label: "Refrigerator", category: "Kitchen" },
    { id: "microwave", icon: "Zap", label: "Microwave", category: "Kitchen" },
    { id: "hairdryer", icon: "Wind", label: "Hair dryer", category: "Bathroom" },
    { id: "shampoo", icon: "Droplets", label: "Shampoo", category: "Bathroom" },
  ],
  sleepingArrangements: [
    {
      room: "Bedroom",
      beds: ["1 king bed"],
    },
  ],
  reviews: [
    {
      id: "r1",
      author: "Priya",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&h=60&fit=crop&crop=face",
      date: "November 2024",
      rating: 5,
      text: "Absolutely wonderful stay! The jacuzzi was a dream, and the apartment was immaculate. Mirashya's team was incredibly responsive and helpful. We'll definitely be back for our anniversary next year!",
      location: "Mumbai, India",
    },
    {
      id: "r2",
      author: "James",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face",
      date: "October 2024",
      rating: 5,
      text: "Fantastic apartment in a great location. The jacuzzi was a highlight of our trip. Clean, well-equipped, and the host was very communicative. Highly recommended for couples.",
      location: "London, UK",
    },
    {
      id: "r3",
      author: "Ananya",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      date: "September 2024",
      rating: 5,
      text: "Perfect romantic getaway! The place looked exactly like the photos. The jacuzzi and smart TV made for cosy evenings after beach days. Location is walking distance from great restaurants.",
      location: "Bangalore, India",
    },
    {
      id: "r4",
      author: "Rahul",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face",
      date: "August 2024",
      rating: 5,
      text: "One of the best stays we've had in Goa. Very clean, modern apartment with everything you need. The host team was quick to respond to our queries. The pool area is lovely.",
      location: "Delhi, India",
    },
    {
      id: "r5",
      author: "Sophie",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      date: "July 2024",
      rating: 5,
      text: "Loved everything about this place. The jacuzzi is genuinely private and the apartment is beautifully furnished. Fast WiFi was great for working remotely. Would absolutely stay again.",
      location: "Singapore",
    },
    {
      id: "r6",
      author: "Vikram",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      date: "June 2024",
      rating: 5,
      text: "Superb value for money. The apartment exceeded our expectations — it felt like a luxury hotel but with home comforts. The host arranged early check-in which was so helpful.",
      location: "Pune, India",
    },
  ],
  pricing: {
    nightlyRate: 8750,
    nights: 5,
    cleaningFee: 3500,
    serviceFee: 6125,
  },
  highlights: [
    {
      icon: "Medal",
      title: "Mirashya is a Superhost",
      description: "Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.",
    },
    {
      icon: "MapPin",
      title: "Great location",
      description: "100% of recent guests gave the location a 5-star rating.",
    },
    {
      icon: "Key",
      title: "Great check-in experience",
      description: "100% of recent guests gave the check-in process a 5-star rating.",
    },
  ],
};
