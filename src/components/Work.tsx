import { useState } from "react";
import { motion } from "framer-motion";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { X } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface SelectedWork {
  id: string;
  title: string;
  description: string;
  year: string;
  role: string;
  gradient: string;
  project_overview?: string;
  role_description?: string;
  sort_order: number;
  cover_image_url?: string | null;
}

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<SelectedWork | null>(null);

  const { data: projects = [] } = useQuery({
    queryKey: ["selected_works"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("selected_works")
        .select("*")
        .order("sort_order", { ascending: true });

      if (error) throw error;
      return data as SelectedWork[];
    },
  });
  const [isOpen, setIsOpen] = useState(false);

  const handleProjectClick = (project: SelectedWork) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  return (
    <section id="work" className="py-20 border-b border-foreground relative z-10 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group cursor-pointer w-full"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 bg-gray-100">
                {project.cover_image_url ? (
                  <img
                    src={project.cover_image_url}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full transition-transform duration-700 group-hover:scale-105"
                    style={{ background: project.gradient }}
                  />
                )}
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-2xl font-semibold tracking-tight text-[#141414]">
                    {project.title}
                  </h3>
                  <span className="text-sm text-gray-400">
                    {project.year}
                  </span>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="px-3 py-1 border border-gray-200 rounded-full text-xs font-medium text-gray-600 bg-transparent">
                    {project.role}
                  </span>

                  <button className="text-xs font-medium text-[#141414] border-b border-[#141414] pb-px hover:opacity-70 transition-opacity">
                    View case
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerContent className="h-[90vh] max-h-[90vh] w-full max-w-full">
          <DrawerClose className="absolute right-6 top-6 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground z-50">
            <X className="h-6 w-6" />
            <span className="sr-only">Close</span>
          </DrawerClose>

          {selectedProject && (
            <div className="h-full overflow-y-auto">
              <DrawerHeader className="text-left px-6 md:px-12 pt-12">
                <div className="flex justify-between items-start mb-4">
                  <DrawerTitle className="text-4xl md:text-6xl font-bold tracking-tight font-heading">
                    {selectedProject.title}
                  </DrawerTitle>
                  <span className="text-sm tracking-wider uppercase opacity-70">
                    {selectedProject.year}
                  </span>
                </div>
                <DrawerDescription className="text-lg opacity-80">
                  {selectedProject.description}
                </DrawerDescription>
                <p className="text-sm tracking-wider uppercase opacity-70 mt-4">
                  {selectedProject.role}
                </p>
              </DrawerHeader>

              <div className="px-6 md:px-12 pb-12">
                {selectedProject.cover_image_url ? (
                  <img
                    src={selectedProject.cover_image_url}
                    alt={selectedProject.title}
                    className="w-full h-[400px] rounded-lg mb-8 object-cover"
                  />
                ) : (
                  <div
                    className="w-full h-[400px] rounded-lg mb-8"
                    style={{ background: selectedProject.gradient }}
                  />
                )}

                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight font-heading">PROJECT OVERVIEW</h3>
                    <p className="text-base leading-relaxed opacity-80">
                      {selectedProject.project_overview || "Detailed information about the project will be displayed here. This includes the challenge, solution, and impact of the work."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 tracking-tight font-heading">MY ROLE</h3>
                    <p className="text-base leading-relaxed opacity-80">
                      {selectedProject.role_description || "Information about responsibilities and contributions to the project."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DrawerContent>
      </Drawer>
    </section>
  );
};

export default Work;
