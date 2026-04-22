import { motion } from 'motion/react';
import { ArrowRight, Waves, Cpu, Database } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6 overflow-hidden">
      {/* Background abstract elements - Refined for Logo colors */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-brand-magenta/10 rounded-full blur-[140px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-brand-indigo/10 rounded-full blur-[140px] -z-10" />
      
      {/* Decorative Chevrons */}
      <div className="absolute top-40 left-10 w-20 h-20 text-white/5 chevron-mask rotate-45" />
      <div className="absolute bottom-40 right-10 w-40 h-40 text-white/5 chevron-mask -rotate-12" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-white/5 border border-white/10 text-brand-magenta text-xs font-black uppercase tracking-[0.2em] mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-magenta opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-magenta"></span>
            </span>
            Precision Engineering
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-8 tracking-tighter">
            Digital <br />
            <span className="text-gradient">Infrastructure.</span> <br />
            Subsurface <br />
            <span className="text-white/30 italic">Strategy.</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-lg mb-12 leading-relaxed font-medium">
            Bridging the gap between the physical underground and the digital clouds with high-precision consulting.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary py-5 px-10 rounded-2xl group text-lg">
              View Capabilities
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="glass px-10 py-5 rounded-2xl font-bold hover:bg-white/10 transition-all text-lg">
              Contact Team
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display tracking-tight">50+</span>
              <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Deployments</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display tracking-tight">12k+</span>
              <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Data Points</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold font-display tracking-tight">100%</span>
              <span className="text-xs text-white/40 uppercase font-bold tracking-wider">Success Rate</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Main Visual: Overlapping Tech Cards */}
          <div className="relative aspect-square max-w-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/20 to-brand-secondary/20 rounded-3xl" />
            
            {/* Visual representing Geophysics */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 -left-6 glass p-6 rounded-2xl w-48 shadow-2xl"
            >
              <Waves className="text-brand-primary w-8 h-8 mb-4" />
              <h3 className="font-bold text-sm mb-1">Subsurface Prep</h3>
              <p className="text-[10px] text-white/40 leading-tight">Expert data analysis for borehole surveys and geophysical investigations.</p>
            </motion.div>

            {/* Visual representing Digital */}
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-10 -right-6 glass p-6 rounded-2xl w-48 shadow-2xl"
            >
              <Cpu className="text-brand-accent w-8 h-8 mb-4" />
              <h3 className="font-bold text-sm mb-1">Full-Stack Platforms</h3>
              <p className="text-[10px] text-white/40 leading-tight">Responsive, high-performance platforms built with modern ecosystems.</p>
            </motion.div>

            {/* Central Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 glass rounded-full flex items-center justify-center p-4">
               <div className="w-full h-full rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-center">
                  <Database className="w-12 h-12 text-white/80" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
