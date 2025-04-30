export interface Feature {
  title: string;
  points: string[];
}

export const features: Feature[] = [
  {
    title: 'Energy Community Management',
    points: [
      'Transparent accounting between members of an energy community',
      'Consumption and production tracking per user',
      'Role-based access and customizable permissions',
      'Automated billing, reporting, and administrative tools',
    ],
  },
  {
    title: 'Dynamic Market\nInteraction',
    points: [
      'Integration with electricity markets for real-time kWh pricing',
      'Automated transactions based on market fluctuations, user needs, and storage capacity',
      'Tools to optimize cost per kWh and increase profitability of excess energy sales',
    ],
  },

  {
    title: 'V2G & EV Charging Integration',
    points: [
      'Vehicle-to-Grid (V2G) compatibility to feed energy back into the grid or household',
      'Smart EV charging schedules aligned with market prices and grid needs',
      'Battery state optimization and usage analytics',
    ],
  },
  {
    title: 'Data Analytics, AI & Optimization',
    points: [
      'Advanced analytics dashboard for producers and users',
      'Predictive insights for production, usage, and financial outcomes',
      'Visualization tools for individual households, energy communities, and commercial producers',
    ],
  },
  {
    title: 'Smart Energy\nManagement',
    points: [
      'Real-time tracking of energy production and consumption',
      'AI-driven forecasting and load balancing',
      'Integration with home automation systems and IoT devices',
    ],
  },
];

export const featuresIntro = [
  {
    title: 'Smart Energy Control',
    description: 'Track your energy live. Let AI handle forecasts and automation',
  },
  {
    title: 'EV & V2G Ready',
    description: 'Charge at the best time. Share energy with your home or the grid',
  },
  {
    title: 'Clear Energy Insights',
    description: 'See your usage, trends, and savings at a glance',
  },
  {
    title: 'Live Market Integration',
    description: 'Buy cheap, sell smart — ANT adjusts with the market',
  },
  {
    title: 'Energy Community Tools',
    description: 'Easily share and manage energy with others, all in one place',
  },
];
