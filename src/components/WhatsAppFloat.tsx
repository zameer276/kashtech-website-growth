import { MessageCircle } from "lucide-react";

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/919682625931?text=Hi%20KashTech%2C%20I%20need%20a%20website!"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center text-primary-foreground shadow-lg animate-float transition-transform duration-300 hover:scale-110"
    style={{ background: "var(--gradient-primary)" }}
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppFloat;
