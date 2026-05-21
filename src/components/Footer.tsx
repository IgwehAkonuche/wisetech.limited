import { Facebook, Instagram, Send, Linkedin, Twitter } from 'lucide-react';
import brandLogo from '../assets/images/wisetech_limited-logo2.jpg';

export default function Footer() {
  const BrandLogo = () => (
    <div className="flex items-center gap-4 group">
      <img 
        src={brandLogo} 
        alt="WiseTech Limited" 
        className="h-14 md:h-16 object-contain shrink-0 mix-blend-multiply" 
      />
    </div>
  );

  return (
    <footer className="py-32 px-6 border-t border-border-muted bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
        <div className="space-y-10 max-w-sm">
          <a href="/" className="inline-block">
            <BrandLogo />
          </a>
          <p className="text-lg text-brand-gray/40 leading-relaxed font-light">
            An elite consulting firm bridging the physical underground and digital clouds with high-precision geophysics and full-stack engineering.
          </p>
        </div>

        <div className="flex flex-wrap gap-24 md:gap-40">
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray/20">Studio</h4>
            <ul className="space-y-4 text-lg font-display font-bold text-brand-gray/60">
              <li><a href="#services" className="hover:text-brand-cyan transition-colors">Expertise</a></li>
              <li><a href="#portfolio" className="hover:text-brand-cyan transition-colors">Case Studies</a></li>
              <li><a href="#about" className="hover:text-brand-cyan transition-colors">The Team</a></li>
              <li><a href="#contact" className="hover:text-brand-cyan transition-colors">Initiatives</a></li>
            </ul>
          </div>
          
          <div className="space-y-8">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.3em] text-brand-gray/20">Social</h4>
            <div className="flex flex-col gap-4 text-lg font-display font-bold text-brand-gray/60">
              <a href="#" className="hover:text-brand-cyan transition-colors flex items-center gap-2">LinkedIn</a>
              <a href="#" className="hover:text-brand-cyan transition-colors flex items-center gap-2">Twitter</a>
              <a href="#" className="hover:text-brand-cyan transition-colors flex items-center gap-2">Instagram</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-border-muted flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gray/20">
        <p>© 2026 WiseTech Limited. Measured in the Garden City of Port Harcourt, Built for the World.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-brand-cyan transition-colors">Privacy</a>
          <a href="#" className="hover:text-brand-cyan transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
}
