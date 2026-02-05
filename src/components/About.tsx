import { motion } from "framer-motion";

const skills = [
  "User Research",
  "Prototyping",
  "Visual Design",
  "Interaction Design",
  "Design Systems",
  "Figma",
  "Adobe Suite",
  "Front-end Dev"
];

const About = () => {
  return (
    <section id="about" className="py-20 border-b border-foreground">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight font-heading">
              ABOUT
            </h2>
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl font-medium leading-tight">
                Product designer with <span className="text-primary italic">10+ years</span> of experience creating user-centered digital products.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in transforming complex problems into simple, elegant solutions that drive business growth and user satisfaction.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Currently working with startups and established companies to design products
                that people love to use. Based in Spain, available for remote collaborations.
              </p>
            </div>
          </div>
          <div className="lg:pl-12">
            <h3 className="text-sm font-bold mb-10 tracking-[0.3em] uppercase text-muted-foreground border-b border-foreground/10 pb-4">
              SKILLS & TOOLS
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 border border-foreground/10 rounded-full bg-secondary/50 hover:bg-primary hover:text-white transition-all cursor-default text-sm font-bold tracking-wider uppercase"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
