import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">Welkom op de Personal Trainer Website</h2>
        <p className="text-lg">Dit is de startpagina van de website.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
