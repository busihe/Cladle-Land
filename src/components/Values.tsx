import { Lightbulb, Award, Globe, Leaf, Zap } from 'lucide-react';

export function Values() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation for society',
      description: 'Solving real problems with cutting-edge technology',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      title: 'Quality first',
      description: 'Global-standard solutions, crafted with excellence',
      color: 'from-amber-500 to-amber-600',
    },
    {
      icon: Globe,
      title: 'African excellence',
      description: 'Leading through technology, proudly from Africa',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Long-term positive impact for communities',
      color: 'from-emerald-500 to-emerald-600',
    },
    {
      icon: Zap,
      title: 'Future-focused engineering',
      description: "Building tomorrow's solutions today",
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="values" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0A1E3F] mb-4">What We Stand For</h2>
          <div className="w-20 h-1 bg-[#F2C94C] mx-auto rounded-full mb-4"></div>
          <p className="text-[#0A1E3F]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Our core values drive everything we do, from innovation to impact.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group relative bg-[#F5F7FA] rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#F2C94C]/20"
              >
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="text-white" size={28} />
                </div>

                <h4 className="text-[#0A1E3F] mb-3">{value.title}</h4>
                
                <p className="text-[#0A1E3F]/70" style={{ lineHeight: 1.6 }}>
                  {value.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-[#F2C94C]/5 rounded-full blur-2xl group-hover:bg-[#F2C94C]/10 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-[#0A1E3F] to-[#0A1E3F]/90 rounded-2xl px-8 py-6 shadow-xl">
            <p className="text-white" style={{ fontSize: '1.125rem', fontWeight: 600 }}>
              Together, we're engineering a brighter future for Africa and the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
