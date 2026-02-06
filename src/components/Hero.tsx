import { motion } from "framer-motion";
import { useHeroScrollEffect } from "@/hooks/useHeroScrollEffect";

const profilePhoto = "https://bahhqjufjcryyaiptmrr.supabase.co/storage/v1/object/public/test/me_final.jpg";

const Hero = () => {
  useHeroScrollEffect();
  return (
    <section id="hero" className="h-screen flex flex-col relative overflow-hidden bg-background sticky top-0">
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black opacity-0 z-[5] pointer-events-none will-change-[opacity]" id="hero-overlay"></div>
      {/* Top - Navigation Menu (centered) */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-start space-y-0 ml-8">
          <a href="#hero" className="text-3xl font-normal tracking-tight font-heading leading-tight hover:opacity-60 transition-opacity cursor-pointer">Home</a>
          <a href="#about-me" className="text-3xl font-normal tracking-tight font-heading leading-tight hover:opacity-60 transition-opacity cursor-pointer">About</a>
          <a href="#work" className="text-3xl font-normal tracking-tight font-heading leading-tight relative hover:opacity-60 transition-opacity cursor-pointer">
            Work
            <span className="absolute -right-8 top-0 text-sm font-light">(3)</span>
          </a>
          <a href="#contact" className="text-3xl font-normal tracking-tight font-heading leading-tight hover:opacity-60 transition-opacity cursor-pointer">Contact</a>
        </div>
      </motion.nav>

      {/* Main Content Area */}
      <div className="flex-1 flex relative isolate">
        {/* Left Side - White background for blend mode */}
        <div className="w-1/2 relative bg-white">
        </div>

        {/* Right Side - Photo */}
        <div className="w-1/2 relative">
          <motion.img
            src={profilePhoto}
            alt="Product Designer Portrait"
            className="w-full h-full object-cover object-center"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>
      </div>

      {/* Bottom Left - Description (absolute positioning above name) */}
      <div className="absolute bottom-56 left-8 z-30">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-sm font-semibold mb-2 text-[#141414]">Senior Product Designer</p>
          <p className="text-sm font-light text-gray-500 leading-relaxed max-w-[280px]">
            Specializing in complex B2B SaaS and Data-Driven Interfaces. I transform heavy logic into intuitive ecosystems for Fintech, PropTech, and Enterprise clients.
          </p>
        </motion.div>
      </div>

      {/* Bottom - Large Name */}
      <div className="absolute bottom-0 left-4 right-4 z-10 pointer-events-none">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1, ease: "easeOut" }}
          className="text-[10rem] font-light tracking-tighter font-heading leading-[0.85] whitespace-nowrap text-[#141414]"
        >
          ARTEM SOKOLOV
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;