import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-16 tracking-tighter font-heading leading-none">
            LET'S <span className="text-primary italic">WORK</span> TOGETHER
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {[
            { label: 'Email', value: 'hello@alexmorgan.design', href: 'mailto:hello@alexmorgan.design' },
            { label: 'LinkedIn', value: '/alexmorgan', href: 'https://linkedin.com' },
            { label: 'Twitter', value: '@alexmorgan', href: 'https://twitter.com' }
          ].map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-10 border border-foreground/10 rounded-3xl hover:bg-foreground hover:text-background transition-all duration-500 group flex flex-col justify-between aspect-square md:aspect-auto"
            >
              <span className="text-xs font-bold tracking-[0.3em] uppercase mb-8 text-muted-foreground group-hover:text-background/50 transition-colors">
                {link.label}
              </span>
              <span className="text-2xl font-bold tracking-tight">
                {link.value}
              </span>
            </motion.a>
          ))}
        </div>
        <div className="mt-24 w-full pt-12 border-t border-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
            © 2024 Alex Morgan. Built with precision.
          </p>
          <div className="flex gap-8">
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-primary cursor-pointer transition-colors">Privacy</span>
            <span className="text-xs font-bold tracking-widest uppercase text-muted-foreground hover:text-primary cursor-pointer transition-colors">Terms</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
