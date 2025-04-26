import React from 'react';
import Image from 'next/image';
import '../globals.css';
import TargetUserImage from '../assets/target-users.png';
import { targetUsers, targetUsersIntro } from '../data/targetUsers';

export default function TargetUsers() {
  return (
    <section
      id="target-users"
      className="bg-background mx-auto w-screen px-10 py-20 sm:px-6 md:py-24 lg:px-36 lg:py-24"
    >
      <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 lg:pb-12">
        <div>
          <div className="flex flex-1 justify-center pb-10">
            <Image
              src={TargetUserImage.src}
              alt="Target Users"
              width={500}
              height={500}
              className="rounded-[20px] bg-transparent"
              style={{ maxWidth: '100%', height: 'auto' }}
            ></Image>
          </div>
        </div>
        <div>
          {targetUsersIntro.map(({ title, description }, idx) => (
            <div key={idx} className="pb-10">
              <h3 className="text-accent mb-2 text-2xl font-semibold">{title}</h3>
              <p className="text-secondary text-base">{description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
        {targetUsers.map(({ title, description }, idx) => (
          <div
            key={idx}
            className="bg-secondary flex flex-col items-center justify-between rounded-xl p-12 text-center shadow-md"
          >
            <h3 className="text-foreground mb-2 text-xl font-semibold">{title}</h3>
            <p className="text-foreground text-base">{description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export async function getStaticProps() {
  const targetUsers = [
    { title: 'User 1', description: 'Description for User 1' },
    { title: 'User 2', description: 'Description for User 2' },
    { title: 'User 3', description: 'Description for User 3' },
  ];

  return {
    props: {
      targetUsers,
    },
  };
}
