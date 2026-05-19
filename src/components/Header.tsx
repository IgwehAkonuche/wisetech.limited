import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Case Studies', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  const BrandLogo = () => (
    <div className="flex items-center gap-4 group">
      <img 
        src="/src/assets/images/wisetech_limited-logo2.jpg" 
        alt="WiseTech Limited" 
        className="h-16 md:h-20 object-contain shrink-0 mix-blend-multiply" 
      />
    </div>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-8">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-full px-10 py-5 shadow-sm border border-black/5">
        <a href="/" className="group">
          <BrandLogo />
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-brand-gray/60 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary rounded-full px-6 py-2.5 text-sm"
          >
            Start Project
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-gray"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { y: 0, opacity: 1 } : { y: '-100%', opacity: 0 }}
        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-10 md:hidden"
      >
        <button
          className="absolute top-10 right-10 text-brand-gray"
          onClick={() => setIsOpen(false)}
        >
          <X className="w-8 h-8" />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-display font-medium text-brand-gray hover:text-brand-cyan transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="btn-primary rounded-full text-lg px-12"
        >
          Get Started
        </a>
      </motion.div>
    </header>
  );
}
