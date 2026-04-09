import { motion } from "framer-motion";
import { CreditCard, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919682625931?text=Hi%20KashTech%2C%20I%20want%20to%20know%20about%20EMI%20options";

const EmiSection = () => (
  <section className="py-24 px-4">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-2xl p-10 md:p-16 text-center gradient-border bg-card card-glow"
      >
        <div className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center bg-accent/20">
          <CreditCard className="w-8 h-8 text-accent" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">
          Pay Easily with <span className="gradient-text">EMI Options</span> Available 💳
        </h2>
        <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8">
          We make it easy for you to get your website without paying the full amount upfront.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-heading font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(160_84%_45%/0.3)]"
          style={{ background: "var(--gradient-primary)" }}
        >
          <MessageCircle className="w-5 h-5" />
          Ask About EMI
        </a>
      </motion.div>
    </div>
  </section>
);

export default EmiSection;
