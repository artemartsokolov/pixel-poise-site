import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

const contactLinks = [
  { label: "Email", value: "artemartsokolov@gmail.com", href: "mailto:artemartsokolov@gmail.com" },
  { label: "LinkedIn", value: "/artem-sokolov", href: "https://www.linkedin.com/in/artem-sokolov-3238a71a1" },
  { label: "Telegram", value: "@artemartsokolov", href: "https://t.me/artemartsokolov" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-28 px-8 lg:px-16 bg-[#D4D0C8]">
      <div className="w-full">
        {/* Two Column Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-[450px]"
        >
          {/* Left: Section Title */}
          <div>
            <h2 className="text-2xl lg:text-3xl font-light font-heading text-[#141414]">
              Contact
            </h2>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            {/* Main CTA */}
            <div>
              <p className="text-2xl lg:text-3xl font-light text-[#141414] leading-[1.4] mb-8">
                Let's build something <strong className="font-semibold">exceptional</strong> together.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:artemartsokolov@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#141414] text-white rounded-full text-sm font-medium hover:bg-[#333] transition-colors"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/cv-artem-sokolov.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 border border-[#141414] text-[#141414] rounded-full text-sm font-medium hover:bg-[#141414] hover:text-white transition-colors"
                >
                  Download CV
                  <Download className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Links */}
            <div className="border-t border-[#141414]/20 pt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <p className="text-sm font-semibold text-[#141414] mb-1">{link.label}</p>
                    <p className="text-sm font-light text-[#141414]/60 group-hover:text-[#141414] transition-colors">
                      {link.value}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-[#141414]/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-light text-[#141414]/50">
            © 2026 Artem Sokolov.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Contact;
