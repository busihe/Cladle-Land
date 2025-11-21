import { Target, Eye, TrendingUp } from 'lucide-react';

export function MissionVision() {
  return (
    <section id="mission" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0A1E3F] mb-4">Mission & Vision</h2>
          <div className="w-20 h-1 bg-[#F2C94C] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Mission */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0A1E3F] to-[#0A1E3F]/80 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative p-8 lg:p-10 text-white">
              <div className="w-16 h-16 bg-[#F2C94C] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Target size={32} className="text-[#0A1E3F]" />
              </div>
              
              <h3 className="text-white mb-4">Mission</h3>
              
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.7 }} className="text-white/90">
                To identify and solve key societal issues using advanced technology, delivering meaningful solutions that improve lives and create sustainable impact.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#F2C94C] to-[#F2C94C]/90 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative p-8 lg:p-10 text-[#0A1E3F]">
              <div className="w-16 h-16 bg-[#0A1E3F] rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Eye size={32} className="text-white" />
              </div>
              
              <h3 className="text-[#0A1E3F] mb-4">Vision</h3>
              
              <p style={{ fontSize: '1.0625rem', lineHeight: 1.7 }}>
                To fulfill the needs and challenges of society with high-quality technological solutions—bringing excellence, innovation, and advanced engineering to Africa and the world.
              </p>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-gradient-to-r from-[#F5F7FA] to-white p-8 rounded-2xl border-2 border-[#F2C94C]/20">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="text-[#F2C94C]" size={28} />
              <h4 className="text-[#0A1E3F]">Leading Through Technology</h4>
            </div>
            <p className="text-[#0A1E3F]/80" style={{ fontSize: '1.125rem', fontWeight: 500 }}>
              We prove that Rwanda and Africa can lead through technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
