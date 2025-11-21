import { Battery, Sprout, Activity, Code2, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Energy Harvesting System',
      status: 'In development',
      description: 'Renewable micro-energy solution that harvests and stores energy from movement or pressure.',
      impact: 'Supports communities with limited electricity access.',
      icon: Battery,
      image: 'https://images.unsplash.com/photo-1668097613569-3405bb63262b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZW5ld2FibGUlMjBlbmVyZ3klMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2MzcyMjM0MHww&ixlib=rb-4.1.0&q=80&w=1080',
      statusColor: 'bg-blue-500',
    },
    {
      id: 2,
      title: 'Smart Agricultural Investment Platform',
      status: 'In development',
      description: 'Digital platform linking cooperatives with investors locally and abroad.',
      impact: 'Boosts agricultural productivity and transparency.',
      icon: Sprout,
      image: 'https://images.unsplash.com/photo-1708794666324-85ad91989d20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGFncmljdWx0dXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjM3MjIzNDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      statusColor: 'bg-blue-500',
    },
    {
      id: 3,
      title: 'Step Counter & Motion Tracking Device',
      status: 'Pending refinement',
      description: 'Sensor-based hardware for step tracking and human motion monitoring.',
      impact: 'Enables affordable, locally-made fitness/health tech.',
      icon: Activity,
      image: 'https://images.unsplash.com/photo-1758348844348-acaf8d854665?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwdHJhY2tpbmclMjBkZXZpY2V8ZW58MXx8fHwxNzYzNzIyMzQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      statusColor: 'bg-amber-500',
    },
    {
      id: 4,
      title: 'UI/UX & Software Solutions',
      status: 'Ongoing',
      description: 'Product design and development for mobile and web.',
      impact: 'Enhances user experience and digital transformation.',
      icon: Code2,
      image: 'https://images.unsplash.com/photo-1545296664-39db56ad95bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwZGVzaWdufGVufDF8fHx8MTc2MzcyMjM0MXww&ixlib=rb-4.1.0&q=80&w=1080',
      statusColor: 'bg-green-500',
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-[#0A1E3F] mb-4">Our Projects</h2>
          <div className="w-20 h-1 bg-[#F2C94C] mx-auto rounded-full mb-4"></div>
          <p className="text-[#0A1E3F]/70 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
            Building innovative solutions that address real-world challenges and create lasting impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E3F]/60 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4">
                    <span className={`${project.statusColor} text-white px-4 py-1.5 rounded-full text-sm`} style={{ fontWeight: 600 }}>
                      {project.status}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                      <Icon className="text-[#0A1E3F]" size={28} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-[#0A1E3F] mb-3">{project.title}</h3>
                  
                  <p className="text-[#0A1E3F]/70 mb-4" style={{ lineHeight: 1.6 }}>
                    {project.description}
                  </p>

                  <div className="flex items-start gap-2 p-4 bg-[#F5F7FA] rounded-xl">
                    <ArrowRight className="text-[#F2C94C] flex-shrink-0 mt-0.5" size={20} />
                    <div>
                      <p style={{ fontWeight: 600, fontSize: '0.875rem' }} className="text-[#0A1E3F] mb-1">
                        Impact
                      </p>
                      <p className="text-[#0A1E3F]/80" style={{ fontSize: '0.875rem' }}>
                        {project.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
