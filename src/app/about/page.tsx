import React from 'react';
import '../globals.css';
import { aboutUs, aboutUsIntro } from '../data/aboutUs';

export default function AboutPage() {
  return (
    <>
      <section
        id="about"
        className="bg-background mx-auto w-screen px-10 py-20 sm:px-6 md:py-24 lg:mt-20 lg:px-36 lg:py-24"
      >
        <div className="flex flex-row justify-center lg:w-1/2">
          <div className="flex flex-col md:flex-col lg:flex-row lg:items-center lg:gap-12 lg:pb-12">
            <div>
              {aboutUsIntro.map(({ title, description, points }, idx) => (
                <div key={idx} className="pb-10">
                  <h3 className="text-accent mb-2 text-2xl font-semibold">{title}</h3>
                  <p className="text-secondary text-base">{description}</p>
                  <ul className="text-secondary text-base">
                    {points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-12 lg:pb-12">
          {aboutUs.map(({ title, description, points }, idx) => (
            <div key={idx} className="pb-10">
              <h3 className="text-accent mb-2 text-2xl font-semibold">{title}</h3>
              {description && <p className="text-secondary mb-4 text-base">{description}</p>}
              {points.length > 0 && (
                <ul className="text-secondary list-none text-base">
                  {points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
