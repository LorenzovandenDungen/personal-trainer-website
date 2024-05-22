import React from 'react';
import Image from 'next/image';

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-6xl font-bold text-center mb-8">About Us</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-1/2">
          <Image src="/about-image.jpg" alt="About Us" width={600} height={400} className="rounded-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
          <p className="text-lg leading-relaxed mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
