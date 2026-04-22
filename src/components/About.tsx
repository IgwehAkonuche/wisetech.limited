import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white/2">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Where <span className="text-brand-primary italic">Deep Science</span> Meets <br />
              <span className="text-white">Cutting-Edge Code.</span>
            </h2>
            <div className="space-y-6 text-white/60 text-lg leading-relaxed">
              <p>
                WiseTech Limited provides specialized digital and geophysical consulting services tailored for the energy and environmental sectors.
              </p>
              <p>
                We offer professional full-stack web development, creating responsive, high-performance platforms alongside expert geophysical data analysis and borehole surveys.
              </p>
              <p className="border-l-2 border-brand-magenta pl-6 py-2 text-white italic">
                "By combining computational geophysics with modern programming, we deliver data-driven solutions for subsurface investigations and digital infrastructure projects."
              </p>
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-magenta animate-pulse to-brand-indigo rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative glass aspect-video rounded-3xl overflow-hidden">
               {/* This is where the team image would go */}
               <img 
                 src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200" 
                 alt="WiseTech Team" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-bottom p-8">
                  <div className="mt-auto">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-magenta mb-2">Our Mission</p>
                    <p className="text-lg font-medium">Bridging the gap between physical investigation and digital innovation.</p>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
