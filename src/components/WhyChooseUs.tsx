import { motion } from "framer-motion";
import { Zap, IndianRupee, Smartphone, MessageCircle, Palette } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "Get your website live in days, not weeks." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium quality at budget-friendly rates." },
  { icon: Smartphone, title: "Mobile Friendly", desc: "Looks perfect on every screen size." },
  { icon: MessageCircle, title: "WhatsApp Support", desc: "Instant support via WhatsApp chat." },
  { icon: Palette, title: "Modern UI/UX", desc: "Beautiful, modern designs that convert." },
];

const WhyChooseUs = () => (
  <section className="py-24 px-4" style={{ background: "var(--gradient-surface)" }}>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Why Us</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3">
          Why Choose <span className="gradient-text">KashTech</span>?
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex items-start gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 transition-all duration-300 hover:border-primary/30 hover:bg-card"
          >
            <div className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center bg-primary/10">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-sm">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
