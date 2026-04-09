import { motion } from "framer-motion";
import { Globe, Smartphone, Search, Zap } from "lucide-react";

const features = [
  { icon: Globe, title: "Responsive Design", desc: "Pixel-perfect on every device" },
  { icon: Search, title: "SEO Optimized", desc: "Rank higher on Google" },
  { icon: Zap, title: "Fast Loading", desc: "Blazing speed performance" },
  { icon: Smartphone, title: "Mobile First", desc: "Built for mobile users" },
];

const ServicesSection = () => (
  <section id="services" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Our Service</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
          Website <span className="gradient-text">Development</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          We design and develop responsive, SEO-friendly, and fast-loading websites for all types of businesses.
        </p>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 text-center card-glow gradient-border"
          >
            <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-primary/10">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-1">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
