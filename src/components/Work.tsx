import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { RevealWaveImage } from "./RevealWaveImage";

/* ── Detect mobile (no hover = no shader benefit) ── */
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
};

// Hardcoded case studies with business-focused copy
const caseStudies = [
  {
    id: "datox",
    title: "Datox Compliance",
    description: "Redesigned and rebuilt the reporting pipeline of a live regulatory SaaS — without a cutover.",
    year: "2026",
    image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/datox/extraction.png",
    link: "/case/datox",
  },
  {
    id: "stayte",
    title: "Stayte",
    description: "Built the operating system a real-estate agency runs on — intake to closed deal, design and code both.",
    year: "2026",
    image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/reviero/stayte-cover.jpg",
    link: "/case/stayte",
  },
  {
    id: "navian",
    title: "Navian OS",
    description: "Replaced fragmented Excel workflows with a unified B2B SaaS pipeline.",
    year: "2023",
    image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/navianos-1.jpg",
    link: "/case/navian",
  },
  {
    id: "flowhealth",
    title: "Flow Workforce",
    description: "A safety management platform used by Disney and JPMorgan Chase.",
    year: "2023",
    image: "https://crvrckpnksobktvqyokp.supabase.co/storage/v1/object/public/portfolio/2.png",
    link: "/case/flowhealth",
  },
];

const Work = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const handleCaseClick = (study: typeof caseStudies[0]) => {
    if (study.link) {
      navigate(study.link);
    }
  };

  return (
    <section id="work" className="relative z-10 bg-background px-4 lg:px-6 pt-4 pb-16">
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
            <div className="relative w-full aspect-[4/5] lg:aspect-[16/9] bg-[#C8C4BC] overflow-hidden rounded-xl lg:rounded-none">
              {/* Conditional: shader on desktop, plain img on mobile */}
              {isMobile ? (
                <img
                  src={study.image}
                  alt={study.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-left lg:object-center"
                />
              ) : (
                <RevealWaveImage
                  src={study.image}
                  className="w-full h-full"
                  pixelSize={2}
                  revealRadius={0.3}
                  waveSpeed={0.15}
                  waveAmplitude={0.02}
                  mouseRadius={1}
                />
              )}

              {/* Dark gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />

              {/* Case Study Info - Overlaid on image */}
              <div className="absolute bottom-0 left-0 right-0 px-5 lg:px-16 py-6 lg:py-16 pointer-events-none">
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3">
                  {/* Left: Title + Year */}
                  <div>
                    <div className="flex items-baseline gap-3">
                      <h3 className="text-2xl lg:text-[2.5rem] font-normal tracking-tight font-heading leading-[1.15] text-white">
                        {study.title}
                      </h3>
                      <span className="text-xs lg:text-sm text-white/60">{study.year}</span>
                    </div>
                    {/* Description — visible on mobile too */}
                    <p className="text-xs lg:text-sm font-light text-white/70 mt-2 max-w-md">
                      {study.description}
                    </p>
                  </div>

                  {/* Right: CTA Button */}
                  {study.link && (
                    <button className="pointer-events-auto self-start lg:self-auto inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 border border-white/50 rounded-full text-xs lg:text-sm font-medium text-white hover:bg-white hover:text-[#141414] transition-colors">
                      View Case Study
                      <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
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
