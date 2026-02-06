import { motion } from "framer-motion";

// Hardcoded experience data with rich formatting
const experiences = [
  {
    id: "stimul8",
    company: "Stimul8",
    location: "UK",
    years: "2024 — Present",
    position: "Senior Product Designer",
    positionNote: "(Contract)",
    description: (
      <>
        <strong className="text-white">0-to-1 Product Launch.</strong> Architected a dual-role family banking app. Gamification mechanics <strong className="text-white">reduced onboarding time by 70%</strong>.
      </>
    ),
  },
  {
    id: "reviero",
    company: "Reviero",
    location: "Spain",
    years: "2023 — 2024",
    position: "Senior Product Designer",
    positionNote: null,
    description: (
      <>
        Orchestrated end-to-end design for a PropTech ecosystem (iOS/Android). Launched <strong className="text-white">AI-Search</strong> and Booking features that drove <strong className="text-white">2x user retention</strong>.
      </>
    ),
  },
  {
    id: "flowhealth",
    company: "Flow Health",
    location: "USA",
    years: "2022 — 2023",
    position: "Senior Product Designer",
    positionNote: null,
    description: (
      <>
        Enterprise safety platform deployed at <strong className="text-white">Disney</strong> and <strong className="text-white">JPMorgan Chase</strong>. Migrated the Design System to Storybook, standardizing <strong className="text-white">55+ components</strong> across web & mobile.
      </>
    ),
  },
  {
    id: "navian",
    company: "Navian",
    location: "Sweden",
    years: "2021 — 2022",
    position: "Senior Product Designer",
    positionNote: null,
    description: (
      <>
        Transformed a complex <strong className="text-white">50-sheet Excel model</strong> into a SaaS Deal Calculator. Automated financial reporting, cutting analyst workflow by <strong className="text-white">60%</strong>.
      </>
    ),
  },
  {
    id: "itsagency",
    company: "Its.agency",
    location: "Russia",
    years: "2019 — 2021",
    position: "Product Designer",
    positionNote: null,
    description: (
      <>
        Delivered <strong className="text-white">12+ turnkey projects</strong> including Fintech admin panels and SaaS marketplaces. Focused on rapid MVP delivery.
      </>
    ),
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-28 px-8 lg:px-16 bg-[#141414]">
      <div className="w-full">
        {/* Two Column Grid - like Approach */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]"
        >
          {/* Left: Section Title + Download */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-light font-heading text-white mb-6">
              Experience
            </h2>
            <a
              href="/cv-artem-sokolov.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-white/30 text-white rounded-full text-sm font-medium hover:bg-white hover:text-[#141414] transition-colors"
            >
              Download CV
            </a>
          </div>

          {/* Right: Experience List */}
          <div className="space-y-0 border-t border-white/20">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="grid grid-cols-1 md:grid-cols-[180px_1fr_160px] gap-4 md:gap-8 py-6 border-b border-white/10"
              >
                {/* Left: Company + Location + Years */}
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <h3 className="text-sm font-semibold text-white">
                      {exp.company}
                    </h3>
                    <span className="text-sm font-light text-gray-500">
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-sm font-light text-gray-500">
                    {exp.years}
                  </p>
                </div>

                {/* Center: Description with bold highlights */}
                <div className="text-sm font-light text-gray-400 leading-[1.6]">
                  {exp.description}
                </div>

                {/* Right: Position */}
                <div className="md:text-right">
                  <p className="text-sm font-semibold text-white">
                    {exp.position}
                  </p>
                  {exp.positionNote && (
                    <p className="text-sm font-light text-gray-500 mt-0.5">
                      {exp.positionNote}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
