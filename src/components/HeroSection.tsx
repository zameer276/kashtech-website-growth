import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919682625931?text=Hi%20KashTech%2C%20I%20need%20a%20website!";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
    {/* Background glow */}
    <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

    <div className="relative z-10 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
          🚀 Web Development Agency
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="text-4xl sm:text-5xl md:text-7xl font-bold font-heading leading-tight mb-6"
      >
        Build Your Professional{" "}
        <span className="gradient-text">Website Today</span> 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
      >
        We create fast, modern, and high-converting websites for your business.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-primary-foreground text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(160_84%_45%/0.3)]"
          style={{ background: "var(--gradient-primary)" }}
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp
        </a>
        <a
          href="#pricing"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-foreground border border-border bg-secondary/50 text-lg transition-all duration-300 hover:border-primary/50 hover:bg-secondary"
        >
          View Pricing
          <ArrowRight className="w-5 h-5" />
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
