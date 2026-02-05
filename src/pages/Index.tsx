import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="bg-background text-foreground">
      <Hero />
      <AboutMe />
      <Work />
      <Experience />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
