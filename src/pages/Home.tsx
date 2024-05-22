import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Welkom op de Personal Trainer Website</h2>
        <p>Dit is de startpagina van de website.</p>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
