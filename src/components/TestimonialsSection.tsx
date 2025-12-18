import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
          <span className="text-caption">Testimonials</span>
          <h2 className="heading-lg mt-4 mb-6">Hear From Our Happy Clients</h2>
          <div className="accent-line mx-auto" />
        </motion.div>

        {/* Testimonial Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="relative image-hover rounded-sm overflow-hidden">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].project}
                className="w-full h-[300px] lg:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs uppercase tracking-wider text-accent">
                  Featured Project
                </span>
                <p className="text-lg font-display text-primary-foreground">
                  {testimonials[currentIndex].project}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              <Quote className="w-12 h-12 text-accent/30 absolute -top-4 -left-4" />
              <div className="relative z-10">
                <p className="text-xl md:text-2xl font-display text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <p className="font-medium text-foreground">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    currentIndex === index
                      ? "w-8 bg-accent"
                      : "bg-border hover:bg-muted-foreground"
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
