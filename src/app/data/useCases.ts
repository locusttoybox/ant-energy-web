export interface UseCase {
  title: string;
  description: string;
  image: string;
}

export const useCases: UseCase[] = [
  {
    title: 'Smart Household Optimization',
    description:
      ' A household with solar panels, an EV, and smart home devices (e.g., thermostats, appliances) uses ANT Energy to optimize energy flow—charging the car during low-price hours, selling excess solar back to the grid, and reducing electricity costs through automated decisions',
    image: '',
  },
  {
    title: 'Energy Sharing in Multi-User Buildings',
    description:
      'An apartment building where some residents have solar panels and others do not. ANT Energy manages transparent energy redistribution and billing, allowing solar producers to share and sell excess energy to their neighbors',
    image: '',
  },
  {
    title: 'Decentralized Solar Farm Management',
    description:
      ' A small solar park connected to a local energy community, feeding energy to multiple users. ANT provides precise data analytics, automated reporting, and real-time market interaction to maximize profitability and simplify administration',
    image: '',
  },
  {
    title: 'Grid Balancing with V2G Fleets',
    description:
      'A balancing operator uses ANT Energy to coordinate power input and output from multiple electric vehicles with V2G capability. The platform provides predictive models, automated dispatching, and seamless integration with grid systems',
    image: '',
  },
  {
    title: 'State-of-the-Art EV Charging Pilot in Latvia',
    description:
      'ANT Energy (Latvia) is piloting 7 contactless EV charging hubs with full V2G, enabling bidirectional energy flow, contactless access, dynamic pricing, and real-time grid balancing participation within energy communities.',
    image: '',
  },
];
