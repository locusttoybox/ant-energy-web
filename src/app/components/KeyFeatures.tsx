'use client';
import React, { useState, useEffect } from 'react';
import '../globals.css';
import Image from 'next/image';
import AppImage from '../assets/app-1.png';
import { features, featuresIntro } from '../data/features';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

export default function KeyFeatures() {
  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1); // Default to 1 card for small screens
  const totalCards = features.length;
  const maxIndex = totalCards - visibleCards;

  // Adjust visibleCards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3); // 3 cards for large screens (lg)
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2); // 2 cards for medium screens (md)
      } else {
        setVisibleCards(1); // 1 card for small screens (sm)
      }
    };

    updateVisibleCards(); // Set initial value
    window.addEventListener('resize', updateVisibleCards); // Listen for screen size changes
    return () => window.removeEventListener('resize', updateVisibleCards); // Cleanup listener
  }, []);

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section
      id="features"
      className="scroll-offset bg-foreground mx-auto w-screen px-10 pt-10 pb-20 sm:px-6 md:py-24 lg:px-36 lg:py-36 lg:pt-12 lg:pb-24"
    >
      {/* FeaturesIntro on the left and Image on the right */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
        {/* Image on top for small screens */}
        <div className="flex flex-1 justify-center pb-10 lg:order-2">
          <Image
            src={AppImage.src}
            alt="Key Features"
            width={500}
            height={500}
            className="bg-transparent"
          />
        </div>

        {/* FeaturesIntro on the left */}
        <div className="flex-1 lg:order-1">
          {featuresIntro.map(({ title, description }, idx) => (
            <div key={idx} className="pb-10">
              <h3 className="text-accent mb-2 text-2xl font-semibold">{title}</h3>
              <p className="text-secondary text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Responsive container */}
      <div className="relative flex flex-col gap-6 pt-10">
        {/* Small Screen Vertical Layout */}
        <div className="flex flex-col gap-6 sm:hidden">
          {features.map(({ title, points }) => (
            <div key={title} className="w-full">
              <div className="bg-secondary flex h-full flex-col justify-between gap-6 rounded-xl p-12 text-center align-top shadow-md">
                <h3 className="text-foreground mb-2 text-2xl font-semibold">{title}</h3>
                <div className="flex flex-grow flex-col items-start gap-3">
                  {points.map((point, idx) => (
                    <div
                      key={idx}
                      className="text-foreground flex min-h-[60px] items-center justify-center"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Medium/Large Screen Carousel Layout */}
        <div className="hidden sm:flex sm:flex-row">
          {/* Navigation Buttons */}
          {index > 0 && (
            <button
              onClick={prev}
              className="group bg-accent hover:bg-accent/90 absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full p-2 shadow-md transition-opacity"
            >
              <ArrowLeftIcon className="text-primary group-hover:text-primary/90 h-6 w-6" />
            </button>
          )}

          {index < maxIndex && (
            <button
              onClick={next}
              className="group bg-accent hover:bg-accent/90 absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full p-2 shadow-md transition-opacity"
            >
              <ArrowRightIcon className="text-primary group-hover:text-primary/90 h-6 w-6" />
            </button>
          )}

          {/* Carousel */}
          <div className="flex-1 overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                width: `${(100 / visibleCards) * totalCards}%`,
                transform: `translateX(-${(100 / totalCards) * index}%)`,
              }}
            >
              {features.map(({ title, points }) => (
                <div
                  key={title}
                  className="px-4 sm:px-3 md:px-3"
                  style={{
                    width: `${100 / totalCards}%`,
                    flexShrink: 0,
                  }}
                >
                  <div className="bg-secondary flex h-full flex-col justify-between gap-6 rounded-xl p-12 text-center align-top shadow-md">
                    <h3 className="text-foreground mb-2 text-2xl font-semibold whitespace-pre-wrap">
                      {title}
                    </h3>
                    {/* Points container with equal height items */}
                    <div className="flex flex-grow flex-col items-start gap-3">
                      {points.map((point, idx) => (
                        <div
                          key={idx}
                          className="text-foreground flex min-h-[60px] items-center justify-center"
                        >
                          {point}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
