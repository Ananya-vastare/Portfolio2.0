import { motion } from "framer-motion";

const experiences = [
  {
    title: "Open Source Contributor",
    company: "GSSoC 2024",
    period: "October - November",
    description: "Contributed to open-source projects under the GirlScript Summer of Code initiative, implementing features, fixing bugs, and improving documentation.",
    tags: ["Open Source", "GitHub", "Collaboration"],
  },
  {
    title: "Software Engineer",
    company: "RegVector",
    period: "Feb 2025 - Sept 2025",
    description: "Developing scalable web applications, implementing backend APIs, and optimizing frontend performance using modern technologies.",
    tags: ["React", "Node.js", "REST API", "SQL"],
  },
];


const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background relative">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-sans text-sm uppercase tracking-[0.3em] text-primary mb-4">
            Professional Journey
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            My <span className="text-gradient italic">Experience</span>
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Roles and internships that shaped my skills and expertise in software development and AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.article
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  group h-full rounded-2xl 
                  bg-white/20 backdrop-blur-lg border border-black/20 
                  shadow-2xl hover:shadow-black/40 transition-all duration-300 p-6
                "
              >
                {/* Header: Title & Company */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-sm text-muted-foreground">
                    {exp.company} • {exp.period}
                  </p>
                </div>

                {/* Description */}
                <p className="font-sans text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Tags / Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-sans font-medium rounded-full bg-secondary/30 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
