import React, { useEffect, useRef, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'none';
}

export const FadeIn: React.FC<FadeInProps> = ({ 
  children, 
  delay = 0, 
  className = '',
  direction = 'up'
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: '50px' 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  const getTransform = () => {
    if (!isVisible) {
      if (direction === 'up') return 'translate-y-8';
      if (direction === 'down') return '-translate-y-8';
      return '';
    }
    return 'translate-y-0';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out-expo ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${getTransform()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};