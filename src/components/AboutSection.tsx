import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutImage from "@/assets/about-team.jpg";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="image-hover rounded-sm overflow-hidden">
                <img
                  src={aboutImage}
                  alt="Our team of architects and engineers"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-accent rounded-sm -z-10" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <span className="text-caption">About Us</span>
            <h2 className="heading-lg mt-4 mb-6">
              Building Excellence Since 2009
            </h2>
            <div className="accent-line mb-8" />
            <p className="text-body mb-6">
              At STRONGBOND – Structural Solutions, we believe that great design has the power to transform lives. For over 15 years, we've been creating spaces that inspire, function beautifully, and stand the test of time.
            </p>
            <p className="text-body mb-8">
              Our multidisciplinary team combines architectural vision with engineering precision to deliver projects that exceed expectations. From intimate residential renovations to landmark institutional buildings, we approach every project with the same dedication to excellence.
            </p>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Innovation", description: "Pushing boundaries with cutting-edge design solutions" },
                { title: "Sustainability", description: "Building responsibly for future generations" },
                { title: "Collaboration", description: "Working closely with clients every step of the way" },
                { title: "Excellence", description: "Delivering uncompromising quality in every detail" },
              ].map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="group"
                >
                  <h4 className="font-display text-lg font-medium text-foreground group-hover:text-accent transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
