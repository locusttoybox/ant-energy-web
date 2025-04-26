import React from 'react';
import '../globals.css';
import { overview } from '../data/overview';

export default function Overview() {
  return (
    <section
      id="overview"
      className="bg-background mx-auto w-screen px-10 py-24 sm:px-6 md:px-12 lg:px-46 lg:py-36"
    >
      <div className="text-secondary justify-center text-center text-lg md:text-2xl lg:text-3xl">
        <p>
          {/* Replace "ANT Energy" with a styled span */}
          {overview[0].description.split('ANT Energy').map((text, index, arr) => (
            <React.Fragment key={index}>
              {text}
              {index < arr.length - 1 && <span className="text-accent font-bold">ANT Energy</span>}
            </React.Fragment>
          ))}
        </p>
      </div>
    </section>
  );
}
