import React, { useEffect, useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  BarChart, Bar, Legend, LineChart, Line, ReferenceLine, Cell
} from 'recharts';
import { ArrowUpRight, TrendingUp, DollarSign, Target, Percent, CreditCard } from 'lucide-react';
import { FadeIn } from './FadeIn';

const roasData = [
  { month: 'Mês 1', roas: 3.2, revenue: 45000 },
  { month: 'Mês 2', roas: 4.1, revenue: 62000 },
  { month: 'Mês 3', roas: 4.8, revenue: 88000 },
  { month: 'Mês 4', roas: 5.5, revenue: 110000 },
  { month: 'Mês 5', roas: 6.2, revenue: 145000 },
  { month: 'Mês 6', roas: 7.1, revenue: 198000 },
];

const channelData = [
  { name: 'Google Search', leads: 420, cpa: 12 },
  { name: 'Google Shopping', leads: 380, cpa: 18 },
  { name: 'Meta Ads (Insta)', leads: 550, cpa: 15 },
  { name: 'Meta Ads (Face)', leads: 210, cpa: 22 },
];

const conversionData = [
  { month: 'Mês 1', rate: 1.2 },
  { month: 'Mês 2', rate: 1.5 },
  { month: 'Mês 3', rate: 2.1 },
  { month: 'Mês 4', rate: 2.8 },
  { month: 'Mês 5', rate: 3.2 },
  { month: 'Mês 6', rate: 3.8 },
];

const cacComparisonData = [
  { channel: 'Google Search', cac: 25 },
  { channel: 'YouTube Ads', cac: 32 },
  { channel: 'Facebook', cac: 38 },
  { channel: 'Instagram', cac: 45 },
  { channel: 'LinkedIn', cac: 85 },
];

// Helper to get colors based on theme
const useChartColors = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkTheme();
    // Use MutationObserver to watch for class changes on html
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return {
    grid: isDark ? '#1e293b' : '#e5e7eb',
    text: isDark ? '#94a3b8' : '#64748b',
    tooltipBg: isDark ? 'rgba(28, 25, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    tooltipBorder: isDark ? '#44403c' : '#e7e5e4',
    revenueFill: isDark ? '#f8fafc' : '#475569',
    lineStroke: isDark ? '#e2e8f0' : '#334155',
  };
};

const CustomTooltip = ({ active, payload, label }: any) => {
  const colors = useChartColors();
  
  if (active && payload && payload.length) {
    return (
      <div 
        className="backdrop-blur-xl p-4 rounded-xl shadow-2xl min-w-[160px] transition-colors duration-300"
        style={{ backgroundColor: colors.tooltipBg, borderColor: colors.tooltipBorder, borderWidth: 1 }}
      >
        <p className="text-xs uppercase tracking-wider mb-3 border-b pb-2 font-semibold" style={{ borderColor: colors.grid, color: colors.text }}>
          {label}
        </p>
        {payload.map((entry: any, index: number) => {
          let displayName = entry.name;
          let displayValue = entry.value;
          let prefix = '';
          let suffix = '';

          if (entry.dataKey === 'revenue') {
            displayName = 'Receita';
            prefix = 'R$ ';
            displayValue = entry.value.toLocaleString();
          } else if (entry.dataKey === 'leads') {
            displayName = 'Leads';
          } else if (entry.dataKey === 'cpa') {
             displayName = 'CPA';
             prefix = 'R$ ';
          } else if (entry.dataKey === 'rate') {
             displayName = 'Taxa Conv.';
             suffix = '%';
          } else if (entry.dataKey === 'cac') {
             displayName = 'CAC';
             prefix = 'R$ ';
          }

          return (
            <div key={index} className="flex items-center justify-between space-x-4 mb-2 last:mb-0">
              <div className="flex items-center space-x-2">
                <div 
                  className="w-2 h-2 rounded-full shadow-[0_0_8px_currentColor]" 
                  style={{ backgroundColor: entry.color, color: entry.color }}
                />
                <span className="text-sm font-medium" style={{ color: colors.text }}>
                  {displayName}
                </span>
              </div>
              <span className="font-bold text-sm tabular-nums" style={{ color: colors.text === '#94a3b8' ? '#fff' : '#0c0a09' }}>
                {prefix}{displayValue}{suffix}
              </span>
            </div>
          );
        })}
      </div>
    );
  }
  return null;
};

