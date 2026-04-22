import { motion } from 'motion/react';
import { Layout, Search, Megaphone, Smartphone, Settings, ShieldCheck, Drill, BarChart3, Map } from 'lucide-react';

const digitalServices = [
  { icon: Layout, title: 'Development', desc: 'Custom, responsive websites built to perform seamlessly across all devices.' },
  { icon: Search, title: 'SEO Strategy', desc: 'Optimization to improve search engine rankings and drive organic traffic.' },
  { icon: Megaphone, title: 'Growth Marketing', desc: 'Comprehensive digital strategies to boost your brand\'s online presence.' },
  { icon: Smartphone, title: 'App Ecosystems', desc: 'User-friendly mobile and web applications tailored to your business needs.' },
  { icon: Settings, title: 'Optimization', desc: 'Efficient troubleshooting to resolve issues and ensure optimal performance.' },
  { icon: ShieldCheck, title: 'Data Security', desc: 'Secure infrastructure projects for highly sensitive environmental sectors.' },
];

const geophysicsServices = [
  { icon: Drill, title: 'Borehole Surveys', desc: 'Precise subsurface investigations for energy and environmental sectors.' },
  { icon: BarChart3, title: 'Data Analysis', desc: 'Expert geophysical data analysis using computational models.' },
  { icon: Map, title: 'Subsurface Mapping', desc: 'Detailed 2D/3D mapping for exploration and infrastructure projects.' },
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-5xl font-bold mb-4">Core <span className="text-gradient">Capabilities</span></h2>
          <p className="text-white/40 max-w-2xl mx-auto">Providing cross-disciplinary expertise at the intersection of digital tech and earth science.</p>
        </div>

        <div className="space-y-24">
          {/* Digital Services */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Digital Consulting</h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {digitalServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-3xl group hover:border-brand-magenta/50 transition-colors cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-magenta/10 flex items-center justify-center mb-6 text-brand-magenta group-hover:bg-brand-magenta group-hover:text-white transition-all">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* geophysical Services */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-white/10" />
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/40">Geophysical Consulting</h3>
              <div className="h-px flex-1 bg-white/10" />
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {geophysicsServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="glass p-8 rounded-3xl group hover:border-brand-indigo/50 transition-colors cursor-default"
                >
                  <div className="w-12 h-12 rounded-2xl bg-brand-indigo/10 flex items-center justify-center mb-6 text-brand-indigo group-hover:bg-brand-indigo group-hover:text-white transition-all">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                  <p className="text-sm text-white/40 leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
