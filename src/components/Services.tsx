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
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight">Services</h2>
            <p className="text-brand-gray/70 max-w-xl text-xl leading-relaxed">Providing cross-disciplinary expertise at the intersection of digital tech and earth science.</p>
          </div>
          <div className="hidden md:block">
            <div className="text-right">
              <span className="text-[12px] font-bold uppercase tracking-[0.4em] text-brand-gray/40 block mb-1">Established</span>
              <span className="text-lg font-display font-bold text-brand-gray/50">2014</span>
            </div>
          </div>
        </div>

        <div className="space-y-40">
          {/* Digital Services */}
          <div className="space-y-16">
            <div className="flex items-center gap-6">
               <h3 className="text-[13px] font-bold uppercase tracking-[0.3em] text-brand-gray/70 whitespace-nowrap">Digital Consulting</h3>
               <div className="h-px w-full bg-brand-gray/10" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24">
              {digitalServices.map((service, idx) => (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                   className="group"
                >
                  <div className="mb-8 inline-flex p-4 rounded-2xl bg-brand-light-gray text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-extrabold mb-5 group-hover:text-brand-cyan transition-colors leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-brand-gray/80 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* geophysical Services */}
          <div className="space-y-16">
            <div className="flex items-center gap-6">
               <h3 className="text-[13px] font-bold uppercase tracking-[0.3em] text-brand-gray/70 whitespace-nowrap">Geophysical Consulting</h3>
               <div className="h-px w-full bg-brand-gray/10" />
            </div>
            <div className="grid md:grid-cols-3 gap-x-16 gap-y-24">
              {geophysicsServices.map((service, idx) => (
                <motion.div
                   key={idx}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 1, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                   className="group"
                >
                  <div className="mb-8 inline-flex p-4 rounded-2xl bg-brand-light-gray text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-500 transform group-hover:-translate-y-1">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-2xl md:text-3xl font-display font-extrabold mb-5 group-hover:text-brand-cyan transition-colors leading-tight">
                    {service.title}
                  </h4>
                  <p className="text-brand-gray/80 leading-relaxed text-lg">
                    {service.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
