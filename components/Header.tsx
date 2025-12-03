import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

// Simulating the import: import logoImg from './assets/logo.png';
const logoImg = "https://aistudiocdn.com/uploads/image_6a2039ed-3c22-4876-805c-f9659b752df2.png";

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [theme, setTheme] = useState('dark');

  // Initialize theme from localStorage or document
  useEffect(() => {
    if (document.documentElement.classList.contains('dark')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    const sections = ['metodologia', 'resultados', 'servicos', 'faq', 'contato'];
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { label: 'Metodologia', href: '#metodologia' },
    { label: 'Resultados', href: '#resultados' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(targetId);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div 
          className={`flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ease-in-out ${
            isScrolled 
              ? 'bg-white/70 dark:bg-stone-950/80 backdrop-blur-lg backdrop-saturate-150 border border-stone-200/50 dark:border-white/10 shadow-lg shadow-stone-200/50 dark:shadow-black/50' 
              : 'bg-transparent border border-transparent'
          }`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src={logoImg} 
              alt="Logo" 
              className="w-8 h-8 rounded-full" 
            />
            <span className="text-xl font-bold text-stone-900 dark:text-white tracking-tight transition-colors">lb.org</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-stone-900/5 dark:bg-white/10 text-stone-900 dark:text-white shadow-sm border border-stone-200 dark:border-white/10 backdrop-blur-md scale-105' 
                      : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-900/5 dark:hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-full text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/5 transition-colors"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className="ml-4 pl-4 border-l border-stone-200 dark:border-white/10">
              <a 
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="px-5 py-2.5 bg-stone-900 dark:bg-white text-white dark:text-stone-950 hover:bg-stone-700 dark:hover:bg-stone-200 text-sm font-semibold rounded-full transition-all shadow-lg hover:shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                Agendar Análise
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-stone-600 dark:text-stone-300 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 p-4 md:hidden">
          <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl border border-stone-200 dark:border-white/10 rounded-2xl p-6 flex flex-col space-y-2 shadow-2xl">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.label}
                  href={link.href} 
                  className={`px-4 py-3 rounded-xl transition-all ${
                    isActive 
                      ? 'bg-stone-100 dark:bg-white/10 text-stone-900 dark:text-white font-medium' 
                      : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                  }`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              );
            })}
             <div className="flex items-center justify-between px-4 py-3 border-t border-stone-200 dark:border-white/5 mt-2">
               <span className="text-stone-600 dark:text-stone-400">Tema</span>
               <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-stone-100 dark:bg-white/5 text-stone-900 dark:text-white"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
             </div>
            <div className="pt-2">
              <a 
                href="#contato"
                onClick={(e) => handleNavClick(e, '#contato')}
                className="block w-full text-center px-4 py-3 bg-stone-900 dark:bg-white text-white dark:text-stone-950 font-bold rounded-xl hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors"
              >
                Agendar Análise
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};