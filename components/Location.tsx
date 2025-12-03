import React from 'react';
import { MapPin, Navigation } from 'lucide-react';

export const Location: React.FC = () => {
  return (
    <section className="py-24 bg-stone-50 dark:bg-stone-950 relative border-t border-stone-200 dark:border-stone-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 text-orange-600 dark:text-orange-400 text-xs font-semibold uppercase tracking-wider mb-6 transition-colors">
              <MapPin className="w-3 h-3" />
              <span>Localização</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-stone-900 dark:text-white mb-6 transition-colors">
              Baseados em SP, <br />
              <span className="text-stone-500">conectados com o mundo.</span>
            </h2>
            <p className="text-stone-600 dark:text-stone-400 text-lg leading-relaxed mb-8 transition-colors">
              Nossa operação está situada no coração financeiro de São Paulo.
              Embora o digital não tenha fronteiras, nossa estrutura física está pronta para receber parceiros para alinhamentos estratégicos presenciais.
            </p>
            
            <div className="space-y-6">
               <div className="flex items-start space-x-4 p-4 rounded-2xl bg-white dark:bg-stone-900/50 border border-stone-200 dark:border-white/5 hover:border-stone-300 dark:hover:border-white/10 transition-colors shadow-sm dark:shadow-none">
                 <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center shrink-0 mt-1">
                   <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse ring-4 ring-green-500/20"></div>
                 </div>
                 <div>
                   <p className="text-stone-900 dark:text-white font-medium mb-1">ScaleAds Headquarters</p>
                   <p className="text-stone-500 text-sm leading-relaxed">
                     Av. Paulista, 1000 - Bela Vista<br />
                     São Paulo - SP, 01310-100
                   </p>
                 </div>
               </div>

               <button className="flex items-center space-x-2 text-orange-600 dark:text-orange-400 hover:text-orange-500 dark:hover:text-orange-300 transition-colors text-sm font-medium group">
                 <Navigation className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                 <span>Traçar rota no Waze/Maps</span>
               </button>
            </div>
          </div>

          {/* Map Container */}
          <div className="order-1 lg:order-2 relative w-full h-[450px] bg-stone-200 dark:bg-stone-900 rounded-3xl overflow-hidden border border-stone-200 dark:border-white/10 shadow-xl shadow-stone-200/50 dark:shadow-2xl group transition-colors duration-500">
            {/* Dark mode filter logic for Google Maps iframe handled via CSS class chaining */}
            <iframe 
              src="https://maps.google.com/maps?q=Av.+Paulista,+1000,+São+Paulo&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              title="Google Maps Location"
              className="group-hover:scale-105 transition-transform duration-700 dark:invert-[0.9] dark:grayscale-[1] dark:contrast-[1.2] dark:brightness-[0.9]"
            ></iframe>
            
            {/* Glass overlay for better integration */}
            <div className="absolute inset-0 ring-1 ring-inset ring-stone-900/5 dark:ring-white/10 rounded-3xl pointer-events-none"></div>
            
            {/* Gradient overlay to fade map into background at edges */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-50/20 dark:from-stone-950/20 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};