import { MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-12 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h3 className="font-heading text-xl font-bold gradient-text inline-block">KashTech Solution</h3>
        <p className="text-muted-foreground text-sm mt-1">Building premium websites for your business.</p>
      </div>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="#services" className="hover:text-primary transition-colors">Services</a>
        <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        <a
          href="https://wa.me/919682625931"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-primary transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          9682625931
        </a>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} KashTech Solution. All rights reserved.
    </div>
  </footer>
);

export default Footer;
