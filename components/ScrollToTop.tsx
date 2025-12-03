import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 rounded-full bg-white dark:bg-stone-800/50 backdrop-blur-lg border border-stone-200 dark:border-slate-700 text-stone-600 dark:text-stone-300 shadow-xl transition-all duration-500 hover:bg-stone-100 dark:hover:bg-stone-700 hover:text-stone-900 dark:hover:text-white hover:border-stone-300 dark:hover:border-stone-500 group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
    </button>
  );
};