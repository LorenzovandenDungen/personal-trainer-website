import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero-image.jpg)' }}>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
          <div className="container mx-auto relative z-10 flex flex-col items-center justify-center text-white h-full text-center">
            <h1 className="text-6xl font-bold mb-6">FIGHT LIKE A CHAMPION</h1>
            <div className="flex space-x-8">
              <div className="flex flex-col items-center">
                <Image src="/crossfit-icon.png" alt="Cross Fit" width={50} height={50} />
                <p className="mt-2 text-lg">Cross Fit</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/weights-icon.png" alt="Weights" width={50} height={50} />
                <p className="mt-2 text-lg">Weights</p>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/exercises-icon.png" alt="Exercises" width={50} height={50} />
                <p className="mt-2 text-lg">Exercises</p>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/2">
              <Image src="/training-image.jpg" alt="Training" width={600} height={400} className="rounded-lg" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold mb-6">HOW WE GOT STARTED IN THIS BUSINESS</h2>
              <p className="text-lg leading-relaxed mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.</p>
              <a href="/signup" className="mt-4 inline-block bg-red-600 text-white text-lg px-6 py-3 rounded-full hover:bg-red-700 transition duration-300">Sign Up</a>
            </div>
          </div>
        </section>
        <section className="bg-black text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">READY FOR YOUR NEXT LESSON?</h2>
            <p className="text-lg mb-4">inbox@boxchampy</p>
            <div className="flex justify-center space-x-4">
              <a href="#"><img src="/linkedin-icon.png" alt="LinkedIn" className="h-8" /></a>
              <a href="#"><img src="/facebook-icon.png" alt="Facebook" className="h-8" /></a>
              <a href="#"><img src="/instagram-icon.png" alt="Instagram" className="h-8" /></a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
