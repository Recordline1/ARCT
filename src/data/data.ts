import { IMG } from '../../public/images';
// ---------------------------Hero---------------------------
export interface ProjectSlide {
  id: number;
  bg: string;
  title: string;
  text: string;
  location: string;
  year: string;
  area: string;
  client: string;
  style: string;
  fullDescription: string;
  gallery: string[];
  planImg: string;
}

export const slides: ProjectSlide[] = [
  {
    id: 1,
    bg: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=80',
    title: "Architecture That Inspires",
    text: "One of the 20th century's most famous and distinctive buildings.",
    location: "Malibu, California, USA",
    year: "2024",
    area: "480 sqm",
    client: "Private Investor",
    style: "Minimalist Structuralism",
    fullDescription: "This project embodies the harmony between rugged concrete and the transparency of panoramic glazing. Situated on a hillside, the house is designed to capture maximum natural light throughout the day. The interior space flows seamlessly into the outdoor terrace, blurring the boundaries between indoors and outdoors. Every piece of furniture was custom-designed in the spirit of absolute minimalism.",
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1200&q=80',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200&q=80'
    ],
    planImg: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1200&q=80'
  },
  {
    id: 2,
    bg: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    title: "Leading The Future",
    text: "Discover world-class design and innovative engineering solutions.",
    location: "Los Angeles, California",
    year: "2025",
    area: "620 sqm",
    client: "Arct Development Group",
    style: "High-Tech Minimalism",
    fullDescription: "The project focuses on environmental friendliness and energy efficiency (a \"smart home\"). The building's façade is clad in composite materials that accumulate solar energy. The central compositional element is a cantilevered floor overhanging the pool. This engineering solution created the illusion of weightlessness of the monolithic structure.",
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80',
      'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=1200&q=80'
    ],
    planImg: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80'
  },
  {
    id: 3,
    bg: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80',
    title: "Invest In Your Future",
    text: "A multi-venue performing arts centre at Sydney Harbour located in New South Wales, Australia.",
    location: "Sydney Harbour, Australia",
    year: "2023",
    area: "1250 sqm",
    client: "Cultural Heritage Foundation",
    style: "Modernist Avant-Garde",
    fullDescription: "A large-scale residential and exhibition complex project on the shores of Sydney Harbour. The complex roof geometry evokes the silhouettes of iconic 20th-century architecture. The building is integrated into the rocky landscape, and the use of rough, uncut stone in the plinth emphasizes its monumentality and inseparable connection to the land.",
    gallery: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&0=80',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200&q=80'
    ],
    planImg: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?w=1200&q=80'
  }
];

// ---------------------------AboutData---------------------------

export interface AboutItem {
  id: string;
  label: string;
  text: string;
  image: string;
}

export const aboutData: AboutItem[] = [
  {
    id: 'philosophy',
    label: 'Philosophy',
    text: 'For me, architecture isn\'t just concrete and glass; it\'s creating an environment that changes human behavior. In every project, I strive for a symbiosis between strict geometry and the natural softness of the landscape.',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'experience',
    label: 'Experience',
    text: 'More than 15 years in design — from private villas to large-scale cultural centers. I have walked the path from technical operator of base stations to architectural designer, giving me a unique understanding of infrastructure from the inside.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=1200&auto=format&fit=crop'
  },
  {
    id: 'awards',
    label: 'Awards',
    text: 'Finalist in international competitions for architectural visualization and design 2024-2025. My projects have been repeatedly recognized for their innovative approach to energy efficiency and the purity of lines.',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?q=80&w=1200&auto=format&fit=crop'
  }
];

// ---------------------------Projects---------------------------

