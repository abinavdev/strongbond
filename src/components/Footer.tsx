import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, ArrowUp } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/strongbond2012", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="font-display text-3xl font-semibold inline-block mb-6">
              STRONGBOND<span className="text-accent">.</span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md mb-6">
              Creating exceptional spaces that inspire, endure, and transform the way people live and work. Your vision, our expertise.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-colors duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-medium mb-6">Contact Us</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li>
                <span className="text-xs uppercase tracking-wider text-accent block mb-1">
                  Address 1
                </span>
                NM Ali Road, Padamughal, Kakkanad
              </li>
              <li>
                <span className="text-xs uppercase tracking-wider text-accent block mb-1 mt-4">
                  Address 2
                </span>
                Thayyil Complex, First Floor,<br />
                Pala-Vaikom Road, Kottaramattom
              </li>
              <li>
                <span className="text-xs uppercase tracking-wider text-accent block mb-1 mt-4">
                  Phone
                </span>
                <a href="tel:+917907721684" className="hover:text-accent transition-colors">
                  +91 79077 21684
                </a>
                <br />
                <a href="tel:+918050374968" className="hover:text-accent transition-colors">
                  +91 80503 74968
                </a>
              </li>
              <li>
                <span className="text-xs uppercase tracking-wider text-accent block mb-1 mt-4">
                  Email
                </span>
                <a href="mailto:info@strongbondstructurals.in" className="hover:text-accent transition-colors block mb-1">
                  info@strongbondstructurals.in
                </a>
                <a href="mailto:info.strongbond2012@gmail.com" className="hover:text-accent transition-colors block">
                  info.strongbond2012@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/50">
            © {new Date().getFullYear()} STRONGBOND – Structural Solutions. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-primary-foreground/50 hover:text-accent transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
