import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-100 dark:bg-stone-950 py-12 border-t border-stone-200 dark:border-stone-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-stone-500 dark:text-stone-500">
        <p>&copy; {new Date().getFullYear()} ScaleAds. Todos os direitos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-stone-800 dark:hover:text-stone-300 transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-stone-800 dark:hover:text-stone-300 transition-colors">Privacidade</a>
          <a href="#" className="hover:text-stone-800 dark:hover:text-stone-300 transition-colors">Linkedin</a>
        </div>
      </div>
    </footer>
  );
};