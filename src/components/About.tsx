import { Mail, Phone, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0A1E3F] mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-[#F2C94C] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-[#0A1E3F]/80" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              Cladle Land Enterprise is a technology-driven company committed to solving societal problems through innovative software solutions and embedded systems.
            </p>
            <p className="text-[#0A1E3F]/80" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              We blend engineering, design, and creativity to build solutions that truly matter.
            </p>

            <div className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-md">
              <div className="flex-shrink-0 w-12 h-12 bg-[#F2C94C]/10 rounded-full flex items-center justify-center">
                <Award className="text-[#F2C94C]" size={24} />
              </div>
              <div>
                <h4 className="text-[#0A1E3F] mb-2">Our Commitment</h4>
                <p className="text-[#0A1E3F]/70">
                  Delivering excellence in every project, proving that Rwanda and Africa can lead through technology.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1687986261123-b17f08f2796c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSd2FuZGElMjBtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjM3MjIzMzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Modern Rwanda"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* CEO Card */}
        <div className="max-w-2xl mx-auto mb-2">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6 p-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[#F2C94C]/20">
                  <ImageWithFallback
                    src="https://res.cloudinary.com/dkiytyubm/image/upload/v1765574068/founder_j1iv52.jpg"
                    alt="Gaga Andy - CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-[#0A1E3F] mb-1">Gaga Andy</h3>
                <p className="text-[#F2C94C] mb-4" style={{ fontWeight: 600 }}>
                  CEO
                </p>

                <div className="space-y-2">
                  <a
                    href="tel:0798672478"
                    className="flex items-center gap-2 text-[#0A1E3F]/70 hover:text-[#F2C94C] transition-colors justify-center md:justify-start"
                  >
                    <Phone size={18} />
                    <span>0798672478</span>
                  </a>
                  <a
                    href="mailto:andygaga250@gmail.com"
                    className="flex items-center gap-2 text-[#0A1E3F]/70 hover:text-[#F2C94C] transition-colors justify-center md:justify-start"
                  >
                    <Mail size={18} />
                    <span>andygaga250@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-2xl mx-auto mt-2">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-6 p-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[#F2C94C]/20">
                  <ImageWithFallback
                    src="https://res.cloudinary.com/dkiytyubm/image/upload/v1765574068/co-founder_bb7qdd.jpg"
                    alt="Gaga Andy - CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="flex-1 text-center md:text-left">
                <h3 className="text-[#0A1E3F] mb-1">Gaga Andy</h3>
                <p className="text-[#F2C94C] mb-4" style={{ fontWeight: 600 }}>
                co-founder & Head of product design
                </p>

                <div className="space-y-2">
                  <a
                    href="tel:0798672478"
                    className="flex items-center gap-2 text-[#0A1E3F]/70 hover:text-[#F2C94C] transition-colors justify-center md:justify-start"
                  >
                    <Phone size={18} />
                    <span>0784425756</span>
                  </a>
                  <a
                    href="mailto:andygaga250@gmail.com"
                    className="flex items-center gap-2 text-[#0A1E3F]/70 hover:text-[#F2C94C] transition-colors justify-center md:justify-start"
                  >
                    <Mail size={18} />
                    <span>uwawetres04@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
