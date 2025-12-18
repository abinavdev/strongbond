import residential1 from "@/assets/project-residential-1.jpg";
import interior1 from "@/assets/project-interior-1.jpg";
import institutional1 from "@/assets/project-institutional-1.jpg";

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
  project: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Homeowner",
    content: "Strong Bond transformed our vision into reality. Their attention to detail and commitment to quality exceeded all expectations. The team was professional, responsive, and truly understood our needs.",
    image: residential1,
    project: "Seaside Villa",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "CEO, TechVentures Inc.",
    content: "Working with Strong Bond on our corporate headquarters was an exceptional experience. They delivered a space that perfectly balances functionality with aesthetics, creating an environment our employees love.",
    image: institutional1,
    project: "Corporate Tower",
  },
  {
    id: "3",
    name: "Jennifer Roberts",
    role: "Interior Design Enthusiast",
    content: "The interior design work on our penthouse was nothing short of spectacular. Every detail was carefully considered, resulting in a space that feels both luxurious and inviting. Highly recommended!",
    image: interior1,
    project: "Luxury Penthouse",
  },
  {
    id: "4",
    name: "David Thompson",
    role: "Property Developer",
    content: "Strong Bond has been our go-to partner for multiple residential projects. Their innovative designs and efficient project management consistently deliver results that exceed market expectations.",
    image: residential1,
    project: "Urban Living Complex",
  },
];
