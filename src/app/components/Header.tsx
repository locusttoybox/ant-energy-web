'use client';
import Link from 'next/link';
import '../globals.css';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import LogoImage from '../assets/ant-logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleClickOutside = (event: MouseEvent) => {
    // First check if click is on a navigation link
    const clickedLink = (event.target as HTMLElement).closest('a');

    if (clickedLink) {
      // If it's an in-page navigation link (starts with #)
      if (clickedLink.getAttribute('href')?.startsWith('#')) {
        // Close the menu
        setMenuOpen(false);

        // Handle in-page navigation
        const targetId = clickedLink.getAttribute('href')?.substring(1);
        if (targetId) {
          event.preventDefault();

          // Small delay to allow menu to close
          setTimeout(() => {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          }, 300);
        }
      }
      // Regular links (like About page) will work normally
      // Menu will close because of the navigation
      return;
    }

    // If not clicking on a link, use your original logic to close the menu
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header className="bg-secondary fixed top-0 left-0 z-50 w-full shadow-lg">
      <div className="mx-auto max-w-7xl px-4">
        <div className="my-6 flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src={LogoImage.src}
                width={160}
                height={40}
                alt="ant-energy-logo"
                className="color-white h-18 w-40 align-baseline"
              />
            </Link>
          </div>

          {/* Navigation for Large Screens */}
          <nav className="hidden space-x-8 lg:flex">
            <Link href="/#overview" className="hover:text-accent text-white">
              Overview
            </Link>
            <Link href="/#features" className="hover:text-accent text-white">
              Key Features
            </Link>
            <Link href="/#target-users" className="hover:text-accent text-white">
              Target Users
            </Link>
            <Link href="/#about-project" className="hover:text-accent text-white">
              About Project
            </Link>
            <Link href="/#use-cases" className="hover:text-accent text-white">
              Use Cases
            </Link>
            <Link href="/about" className="hover:text-accent text-white">
              About Us
            </Link>
          </nav>

          {/* Burger Menu for Small Screens */}
          <div className="md:flex lg:hidden">
            <button
              onClick={toggleMenu}
              className="hover:text-accent text-white focus:outline-none"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <span className="text-xl font-bold">X</span>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Slide-out Menu */}
      <div
        ref={menuRef}
        className={`bg-accent fixed top-0 right-0 z-50 h-full w-screen p-4 transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:hidden`}
      >
        <div className="container mx-auto mt-6 max-w-7xl px-2 lg:mt-7 lg:pr-[7.5rem]">
          <div className="mr-0 flex h-16 flex-col justify-start gap-10 align-top">
            <button
              onClick={toggleMenu}
              className="hover:text-secondary text-right text-3xl text-white focus:outline-none"
            >
              X
            </button>
          </div>
          <nav className="mt-8 flex flex-col gap-6">
            <Link href="#overview" className="hover:text-secondary text-2xl">
              Overview
            </Link>
            <Link href="#features" className="hover:text-secondary text-2xl">
              Key Features
            </Link>
            <Link href="#target-users" className="hover:text-secondary text-2xl">
              Target Users
            </Link>
            <Link href="#about-project" className="hover:text-secondary text-2xl">
              About Project
            </Link>
            <Link href="#use-cases" className="hover:text-secondary text-2xl">
              Use Cases
            </Link>
            <Link href="/about" className="hover:text-secondary text-2xl">
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
