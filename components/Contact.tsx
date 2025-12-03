import React, { useState } from 'react';
import { Button } from './Button';
import { Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  if (formState === 'success') {
    return (
      <section id="contato" className="py-24 bg-stone-100 dark:bg-stone-900/50 flex items-center justify-center transition-colors duration-500">
        <div className="text-center max-w-lg px-6">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 transition-colors">
            <CheckCircle2 className="w-10 h-10 text-green-600 dark:text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-stone-900 dark:text-white mb-2 transition-colors">Solicitação Recebida</h3>
          <p className="text-stone-600 dark:text-stone-400 transition-colors">
            Nossa equipe analisará seus dados e entrará em contato em até 24 horas úteis para agendar sua reunião estratégica.
          </p>
          <button 
            onClick={() => setFormState('idle')}
            className="mt-8 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-white underline transition-colors"
          >
            Voltar ao formulário
          </button>
        </div>
      </section>
    );
  }

  const getInputClasses = (fieldName: string) => `
    w-full bg-white dark:bg-stone-950/50 border rounded-xl px-4 py-3 text-stone-900 dark:text-white placeholder-stone-400 dark:placeholder-stone-600 
    focus:outline-none transition-all duration-300
    ${focusedField === fieldName 
      ? 'border-orange-500 ring-2 ring-orange-500/20 -translate-y-1 shadow-lg shadow-orange-500/10' 
      : 'border-stone-200 dark:border-stone-700 hover:border-stone-300 dark:hover:border-stone-600'}
  `;

  return (
    <section id="contato" className="py-24 bg-white dark:bg-stone-950 relative overflow-hidden transition-colors duration-500">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-stone-200/50 dark:bg-stone-800/20 blur-[120px] rounded-full pointer-events-none transition-colors duration-500" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          
          <div className="lg:col-span-5">
            <div className="inline-block px-3 py-1 mb-6 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider transition-colors">
              Vagas Limitadas
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-stone-900 dark:text-white mb-6 leading-tight transition-colors">
              Pronto para escalar com <span className="text-orange-500 dark:text-orange-400">segurança</span>?
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400 mb-8 leading-relaxed transition-colors">
              Trabalhamos com um número restrito de parceiros para garantir a máxima atenção e qualidade na entrega. Preencha o formulário para aplicarmos uma pré-análise no seu negócio.
            </p>
            
            <div className="space-y-4">
              <div className="bg-stone-50 dark:bg-stone-900/50 p-4 rounded-2xl border border-stone-200 dark:border-white/5 flex items-start space-x-4 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-stone-700 dark:text-white" />
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white font-medium">Contato Direto</h4>
                  <p className="text-stone-500 dark:text-stone-400 text-sm">contato@scaleads.com.br</p>
                </div>
              </div>
              <div className="bg-stone-50 dark:bg-stone-900/50 p-4 rounded-2xl border border-stone-200 dark:border-white/5 flex items-start space-x-4 hover:bg-stone-100 dark:hover:bg-stone-900 transition-colors shadow-sm dark:shadow-none">
                <div className="w-10 h-10 rounded-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 text-stone-700 dark:text-white" />
                </div>
                <div>
                  <h4 className="text-stone-900 dark:text-white font-medium">Requisito Mínimo</h4>
                  <p className="text-stone-500 dark:text-stone-400 text-sm">Investimento mínimo recomendado: R$ 5.000/mês</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white dark:bg-white/[0.02] backdrop-blur-2xl border border-stone-200 dark:border-white/10 p-8 rounded-3xl shadow-2xl shadow-stone-200/50 dark:shadow-black/50 transition-all duration-500">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide ml-1">Nome</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Seu nome"
                    className={getInputClasses('name')}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide ml-1">Empresa</label>
                  <input 
                    required 
                    type="text" 
                    placeholder="Nome da empresa"
                    className={getInputClasses('company')}
                    onFocus={() => setFocusedField('company')}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide ml-1">E-mail Profissional</label>
                <input 
                  required 
                  type="email" 
                  placeholder="voce@suaempresa.com"
                  className={getInputClasses('email')}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide ml-1">Investimento Mensal Atual</label>
                <div className="relative">
                  <select 
                    className={`${getInputClasses('budget')} appearance-none cursor-pointer`}
                    onFocus={() => setFocusedField('budget')}
                    onBlur={() => setFocusedField(null)}
                  >
                    <option value="" disabled selected>Selecione uma opção</option>
                    <option value="zero">Ainda não invisto</option>
                    <option value="low">R$ 2.000 - R$ 5.000</option>
                    <option value="mid">R$ 5.000 - R$ 15.000</option>
                    <option value="high">R$ 15.000 - R$ 50.000</option>
                    <option value="enterprise">Acima de R$ 50.000</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide ml-1">Site / Instagram</label>
                <input 
                  type="text" 
                  placeholder="Para analisarmos antes da reunião"
                  className={getInputClasses('site')}
                  onFocus={() => setFocusedField('site')}
                  onBlur={() => setFocusedField(null)}
                />
              </div>

              <div className="pt-4">
                <Button 
                  variant="primary" 
                  className="w-full justify-center bg-orange-600 hover:bg-orange-700 text-white dark:bg-white dark:text-stone-950 shadow-lg dark:shadow-none hover:shadow-orange-500/20" 
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    'Solicitar Análise Gratuita'
                  )}
                </Button>
                <p className="text-center text-xs text-stone-500 mt-3">
                  Seus dados estão seguros. Não enviamos spam.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};