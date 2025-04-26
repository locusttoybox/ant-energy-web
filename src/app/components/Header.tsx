'use client';
import Link from 'next/link';
import '../globals.css';
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
          <nav className="hidden space-x-6 md:flex">
            <a
              href="#overview"
              className="hover:text-accent"
              onClick={(e) => handleScroll(e, 'overview')}
            >
              Overview
            </a>
            <a
              href="#features"
              className="hover:text-accent"
              onClick={(e) => handleScroll(e, 'features')}
            >
              Key Features
            </a>
            <a
              href="#target-users"
              className="hover:text-accent"
              onClick={(e) => handleScroll(e, 'target-users')}
            >
              Target Users
            </a>

            <a
              href="#about-project"
              className="hover:text-accent"
              onClick={(e) => handleScroll(e, 'about-project')}
            >
              About Project
            </a>
            <a
              href="#use-cases"
              className="hover:text-accent"
              onClick={(e) => handleScroll(e, 'use-cases')}
            >
              Use Cases
            </a>
            <Link href="/about" className="hover:text-accent">
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
