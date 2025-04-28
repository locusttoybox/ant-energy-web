import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LogoImage from '../assets/ant-logo.png';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <div className={`bg-secondary ${className}`}>
      <section id="footer-links" className="bg-secondary mx-auto h-full w-screen px-6 lg:px-24">
        <div className="align-center flex flex-col items-center pt-10">
          <Link href="/">
            <Image
              src={LogoImage.src}
              alt="ant-energy-logo"
              width={160}
              height={40}
              style={{ objectFit: 'contain' }}
            />
          </Link>

          <div className="mx-auto px-4 py-12 sm:px-6 lg:px-10">
            <ul className="flex flex-wrap justify-center gap-6 sm:gap-4 md:gap-10 lg:gap-10">
              <li>
                <a
                  href="/overview"
                  className="text-foreground hover:text-accent text-left text-base"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="/key-features"
                  className="text-foreground hover:text-accent text-left text-base"
                >
                  Key Features
                </a>
              </li>
              <li>
                <a
                  href="/target-users"
                  className="text-foreground hover:text-accent text-left text-base"
                >
                  Target Users
                </a>
              </li>
              <li>
                <a
                  href="/about-project"
                  className="text-foreground hover:text-accent text-left text-base"
                >
                  About Project
                </a>
              </li>
              <li>
                <a
                  href="/use-cases"
                  className="text-foreground hover:text-accent text-left text-base"
                >
                  Use Cases
                </a>
              </li>
              <li>
                <a href="/about" className="text-foreground hover:text-accent text-left text-base">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
