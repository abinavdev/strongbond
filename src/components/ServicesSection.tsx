import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { PenTool, Building2, Palette, ClipboardList, Hammer } from "lucide-react";

const services = [
  {
    icon: PenTool,
    title: "Designing",
    description:
      "We design aesthetic spaces—residential, institutional, and commercial—to create safe, functional, sustainable environments that inspire.",
  },
  {
    icon: Building2,
    title: "Construction",
    description:
      "Our construction services bring designs to life with precision, quality craftsmanship, and strict timeline adherence.",
  },
  {
    icon: Palette,
    title: "Interior",
    description:
      "We design personalized, functional interiors that reflect clients' unique tastes, blending aesthetics with inspiration.",
  },
  {
    icon: ClipboardList,
    title: "PMC",
    description:
      "Through PMC, we oversee the complete project lifecycle, guaranteeing quality, safety, budget adherence, and on-time delivery.",
  },
  {
    icon: Hammer,
    title: "Renovation",
    description:
      "We specialize in renovating old structures into modern, more efficient, and visually stunning spaces.",
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
          transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6, delay: 0.1 * index }}
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
