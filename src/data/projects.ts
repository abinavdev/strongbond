import residential1 from "@/assets/project-residential-1.jpg";
import residential2 from "@/assets/project-residential-2.jpg";
import institutional1 from "@/assets/project-institutional-1.jpg";
import institutional2 from "@/assets/project-institutional-2.jpg";
import religious1 from "@/assets/project-religious-1.jpg";
import interior1 from "@/assets/project-interior-1.jpg";
import renovation1 from "@/assets/project-renovation-1.jpg";

export interface Project {
  id: string;
  title: string;
  location: string;
  category: "residential" | "commercials" | "religious" | "renovation" | "interior";
  image: string;
  description: string;
  year: string;
  area: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "seaside-villa",
    title: "Seaside Villa",
    location: "Malibu, California",
    category: "residential",
    image: residential1,
    description: "A stunning coastal residence that seamlessly blends indoor and outdoor living. The minimalist white facade features expansive glass walls that frame breathtaking ocean views. Sustainable materials and passive cooling systems make this home as efficient as it is beautiful. The landscaped gardens incorporate native plants that thrive in the Mediterranean climate.",
    year: "2023",
    area: "4,500 sq.ft",
    images: [residential1, residential2],
  },
  {
    id: "urban-apartments",
    title: "Urban Living Complex",
    location: "Downtown Seattle",
    category: "residential",
    image: residential2,
    description: "A contemporary multi-family development designed for modern urban living. Each unit features floor-to-ceiling windows, private balconies, and smart home integration. The building incorporates green roof technology and rainwater harvesting systems, reflecting our commitment to sustainable development.",
    year: "2024",
    area: "45,000 sq.ft",
    images: [residential2, residential1],
  },
  {
    id: "innovation-center",
    title: "Innovation Center",
    location: "Austin, Texas",
    category: "commercials",
    image: institutional1,
    description: "A cutting-edge educational facility designed to inspire creativity and collaboration. The open floor plan features flexible learning spaces, advanced technology infrastructure, and abundant natural light. The building achieved LEED Platinum certification for its innovative sustainability features.",
    year: "2023",
    area: "85,000 sq.ft",
    images: [institutional1, institutional2],
  },
  {
    id: "corporate-tower",
    title: "Corporate Tower",
    location: "Chicago, Illinois",
    category: "commercials",
    image: institutional2,
    description: "A landmark commercial development that redefines the modern workplace. The glass curtain wall facade provides panoramic city views while an intelligent building management system optimizes energy consumption. Amenities include a rooftop terrace, fitness center, and electric vehicle charging stations.",
    year: "2024",
    area: "120,000 sq.ft",
    images: [institutional2, institutional1],
  },
  {
    id: "community-chapel",
    title: "Community Chapel",
    location: "Nashville, Tennessee",
    category: "religious",
    image: religious1,
    description: "A contemporary place of worship that honors traditional architectural elements while embracing modern design principles. The soaring spire and stained glass windows create a sense of transcendence, while the acoustically optimized sanctuary provides an exceptional worship experience.",
    year: "2023",
    area: "12,000 sq.ft",
    images: [religious1],
  },
  {
    id: "luxury-penthouse",
    title: "Luxury Penthouse",
    location: "Manhattan, New York",
    category: "interior",
    image: interior1,
    description: "An opulent penthouse interior that exemplifies refined urban living. The design seamlessly integrates custom millwork, premium materials, and curated artwork to create a cohesive aesthetic. Floor-to-ceiling windows flood the space with natural light while offering spectacular city views.",
    year: "2024",
    area: "3,200 sq.ft",
    images: [interior1],
  },
  {
    id: "modern-transformation",
    title: "Modern Transformation",
    location: "Portland, Oregon",
    category: "renovation",
    image: renovation1,
    description: "A comprehensive renovation that transformed a dated suburban home into a contemporary masterpiece. The project involved a complete facade update, open-concept interior redesign, and the addition of energy-efficient systems throughout. The result is a home that feels completely new while honoring its original character.",
    year: "2023",
    area: "2,800 sq.ft",
    images: [renovation1],
  },
];

export const categories = [
  { id: "residential", label: "Residential" },
  { id: "commercials", label: "Commercials" },
  { id: "religious", label: "Religious" },
  { id: "renovation", label: "Renovation" },
  { id: "interior", label: "Interior" },
];