export const Results: React.FC = () => {
  const colors = useChartColors();

  return (
    <section id="resultados" className="py-24 relative bg-stone-100 dark:bg-stone-950/50 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-4 transition-colors">Números reais, sem inflação.</h2>
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl mx-auto transition-colors">
              Abaixo estão dados anonimizados de clientes que seguiram nosso processo de maturação de conta por 6 meses.
              Buscamos consistência no ROAS e redução progressiva do CPA.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Chart 1: Evolution Scale */}
          <FadeIn delay={100}>
            <div className="bg-white dark:bg-white/[0.02] backdrop-blur-md border border-stone-200 dark:border-white/5 rounded-3xl p-6 md:p-8 hover:border-stone-300 dark:hover:border-white/10 shadow-xl shadow-stone-200/50 dark:shadow-none transition-all duration-500 group h-full">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-1 group-hover:text-stone-600 dark:group-hover:text-stone-200 transition-colors">Escala de Faturamento</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">E-commerce de Moda (Ticket Médio R$ 350)</p>
                </div>
                <div className="flex items-center space-x-1 text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-400/10 px-3 py-1 rounded-full border border-green-200 dark:border-green-400/20">
                  <ArrowUpRight className="w-4 h-4" />
                  <span className="text-sm font-medium">+340%</span>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={roasData}>
                    <defs>
                      <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor={colors.revenueFill} stopOpacity={0.3}/>
                        <stop offset="95%" stopColor={colors.revenueFill} stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
                    <XAxis dataKey="month" stroke={colors.text} fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke={colors.text} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value/1000}k`} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(150,150,150,0.2)' }} />
                    <Area 
                      type="monotone" 
                      dataKey="revenue" 
                      stroke={colors.lineStroke} 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorRevenue)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-stone-100 dark:border-white/5 transition-colors">
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Investimento</p>
                  <p className="text-lg font-medium text-stone-900 dark:text-white">R$ 27.8k</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">Retorno</p>
                  <p className="text-lg font-medium text-stone-900 dark:text-white">R$ 198k</p>
                </div>
                <div>
                  <p className="text-xs text-stone-500 uppercase tracking-wider mb-1">ROAS Final</p>
                  <p className="text-lg font-medium text-green-600 dark:text-green-400">7.12</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Chart 2: Efficiency Distribution */}
          <FadeIn delay={200}>
            <div className="bg-white dark:bg-white/[0.02] backdrop-blur-md border border-stone-200 dark:border-white/5 rounded-3xl p-6 md:p-8 hover:border-stone-300 dark:hover:border-white/10 shadow-xl shadow-stone-200/50 dark:shadow-none transition-all duration-500 group h-full">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-1 group-hover:text-stone-600 dark:group-hover:text-stone-200 transition-colors">Eficiência por Canal</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">SaaS B2B (Ticket Médio R$ 1.200/ano)</p>
                </div>
                <div className="flex items-center space-x-1 text-stone-600 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 px-3 py-1 rounded-full border border-stone-200 dark:border-stone-700">
                  <TrendingUp className="w-4 h-4" />
                  <span className="text-sm font-medium">Estabilidade</span>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={channelData} layout="vertical" margin={{ left: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} horizontal={false} />
                    <XAxis type="number" hide />
                    <YAxis dataKey="name" type="category" stroke={colors.text} fontSize={11} width={100} tickLine={false} axisLine={false} />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(150,150,150,0.05)'}} />
                    <Bar dataKey="leads" name="Volume de Leads" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={20} />
                    <Bar dataKey="cpa" name="Custo por Aquisição (R$)" fill="#475569" radius={[0, 4, 4, 0]} barSize={20} />
                    <Legend wrapperStyle={{ paddingTop: '20px', color: colors.text }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-6 pt-6 border-t border-stone-100 dark:border-white/5 transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-stone-700 dark:text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900 dark:text-white">CPA Médio Otimizado</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">Queda de 22% em 90 dias</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center">
                    <Target className="w-5 h-5 text-stone-700 dark:text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900 dark:text-white">Leads Qualificados</p>
                    <p className="text-xs text-stone-500 dark:text-stone-400">1.560 gerados no trimestre</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Chart 3: Conversion Rate Over Time */}
          <FadeIn delay={300}>
            <div className="bg-white dark:bg-white/[0.02] backdrop-blur-md border border-stone-200 dark:border-white/5 rounded-3xl p-6 md:p-8 hover:border-stone-300 dark:hover:border-white/10 shadow-xl shadow-stone-200/50 dark:shadow-none transition-all duration-500 group h-full">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-1 group-hover:text-stone-600 dark:group-hover:text-stone-200 transition-colors">Otimização de Conversão (CRO)</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Evolução da Taxa de Conversão da LP</p>
                </div>
                <div className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-400/10 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-400/20">
                  <Percent className="w-4 h-4" />
                  <span className="text-sm font-medium">+216%</span>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={conversionData}>
                    <defs>
                      <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.5}/>
                        <stop offset="95%" stopColor="#60a5fa" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
                    <XAxis dataKey="month" stroke={colors.text} fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke={colors.text} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}%`} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(96,165,250,0.3)', strokeWidth: 2 }} />
                    <Line 
                      type="monotone" 
                      dataKey="rate" 
                      stroke="#60a5fa" 
                      strokeWidth={3}
                      dot={{ fill: colors.grid, stroke: '#60a5fa', strokeWidth: 2, r: 4 }}
                      activeDot={{ r: 6, fill: '#60a5fa', stroke: '#fff' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              
              <div className="mt-6 pt-6 border-t border-stone-100 dark:border-white/5 transition-colors">
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Através de testes A/B contínuos em headlines e otimização de carregamento, triplicamos a eficiência da página de destino sem aumentar o investimento em mídia.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Chart 4: CAC by Channel */}
          <FadeIn delay={400}>
            <div className="bg-white dark:bg-white/[0.02] backdrop-blur-md border border-stone-200 dark:border-white/5 rounded-3xl p-6 md:p-8 hover:border-stone-300 dark:hover:border-white/10 shadow-xl shadow-stone-200/50 dark:shadow-none transition-all duration-500 group h-full">
              <div className="flex items-start justify-between mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-stone-900 dark:text-white mb-1 group-hover:text-stone-600 dark:group-hover:text-stone-200 transition-colors">Custo por Cliente (CAC)</h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400">Comparativo de Aquisição por Canal</p>
                </div>
                <div className="flex items-center space-x-1 text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-400/10 px-3 py-1 rounded-full border border-orange-200 dark:border-orange-400/20">
                  <CreditCard className="w-4 h-4" />
                  <span className="text-sm font-medium">Benchmarking</span>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={cacComparisonData} margin={{ top: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke={colors.grid} vertical={false} />
                    <XAxis dataKey="channel" stroke={colors.text} fontSize={11} tickLine={false} axisLine={false} interval={0} />
                    <YAxis stroke={colors.text} fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `R$${value}`} />
                    <Tooltip content={<CustomTooltip />} cursor={{fill: 'rgba(150,150,150,0.05)'}} />
                    <ReferenceLine y={60} stroke={colors.text} strokeDasharray="3 3" label={{ position: 'right', value: 'Média Mercado', fill: colors.text, fontSize: 10 }} />
                    <Bar dataKey="cac" name="CAC (R$)" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={40}>
                      {cacComparisonData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.cac > 60 ? '#f87171' : '#6366f1'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 pt-6 border-t border-stone-100 dark:border-white/5 transition-colors">
                <p className="text-sm text-stone-600 dark:text-stone-400">
                  Identificamos que, embora o LinkedIn possua o CAC mais alto (acima da média), o LTV desses clientes é 4x maior, justificando o investimento.
                </p>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};