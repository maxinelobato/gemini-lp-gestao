import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-stone-900 text-white hover:bg-stone-800 shadow-xl shadow-stone-300/50 dark:bg-white dark:text-stone-950 dark:hover:bg-stone-200 dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]",
    secondary: "bg-stone-200 text-stone-800 hover:bg-stone-300 border border-stone-300 dark:bg-stone-800 dark:text-white dark:hover:bg-stone-700 dark:border-stone-700",
    outline: "bg-transparent border border-stone-300 text-stone-600 hover:border-stone-400 hover:text-stone-900 hover:bg-stone-100 dark:border-stone-600 dark:text-stone-300 dark:hover:border-stone-400 dark:hover:text-white dark:backdrop-blur-sm dark:hover:bg-white/5"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};