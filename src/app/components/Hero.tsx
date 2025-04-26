'use client';
import React from 'react';
import '../globals.css';
import Button from './Button';
import HeroImage from '../assets/hero-image.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen w-screen overflow-hidden"
      style={{ height: 'calc(100vh + 80px)' }}
    >
      {/* Background Image */}
      <Image src={HeroImage.src} alt="ant" layout="fill" objectFit="cover" className="z-0" />

      {/* Hero Content */}
      <div className="w-full">
        <div className="absolute inset-0 z-10 mx-auto flex w-screen flex-col items-center justify-center px-6 py-20 sm:px-6 md:py-24 lg:flex-row lg:justify-center lg:px-36 lg:py-24 lg:text-left">
          <div className="lg:flex-col-2 flex">
            <div className="lg:w-2/3">
              <h1 className="text-foreground mb-10 text-center text-4xl font-extrabold md:text-5xl lg:text-left lg:text-6xl">
                ANT Energy Automated Network for Transmission Inspired by nature, powered by
                innovation.
              </h1>

              <div className="flex justify-center gap-4 lg:justify-start">
                <Button variant="outlineBlack">Explore the Platform</Button>
              </div>
            </div>
            <div className="lg:w-1/3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
