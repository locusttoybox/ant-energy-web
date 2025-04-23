import React from 'react';
import '../globals.css';

export default function AboutProject() {
  return (
    <section id="about" className="container flex h-screen px-8">
      <div className="text-accent mb-6 flex-col py-10 text-4xl font-extrabold md:text-4xl">
        <h1>About Project</h1>
        <p className="text-accent mb-8 max-w-2xl pt-12 text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
          tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
          quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat.{' '}
        </p>
      </div>
    </section>
  );
}
