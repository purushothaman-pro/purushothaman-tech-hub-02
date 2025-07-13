import { Heart, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-b from-background to-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-heading font-bold text-gradient">
              Purushothaman V
            </h3>
            <p className="text-foreground/70 text-sm leading-relaxed">
              Mechanical Engineering student with AI expertise, passionate about creating 
              innovative solutions through design and technology.
            </p>
            <div className="text-sm text-muted-foreground">
              <p>B.E. Mechanical Engineering</p>
              <p>Minor in Artificial Intelligence</p>
              <p>Vel Tech Multi Tech Engineering College</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-sm text-foreground/70 hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contact</h4>
            <div className="space-y-2 text-sm text-foreground/70">
              <p>purushothaman752005@gmail.com</p>
              <p>+91 8072375925</p>
              <p>Chennai, Tamil Nadu, India</p>
            </div>
            
            {/* Back to Top Button */}
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="mt-4 group"
            >
              Back to Top
              <ArrowUp className="ml-2 h-4 w-4 group-hover:translate-y-[-2px] transition-transform" />
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-foreground/70 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="h-4 w-4 text-red-500 animate-pulse" /> by Purushothaman V
            </p>
          </div>
          <div className="text-sm text-foreground/70">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;