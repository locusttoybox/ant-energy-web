'use client';
import React from 'react';
import '../globals.css';
import { useCases } from '../data/useCases';
import Image from 'next/image';
import HomeImage from '../assets/home-screen.png';

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="scroll-offset bg-foreground mx-auto w-screen px-10 py-20 sm:px-6 md:py-24 lg:px-36 lg:py-24"
    >
      <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:gap-12 lg:pb-12">
        <div className="flex justify-center pb-10 sm:order-1 lg:w-1/2 lg:pb-0">
          <Image
            src={HomeImage.src}
            alt="Target Users"
            width={350}
            height={350}
            className="rounded-[20px] bg-transparent"
            style={{ maxWidth: '100%', height: 'auto' }}
          ></Image>
        </div>
        <div className="flex flex-row justify-center lg:w-1/2">
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:gap-12 lg:pb-12">
            <div>
              {useCases.map(({ title, description }, idx) => (
                <div key={idx} className="pb-10">
                  <h3 className="text-accent mb-2 text-2xl font-semibold">{title}</h3>
                  <p className="text-secondary text-base">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
