import '../globals.css';
import Button from './Button';
import AntImage from '../assets/ants.jpg';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-screen w-screen">
      <Image src={AntImage.src} alt="ant" layout="fill" objectFit="cover" className="z-0"></Image>{' '}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <div className="px-8 lg:w-1/2 lg:px-0">
          <h1 className="text-accent mb-6 px-6 text-4xl font-extrabold md:text-6xl">
            Lorem ipsum dolor sit amet, consectetuer{' '}
          </h1>
          <p className="text-secondary mb-8 max-w-2xl text-lg md:text-xl">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh{' '}
          </p>
          <Button variant="outlineBlack">Pieteikties</Button>
        </div>
      </div>
    </section>
  );
}
