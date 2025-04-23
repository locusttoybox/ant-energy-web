import React from 'react';
import Image from 'next/image';
import LogoImage from '../assets/ant-logo.png';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="bg-secondary fixed top-0 left-0 z-50 w-full opacity-90 shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-4 flex h-16 items-center justify-between">
          {' '}
          <Image
            src={LogoImage.src}
            width={160}
            height={40}
            alt="pc-group-logo"
            className="color-white h-18 w-40 align-baseline"
          ></Image>
          <nav className="space-x-6">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
