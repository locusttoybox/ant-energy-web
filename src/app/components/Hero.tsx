'use client';
import React from 'react';
import '../globals.css';
import Button from './Button';
import HeroImage from '../assets/hero-image.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-screen overflow-hidden">
      {/* Background Image */}
      <Image src={HeroImage.src} alt="ant" layout="fill" objectFit="cover" className="z-0" />

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="mx-auto flex w-screen flex-col px-6 py-20 text-center sm:px-6 md:py-24 lg:w-4/6 lg:justify-center lg:px-36 lg:py-24">
          <h1 className="text-accent mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl">
            ANT Energy
          </h1>
          <p className="text-foreground mb-8 text-2xl font-normal md:text-2xl lg:text-5xl">
            Automated Network for Transmission. Inspired by nature, powered by innovation
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outlineBlack">Explore the Platform</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
