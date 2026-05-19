import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-display font-extrabold leading-[1.1] tracking-tight">
                Where deep science <br />
                meets <span className="italic font-serif font-normal text-brand-cyan">precision</span> code.
              </h2>
              <div className="w-16 h-1 bg-brand-cyan/20" />
            </div>

            <div className="space-y-10 text-brand-gray/80 text-xl leading-relaxed">
              <p>
                WiseTech Limited provides specialized digital and geophysical consulting services tailored for the energy and environmental sectors.
              </p>
              <p>
                We offer professional full-stack web development, creating responsive, high-performance platforms alongside expert geophysical data analysis and borehole surveys.
              </p>
              <p className="font-serif italic text-brand-gray/90 text-2xl border-l-[3px] border-brand-cyan pl-10 py-3">
                "By combining computational geophysics with modern programming, we deliver data-driven solutions for subsurface investigations and digital infrastructure projects."
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-sm bg-white p-6 border border-brand-gray/[0.03]">
               <div className="w-full h-full rounded-[2.5rem] overflow-hidden relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                    alt="WiseTech Environment" 
                    className="w-full h-full object-cover grayscale transition-all duration-[1.5s] group-hover:grayscale-0 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-cyan/5 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity" />
               </div>
            </div>
            {/* Minimalist floating stats */}
            <div className="absolute -bottom-12 -left-12 bg-white p-10 rounded-[2rem] shadow-xl shadow-brand-gray/5 border border-border-muted hidden xl:block">
               <p className="text-5xl font-display font-extrabold text-brand-gray mb-1 tracking-tighter">10+</p>
               <p className="text-[11px] uppercase font-bold tracking-[0.2em] text-brand-gray/60">Years of Innovation</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
