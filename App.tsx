import React, { useState } from 'react';
import { PageName } from './types';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Introduction } from './pages/Introduction';
// @ts-ignore - Importing JSX component into TSX
import GalvanicCellSimulation from './pages/GalvanicCellSimulation';
// @ts-ignore - Importing JSX component into TSX
import RedoxStory from './pages/RedoxStory';
// @ts-ignore - Importing JSX component into TSX
import RedoxQuiz from './pages/RedoxQuiz';

// Placeholder components for other pages to avoid compilation errors
// These will be replaced as we build them one by one.
const PlaceholderPage: React.FC<{ name: string; onNavigate: any }> = ({ name, onNavigate }) => (
  <div className="max-w-4xl mx-auto p-8 text-center space-y-4">
    <h2 className="text-3xl font-bold text-slate-300">Coming Soon: {name}</h2>
    <p className="text-slate-500">This module is under construction.</p>
    <button 
      onClick={() => onNavigate('HOME')}
      className="px-6 py-2 bg-brand-100 text-brand-700 rounded-full hover:bg-brand-200"
    >
      Back to Home
    </button>
  </div>
);

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageName>('HOME');

  const handleNavigate = (page: PageName) => {
    // Scroll to top on navigation for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home onNavigate={handleNavigate} />;
      case 'INTRODUCTION':
        return <Introduction onNavigate={handleNavigate} />;
      case 'SIMULATION':
        return <GalvanicCellSimulation onNavigate={handleNavigate} />;
      case 'OXIDATION_NUMBER':
        return <RedoxStory onNavigate={handleNavigate} />;
      case 'BALANCING':
        return <PlaceholderPage name="Balancing Equations" onNavigate={handleNavigate} />;
      case 'QUIZ':
        return <RedoxQuiz onNavigate={handleNavigate} />;
      case 'AI_TUTOR':
        return <PlaceholderPage name="AI Tutor (Gemini)" onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-brand-50">
      <Header onNavigate={handleNavigate} currentPage={currentPage} />
      
      <main className="flex-grow w-full">
        {renderPage()}
      </main>
      
      {/* Footer is now handled by individual pages to allow specific requirements per page */}
    </div>
  );
};

export default App;