import React from 'react';
import Link from 'next/link';
import SmartEnergy from '../assets/smart-energy.png';
import '../globals.css';

export default function Features() {
  return (
    <section id="features" className="bg-secondary mx-auto px-8 sm:px-6 lg:px-36 lg:py-12">
      <div className="text-background mb-6 flex items-center py-10 text-4xl font-extrabold md:text-4xl">
        <h1>Key Features</h1>
      </div>
      {/* 1 feature */}
      <div className="grid items-stretch gap-10 sm:grid-cols-1 lg:grid-cols-3">
        <div className="shadow-subtle mb-10 justify-center rounded-4xl border-4 border-[#fff] text-black">
          <div className="flex flex-col sm:flex-col lg:flex-col">
            <div className="bg-background flex items-center justify-center rounded-t-[20px] text-black sm:rounded-t-[20px] sm:rounded-b-none lg:rounded-t-[20px] lg:rounded-tr-[20px]">
              {' '}
              <div className="flex flex-row justify-center gap-10">
                <Link href="/" className="flex items-center justify-center p-10">
                  <img src={SmartEnergy.src} alt="smart-energy-managment"></img>
                </Link>
              </div>
            </div>
            <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
              {' '}
              <h3 className="text-background py-12 text-3xl">Smart Energy Management </h3>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li className="text-background text-base">
                  Real-time tracking of energy production and consumption
                </li>
                <li className="text-background text-base">
                  AI-driven forecasting and load balancing{' '}
                </li>
                <li className="text-background text-base">
                  Integration with home automation systems and IoT devices{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 2 feature */}
        <div className="shadow-subtle mb-10 justify-center rounded-4xl border-4 border-[#fff] text-black">
          <div className="flex flex-col sm:flex-col lg:flex-col">
            <div className="bg-background flex items-center justify-center rounded-t-[20px] text-black sm:rounded-t-[20px] sm:rounded-b-none lg:rounded-t-[20px] lg:rounded-tr-[20px]">
              {' '}
              <div className="flex flex-row justify-center gap-10">
                <Link href="/" className="flex items-center justify-center p-10">
                  <img src={SmartEnergy.src} alt="smart-energy-managment"></img>
                </Link>
              </div>
            </div>
            <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
              {' '}
              <h3 className="text-background py-12 text-3xl"> V2G & EV Charging Integration</h3>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li className="text-background text-base">
                  Vehicle-to-Grid (V2G) compatibility to feed energy back into the grid or
                  household{' '}
                </li>
                <li className="text-background text-base">
                  Smart EV charging schedules aligned with market prices and grid needs{' '}
                </li>
                <li className="text-background text-base">
                  Battery state optimization and usage analytics{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 3 feature */}
        <div className="shadow-subtle mb-10 justify-center rounded-4xl border-4 border-[#fff] text-black">
          <div className="flex flex-col sm:flex-col lg:flex-col">
            <div className="bg-background flex items-center justify-center rounded-t-[20px] text-black sm:rounded-t-[20px] sm:rounded-b-none lg:rounded-t-[20px] lg:rounded-tr-[20px]">
              {' '}
              <div className="flex flex-row justify-center gap-10">
                <Link href="/" className="flex items-center justify-center p-10">
                  <img src={SmartEnergy.src} alt="smart-energy-managment"></img>
                </Link>
              </div>
            </div>
            <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
              {' '}
              <h3 className="text-background py-12 text-3xl">Data Analytics & Optimization</h3>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li className="text-background text-base">
                  Advanced analytics dashboard for producers and users{' '}
                </li>
                <li className="text-background text-base">
                  Predictive insights for production, usage, and financial outcomes{' '}
                </li>
                <li className="text-background text-base">
                  Visualization tools for individual households, energy communities, and commercial
                  producers{' '}
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 4 feature */}
        <div className="shadow-subtle rounded-4xl border-4 border-[#fff] text-black lg:col-span-1 lg:col-start-1">
          <div className="flex flex-col sm:flex-col lg:flex-col">
            <div className="bg-background flex items-center justify-center rounded-t-[20px] text-black sm:rounded-t-[20px] sm:rounded-b-none lg:rounded-t-[20px] lg:rounded-tr-[20px]">
              {' '}
              <div className="flex flex-row justify-center gap-10">
                <Link href="/" className="flex items-center justify-center p-10">
                  <img src={SmartEnergy.src} alt="smart-energy-managment"></img>
                </Link>
              </div>
            </div>
            <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
              {' '}
              <h3 className="text-background py-12 text-3xl">Dynamic Market Interaction</h3>
              <ul className="mb-10 flex list-none flex-col gap-6">
                <li className="text-background text-base">
                  Integration with electricity markets for real-time kWh pricing{' '}
                </li>
                <li className="text-background text-base">
                  Automated transactions based on market fluctuations, user needs, and storage
                  capacity{' '}
                </li>
                <li className="text-background text-base">
                  Tools to optimize cost per kWh and increase profitability of excess energy sales
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* 5 feature */}{' '}
        <div className="shadow-subtle rounded-4xl border-4 border-[#fff] text-black lg:col-span-1 lg:col-start-2">
          <div className="bg-background flex items-center justify-center rounded-t-[20px] text-black sm:rounded-t-[20px] sm:rounded-b-none lg:rounded-t-[20px] lg:rounded-tr-[20px]">
            {' '}
            <div className="flex flex-row justify-center gap-10">
              <Link href="/" className="flex items-center justify-center p-10">
                <img src={SmartEnergy.src} alt="smart-energy-managment"></img>
              </Link>
            </div>
          </div>
          <div className="lg:rounded-r-4 flex flex-col justify-center px-6 text-center">
            {' '}
            <h3 className="text-background py-12 text-3xl">Energy Community Management</h3>
            <ul className="mb-10 flex list-none flex-col gap-6">
              <li className="text-background text-base">
                Transparent accounting between members of an energy community
              </li>
              <li className="text-background text-base">
                Consumption and production tracking per user
              </li>
              <li className="text-background text-base">
                Role-based access and customization permissions
              </li>
              <li className="text-background text-base">
                Automated billing, reporting, and administrative tools
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
