import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/Experience";

const Index = () => {
  // Replace these with your actual links
  const socialLinks = {
    githubUrl: "https://github.com/yourusername",
    linkedinUrl: "https://linkedin.com/in/yourusername",
    email: "your.email@example.com",
    location: "Your City, Country",
  };

  return (
    <div className="min-h-screen bg-background">
      <Header
        githubUrl={socialLinks.githubUrl}
        linkedinUrl={socialLinks.linkedinUrl}
        email={socialLinks.email}
      />

      {/* Sticky 3D Model - hides at contact section */}

      <main>
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection
          email={socialLinks.email}
          location={socialLinks.location}
          githubUrl={socialLinks.githubUrl}
          linkedinUrl={socialLinks.linkedinUrl}
        />
      </main>
    </div>
  );
};

export default Index;
