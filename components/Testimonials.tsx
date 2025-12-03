import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { FadeIn } from './FadeIn';

const testimonials: Testimonial[] = [
  {
    name: "Ricardo Mendes",
    role: "CEO",
    company: "Veloz E-commerce",
    text: "Em 4 anos de operação, nunca tivemos uma visão tão clara do nosso CAC e LTV. Escalamos de 50k para 300k/mês mantendo a margem saudável. É outro nível de jogo.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "Juliana Costa",
    role: "CMO",
    company: "TechSaaS Solutions",
    text: "A estratégia full-funnel implementada transformou nossa aquisição de leads B2B. A qualidade do lead melhorou drasticamente e o time de vendas agradece.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  },
  {
    name: "André Silva",
    role: "Fundador",
    company: "Grupo Silva",
    text: "O que mais me impressionou foi a transparência. Não prometem milagres, mas entregam consistência. O dashboard em tempo real é um diferencial absurdo para minha gestão.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-950 relative overflow-hidden transition-colors duration-500">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-stone-200/50 dark:bg-stone-800/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4 transition-colors">
              Parceiros que escalaram com segurança.
            </h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto transition-colors">
              Resultados consistentes constroem relacionamentos de longo prazo. 
              A média de retenção dos nossos clientes é superior a 24 meses.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <FadeIn key={idx} delay={idx * 150} className="h-full">
              <div 
                className="bg-white dark:bg-white/[0.02] backdrop-blur-sm border border-stone-200 dark:border-white/5 rounded-2xl p-8 hover:bg-stone-50 dark:hover:bg-white/[0.04] hover:-translate-y-2 hover:scale-[1.02] shadow-xl shadow-stone-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-stone-300/50 dark:hover:shadow-black/50 hover:border-stone-300 dark:hover:border-white/20 transition-all duration-500 relative group h-full"
              >
                <Quote className="absolute top-8 right-8 w-8 h-8 text-stone-200 dark:text-stone-800 group-hover:text-stone-300 dark:group-hover:text-stone-700 transition-colors duration-300" />
                
                <div className="mb-6 relative z-10">
                  <p className="text-stone-600 dark:text-stone-300 leading-relaxed italic transition-colors">
                    "{testimonial.text}"
                  </p>
                </div>

                <div className="flex items-center space-x-4 border-t border-stone-100 dark:border-white/5 pt-6 group-hover:border-stone-200 dark:group-hover:border-white/10 transition-colors">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-stone-200 dark:border-stone-700" 
                  />
                  <div>
                    <h4 className="text-stone-900 dark:text-white font-medium text-sm transition-colors">{testimonial.name}</h4>
                    <p className="text-xs text-stone-500 transition-colors">
                      {testimonial.role}, <span className="text-stone-400">{testimonial.company}</span>
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};