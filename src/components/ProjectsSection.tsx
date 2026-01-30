import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ShikshanaImg from './images/Shikshana.png';
import SodhaImg from './images/Sodha.png';
import ScamSlam from './images/ScamSlam.png';
import MemoryLeakDetector from './images/MemoryLeakDetector.png';
const projects = [
  {
    title: "ScamSlam",
    description: "A website that detects phished urls, messages and emails.",
    tags: ["React", "Flask", "Machine Learning"],
    githubUrl: "https://github.com/Ananya-vastare/ScamSlam",
    image: ScamSlam,
    gradient: "bg-gradient-to-br from-primary/20 via-accent/30 to-rose-light",
  },
  {
    title: "Shikshana",
    description: "A learning road map generator for learning anything.",
    tags: ["HTML", "CSS", "NODE.JS"],
    githubUrl: "https://github.com/Ananya-vastare/Shikshana-2.0",
    image: ShikshanaImg,
  },
  {
    title: "Sodha",
    description: "Real-time analytics dashboard for tracking investments and market trends.",
    tags: ["React Native", "GraphQL"],
    liveUrl: "https://finintel-9avz.onrender.com/",
    githubUrl: "https://github.com/Ananya-vastare/Finintel",
    image: SodhaImg,
    gradient: "bg-gradient-to-br from-rose-light via-accent/20 to-primary/20",
  },
  {
    title: "Memory Leak Detector",
    description: "Leveraging machine learning for automated content creation and optimization.",
    tags: ["Python", "Java"],
    githubUrl: "https://github.com/Ananya-vastare/Memory-Leak-detector",
    image: MemoryLeakDetector,
    gradient: "bg-gradient-to-br from-blush via-primary/20 to-accent/30",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-background relative">
      {/* Decorative top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Featured Work
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            My <span className="text-gradient italic">Projects</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated selection of projects that showcase my skills and passion
            for creating exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group h-full rounded-2xl 
                  bg-white/20 backdrop-blur-lg border border-black/20 
                  shadow-2xl hover:shadow-black/40 transition-all duration-300 overflow-hidden"
              >
                {/* Image or gradient background */}
                <div className="h-48 w-full relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`${project.gradient} w-full h-full flex items-center justify-center`} />
                  )}

                  {/* Hover overlay */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-charcoal/60 flex items-center justify-center gap-4"
                  >
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="p-3 rounded-full bg-black/70 text-white"
                        aria-label="View live site"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </motion.a>
                    )}
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-white/30 text-black"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-sans font-medium rounded-full bg-secondary/30 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
