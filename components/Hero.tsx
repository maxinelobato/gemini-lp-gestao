import React from 'react';
import { Button } from './Button';
import { TrendingUp, ShieldCheck, Target } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center bg-stone-50 dark:bg-stone-950 transition-colors duration-500">
      {/* Abstract Background Shapes with Floating Animation */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-stone-200/50 dark:bg-stone-800/20 rounded-full blur-[120px] -z-10 pointer-events-none transition-colors duration-500 animate-float" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-200/30 dark:bg-orange-900/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors duration-500 animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl">
          <FadeIn delay={0}>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/10 backdrop-blur-sm mb-8 shadow-sm dark:shadow-none">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-medium text-stone-600 dark:text-stone-300 tracking-wide uppercase">Vagas limitadas para Q4 2024</span>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <h1 className="text-5xl md:text-7xl font-bold text-stone-900 dark:text-white tracking-tight leading-[1.1] mb-8 transition-colors duration-500">
              Escala sólida para<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-stone-600 to-stone-900 dark:from-stone-200 dark:to-stone-500">
                negócios consolidados.
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={200}>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed mb-10 max-w-2xl border-l border-stone-300 dark:border-stone-800 pl-6 transition-colors duration-500">
              Sem milagres. Apenas processos validados e inteligência de dados para escalar negócios consolidados ao próximo nível.
            </p>
          </FadeIn>

          <FadeIn delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary" 
                icon 
                onClick={() => document.getElementById('contato')?.scrollIntoView({behavior: 'smooth'})}
                className="hover:scale-105 hover:!bg-stone-900 dark:hover:!bg-white hover:text-white dark:hover:text-stone-950 hover:shadow-[0_0_40px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] transition-all duration-300 transform active:scale-95"
              >
                Solicitar Análise de Conta
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('resultados')?.scrollIntoView({behavior: 'smooth'})}>
                Ver Resultados Reais
              </Button>
            </div>
          </FadeIn>

          {/* Quick Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-stone-200 dark:border-white/5 grid grid-cols-1 md:grid-cols-3 gap-8 transition-colors duration-500">
            <FadeIn delay={500} className="w-full">
              <div 
                className="group flex items-center space-x-3 text-stone-500 dark:text-stone-400 cursor-default"
              >
                <div className="p-2 rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/5 group-hover:bg-orange-500/10 dark:group-hover:bg-orange-500/20 group-hover:border-orange-500/30 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
                  <ShieldCheck className="w-5 h-5 text-stone-400 dark:text-stone-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-300">Parceiro Certificado Google</span>
              </div>
            </FadeIn>
            
            <FadeIn delay={600} className="w-full">
              <div 
                className="group flex items-center space-x-3 text-stone-500 dark:text-stone-400 cursor-default"
              >
                <div className="p-2 rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/5 group-hover:bg-orange-500/10 dark:group-hover:bg-orange-500/20 group-hover:border-orange-500/30 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
                  <Target className="w-5 h-5 text-stone-400 dark:text-stone-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-300">Estratégia Cross-Channel</span>
              </div>
            </FadeIn>

            <FadeIn delay={700} className="w-full">
              <div 
                className="group flex items-center space-x-3 text-stone-500 dark:text-stone-400 cursor-default"
              >
                <div className="p-2 rounded-lg bg-stone-100 dark:bg-white/5 border border-stone-200 dark:border-white/5 group-hover:bg-orange-500/10 dark:group-hover:bg-orange-500/20 group-hover:border-orange-500/30 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300">
                  <TrendingUp className="w-5 h-5 text-stone-400 dark:text-stone-300 group-hover:text-orange-500 dark:group-hover:text-orange-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <span className="text-sm font-medium group-hover:text-stone-900 dark:group-hover:text-white transition-colors duration-300">+R$ 10MM Gerenciados</span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};