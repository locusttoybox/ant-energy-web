'use client';
import React from 'react';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

import '../globals.css';
import { useState } from 'react';
import { useCases } from '../data/useCases';

export default function UseCases() {
  const [index, setIndex] = useState(0);
  const visibleCards = 3;
  const totalCards = useCases.length;
  const maxIndex = totalCards - visibleCards;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section id="use-cases" className="bg-foreground mx-auto w-screen px-4 py-24 sm:px-6 lg:px-36">
      <div className="relative">
        {/* Arrows */}
        {index > 0 && (
          <button
            onClick={prev}
            className="bg-accent absolute top-1/2 left-0 z-10 -translate-y-1/2 rounded-full p-2 shadow-md"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        )}
        {index < maxIndex && (
          <button
            onClick={next}
            className="bg-accent absolute top-1/2 right-0 z-10 -translate-y-1/2 rounded-full p-2 shadow-md"
          >
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        )}

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(100 / visibleCards) * totalCards}%`, // container is wide enough for all cards
              transform: `translateX(-${(100 / totalCards) * index}%)`,
            }}
          >
            {useCases.map(({ title, description }, idx) => (
              <div
                key={idx}
                className="px-4"
                style={{
                  width: `${100 / totalCards}%`,
                  flexShrink: 0,
                }}
              >
                <div className="bg-secondary flex h-full flex-col justify-between gap-8 rounded-xl p-12 text-center shadow-md">
                  <h3 className="text-foreground mb-2 text-xl font-semibold">{title}</h3>
                  <p className="text-foreground flex-grow items-center text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
