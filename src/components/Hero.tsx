import { Button } from './ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F5F7FA] rounded-full border border-[#F2C94C]/20">
              <Sparkles size={16} className="text-[#F2C94C]" />
              <span className="text-[#0A1E3F]" style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                Innovating from Rwanda
              </span>
            </div>

            <h1 className="text-[#0A1E3F]">
              Innovating for a Better Tomorrow
            </h1>

            <p className="text-[#0A1E3F]/70" style={{ fontSize: '1.125rem' }}>
              Cladle Land Enterprise builds impactful technologies that uplift communities and showcase Africa's excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('about')}
                className="bg-[#0A1E3F] text-white hover:bg-[#0A1E3F]/90 rounded-full px-8 py-6"
                style={{ fontSize: '1rem' }}
              >
                Learn More
                <ArrowRight size={20} className="ml-2" />
              </Button>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="outline"
                className="border-2 border-[#0A1E3F] text-[#0A1E3F] hover:bg-[#0A1E3F] hover:text-white rounded-full px-8 py-6"
                style={{ fontSize: '1rem' }}
              >
                View Projects
              </Button>
            </div>
          </div>

          {/* Right Content - Abstract Tech Illustration */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://res.cloudinary.com/dkiytyubm/image/upload/v1765625434/tsw62opr_gdounl.png"
                alt="Technology Innovation in Africa"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1E3F]/20 to-transparent"></div>
            </div>

            {/* Floating accent elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#F2C94C] rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#0A1E3F] rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
