'use client';
import React from 'react';
import Image from 'next/image';
import LogoImage from '../assets/ant-logo.png';

interface HeaderProps {
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-secondary fixed top-0 left-0 z-50 w-full shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-4 flex h-16 items-center justify-between">
          <a href="#hero" onClick={(e) => handleScroll(e, 'hero')}>
            <Image
              src={LogoImage.src}
              width={160}
              height={40}
              alt="ant-energy-logo"
              className="color-white h-18 w-40 align-baseline"
            ></Image>
          </a>
          <nav className="space-x-6">
            <a href="#overview" onClick={(e) => handleScroll(e, 'overview')}>
              Overview
            </a>
            <a href="#features" onClick={(e) => handleScroll(e, 'features')}>
              Key Features
            </a>
            <a href="#target-users" onClick={(e) => handleScroll(e, 'target-users')}>
              Target Users
            </a>

            <a href="#about-project" onClick={(e) => handleScroll(e, 'about-project')}>
              About Project
            </a>
            <a href="#use-cases" onClick={(e) => handleScroll(e, 'use-cases')}>
              Use Cases
            </a>
            <a href="#about-us" onClick={(e) => handleScroll(e, 'about-us')}>
              About Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
