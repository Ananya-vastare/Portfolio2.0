import { motion } from "framer-motion";
// import Sticky3DModel from "./Sticky3DModel";
import Spline from "@splinetool/react-spline";
const HeroSection = () => {
  return (
    <section
      id="intro"
      className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 pt-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-8xl lg:text-7xl font-semibold text-foreground leading-loose tracking-wide mb-6"
            >
              Hello, I'm <span className="italic">Ananya Ravikiran Vastare</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="font-sans text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
            >
              Passionate about building apps that blend creativity and technology, I explore the power of AI and modern tools to transform concepts into innovative, functional, and impactful digital experiences.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
    inline-flex items-center justify-center 
    px-8 py-4 rounded-full 
    bg-white/20 backdrop-blur-lg border border-black/70
    text-black font-sans font-semibold 
    shadow-2xl hover:shadow-black/50 transition-all
  "
              >
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="
    inline-flex items-center justify-center 
    px-8 py-4 rounded-full 
    bg-white/20 backdrop-blur-lg border border-black/70
    text-black font-sans font-semibold 
    shadow-2xl hover:shadow-black/50 transition-all
  "
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: 3D Model Space */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[450px] lg:h-[500px] overflow-hidden rounded-3xl"
          >
            <div className="w-full h-full bg-gradient-to-br from-secondary via-accent/30 to-rose-light shadow-artistic overflow-hidden">

              <Spline
                scene="https://prod.spline.design/GRNOdA8CqaLtp-B8/scene.splinecode"
                className="w-[140%] h-[140%] "
              />

            </div>
          </motion.div>

        </div>
      </div>
    </section >
  );
};

export default HeroSection;
