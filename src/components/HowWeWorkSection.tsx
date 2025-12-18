import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Compass, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Evaluation",
    description:
      "We begin every project with a thorough assessment of your needs, site conditions, and objectives to establish a solid foundation for success.",
  },
  {
    icon: Compass,
    number: "02",
    title: "Designing",
    description:
      "Our creative team develops innovative design solutions that balance aesthetics, functionality, and budget while staying true to your vision.",
  },
  {
    icon: CheckCircle,
    number: "03",
    title: "Delivering",
    description:
      "We execute with precision, managing every detail from construction to final handover, ensuring your project exceeds expectations.",
  },
];

export const HowWeWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-caption">Our Process</span>
          <h2 className="heading-lg mt-4 mb-6">How We Work</h2>
          <div className="accent-line mx-auto" />
        </motion.div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="relative flex gap-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {index < steps.length - 1 && (
                <div className="absolute left-[27px] top-16 bottom-0 w-[2px] bg-border" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-gold">
                  <step.icon className="w-6 h-6 text-accent-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <span className="text-caption text-accent">{step.number}</span>
                <h3 className="heading-md mt-2 mb-4">{step.title}</h3>
                <p className="text-body max-w-xl">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
