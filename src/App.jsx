import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Credibility from './components/Credibility';
import Services from './components/Services';
import Process from './components/Process';
import WorkPreview from './components/WorkPreview';

import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-off-white text-black font-sans selection:bg-electric-orange selection:text-black">
      <Navigation />
      <main>
        <Hero />
        <Credibility />
        <Services />
        <Process />
        <WorkPreview />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
