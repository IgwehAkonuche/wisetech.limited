import { motion } from 'motion/react';
import { ArrowRight, Waves, Cpu, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl"
        >
          <div className="mb-12 inline-block">
            <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-brand-gray/60 px-6 py-2.5 rounded-full border border-brand-gray/10">
              Geophysical & Digital Excellence
            </span>
          </div>

          <h1 className="text-5xl md:text-[5.5rem] font-display font-extrabold leading-[1.1] tracking-tight mb-12 text-brand-gray">
            Decoding the planet, <br />
            <span className="font-serif italic font-normal text-brand-cyan">Engineering</span> the future.
          </h1>

          <p className="text-xl md:text-2xl text-brand-gray/70 max-w-2xl mx-auto mb-16 leading-relaxed">
            Specialized consulting services at the intersection of data-driven geophysics and bespoke digital infrastructure.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <button className="btn-primary px-14 py-6 shadow-xl shadow-brand-gray/5 hover:shadow-brand-gray/10">
              Explore Our Capabilities
            </button>
            <a href="#contact" className="px-10 py-5 font-semibold text-brand-gray hover:text-brand-cyan transition-all group flex items-center gap-2">
              Start a Conversation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Subtle background abstract element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-[1px] border-brand-gray/[0.02] rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] border-[1px] border-brand-gray/[0.02] rounded-full -z-10" />
    </section>
  );
}
