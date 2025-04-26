import React from 'react';
import '../globals.css';
import { aboutProject, aboutProjectPoints } from '../data/aboutProject';

export default function AboutProject() {
  return (
    <section
      id="about-project"
      className="bg-foreground flex h-screen w-screen px-10 py-24 lg:px-36"
    >
      <div>
        <div className="flex">
          {aboutProject.map(({ title }, idx) => (
            <div key={idx} className="mb-10">
              <h3 className="text-accent text-4xl font-semibold">{title}</h3>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex lg:gap-24">
            {aboutProject.map(({ description }, idx) => (
              <div key={idx} className="pb-10 lg:w-1/2">
                <div>
                  <p className="text-secondary text-3xl">{description}</p>
                </div>
              </div>
            ))}
            <div className="flex flex-row gap-6">
              <div>
                {aboutProjectPoints.map(({ title, description }, idx) => (
                  <div key={idx} className="flex flex-col lg:w-1/2">
                    <div className="mb-2">
                      <h3 className="text-accent text-xl font-semibold">{title}</h3>
                    </div>

                    <div>
                      <p className="text-secondary text-base">{description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
