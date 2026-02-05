import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

const Experience = () => {
  const { data: experiences = [] } = useQuery({
    queryKey: ["experience"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("experience")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data;
    },
  });
  return (
    <section id="experience" className="py-20 border-b border-foreground">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight font-heading">
          EXPERIENCE
        </h2>
        <div className="space-y-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="grid grid-cols-12 gap-6 py-10 border-b border-foreground/10 hover:bg-secondary/30 transition-all rounded-xl px-4 group items-center"
            >
              <div className="col-span-1 text-sm font-bold tracking-widest text-primary/50">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="col-span-11 md:col-span-3">
                <h3 className="text-xl font-bold tracking-tight font-heading group-hover:text-primary transition-colors">
                  {exp.company}
                </h3>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest mt-1">
                  {exp.years}
                </p>
              </div>
              <div className="col-span-12 md:col-span-5 text-lg leading-relaxed text-muted-foreground group-hover:text-foreground transition-colors">
                {exp.description}
              </div>
              <div className="col-span-12 md:col-span-3 text-right">
                <div className="text-sm font-bold tracking-widest uppercase mb-4 text-muted-foreground">
                  {exp.position}
                </div>
                <button className="px-6 py-2 border border-foreground/20 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors">
                  VIEW CASE
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
