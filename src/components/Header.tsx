import { useState } from 'react';
import { Logo } from './Logo';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Mission & Vision', id: 'mission' },
    { label: 'Projects', id: 'projects' },
    { label: 'Values', id: 'values' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#0A1E3F] hover:text-[#F2C94C] transition-colors duration-200"
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <Button
            onClick={() => scrollToSection('projects')}
            className="hidden lg:inline-flex bg-[#0A1E3F] text-white hover:bg-[#0A1E3F]/90 rounded-full px-6"
          >
            Explore Our Work
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#0A1E3F]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[#0A1E3F] hover:text-[#F2C94C] transition-colors duration-200 text-left py-2"
                style={{ fontWeight: 500 }}
              >
                {item.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-[#0A1E3F] text-white hover:bg-[#0A1E3F]/90 rounded-full w-full"
            >
              Explore Our Work
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
