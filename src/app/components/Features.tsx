'use client';
import React from 'react';
import '../globals.css';

export default function Features() {
  return (
    <section
      id="features"
      className="scroll-offset bg-foreground mx-auto w-screen px-10 py-24 sm:px-6 lg:px-36"
    >
      <div className="flex flex-col lg:w-1/2">
        <div className="text-secondary pb-10 text-4xl font-extrabold md:text-4xl">
          <h1>Key Features</h1>
        </div>
        <div className="flex gap-20 lg:flex-row">
          {/* 1 feature */}
          <div>
            <h3 className="text-accent pb-8 text-3xl">Smart Energy Management </h3>
            <ul className="mb-10 flex list-none flex-col gap-3">
              <li className="text-secondary text-base">
                Real-time tracking of energy production and consumption
              </li>
              <li className="text-secondary text-base">
                AI-driven forecasting and load balancing{' '}
              </li>
              <li className="text-secondary text-base">
                Integration with home automation systems and IoT devices{' '}
              </li>
            </ul>
          </div>
          {/* 2 feature */}
          <div>
            <h3 className="text-accent pb-8 text-3xl">Smart Energy Management </h3>
            <ul className="mb-10 flex list-none flex-col gap-3">
              <li className="text-secondary text-base">
                Real-time tracking of energy production and consumption
              </li>
              <li className="text-secondary text-base">
                AI-driven forecasting and load balancing{' '}
              </li>
              <li className="text-secondary text-base">
                Integration with home automation systems and IoT devices{' '}
              </li>
            </ul>
          </div>
          {/* 3 feature */}
          <div>
            <h3 className="text-accent pb-8 text-3xl">Smart Energy Management </h3>
            <ul className="mb-10 flex list-none flex-col gap-3">
              <li className="text-secondary text-base">
                Real-time tracking of energy production and consumption
              </li>
              <li className="text-secondary text-base">
                AI-driven forecasting and load balancing{' '}
              </li>
              <li className="text-secondary text-base">
                Integration with home automation systems and IoT devices{' '}
              </li>
            </ul>
          </div>
          {/* 4 feature */}
          <div>
            <h3 className="text-accent pb-8 text-3xl">Smart Energy Management </h3>
            <ul className="mb-10 flex list-none flex-col gap-3">
              <li className="text-secondary text-base">
                Real-time tracking of energy production and consumption
              </li>
              <li className="text-secondary text-base">
                AI-driven forecasting and load balancing{' '}
              </li>
              <li className="text-secondary text-base">
                Integration with home automation systems and IoT devices{' '}
              </li>
            </ul>
          </div>
          {/* 5 feature */}
          <div>
            <h3 className="text-accent pb-8 text-3xl">Smart Energy Management </h3>
            <ul className="mb-10 flex list-none flex-col gap-3">
              <li className="text-secondary text-base">
                Real-time tracking of energy production and consumption
              </li>
              <li className="text-secondary text-base">
                AI-driven forecasting and load balancing{' '}
              </li>
              <li className="text-secondary text-base">
                Integration with home automation systems and IoT devices{' '}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
