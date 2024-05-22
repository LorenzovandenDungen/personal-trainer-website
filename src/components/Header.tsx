import React from 'react';
import Image from 'next/image';

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">BOXCHAMPY</div>
        <nav className="flex space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/locations" className="hover:text-gray-400">Locations</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
        </nav>
        <a href="/signup" className="bg-red-600 px-4 py-2 rounded hover:bg-red-700">Sign Up</a>
      </div>
    </header>
  );
};

export default Header;
