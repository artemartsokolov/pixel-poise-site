import { motion } from "framer-motion";

// Hardcoded experience data with rich formatting
const experiences = [
  {
    id: "datox",
    company: "Datox Compliance",
    location: "UK",
    years: "Feb — Jul 2026",
    position: "Design Engineer",
    positionNote: "Temporary contract",
    description: (
      <>
        <strong className="text-white">Design and frontend</strong> for a full rebuild of a live regulatory reporting
        product — the whole workflow, from raw source files to a filed report, replaced in place behind an opt-in
        toggle while clients kept filing to the regulator. Nothing rolled back.
      </>
    ),
  },
  {
    id: "stayte",
    company: "Stayte",
    location: "ex-Reviero · EU",
    years: "2024 — Feb 2026",
    position: "Design Engineer",
    positionNote: "Navian Group",
    description: (
      <>
        <strong className="text-white">Designed and built</strong> the web product: frontend, Supabase
        backend, and the connectors to HubSpot, Pipedrive, Facebook, Twilio and Vapi. Plus a
        <strong className="text-white"> node-based editor</strong> that let the Head of Sales program the AI agents
        without a developer.
      </>
    ),
  },
  {
    id: "navian",
    company: "Navian",
    location: "EU",
    years: "2023 — 2024",
    position: "Lead Product Designer",
    positionNote: "Navian Group",
    description: (
      <>
        Enterprise SaaS. Engineered a comprehensive <strong className="text-white">Capital Lifecycle OS</strong>, mapping a complex
        {" "}<strong className="text-white">9-role permission matrix</strong> (RBAC) to digitize the workflow for Developers, Banks, and Investors.
      </>
    ),
  },
  {
    id: "flowhealth",
    company: "Flow Health",
    location: "USA",
    years: "2021 — 2023",
    position: "Senior Product Designer",
    positionNote: "Solo, End-to-End",
    description: (
      <>
        Designed an enterprise biosecurity platform used by <strong className="text-white">Disney, Netflix and
        JPMorgan</strong> — raw medical data turned into a traffic-light command centre for managing 50k+ staff on set
        without shutting production down.
      </>
    ),
  },
  {
    id: "propetly",
    company: "Propetly",
    location: "UK",
    years: "2019 — 2021",
    position: "Product Designer",
    positionNote: null,
    description: (
      <>
        UK-based PropTech startup. Architected <strong className="text-white">Real-Time Auction Bidding</strong> engines and <strong className="text-white">Market Intelligence</strong> tools. Translated complex investment data into actionable signals for property traders.
      </>
    ),
  },
  {
    id: "itsagency",
    company: "Its.agency",
    location: "Russia",
    years: "2017 — 2019",
    position: "Product Designer",
    positionNote: null,
    description: (
      <>
        High-velocity agency environment. Delivered <strong className="text-white">12+ Turnkey MVPs</strong> including FinTech admin panels and SaaS marketplaces. Specialized in rapid prototyping and "Zero-to-Launch" delivery.
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
                className={`grid grid-cols-1 md:grid-cols-[180px_1fr_160px] gap-4 md:gap-8 py-6 ${index < experiences.length - 1 ? 'border-b border-white/10' : ''}`}
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
