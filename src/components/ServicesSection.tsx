import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Box, Ruler, FileText, Building2, Palette, Hammer, ClipboardList } from "lucide-react";
import { revealTransition } from "@/lib/motion";

const services = [
  {
    icon: PenTool,
    title: "Architectural Designs",
    description: "Creating functional and aesthetic architectural designs."
  },
  {
    icon: Box,
    title: "3D Designs",
    description: "Envisioning spaces with high-quality 3D models and realistic visual renderings."
  },
  {
    icon: Ruler,
    title: "Structural Design",
    description: "Ensuring structural integrity and safety for diverse types of building projects."
  },
  {
    icon: FileText,
    title: "Documentation and Certifications",
    description: "Managing all necessary project documentation, approvals, and legal certifications."
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Bringing designs to life with precision, quality craftsmanship, and timeline adherence."
  },
  {
    icon: Palette,
    title: "Interior Works",
    description: "Designing personalized, functional interiors that reflect our clients' unique tastes."
  },
  {
    icon: Hammer,
    title: "Renovation",
    description: "Specializing in transforming and renovating old structures into modern spaces."
  },
  {
    icon: ClipboardList,
    title: "Project Management",
    description: "Overseeing the complete project lifecycle to guarantee quality and timely delivery."
  },
];

export const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={revealTransition({ duration: 0.7 })}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-caption">What We Do</span>
          <h2 className="heading-lg mt-4 mb-6">We Do It Best</h2>
          <div className="accent-line mx-auto" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={revealTransition({ duration: 0.7, delay: 0.06 * index })}
              className="group bg-background p-8 rounded-sm card-hover border border-transparent hover:border-accent/20"
            >
              <div className="w-14 h-14 rounded-sm bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-300" />
              </div>
              <h3 className="heading-sm mb-4 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
