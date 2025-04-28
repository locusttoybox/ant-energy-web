import React from 'react';
import Image from 'next/image';
import AntEnergy from '../assets/ant-energy.png';

export default function Illustration() {
  return (
    <section id="ant-illustration" className="relative h-screen w-screen lg:py-24">
      <div className="relative h-full w-full">
        <Image src={AntEnergy.src} alt="ant" fill style={{ objectFit: 'contain' }} />
      </div>
    </section>
  );
}
