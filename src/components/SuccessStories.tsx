import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "WiseTech transformed our digital presence with a bespoke website that perfectly reflects our industrial technology leadership. Their attention to detail and professional approach made the entire process seamless.",
    author: "Management Team",
    company: "Haeyeson",
    role: "Global Industrial Tech Partner"
  },
  {
    text: "We needed a simple, professional corporate website that spoke to our expertise in the energy sector. WiseTech delivered exactly that, combined with excellent digital infrastructure management.",
    author: "Technical Director",
    company: "Geotech Energy",
    role: "Engineering & Geophysical Solutions"
  },
  {
    text: "They developed a clean, highly functional platform that effectively showcases our oilfield services. Their team understood our technical needs and translated them into a polished online presence.",
    author: "Operations Manager",
    company: "Ventrix Oilfield",
    role: "Oilfield Technical Services"
  }
];

export default function SuccessStories() {
  return (
    <section id="testimonials" className="section-padding bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-gray tracking-tight leading-tight">
              What Our <span className="text-brand-cyan">Partners</span> Say
            </h2>
            <div className="w-20 h-1.5 bg-brand-cyan mt-6" />
          </div>
          <p className="text-brand-gray/60 font-medium max-w-sm">
            Trusted by industry leaders in technology, energy, and technical services.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className="bg-white p-10 md:p-12 rounded-[2rem] border border-brand-gray/5 hover:border-brand-cyan/20 transition-all duration-500 flex flex-col justify-between group h-full shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)]"
            >
              <div className="space-y-8">
                <Quote className="w-12 h-12 text-zinc-100 group-hover:text-brand-cyan/10 transition-colors duration-500 fill-current" />
                <p className="text-xl md:text-2xl font-serif italic text-brand-gray/80 leading-relaxed font-medium">
                  "{t.text}"
                </p>
              </div>
              
              <div className="mt-12 pt-8 border-t border-zinc-100">
                <div className="space-y-1">
                  <h4 className="font-display font-bold text-lg text-brand-gray">{t.company}</h4>
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold text-brand-cyan">{t.author}</span>
                    <span className="text-[10px] text-brand-gray/40 uppercase tracking-widest font-bold mt-1">
                      {t.role}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
