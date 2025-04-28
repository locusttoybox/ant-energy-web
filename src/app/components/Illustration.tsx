import React from 'react';
import Image from 'next/image';
import AntEnergy from '../assets/ant-energy.png';

export default function Illustration() {
  return (
    <section
      id="ant-illustration"
      className="relative w-full py-12 lg:h-screen lg:w-screen lg:py-24"
    >
      <div className="relative w-full sm:w-auto">
        <Image
          src={AntEnergy.src}
          alt="ant"
          className="mx-auto"
          style={{ objectFit: 'contain' }}
          sizes="(max-width: 640px) 100vw, 50vw"
          width={800}
          height={600}
        />
      </div>
    </section>
  );
}
