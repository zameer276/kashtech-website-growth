import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919682625931?text=Hi%20KashTech%2C%20I%20want%20to%20grow%20my%20business%20online!";

const CtaSection = () => (
  <section className="py-24 px-4">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto rounded-3xl p-12 md:p-20 text-center relative overflow-hidden"
      style={{ background: "var(--gradient-primary)" }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(0_0%_100%/0.1),transparent_50%)]" />
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-primary-foreground mb-4">
          Ready to Grow Your Business Online?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-lg mx-auto">
          Let's build something amazing together. Get in touch now.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold bg-primary-foreground text-primary text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(0_0%_0%/0.3)]"
        >
          <MessageCircle className="w-5 h-5" />
          Contact on WhatsApp Now
        </a>
      </div>
    </motion.div>
  </section>
);

export default CtaSection;
