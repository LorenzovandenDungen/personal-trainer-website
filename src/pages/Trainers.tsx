import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TrainerList from '../components/TrainerList';

const Trainers: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <TrainerList />
      </main>
      <Footer />
    </div>
  );
};

export default Trainers;
