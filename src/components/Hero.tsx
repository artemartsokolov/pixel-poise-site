import { motion } from "framer-motion";
import { useHeroScrollEffect } from "@/hooks/useHeroScrollEffect";
import { useFirstPaint } from "@/hooks/useFirstPaint";

const profilePhoto = "/m/me-final.jpg";

/* ── Premium easing curves ── */
const smooth = [0.22, 1, 0.36, 1] as const;        // smooth decel
const elastic = [0.175, 0.885, 0.32, 1.275] as const; // bounce overshoot

/* ── Navigation links ── */
const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about-me" },
  { label: "Work", href: "#work", badge: "(4)" },
  { label: "Contact", href: "#contact" },
];

/* ── Description lines (split for staggered reveal) ── */
const descLines = [
  "Specializing in complex B2B SaaS and",
  "data-heavy interfaces. I design the product",
  "and ship the production code myself —",
  "Fintech, PropTech, RegTech, and Enterprise.",
];

const Hero = () => {
    const firstPaint = useFirstPaint();

  useHeroScrollEffect();

  return (
    <section id="hero" className="h-screen flex flex-col relative overflow-hidden bg-background sticky top-0">
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black opacity-0 z-[5] pointer-events-none will-change-[opacity]" id="hero-overlay" />

      {/* ═══ TOP LEFT — the one file a recruiter opens, and nothing else.
           Where I am reads better next to the role than alone in a corner, so it
           sits on the description's first line instead.
           Stays right on small screens: below lg the nav owns the left corner. ═══ */}
      <div className="absolute top-6 right-4 lg:top-9 lg:right-auto lg:left-8 z-20 overflow-hidden">
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ delay: 0.55, duration: 0.8, ease: smooth }}
        >
          <a
            href="/cv-artem-sokolov.pdf"
            download
            className="text-xs lg:text-sm font-medium text-[#141414] border-b border-[#141414]/30 hover:border-[#141414] transition-colors"
          >
            CV
          </a>
        </motion.div>
      </div>

      {/* ═══ TOP — Navigation Menu ═══ */}
      <nav className="absolute top-6 left-4 lg:top-8 lg:left-[55%] lg:transform lg:-translate-x-1/2 z-10">
        <div className="flex flex-col items-start gap-0 lg:ml-8">
          {navLinks.map((link, i) => (
            <div key={link.label} className="overflow-hidden">
              <motion.a
                href={link.href}
                className="text-2xl lg:text-3xl font-normal tracking-tight font-heading leading-tight hover:opacity-60 transition-opacity cursor-pointer block relative"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 0.3 + i * 0.08,
                  duration: 0.9,
                  ease: smooth,
                }}
              >
                {link.label}
                {link.badge && (
                  <span className="absolute -right-6 lg:-right-8 top-0 text-[10px] lg:text-sm font-light">{link.badge}</span>
                )}
              </motion.a>
            </div>
          ))}
        </div>
      </nav>

      {/* ═══ MAIN — Content Area ═══ */}
      <div className="flex-1 flex flex-col lg:flex-row relative isolate">
        {/* Left Side — white background (hidden on mobile, photo takes full width) */}
        <div className="hidden lg:block w-1/2 relative bg-white" />

        {/* Right Side — Photo with cinematic reveal */}
        <div className="w-full lg:w-1/2 relative overflow-hidden flex-1">
          <motion.img
            src={profilePhoto}
            alt="Artem Sokolov, Design Engineer"
            className="w-full h-full object-cover object-center"
            initial={{
              scale: 1.3,
              opacity: 0,
              filter: "brightness(1.5)",
            }}
            animate={{
              scale: 1,
              opacity: 1,
              filter: "brightness(1)",
            }}
            transition={{
              duration: 1.8,
              ease: smooth,
              opacity: { duration: 0.6, delay: 0.1 },
              filter: { duration: 2.2, delay: 0.1 },
            }}
          />

          {/* Photo curtain wipe (slides up to reveal) */}
          <motion.div
            className="absolute inset-0 bg-white origin-bottom"
            initial={{ scaleY: firstPaint ? 1 : 0 }}
            animate={{ scaleY: 0 }}
            transition={{
              delay: 0.05,
              duration: 1.2,
              ease: smooth,
            }}
            style={{ transformOrigin: "top" }}
          />

          {/* Dark bottom gradient for mobile text contrast */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/40 to-transparent lg:hidden pointer-events-none" />
        </div>
      </div>

      {/* ═══ BOTTOM LEFT — Description with line-by-line reveal ═══ */}
      <div className="absolute bottom-24 lg:bottom-56 left-4 lg:left-8 z-30">
        {/* Title line */}
        <div className="overflow-hidden">
          <motion.p
            className="text-xs lg:text-sm font-semibold mb-2 text-white lg:text-[#141414]"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              delay: 1.0,
              duration: 0.8,
              ease: smooth,
            }}
          >
            Design Engineer
            {/* Kept lighter than the role: it is context a recruiter wants early,
                not the thing the line is about. */}
            <span className="font-light text-white/60 lg:text-gray-500"> · Spain</span>
          </motion.p>
        </div>

        {/* Description lines — staggered mask reveal */}
        <div className="max-w-[220px] lg:max-w-[280px]">
          {descLines.map((line, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                className="text-xs lg:text-sm font-light text-white/70 lg:text-gray-500 leading-relaxed"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  delay: 1.15 + i * 0.07,
                  duration: 0.8,
                  ease: smooth,
                }}
              >
                {line}
              </motion.p>
            </div>
          ))}
        </div>
      </div>

      {/* ═══ BOTTOM — Large Name, char-by-char 3D flip reveal ═══ */}
      <div className="absolute bottom-0 left-2 right-2 lg:left-4 lg:right-4 z-10 pointer-events-none" style={{ perspective: '1200px' }}>
        <h1
          className="text-[3rem] sm:text-[4.5rem] md:text-[6rem] lg:text-[10rem] font-light tracking-tighter font-heading leading-[0.85] whitespace-nowrap text-white lg:text-[#141414]"
          aria-label="ARTEM SOKOLOV"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {"ARTEM SOKOLOV".split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, rotateX: -90, y: 40 }}
              animate={{ opacity: 1, rotateX: 0, y: 0 }}
              transition={{
                delay: 0.6 + i * 0.06,
                duration: 0.8,
                ease: elastic,
              }}
              style={{
                display: 'inline-block',
                transformOrigin: 'bottom center',
                willChange: 'transform, opacity',
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </h1>
      </div>
    </section>
  );
};

export default Hero;