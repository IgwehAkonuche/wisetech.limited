import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto glass p-12 md:p-20 rounded-[3rem] border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-brand-primary/5 to-transparent -z-10" />
        
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-black mb-8 leading-[0.9]">
              Let's build <br />
              the <span className="text-gradient">future.</span>
            </h2>
            <p className="text-white/60 mb-12 max-w-sm">
              Have a complex geophysical challenge or a digital project? We're ready to partner with you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-magenta">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Email us</p>
                  <a href="mailto:contact@wisetech.agency" className="text-xl font-bold hover:text-brand-magenta transition-colors">contact@wisetech.agency</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-accent">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Call us</p>
                  <a href="tel:+2347034654439" className="text-xl font-bold hover:text-brand-accent transition-colors">+234 703 465 4439</a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center text-brand-indigo">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 font-bold mb-1">Visit us</p>
                  <p className="text-xl font-bold ">Lagos, Nigeria / Remote</p>
                </div>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-2">Name</label>
                <input type="text" placeholder="John Doe" className="w-full glass bg-white/2 p-4 rounded-2xl outline-none focus:border-brand-magenta transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-2">Email</label>
                <input type="email" placeholder="john@company.com" className="w-full glass bg-white/2 p-4 rounded-2xl outline-none focus:border-brand-magenta transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-2">Subject</label>
              <select className="w-full glass bg-white/2 p-4 rounded-2xl outline-none focus:border-brand-magenta transition-colors appearance-none">
                <option className="bg-black text-white">Digital Infrastructure</option>
                <option className="bg-black text-white">Geophysical Survey</option>
                <option className="bg-black text-white">Full-Stack Development</option>
                <option className="bg-black text-white">Other Inquiry</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-bold tracking-widest text-white/40 ml-2">Message</label>
              <textarea placeholder="Tell us about your project..." rows={6} className="w-full glass bg-white/2 p-4 rounded-2xl outline-none focus:border-brand-magenta transition-colors resize-none"></textarea>
            </div>
            <button className="w-full bg-white text-black py-5 rounded-2xl font-black text-lg hover:bg-brand-magenta hover:text-white transition-all flex items-center justify-center gap-3 active:scale-95">
              Send Message <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
