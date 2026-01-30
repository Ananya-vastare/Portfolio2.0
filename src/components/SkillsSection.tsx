import { motion } from "framer-motion";
import { Code, Palette, Database, Globe, Box } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "React, JavaScript, Vue.js, and modern JavaScript frameworks",
    color: "from-primary to-rose-dark",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma creating beautiful and intuitive interfaces",
    color: "from-rose-dark to-primary",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Node.js, Python, PostgreSQL, and RESTful APIs",
    color: "from-primary to-accent",
  },
  {
    icon: Box,
    title: "3D Model Building",
    description: "Creating and designing 3D models using Blender, Spline, and other tools",
    color: "from-primary to-rose-light",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-soft-gradient relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-foreground mb-6">
            My <span className="text-gradient italic">Skills</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="
                  group h-full p-8 rounded-2xl 
                  bg-white/20 backdrop-blur-lg border border-black/20
                  shadow-2xl hover:shadow-black/40
                  transition-all duration-300
                "
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {skill.title}
                </h3>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
