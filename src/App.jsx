import React from 'react';
import Header from './components/Header';
import GlobalPrompt from './components/GlobalPrompt';
import CategoryPrompts from './components/CategoryPrompts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <GlobalPrompt />
      <CategoryPrompts />
      <Footer />
    </div>
  );
}

export default App;
