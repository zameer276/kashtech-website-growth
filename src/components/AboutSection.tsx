import { motion } from "framer-motion";
import { Users, Target, Award } from "lucide-react";

const AboutSection = () => (
  <section id="about" className="py-24 px-4" style={{ background: "var(--gradient-surface)" }}>
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-widest">About Us</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
          We Are <span className="gradient-text">KashTech Solution</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Based in Srinagar, Kashmir — we are a passionate web development agency dedicated to helping businesses establish a powerful online presence with modern, fast, and affordable websites.
        </p>
      </motion.div>

      <div className="grid sm:grid-cols-3 gap-6">
        {[
          { icon: Target, title: "Our Mission", desc: "To empower businesses of all sizes with professional websites that drive growth and conversions." },
          { icon: Users, title: "Our Team", desc: "A skilled team of designers and developers committed to delivering quality work on time." },
          { icon: Award, title: "Our Promise", desc: "Premium quality, transparent pricing, and dedicated WhatsApp support — always." },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-6 text-center card-glow gradient-border"
          >
            <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-primary/10">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
