import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919682625931?text=Hi%20KashTech%2C%20I%20need%20a%20website!";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="font-heading text-xl font-bold gradient-text">KashTech</a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
          <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-heading font-semibold text-primary-foreground text-sm transition-all duration-300 hover:scale-105"
            style={{ background: "var(--gradient-primary)" }}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>

        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-b border-border px-4 pb-4 space-y-3">
          <a href="#services" onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-foreground transition-colors py-2">Services</a>
          <a href="#pricing" onClick={() => setOpen(false)} className="block text-muted-foreground hover:text-foreground transition-colors py-2">Pricing</a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-lg font-heading font-semibold text-primary-foreground text-sm"
            style={{ background: "var(--gradient-primary)" }}
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
