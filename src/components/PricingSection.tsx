import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919682625931?text=Hi%20KashTech%2C%20I%27m%20interested%20in%20the%20";

const plans = [
  {
    name: "Basic",
    price: "₹10,000",
    popular: false,
    features: [
      "Free Domain + Hosting",
      "3–5 Pages Website",
      "Mobile Responsive",
      "Delivery in 3–5 Days",
    ],
  },
  {
    name: "Standard",
    price: "₹25,000",
    popular: true,
    features: [
      "Free Domain + Hosting",
      "5–10 Pages Website",
      "SEO Optimized",
      "Contact Form + WhatsApp Integration",
      "Delivery in 5–7 Days",
    ],
  },
  {
    name: "Premium",
    price: "₹40,000+",
    popular: false,
    features: [
      "Free Domain + Hosting",
      "Unlimited Pages",
      "Advanced Design + Animations",
      "Admin Panel (if needed)",
      "Priority Support",
      "Delivery in 7–10 Days",
    ],
  },
];

const PricingSection = () => (
  <section id="pricing" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Pricing</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Choose a plan that fits your business needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className={`relative rounded-2xl p-8 card-glow ${
              plan.popular
                ? "gradient-border bg-card scale-[1.02] md:scale-105"
                : "bg-card border border-border"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold text-primary-foreground flex items-center gap-1" style={{ background: "var(--gradient-primary)" }}>
                <Star className="w-3 h-3" /> Most Popular
              </div>
            )}
            <h3 className="font-heading text-xl font-semibold mb-1">{plan.name} Plan</h3>
            <div className="text-4xl font-bold font-heading gradient-text inline-block mb-6">{plan.price}</div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href={`${WHATSAPP_URL}${plan.name}%20Plan`}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full text-center py-3 rounded-xl font-heading font-semibold transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? "text-primary-foreground hover:shadow-[0_0_20px_hsl(160_84%_45%/0.3)]"
                  : "border border-primary/30 text-primary hover:bg-primary/10"
              }`}
              style={plan.popular ? { background: "var(--gradient-primary)" } : {}}
            >
              Get Started
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PricingSection;
