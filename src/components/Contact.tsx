import { motion } from 'motion/react';
import { Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useRef, useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setStatus('idle');

    // Pre-flight check
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const autoReplyTemplateId = import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID;

    if (!publicKey || !serviceId || !templateId) {
      console.error('EmailJS Configuration Missing. Please check your environment variables in Settings.');
      setIsSubmitting(false);
      setStatus('error');
      return;
    }

    try {
      // Run both requests in parallel to reduce wait time
      const results = await Promise.allSettled([
        emailjs.sendForm(serviceId, templateId, formRef.current, publicKey),
        autoReplyTemplateId 
          ? emailjs.sendForm(serviceId, autoReplyTemplateId, formRef.current, publicKey)
          : Promise.resolve({ text: 'OK' })
      ]);

      const mainResult = results[0];

      if (mainResult.status === 'fulfilled' && mainResult.value.text === 'OK') {
        setStatus('success');
        formRef.current.reset();
        
        // Log auto-reply status for debugging
        if (autoReplyTemplateId && results[1].status === 'rejected') {
          console.warn('Auto-reply failed, but main email was sent.', results[1].reason);
        }
      } else {
        console.error('Main Email Failed:', mainResult.status === 'rejected' ? mainResult.reason : 'Text not OK');
        setStatus('error');
      }
    } catch (error) {
      console.error('EmailJS Integration Error:', error);
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-[var(--background-alt)]">
      <div className="max-w-7xl mx-auto bg-white p-16 md:p-32 rounded-[4rem] shadow-sm border border-brand-gray/[0.03] relative overflow-hidden">
        <div className="grid lg:grid-cols-5 gap-32 relative z-10">
          <div className="lg:col-span-2 space-y-16">
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl font-display font-extrabold leading-[1.1] tracking-tight text-brand-gray">
                Let's start <br />
                something <span className="italic font-serif font-normal text-brand-cyan">extraordinary.</span>
              </h2>
              <p className="text-brand-gray/40 text-2xl font-light leading-relaxed">
                Whether you have a complex geophysical challenge or a digital vision, we're ready to partner with you.
              </p>
            </div>
            
            <div className="space-y-12">
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-full border border-border-muted flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-[12px] uppercase font-bold tracking-[0.2em] text-brand-gray/20">Email</p>
                  <a href="mailto:wisetechlimited@outlook.com" className="text-xl font-display font-bold text-brand-gray hover:text-brand-cyan transition-colors">wisetechlimited@outlook.com</a>
                </div>
              </div>
              <div className="flex items-center gap-8 group">
                <div className="w-16 h-16 rounded-full border border-border-muted flex items-center justify-center text-brand-cyan group-hover:bg-brand-cyan group-hover:text-white transition-all duration-700">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <p className="text-[12px] uppercase font-bold tracking-[0.2em] text-brand-gray/20">Phone</p>
                  <a href="tel:+2348035084686" className="text-xl font-display font-bold text-brand-gray hover:text-brand-cyan transition-colors">+234 803 508 4686</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <label className="text-[12px] uppercase font-bold tracking-[0.2em] text-brand-gray/60">Your Name</label>
                  <input 
                    type="text" 
                    name="user_name"
                    required
                    placeholder="Full Name" 
                    className="w-full bg-transparent border-b border-brand-gray/20 pb-6 outline-none focus:border-brand-cyan transition-colors placeholder:text-brand-gray/30 font-display font-bold text-xl" 
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-[12px] uppercase font-bold tracking-[0.2em] text-brand-gray/60">Email Address</label>
                  <input 
                    type="email" 
                    name="user_email"
                    required
                    placeholder="example@domain.com" 
                    className="w-full bg-transparent border-b border-brand-gray/20 pb-6 outline-none focus:border-brand-cyan transition-colors placeholder:text-brand-gray/30 font-display font-bold text-xl" 
                  />
                </div>
              </div>
              <div className="space-y-4">
                <label className="text-[12px] uppercase font-bold tracking-[0.2em] text-brand-gray/60">Primary Interest</label>
                <select 
                  name="interest"
                  className="w-full bg-transparent border-b border-brand-gray/20 pb-6 outline-none focus:border-brand-cyan transition-colors appearance-none font-display font-bold text-xl cursor-pointer text-brand-gray"
                >
                  <option value="Digital Infrastructure">Digital Infrastructure</option>
                  <option value="Geophysical Survey">Geophysical Survey</option>
                  <option value="Website Development">Website Development</option>
                  <option value="Other Inquiry">Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-4">
                <label className="text-[12px] uppercase font-bold tracking-[0.2em] text-brand-gray/60">Your Ambition</label>
                <textarea 
                  name="message"
                  required
                  placeholder="Tell us about your project goals..." 
                  rows={4} 
                  className="w-full bg-transparent border-b border-brand-gray/20 pb-6 outline-none focus:border-brand-cyan transition-colors resize-none placeholder:text-brand-gray/30 font-display font-bold text-xl"
                ></textarea>
              </div>
              
              <div className="pt-8 flex flex-col gap-6">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary rounded-full px-16 py-6 shadow-2xl shadow-brand-cyan/10 flex items-center justify-center gap-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed group w-fit"
                >
                  {isSubmitting ? (
                    <>Processing <Loader2 className="w-5 h-5 animate-spin" /></>
                  ) : (
                    <>Submit Initiative <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 text-emerald-600 bg-emerald-50 px-6 py-4 rounded-2xl border border-emerald-100"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-bold">Initiative received! We'll reach out shortly.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-center gap-3 text-rose-600 bg-rose-50 px-6 py-4 rounded-2xl border border-rose-100"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-bold">Something went wrong. Please try again.</span>
                  </motion.div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
