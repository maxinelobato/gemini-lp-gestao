import React from 'react';
import { Search, PenTool, BarChart2, Repeat } from 'lucide-react';
import { FadeIn } from './FadeIn';

const steps = [
  {
    icon: Search,
    title: 'Diagnóstico Profundo',
    desc: 'Não "chutamos" segmentações. Analisamos o histórico da sua conta, seu CRM e o comportamento do seu público atual para encontrar os vazamentos de dinheiro.'
  },
  {
    icon: PenTool,
    title: 'Estratégia & Criação',
    desc: 'Definimos a arquitetura das campanhas e orientamos seus criativos. O tráfego só funciona se a mensagem (oferta) e o destino (landing page) estiverem alinhados.'
  },
  {
    icon: BarChart2,
    title: 'Execução Técnica',
    desc: 'Implementação de tags avançadas (GTM), API de Conversões e configuração de públicos. Garantimos que os dados cheguem limpos às plataformas.'
  },
  {
    icon: Repeat,
    title: 'Otimização Contínua',
    desc: 'Rotina diária de análise de termos, negativamento de palavras, testes A/B de anúncios e realocação de verba para o que traz ROI positivo.'
  }
];

export const Methodology: React.FC = () => {
  return (
    <section id="metodologia" className="py-24 bg-white dark:bg-stone-950 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:flex md:items-end md:justify-between">
          <div className="max-w-xl">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4 transition-colors">
                Não é sorte. É engenharia de tráfego.
              </h2>
              <p className="text-stone-600 dark:text-stone-400 transition-colors">
                Muitos gestores focam apenas em "subir campanha". Nós focamos na saúde financeira da operação. Nosso método é cíclico e orientado a dados.
              </p>
            </FadeIn>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <FadeIn key={idx} delay={idx * 100} className="h-full">
              <div 
                className="group h-full p-6 rounded-2xl bg-stone-50 border border-stone-200 hover:border-stone-300 dark:bg-gradient-to-b dark:from-stone-900 dark:to-stone-950 dark:border-stone-800 dark:hover:border-stone-600 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-lg hover:shadow-stone-200/50 dark:hover:shadow-none"
              >
                <div className="w-12 h-12 rounded-lg bg-white border border-stone-200 dark:bg-stone-800 dark:border-stone-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-sm dark:shadow-none">
                  <step.icon className="w-6 h-6 text-stone-700 dark:text-stone-200" />
                </div>
                <h3 className="text-lg font-semibold text-stone-900 dark:text-white mb-3 transition-colors">{step.title}</h3>
                <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed transition-colors">
                  {step.desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};