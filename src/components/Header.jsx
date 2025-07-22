import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <img src="/logo1.png" alt="Logo" className="h-8" />
        <nav className="hidden md:block">
          <ul className="flex space-x-4 text-gray-600">
            <li><a href="#home" className="hover:text-gray-900">Accueil</a></li>
            <li><a href="#about" className="hover:text-gray-900">À propos</a></li>
            <li><a href="#contact" className="hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;