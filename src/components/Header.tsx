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
    <svg width="44" height="44" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:rotate-12 transition-transform duration-500">
      {/* Left Chevron */}
      <path d="M45 25L20 50L45 75" stroke="url(#logo_grad_1)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      {/* Right Chevron */}
      <path d="M55 25L80 50L55 75" stroke="url(#logo_grad_2)" strokeWidth="16" strokeLinecap="round" strokeLinejoin="round" />
      <defs>
        <linearGradient id="logo_grad_1" x1="20" y1="25" x2="45" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF00FF" />
          <stop offset="1" stopColor="#A855F7" />
        </linearGradient>
        <linearGradient id="logo_grad_2" x1="80" y1="25" x2="55" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0EA5E9" />
          <stop offset="0.5" stopColor="#6366F1" />
          <stop offset="1" stopColor="#3702B2" />
        </linearGradient>
      </defs>
    </svg>
  );

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between glass rounded-2xl px-6 py-3">
        <a href="/" className="flex flex-col items-center gap-1 group py-1">
          <BrandLogo />
          <div className="flex flex-col leading-none items-center">
            <span className="font-display font-black text-xs tracking-tighter uppercase">
              WiseTech
            </span>
            <span className="text-[7px] uppercase font-bold tracking-[0.4em] text-white/40">
              Limited
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-white text-black px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-brand-magenta hover:text-white transition-all flex items-center gap-2"
          >
            Start Project <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { x: 0, opacity: 1 } : { x: '100%', opacity: 0 }}
        className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 md:hidden"
      >
        <button
          className="absolute top-8 right-8 text-white scale-150"
          onClick={() => setIsOpen(false)}
        >
          <X />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-3xl font-display font-bold hover:text-brand-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="bg-brand-primary text-white px-8 py-4 rounded-full text-xl font-bold mt-4"
        >
          Get Started
        </a>
      </motion.div>
    </header>
  );
}
