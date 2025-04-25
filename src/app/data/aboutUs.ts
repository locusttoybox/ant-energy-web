export interface AboutUs {
  title: string;

  points: string[];
}

export const aboutUs: AboutUs[] = [
  {
    title: 'What We Do',
    points: [
      'Smart Energy Management: Real-time monitoring, load forecasting, and dynamic usage planning',
      'EV Charging + V2G: Advanced infrastructure and tools to support vehicle-to-grid energy exchange',
      'Energy Community Accounting: Seamless financial and energy flow management among peers',
      'Market Synchronization: Tools to optimize energy prices and grid participation',
    ],
  },
  {
    title: 'Who We Serve',
    points: [
      'Green Energy Producers: Solar, wind, and battery plant operators seeking flexibility and new revenue streams',
      'Balancing Operators: Grid managers aiming to stabilize supply and demand through automation',
      'Private Households: Homeowners with or without solar panels, EVs, or smart home setups',
    ],
  },
];

export const aboutUsIntro = {
  title: 'About ANT Energy',
  description: `At ANT Energy, we are reshaping the future of energy through intelligent, decentralized networks. ANT stands for Automated Network for Transmission — a name inspired by the natural efficiency of ant colonies. Just like ants coordinate and manage resources seamlessly, our platform ensures energy flows smartly across homes, electric vehicles, batteries, and the grid.
We develop and deploy innovative technologies that enable energy producers, grid operators, and everyday households to participate in a flexible and data-driven energy ecosystem. Our mission is to unlock the full potential of green energy, empower local energy communities, and make every kilowatt count
`,
};
