import { Logo } from './Logo';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Mission & Vision', id: 'mission' },
    { label: 'Projects', id: 'projects' },
    { label: 'Values', id: 'values' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="bg-[#0A1E3F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo className="[&_span]:!text-white [&_circle]:stroke-white [&_path]:stroke-white [&_path:nth-child(2)]:stroke-[#F2C94C]" />
            <p className="text-white/70" style={{ lineHeight: 1.6 }}>
              Engineering the future from Rwanda to the world.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#F2C94C] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#F2C94C] rounded-lg flex items-center justify-center transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#F2C94C] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#F2C94C] rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-[#F2C94C] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-[#F2C94C] flex-shrink-0 mt-0.5" />
                <a href="tel:0798672478" className="text-white/70 hover:text-[#F2C94C] transition-colors">
                  0798672478
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-[#F2C94C] flex-shrink-0 mt-0.5" />
                <a href="mailto:andygaga250@gmail.com" className="text-white/70 hover:text-[#F2C94C] transition-colors break-all">
                  andygaga250@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-[#F2C94C] flex-shrink-0 mt-0.5" />
                <span className="text-white/70">Kigali, Rwanda</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white mb-4">Stay Updated</h4>
            <p className="text-white/70 mb-4" style={{ fontSize: '0.875rem' }}>
              Subscribe to our newsletter for the latest updates on our projects.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-[#F2C94C]"
              />
              <button className="px-4 py-2 bg-[#F2C94C] text-[#0A1E3F] rounded-lg hover:bg-[#F2C94C]/90 transition-colors flex-shrink-0" style={{ fontWeight: 600 }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-center md:text-left" style={{ fontSize: '0.875rem' }}>
              © {new Date().getFullYear()} Cladle Land Enterprise. All rights reserved.
            </p>
            <p className="text-white/60 text-center md:text-right" style={{ fontSize: '0.875rem' }}>
              Engineering the future from Rwanda to the world.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
