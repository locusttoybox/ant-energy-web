import React from 'react';
import '../globals.css';
import Image from 'next/image';
import AppImage1 from '../assets/ant-app-1.png';
import AppImage2 from '../assets/ant-app-2.png';
import AppImage3 from '../assets/ant-app-3.png';
import AppImage4 from '../assets/ant-app-4.png';

export default function FeaturesTest() {
  return (
    <section id="featuresTest" className="bg-foreground mx-auto px-10 py-24 sm:px-6 lg:px-36">
      <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-3">
        <div className="text-secondary flex flex-col justify-center pb-10 text-4xl font-extrabold md:text-4xl">
          <h1>Key Features</h1>
        </div>
        {/* 1 feature */}
        <div className="shadow-subtle border-accent mb-10 justify-center rounded-4xl border-4">
          <div className="flex flex-col sm:flex-col lg:flex-col">
            <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
              <h3 className="text-secondary py-12 text-3xl">Smart Energy Management </h3>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li className="text-secondary text-base">
                  Real-time tracking of energy production and consumption
                </li>
                <li className="text-secondary text-base">
                  AI-driven forecasting and load balancing{' '}
                </li>
                <li className="text-secondary text-base">
                  Integration with home automation systems and IoT devices{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2 feature */}
        <div className="shadow-subtle border-accent mb-10 justify-center rounded-4xl border-4">
          <div className="flex flex-col sm:flex-col lg:flex-col">
            <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
              {' '}
              <h3 className="text-secondary py-12 text-3xl"> V2G & EV Charging Integration</h3>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li className="text-secondary text-base">
                  Vehicle-to-Grid (V2G) compatibility to feed energy back into the grid or
                  household{' '}
                </li>
                <li className="text-secondary text-base">
                  Smart EV charging schedules aligned with market prices and grid needs{' '}
                </li>
                <li className="text-secondary text-base">
                  Battery state optimization and usage analytics{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid items-stretch gap-10 sm:grid-cols-1 lg:grid-cols-3">
        {/* 3 feature */}
        <div className="shadow-subtle border-accent rounded-4xl border-4">
          <div className="flex flex-col sm:flex-col lg:flex-col">
            <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
              <h3 className="text-secondary py-12 text-3xl">Data Analytics & Optimization</h3>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li className="text-secondary text-base">
                  Advanced analytics dashboard for producers and users{' '}
                </li>
                <li className="text-secondary text-base">
                  Predictive insights for production, usage, and financial outcomes{' '}
                </li>
                <li className="text-secondary text-base">
                  Visualization tools for individual households, energy communities, and commercial
                  producers{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 4 feature */}
        <div className="shadow-subtle border-accent rounded-4xl border-4">
          <div className="flex flex-col sm:flex-col lg:flex-col">
            <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
              <h3 className="text-secondary py-12 text-3xl">Dynamic Market Interaction</h3>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li className="text-secondary text-base">
                  Integration with electricity markets for real-time kWh pricing{' '}
                </li>
                <li className="text-secondary text-base">
                  Automated transactions based on market fluctuations, user needs, and storage
                  capacity{' '}
                </li>
                <li className="text-secondary text-base">
                  Tools to optimize cost per kWh and increase profitability of excess energy sales
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 5 feature */}{' '}
        <div className="shadow-subtle border-accent rounded-4xl border-4">
          <div className="bg-background flex items-center justify-center rounded-t-[20px] sm:rounded-t-[20px] sm:rounded-b-none lg:rounded-t-[20px] lg:rounded-tr-[20px]">
            {' '}
            <div className="flex flex-row justify-center gap-10"></div>
          </div>
          <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
            {' '}
            <h3 className="text-secondary py-12 text-3xl">Energy Community Management</h3>
            <ul className="mb-10 flex list-none flex-col gap-6">
              <li className="text-secondary text-base">
                Transparent accounting between members of an energy community
              </li>
              <li className="text-secondary text-base">
                Consumption and production tracking per user
              </li>
              <li className="text-secondary text-base">
                Role-based access and customization permissions
              </li>
              <li className="text-secondary text-base">
                Automated billing, reporting, and administrative tools
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-10 pt-12 lg:flex-nowrap lg:pt-24">
        <div className="w-[calc(100%/4)] max-w-[300px]">
          <Image
            src={AppImage1.src}
            alt="ant"
            objectFit="cover"
            layout="responsive"
            width={300}
            height={300}
            className="h-auto w-full"
          />
        </div>
        <div className="w-[calc(100%/4)] max-w-[300px]">
          <Image
            src={AppImage2.src}
            alt="ant"
            objectFit="cover"
            layout="responsive"
            width={300}
            height={300}
            className="h-auto w-full"
          />
        </div>
        <div className="w-[calc(100%/4)] max-w-[300px]">
          <Image
            src={AppImage3.src}
            alt="ant"
            objectFit="cover"
            layout="responsive"
            width={300}
            height={300}
            className="h-auto w-full"
          />
        </div>
        <div className="w-[calc(100%/4)] max-w-[300px]">
          <Image
            src={AppImage4.src}
            alt="ant"
            objectFit="cover"
            layout="responsive"
            width={300}
            height={300}
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
