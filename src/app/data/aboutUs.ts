export interface AboutUs {
  title: string;
  description?: string;
  points: string[];
}

export const aboutUs: AboutUs[] = [
  {
    title: 'Who We Are',
    points: [
      'Green Energy Producers: Solar, wind, and battery plant operators seeking flexibility and new revenue streams',
      'Balancing Operators: Grid managers aiming to stabilize supply and demand through automation',
      'Private Households: Homeowners with or without solar panels, EVs, or smart home setups',
    ],
  },
  {
    title: 'Our Impact',
    description:
      'ANT Energy is currently piloting state-of-the-art contactless EV charging stations with V2G integration at 7 locations in Latvia. Our ecosystem connects physical infrastructure with digital intelligence — creating a responsive, scalable, and user-centered model for the energy transition',
    points: [],
  },
  {
    title: 'Our Vision',
    description:
      'We envision a world where energy is no longer centralized, wasteful, or passive. Instead, it becomes collaborative, localized, and optimized — powered by data, connected devices, and communities. Let us build the future of energy. Together',
    points: [],
  },
];

export const aboutUsIntro = [
  {
    title: 'About ANT Energy',
    description: 'At ANT Energy, we are reshaping the future of energy...',
    points: [
      'Smart Energy Management: Real-time monitoring, load forecasting, and dynamic usage planning',
      'EV Charging + V2G: Advanced infrastructure and tools to support vehicle-to-grid energy exchange',
      'Energy Community Accounting: Seamless financial and energy flow management among peers',
      'Market Synchronization: Tools to optimize energy prices and grid participation',
    ],
  },
];
