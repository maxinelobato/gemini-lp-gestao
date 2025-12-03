import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqItems = [
  {
    question: "Qual o investimento mínimo recomendado?",
    answer: "Recomendamos um budget de mídia a partir de R$ 5.000/mês. Esse valor permite testes estatísticos relevantes e coleta de dados suficiente para otimizar as campanhas com velocidade e consistência."
  },
  {
    question: "Existe fidelidade ou multa contratual?",
    answer: "Trabalhamos com contratos padrão de 6 ou 12 meses para garantir o ciclo de maturação das campanhas. No entanto, acreditamos na retenção pelo resultado. Oferecemos rescisão facilitada caso o alinhamento de expectativas não seja atendido nos primeiros 30 dias."
  },
  {
    question: "Para quais tipos de negócio a ScaleAds é indicada?",
    answer: "Somos especialistas em E-commerce (Moda, Suplementos, Casa), SaaS B2B e Infoprodutos High-Ticket. Focamos em negócios que já possuem produto validado e buscam escala. Não atendemos dropshipping iniciante ou afiliados."
  },
  {
    question: "Como funciona o relatório de resultados?",
    answer: "Você terá acesso a um Dashboard em Tempo Real (Looker Studio) disponível 24/7. Além disso, realizamos reuniões mensais de fechamento para apresentar insights qualitativos e definir o plano de ação do próximo ciclo."
  },
  {
    question: "Quanto tempo leva para ver resultados?",
    answer: "O tráfego pago não é mágica, é processo. Geralmente, o primeiro mês é focado em setup e coleta de dados. A partir do segundo mês, começamos a ver a maturação das campanhas, com estabilidade e escala previstos para o terceiro mês em diante."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-stone-950 relative border-t border-stone-200 dark:border-stone-900 transition-colors duration-500">
       {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -transtone-x-1/2 -transtone-y-1/2 w-[500px] h-[500px] bg-orange-100 dark:bg-orange-900/10 rounded-full blur-[100px] -z-10 pointer-events-none transition-colors" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 shadow-lg dark:shadow-xl transition-colors">
             <HelpCircle className="w-6 h-6 text-orange-500 dark:text-orange-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4 transition-colors">
            Perguntas Frequentes
          </h2>
          <p className="text-stone-600 dark:text-stone-400 transition-colors">
            Tire suas dúvidas sobre nosso modelo de trabalho antes de agendar sua análise.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div 
              key={index}
              className={`group bg-stone-50 dark:bg-white/[0.02] backdrop-blur-sm border rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-orange-500/30 bg-white dark:bg-white/[0.04] shadow-lg shadow-stone-200/50 dark:shadow-black/20' : 'border-stone-200 dark:border-white/5 hover:border-stone-300 dark:hover:border-white/10'}`}
            >
              <button
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => toggleAccordion(index)}
              >
                <span className={`text-lg font-medium transition-colors duration-300 pr-8 ${openIndex === index ? 'text-stone-900 dark:text-white' : 'text-stone-600 dark:text-stone-300 group-hover:text-stone-900 dark:group-hover:text-white'}`}>
                  {item.question}
                </span>
                <ChevronDown 
                  className={`w-5 h-5 text-stone-400 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-orange-500 dark:text-orange-400' : ''}`} 
                />
              </button>
              
              <div 
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                  openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-stone-600 dark:text-stone-400 leading-relaxed border-t border-stone-200 dark:border-white/5 mt-2 transition-colors">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};