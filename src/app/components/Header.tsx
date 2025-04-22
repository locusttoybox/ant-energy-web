import React from 'react';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="fixed top-0 right-0 left-0 z-10 flex h-[72px] items-center justify-between bg-white px-6 shadow-md">
      {' '}
      <div className="text-xl font-bold">Logo</div>
      <nav className="space-x-6">
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
