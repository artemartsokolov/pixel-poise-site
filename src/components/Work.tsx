import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Hardcoded case studies with business-focused copy
const caseStudies = [
  {
    id: "navian",
    title: "Navian OS",
    description: "Replaced fragmented Excel workflows with a unified B2B SaaS pipeline.",
    year: "2023",
    image: "https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/navianos_1.jpg",
    link: "/case/navian",
  },
  {
    id: "reviero",
    title: "Reviero Invest",
    description: "Scaled a PropTech startup from MVP to a full-cycle product with AI search.",
    year: "2022",
    image: "https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/revierohero2.png",
    link: "/case/reviero",
  },
  {
    id: "flowhealth",
    title: "Flow Workforce",
    description: "A safety management platform used by Disney and JPMorgan Chase.",
    year: "2021",
    image: "https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/flow-cover.jpg",
    link: null,
  },
];

const Work = () => {
  const navigate = useNavigate();

  const handleCaseClick = (study: typeof caseStudies[0]) => {
    if (study.link) {
      navigate(study.link);
    }
  };

  return (
    <section id="work" className="relative z-10 bg-background px-6 pt-4 pb-16">
      {/* Case Studies List */}
      <div className="w-full">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`group ${study.link ? 'cursor-pointer' : ''} mb-4`}
            onClick={() => handleCaseClick(study)}
          >
            {/* Full-width Image with overlay text */}
            <div className="relative w-full aspect-[16/9] bg-[#C8C4BC] overflow-hidden">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              {/* Case Study Info - Overlaid on image */}
              <div className="absolute bottom-0 left-0 right-0 px-8 lg:px-16 py-12 lg:py-16">
                <div className="flex items-end justify-between">
                  {/* Left: Title + Year */}
                  <div className="flex items-baseline gap-4">
                    <h3 className="text-[2rem] lg:text-[2.5rem] font-normal tracking-tight font-heading leading-[1.15] text-white">
                      {study.title}
                    </h3>
                    <span className="text-sm text-white/60">{study.year}</span>
                  </div>

                  {/* Center: Description */}
                  <p className="text-sm font-light text-white/80 max-w-md hidden lg:block">
                    {study.description}
                  </p>

                  {/* Right: CTA Button */}
                  {study.link && (
                    <button className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/50 rounded-full text-sm font-medium text-white hover:bg-white hover:text-[#141414] transition-colors">
                      View Case Study
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Work;
