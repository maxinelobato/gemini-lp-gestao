import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Results } from './components/Results';
import { Methodology } from './components/Methodology';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';
import { Services } from './components/Services';
import { ScrollToTop } from './components/ScrollToTop';
import { Location } from './components/Location';
import { FAQ } from './components/FAQ';

function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 bg-stone-50 text-stone-900 dark:bg-stone-950 dark:text-stone-200 selection:bg-orange-200 selection:text-orange-900 dark:selection:bg-stone-700 dark:selection:text-white">
      <Header />
      <main>
        <Hero />
        <Methodology />
        <Results />
        {/* Adding a small divider text/section */}
        <section className="py-24 bg-stone-50 dark:bg-stone-950 text-center px-6 transition-colors duration-500">
          <div className="max-w-3xl mx-auto">
             <h3 className="text-2xl font-light text-stone-600 dark:text-stone-300 italic mb-6">
              "O segredo do tráfego não é achar o hack do momento, mas sim construir uma estrutura que sobreviva a qualquer atualização de algoritmo."
            </h3>
            <div className="w-16 h-1 bg-stone-200 dark:bg-stone-800 mx-auto rounded-full"></div>
          </div>
        </section>
        <Testimonials />
        <Services />
        <FAQ />
        <Contact />
        <Location />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;