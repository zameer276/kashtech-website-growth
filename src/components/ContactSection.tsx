import { motion } from "framer-motion";
import { MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919682625931?text=Hi%20KashTech%2C%20I%20have%20a%20query!";

const ContactSection = () => (
  <section id="contact" className="py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-widest">Contact Us</span>
        <h2 className="text-3xl md:text-5xl font-bold font-heading mt-3 mb-4">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Have a project in mind? Reach out to us — we'd love to hear from you.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {[
          { icon: MapPin, title: "Our Location", lines: ["Srinagar, Kashmir", "193403, India"] },
          { icon: Phone, title: "WhatsApp", lines: ["+91 9682625931"], link: WHATSAPP_URL },
          { icon: MessageCircle, title: "Quick Chat", lines: ["Tap to message us", "on WhatsApp"], link: WHATSAPP_URL },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-2xl p-8 text-center card-glow gradient-border"
          >
            <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center bg-primary/10">
              <item.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                {item.lines.map((l) => <span key={l} className="block">{l}</span>)}
              </a>
            ) : (
              <div className="text-muted-foreground text-sm">
                {item.lines.map((l) => <span key={l} className="block">{l}</span>)}
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Map Embed */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 rounded-2xl overflow-hidden border border-border h-64 md:h-80"
      >
        <iframe
          title="KashTech Solution Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105717.81063891122!2d74.7!3d34.08!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18f6518bbfc17%3A0x38183b95c3e71f34!2sSrinagar%2C%20Jammu%20and%20Kashmir!5e0!3m2!1sen!2sin!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
