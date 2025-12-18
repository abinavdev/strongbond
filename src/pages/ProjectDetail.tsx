import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Calendar, Maximize2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="heading-lg mb-4">Project Not Found</h1>
          <Link to="/#projects">
            <Button variant="accent">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="container-custom pb-12 lg:pb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              <span className="block text-caption text-accent capitalize mb-2">
                {project.category}
              </span>
              <h1 className="heading-xl text-primary-foreground mb-4">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-6 text-primary-foreground/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent" />
                  {project.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-accent" />
                  {project.year}
                </div>
                <div className="flex items-center gap-2">
                  <Maximize2 className="w-4 h-4 text-accent" />
                  {project.area}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="heading-md mb-6">About This Project</h2>
              <div className="accent-line mb-8" />
              <p className="text-body text-lg leading-relaxed mb-12">
                {project.description}
              </p>
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid sm:grid-cols-3 gap-8 p-8 bg-card rounded-sm mb-12"
            >
              <div>
                <span className="text-xs uppercase tracking-wider text-accent block mb-2">
                  Location
                </span>
                <p className="font-display text-lg">{project.location}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-accent block mb-2">
                  Year
                </span>
                <p className="font-display text-lg">{project.year}</p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-wider text-accent block mb-2">
                  Total Area
                </span>
                <p className="font-display text-lg">{project.area}</p>
              </div>
            </motion.div>

            {/* Image Gallery */}
            {project.images.length > 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="heading-sm mb-6">Gallery</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="image-hover rounded-sm overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-64 lg:h-80 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-16 text-center"
            >
              <p className="text-muted-foreground mb-6">
                Interested in a similar project?
              </p>
              <Link to="/#contact">
                <Button variant="accent" size="lg">
                  Start Your Project
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
