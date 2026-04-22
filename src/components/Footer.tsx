import { Facebook, Instagram, Send, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const BrandLogo = () => (
    <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-500">
      <path d="M45 25L20 50L45 75" stroke="url(#footer_logo_grad_1)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 25L80 50L55 75" stroke="url(#footer_logo_grad_2)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="footer_logo_grad_1" x1="20" y1="25" x2="45" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF00FF" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="footer_logo_grad_2" x1="80" y1="25" x2="55" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0EA5E9" />
          <stop offset="0.5" stopColor="#6366F1" />
          <stop offset="1" stopColor="#3702B2" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="flex flex-col items-center md:items-start">
          <a href="/" className="flex flex-col items-center gap-1 mb-6 group">
            <BrandLogo />
            <div className="flex flex-col leading-none items-center">
              <span className="font-display font-black text-sm tracking-tighter uppercase">
                WiseTech
              </span>
              <span className="text-[8px] uppercase font-bold tracking-[0.3em] text-white/40">
                Limited
              </span>
            </div>
          </a>
          <p className="text-sm text-white/40 max-w-xs leading-relaxed">
            Leading-edge consulting for energy and environmental sectors. Bridging digital and physical domains.
          </p>
        </div>

        <div className="flex flex-wrap gap-12 md:gap-24">
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Navigation</h4>
            <ul className="space-y-2 text-sm font-medium">
              <li><a href="#services" className="hover:text-brand-magenta transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-magenta transition-colors">Work</a></li>
              <li><a href="#about" className="hover:text-brand-magenta transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-brand-magenta transition-colors">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-xs font-black uppercase tracking-widest text-white/40">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass rounded-lg hover:text-brand-magenta transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-brand-magenta transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-brand-magenta transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 glass rounded-lg hover:text-brand-magenta transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/20">
        <p>© 2026 WiseTech Limited. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
