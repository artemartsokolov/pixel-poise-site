import { motion } from "framer-motion";

// Hardcoded experience data with rich formatting
const experiences = [
  {
    id: "navian-group",
    company: "Navian Group",
    location: "EU",
    years: "2023 — Present",
    position: "Lead Product Designer",
    positionNote: "Ecosystem Architect",
    description: (
      <>
        <span className="block mb-1">Orchestrating product architecture across the group's two core verticals:</span>

        <span className="block mb-3">
          • <strong className="text-white">Reviero</strong> (B2B2C): Designed the business infrastructure end-to-end. Built the Consumer Marketplace and the internal <strong className="text-white">AI-Powered Agency OS</strong>. Engineered a <strong className="text-white">Node-Based Logic Editor</strong> that automates sales workflows with AI agents.
        </span>

        <span className="block">
          • <strong className="text-white">Navian</strong> (Enterprise SaaS): Engineered a comprehensive Capital Lifecycle OS. Mapped a complex <strong className="text-white">9-role permission matrix</strong> (RBAC) to digitize the workflow for Developers, Banks, and Investors.
        </span>
      </>
    ),
  },
  {
    id: "flowhealth",
    company: "Flow Health",
    location: "USA",
    years: "2021 — 2023",
    position: "Lead Product Designer",
    positionNote: "Solo, End-to-End",
    description: (
      <>
        Designed a mission-critical <strong className="text-white">Enterprise Biosecurity OS</strong> deployed at <strong className="text-white">Disney</strong>, <strong className="text-white">Netflix</strong>, and <strong className="text-white">JPMorgan</strong>.
        {" "}Transformed raw medical data into a "Traffic Light" Command Center for managing safety risks. The premium UX became the key sales asset, enabling clients to manage <strong className="text-white">50k+ employees</strong> without production shutdowns.
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