export interface Project {
  id: number;
  title: string;
  category: string;
  img: string;
  description: string;
  location: string;
  year: number;
  client: string;
  gallery: string[];
  specs: {
    area: string;
    budget: string;
    materials: string[];
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern Villa",
    category: "Architecture",
    img: IMG.p37,
    description: "A private villa project integrated into the rocky landscape. The design emphasizes panoramic glazing and the use of natural stone and wood textures.",
    location: "Malibu, USA",
    year: 2024,
    client: "Private Investor",
    gallery: [IMG.p37, IMG.p38, IMG.p40],
    specs: {
      area: "450 m²",
      budget: "$1.2M",
      materials: ["Concrete", "Oak Wood", "Structural Glass"],
    },
  },
  {
    id: 2,
    title: "Minimalist Office",
    category: "Interior",
    img: IMG.p38,
    description: "An open-plan workspace with biophilic design elements. Acoustic panels and living walls enhance productivity.",
    location: "Berlin, Germany",
    year: 2025,
    client: "Tech Startup",
    gallery: [IMG.p38, IMG.p46, IMG.p54],
    specs: {
      area: "200 m²",
      budget: "$300k",
      materials: ["Aluminum", "Felt", "Recycled Plastic"],
    },
  },
  {
    id: 3,
    title: "Urban Park",
    category: "Landscape",
    img: IMG.p40,
    description: "An urban park with multi-level landscape zoning. The project unites pedestrian areas, an amphitheater, and water features into a single ecosystem.",
    location: "Amsterdam, Netherlands",
    year: 2023,
    client: "City Municipality",
    gallery: [IMG.p40, IMG.p55, IMG.p41],
    specs: {
      area: "12,000 m²",
      budget: "$4.5M",
      materials: ["Granite", "Weathering Steel", "Native Plants"],
    },
  },
  {
    id: 4,
    title: "Futuristic Skyscraper",
    category: "Architecture",
    img: IMG.p41,
    description: "A multifunctional skyscraper with vertical landscaping and an autonomous energy generation system. The façade is made of smart glass with adjustable transparency.",
    location: "Dubai, UAE",
    year: 2025,
    client: "Al Noor Development",
    gallery: [IMG.p41, IMG.p56, IMG.p53],
    specs: {
      area: "38,000 m²",
      budget: "$120M",
      materials: ["Smart Glass", "Carbon Fiber", "Titanium"],
    },
  },
  {
    id: 5,
    title: "Cozy Living Room",
    category: "Interior",
    img: IMG.p46,
    description: "The living room interior features a modern Scandinavian minimalist style. Warm natural textures combined with soft lighting create a cozy atmosphere.",
    location: "Stockholm, Sweden",
    year: 2024,
    client: "Private Family",
    gallery: [IMG.p46, IMG.p54, IMG.p38],
    specs: {
      area: "65 m²",
      budget: "$85k",
      materials: ["White Oak", "Linen", "Travertine"],
    },
  },
  {
    id: 6,
    title: "Mountain Retreat",
    category: "Landscape",
    img: IMG.p52,
    description: "A rural retreat in the mountains with minimal disruption to the natural landscape. Terraces and viewing platforms are seamlessly integrated into the slope.",
    location: "Zermatt, Switzerland",
    year: 2023,
    client: "Wellness Group",
    gallery: [IMG.p52, IMG.p40, IMG.p55],
    specs: {
      area: "3,200 m²",
      budget: "$8M",
      materials: ["Local Stone", "Larch Wood", "Cor-Ten Steel"],
    },
  },
  {
    id: 7,
    title: "Contemporary Museum",
    category: "Architecture",
    img: IMG.p53,
    description: "A contemporary art museum with a non-linear layout. Natural overhead light filters through a system of skylights, creating ideal conditions for exhibitions.",
    location: "Barcelona, Spain",
    year: 2024,
    client: "Cultural Foundation",
    gallery: [IMG.p53, IMG.p37, IMG.p56],
    specs: {
      area: "8,500 m²",
      budget: "$22M",
      materials: ["White Concrete", "Travertine", "Structural Glass"],
    },
  },
  {
    id: 8,
    title: "Scandinavian Kitchen",
    category: "Interior",
    img: IMG.p54,
    description: "A kitchen-living room with an island and open shelving. The strict geometry of the facades is offset by warm wood accents and copper hardware.",
    location: "Copenhagen, Denmark",
    year: 2025,
    client: "Private Client",
    gallery: [IMG.p54, IMG.p46, IMG.p38],
    specs: {
      area: "42 m²",
      budget: "$60k",
      materials: ["Matte White MDF", "Smoked Oak", "Copper"],
    },
  },
  {
    id: 9,
    title: "Botanical Garden",
    category: "Landscape",
    img: IMG.p55,
    description: "A botanical garden with climate pavilions for tropical, subtropical, and arid plant species. A smart irrigation system and microclimate monitoring system.",
    location: "Singapore",
    year: 2023,
    client: "National Parks Board",
    gallery: [IMG.p55, IMG.p40, IMG.p52],
    specs: {
      area: "25,000 m²",
      budget: "$15M",
      materials: ["ETFE Foil", "Galvanized Steel", "Recycled Timber"],
    },
  },
  {
    id: 10,
    title: "Glass Pavilion",
    category: "Architecture",
    img: IMG.p56,
    description: "An exhibition pavilion with a load-bearing glass shell and a minimal metal frame. The structure's complete transparency dissolves the boundary between the interior and the surrounding garden.",
    location: "Tokyo, Japan",
    year: 2024,
    client: "Design Biennale",
    gallery: [IMG.p56, IMG.p53, IMG.p41],
    specs: {
      area: "1,100 m²",
      budget: "$5.5M",
      materials: ["Structural Glass", "Stainless Steel", "Bamboo"],
    },
  },
];

// ---------------------------Blogs---------------------------

interface BlogPost {
    id: number;
    date: string;
    title: string;  
    shortExcerpt: string;
    fullExcerpt: string;
    img: string;
}

export const posts: BlogPost[] = [
    {
        id: 1,
        date: "Mar 30, 2021",
        title: "Modern Vibes Bedrooms, Todays Trending Design",
        shortExcerpt: "Consequat, volutpat morbi tempor elit tellus, ante in mattis.",
        fullExcerpt: "Facilisi morbi ipsum dui aliquet. To achieve the perfect modern bedroom, balance is key: incorporate soft, ambient lighting, high-quality natural textiles, and a minimalist color palette. This approach creates a serene atmosphere while highlighting the structural beauty of the space, ensuring both comfort and aesthetic appeal.",
        img: "/images/blog1.jpg", 
    },
    {
        id: 2,
        date: "Mar 29, 2021",
        title: "How To Make Minimalist Living Rooms Pop-Out",
        shortExcerpt: "Consequat, volutpat morbi tempor elit tellus, ante in mattis.",
        fullExcerpt: "Facilisi morbi ipsum dui aliquet. Minimalist design does not mean lack of character. By introducing a focal point—such as a statement sculptural piece or a contrasting texture—you can add depth to the room. We explore how precise spatial planning and subtle lighting accents transform a simple living space into a captivating, sophisticated environment.",
        img: "/images/blog2.jpg",
    },
    {
        id: 3,
        date: "Mar 27, 2021",
        title: "How To Make Your Resort That Looks Outstanding",
        shortExcerpt: "Consequat, volutpat morbi tempor elit tellus, ante in mattis.",
        fullExcerpt: "Facilisi morbi ipsum dui aliquet. An outstanding resort design merges architecture with the surrounding landscape. By utilizing local materials and creating fluid transitions between indoor and outdoor areas, you can provide guests with an immersive experience. This section covers landscape integration strategies and exterior lighting that elevate a property to a luxury standard.",
        img: "/images/blog3.jpg",
    },
];

