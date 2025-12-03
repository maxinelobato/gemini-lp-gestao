import React from 'react';
import { Search, Share2, MousePointerClick, BarChart4, Check } from 'lucide-react';
import { Button } from './Button';
import { FadeIn } from './FadeIn';

const services = [
  {
    icon: Search,
    title: "Google Ads & YouTube",
    description: "Capturamos a demanda de quem já está procurando pelo seu produto. Estratégias avançadas de Search, Shopping e PMax para maximizar o ROAS.",
    features: ["Rede de Pesquisa & Shopping", "Campanhas de YouTube", "Performance Max (PMax)", "Defesa de Marca & Concorrentes"]
  },
  {
    icon: Share2,
    title: "Meta Ads (Facebook & Instagram)",
    description: "Geramos demanda e escala através de criativos de alto impacto. Segmentação precisa e remarketing estratégico para recuperar vendas perdidas.",
    features: ["Escala Horizontal & Vertical", "Testes de Criativos (A/B)", "Remarketing Dinâmico (DPA)", "Estrutura de Funnel Completo"]
  },
  {
    icon: MousePointerClick,
    title: "CRO & Landing Pages",
    description: "Tráfego caro em página ruim é dinheiro jogado fora. Analisamos e otimizamos a experiência do usuário para aumentar a taxa de conversão.",
    features: ["Testes A/B de Headlines", "Otimização de Velocidade", "Análise de Heatmaps", "Copywriting de Conversão"]
  },
  {
    icon: BarChart4,
    title: "Data Analytics & Tracking",
    description: "O fim dos cookies de terceiros exige tracking robusto. Implementamos a infraestrutura necessária para você confiar nos dados que vê.",
    features: ["GTM Server-Side", "API de Conversões (CAPI)", "Dashboards em Looker Studio", "Modelos de Atribuição"]
  }
];

export const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-stone-100 dark:bg-stone-900 relative border-t border-stone-200 dark:border-stone-800 transition-colors duration-500">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(120,113,108,0.1) 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4 transition-colors">
              Um ecossistema completo de performance.
            </h2>
            <p className="text-stone-600 dark:text-stone-400 transition-colors">
              Não somos apenas "fazedores de anúncios". Atuamos em todas as pontas que influenciam o seu faturamento, do clique à venda.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div 
                className="group bg-white dark:bg-stone-950/50 backdrop-blur-sm border border-stone-200 dark:border-stone-800 rounded-3xl p-8 hover:border-stone-300 dark:hover:border-stone-600 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.03)] h-full"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-14 h-14 rounded-2xl bg-stone-50 dark:bg-stone-900 border border-stone-200 dark:border-stone-700 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 group-hover:border-orange-200 dark:group-hover:border-orange-500/20 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(99,102,241,0.2)]">
                    <service.icon className="w-7 h-7 text-stone-600 dark:text-stone-200 transition-all duration-300 animate-pulse-subtle group-hover:animate-none group-hover:text-orange-600 dark:group-hover:text-orange-400 group-hover:scale-125" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3 group-hover:text-orange-700 dark:group-hover:text-orange-100 transition-colors duration-300">{service.title}</h3>
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed mb-6 transition-colors">
                      {service.description}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <Check className="w-4 h-4 text-green-600 dark:text-green-500 shrink-0" />
                          <span className="text-sm text-stone-600 dark:text-stone-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center">
          <FadeIn delay={400}>
            <Button 
              variant="primary" 
              icon 
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Agendar Consultoria Estratégica
            </Button>
            <p className="mt-4 text-sm text-stone-500 dark:text-stone-500">
              Análise personalizada para o seu modelo de negócio.
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};