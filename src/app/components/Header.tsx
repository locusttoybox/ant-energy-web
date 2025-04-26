'use client';
import Link from 'next/link';
import '../globals.css';
import React from 'react';
import Image from 'next/image';
import LogoImage from '../assets/ant-logo.png';

const Header: React.FC = () => {
  console.log('Header rendered');
  return (
    <header className="bg-secondary fixed top-0 left-0 z-50 w-full shadow-lg">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="my-4 flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              src={LogoImage.src}
              width={160}
              height={40}
              alt="ant-energy-logo"
              className="color-white h-18 w-40 align-baseline"
            />
          </Link>

          <nav className="hidden space-x-6 md:flex">
            <Link href="/#overview" className="hover:text-accent">
              Overview
            </Link>
            <Link href="/#features" className="hover:text-accent">
              Key Features
            </Link>
            <Link href="/#target-users" className="hover:text-accent">
              Target Users
            </Link>
            <Link href="/#about-project" className="hover:text-accent">
              About Project
            </Link>
            <Link href="/#use-cases" className="hover:text-accent">
              Use Cases
            </Link>
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
