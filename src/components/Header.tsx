import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

interface HeaderProps {
  githubUrl?: string;
  linkedinUrl?: string;
  email?: string;
}

const Header = (props: HeaderProps) => {
  const navItems = [
    { label: "About", href: "#intro" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },

    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ananya-vastare", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ananya-ravikiran-vastare", label: "LinkedIn" },
    { icon: Mail, href: `mailto:ananyarvastare@gmail.com`, label: "Email" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#intro"
            className="font-display text-2xl font-semibold text-foreground hover:text-primary transition-colors"
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-gradient">Portfolio</span>
          </motion.a>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.li
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                <a
                  href={item.href}
                  className="font-sans text-sm font-medium text-muted-foreground hover:text-foreground artistic-underline transition-colors"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index + 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
