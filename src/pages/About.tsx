import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="text-lg">Information about our company...</p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
