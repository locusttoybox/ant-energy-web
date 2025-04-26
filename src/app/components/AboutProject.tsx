import React from 'react';
import '../globals.css';
import { aboutProject, aboutProjectPoints } from '../data/aboutProject';

export default function AboutProject() {
  return (
    <section id="about-project" className="bg-foreground flex h-full w-screen px-10 py-20 lg:px-36">
      <div className="w-full">
        {/* Titles Section */}
        <div className="flex flex-col justify-between gap-8 sm:flex-row lg:pb-12">
          {aboutProject.map(({ title }, idx) => (
            <div key={idx} className="mb-10 flex-1 sm:mb-0">
              <h3 className="text-accent text-4xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-12 lg:flex-row">
          {/* Descriptions */}
          <div className="flex flex-col gap-8 lg:gap-24">
            {aboutProject.map(({ description }, idx) => (
              <div key={idx} className="w-full lg:w-1/2">
                <p className="text-secondary text-3xl">{description}</p>
              </div>
            ))}
          </div>

          {/* Points */}
          <div className="flex flex-col gap-6">
            {aboutProjectPoints.map(({ title, description }, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <h3 className="text-accent text-xl font-semibold">{title}</h3>
                <p className="text-secondary text-base">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
