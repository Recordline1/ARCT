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

// ---------------------------aboutData---------------------------

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

// ---------------------------projects---------------------------

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
    description: "Проект частной виллы, интегрированной в скалистый ландшафт. Основной упор сделан на панорамное остекление и использование натуральных текстур камня и дерева.",
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
    description: "Рабочее пространство, построенное на принципах Open Space с элементами биофильного дизайна. Использование акустических панелей и «живых» стен для улучшения продуктивности.",
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
    description: "Городской парк с многоуровневым ландшафтным зонированием. Проект объединяет пешеходные зоны, амфитеатр и водные объекты в единую экосистему.",
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
    description: "Многофункциональный небоскрёб с вертикальным озеленением и системой автономной генерации энергии. Фасад выполнен из умного стекла с регулируемой прозрачностью.",
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
    description: "Интерьер гостиной в стиле современного скандинавского минимализма. Тёплые натуральные текстуры в сочетании с мягким освещением создают уютную атмосферу.",
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
    description: "Загородный ретрит в горах с минимальным вмешательством в природный рельеф. Террасы и смотровые площадки органично вписаны в склон.",
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
    description: "Музей современного искусства с нелинейной планировкой залов. Естественный верхний свет проникает через систему зенитных фонарей, создавая идеальные условия для экспозиции.",
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
    description: "Кухня-гостиная с островом и открытым стеллажом. Строгая геометрия фасадов компенсируется тёплыми деревянными акцентами и медными деталями фурнитуры.",
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
    description: "Ботанический сад с климатическими павильонами для тропических, субтропических и аридных видов растений. Система умного полива и мониторинга микроклимата.",
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
    description: "Выставочный павильон с несущей стеклянной оболочкой и минимальным металлическим каркасом. Полная прозрачность структуры растворяет границу между интерьером и окружающим садом.",
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

