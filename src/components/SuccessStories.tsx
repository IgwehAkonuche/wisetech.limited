import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "WiseTech transformed our subsurface investigation workflow. Their custom data visualization platform saved us hundreds of man-hours.",
    author: "Dr. Elena Vance",
    role: "Lead Geologist, Apex Energy",
    avatar: "https://i.pravatar.cc/150?u=elena"
  },
  {
    text: "The full-stack e-commerce solution WiseTech built for us saw a 300% increase in conversion rates within the first quarter.",
    author: "Mark S.",
    role: "CEO, GlowBeauty",
    avatar: "https://i.pravatar.cc/150?u=mark"
  },
  {
    text: "Remarkable precision in their borehole surveys coupled with a modern digital reporting system. A truly unique agency.",
    author: "James Harding",
    role: "Environmental Consultant",
    avatar: "https://i.pravatar.cc/150?u=james"
  }
];

export default function SuccessStories() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4 italic text-white/40">Trusted by Professionals</h2>
          <p className="text-white/60">Driving success across energy, retail, and tech industries.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02 }}
              className="glass p-10 rounded-[2rem] flex flex-col justify-between h-full border-white/5"
            >
              <div className="mb-8">
                <Quote className="w-10 h-10 text-brand-magenta/20 mb-6" />
                <p className="text-xl font-medium leading-relaxed italic">"{t.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <img src={t.avatar} alt={t.author} className="w-12 h-12 rounded-full border-2 border-brand-magenta" />
                <div>
                  <h4 className="font-bold">{t.author}</h4>
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
