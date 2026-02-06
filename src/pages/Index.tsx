import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Approach from "@/components/Approach";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      {/* Main content wrapper - sits above the sticky Hero */}
      <div className="relative z-20 bg-background">
        <AboutMe />
        <Work />
        <Experience />
        <Approach />
        <Contact />
      </div>
    </div>
  );
};

export default Index;
