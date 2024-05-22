import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p>Ready for your next lesson?</p>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
