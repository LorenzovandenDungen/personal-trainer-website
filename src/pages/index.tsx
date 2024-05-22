import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-cover bg-center" style={{ backgroundImage: 'url(/path/to/your/hero-image.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-white p-24">
            <h1 className="text-5xl font-bold mb-4">FIGHT LIKE A CHAMPION</h1>
            <div className="flex space-x-4">
              <div className="flex flex-col items-center">
                <Image src="/path/to/crossfit-icon.png" alt="Cross Fit" width={50} height={50} />
                <p>Cross Fit</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/path/to/weights-icon.png" alt="Weights" width={50} height={50} />
                <p>Weights</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/path/to/exercises-icon.png" alt="Exercises" width={50} height={50} />
                <p>Exercises</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto p-4">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <Image src="/path/to/your/image.jpg" alt="Training" width={600} height={400} className="rounded" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold mb-4">HOW WE GOT STARTED IN THIS BUSINESS</h2>
              <p className="text-lg">Lorem ipsum dolor sit amet...</p>
              <a href="/signup" className="mt-4 inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Sign Up</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
