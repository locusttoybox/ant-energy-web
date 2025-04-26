import '../globals.css';
import Button from './Button';
import HeroImage from '../assets/hero-image.jpeg';
import Image from 'next/image';
import React from 'react';

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
      <div className="absolute inset-0 z-10 mx-auto flex flex-col items-center justify-center px-6 text-center lg:flex-row lg:justify-center lg:text-left">
        <div className="lg:w-4/6">
          <h1 className="text-foreground mb-10 text-4xl font-extrabold md:text-5xl lg:text-6xl">
            ANT Energy Automated Network for Transmission Inspired by nature, powered by innovation.
          </h1>

          <div className="flex justify-center gap-4 lg:justify-start">
            <Button variant="outlineBlack">Explore the Platform</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
