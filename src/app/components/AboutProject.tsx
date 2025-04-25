import React from 'react';
import '../globals.css';

export default function AboutProject() {
  return (
    <section
      id="about"
      className="bg-foreground flex h-screen w-screen items-center px-10 py-24 lg:px-36"
    >
      <div className="mx-auto px-8 sm:px-6 lg:py-12">
        <div className="text-accent py-10 text-4xl font-extrabold md:text-4xl">
          <h1>Why ANT</h1>
        </div>
        <div className="flex flex-col gap-20 lg:flex-row">
          <div className="lg:w-1/2">
            <p className="text-secondary text-3xl">
              Inspired by Nature Like an ant colony, our platform is built for resilience,
              collaboration, and efficiency. Built for Flexibility From small households to
              large-scale solar farms—ANT scales with your needs. Future-Proof and Sustainable
              Accelerate your transition to a green, decentralized energy future
            </p>
          </div>
          <div className="flex flex-col gap-8 lg:w-1/2">
            {' '}
            <div className="pb-4">
              <p className="text-accent text-2xl font-extrabold">Data Security & Privacy</p>
              <p className="text-secondary text-base">
                Compliant with GDPR and energy sector standards
              </p>
            </div>
            <div className="pb-4">
              <p className="text-accent text-2xl font-extrabold">
                APIs for Third-Party Integration
              </p>
              <p className="text-secondary text-base">
                Open interfaces for connection with smart inverters, EV chargers, grid operators,
                and IoT devices
              </p>
            </div>
            <div className="pb-4">
              <p className="text-accent text-2xl font-extrabold">Cloud-Based Infrastructure:</p>
              <p className="text-secondary text-base">
                Secure, scalable, and accessible from any device
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
