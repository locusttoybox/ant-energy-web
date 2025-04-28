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
                <div key={idx} className="flex flex-col gap-10 pb-10">
                  <h3 className="text-accent text-4xl font-semibold">{title}</h3>

                  <p className="text-secondary text-3xl">{description}</p>

                  <ul className="text-secondary flex flex-col gap-4 text-2xl">
                    {points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-12 pb-12 lg:flex-nowrap lg:justify-start">
          {aboutUs.map(({ title, description, points }, idx) => (
            <div key={idx} className="flex w-full flex-col gap-2 pb-10 lg:w-1/3">
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
