import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects, categories } from "@/data/projects";
import { cn } from "@/lib/utils";
import { revealTransition } from "@/lib/motion";

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("residential");

  const filteredProjects = projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-card" ref={ref}>
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={revealTransition({ duration: 0.7 })}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-caption">Portfolio</span>
          <h2 className="heading-lg mt-4 mb-6">Our Works</h2>
          <div className="accent-line mx-auto" />
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={revealTransition({ duration: 0.65, delay: 0.08 })}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "px-5 py-2 text-sm uppercase tracking-wider font-medium rounded-sm transition-all duration-300",
                activeFilter === category.id
                  ? "bg-accent text-accent-foreground shadow-gold"
                  : "bg-background text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={revealTransition({ duration: 0.65, delay: 0.05 * (index % 6) })}
              layout
            >
              <div className="group block relative overflow-hidden rounded-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
