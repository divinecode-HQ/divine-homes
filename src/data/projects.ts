import contemporaryMinimalistVillaConstruction from '../assets/images/optimized/contemporary-minimalist-villa-in-construction.png'
import contemporaryMinimalistVillaSideView from '../assets/images/optimized/contemporary-minimalist-villa-side-view.png'
import contemporaryMinimalistVilla from '../assets/images/optimized/contemporary-minimalist-villa.png'

import duplexMansion from '../assets/images/optimized/duplex-mansion.png'
import duplex from '../assets/images/optimized/duplex.jpg'
import modernDuplex from '../assets/images/optimized/modern-duplex.png'

import elevationModernVillaConstruction from '../assets/images/optimized/elevation-modern-villa-in-construction.png'
import elevationModernVillaSideView from '../assets/images/optimized/elevation-modern-villa-side-view.png'
import elevationModernVilla from '../assets/images/optimized/elevation-modern-villa.png'

import modernMinimalistMansionConstruction from '../assets/images/optimized/modern-minimalist-mansion-in-construction.png'
import modernMinimalistMansionSideView from '../assets/images/optimized/modern-minimalist-mansion-side-view.png'
import modernMinimalistMansion from '../assets/images/optimized/modern-minimalist-mansion.png'

export type Project = {
  id: string
  title: string
  description: string
  fullDescription?: string
  images: string[]
  category: string
  services: string[]
  location: string
  status: 'Completed' | 'Ongoing'
  price?: string
  downPayment?: string
  
  highlights?: {
    type?: string
    hoa?: string
    buildingYear?: number
    outside?: string
    garden?: string
    parking?: string
  }

  agent?: {
    name: string
    company: string
    photo: string
    license: string
    phone: string
  }

  localInfo?: {
    school?: string
    crime?: string
    noiseLevel?: 'Low' | 'Medium' | 'High'
    environment?: string
  }

  // NEW FIELDS
  duration?: string
  yearCompleted?: number

  metrics?: {
    beds?: number
    baths?: number
    size?: string
    kitchen?: number
    dining?: number
  }

  isMoreCard?: boolean
}

export const projects: Project[] = [
  {
    id: 'modern-villa-construction',
    title: 'Modern Villa Construction',
    description:
      'A contemporary villa project featuring clean architectural lines and premium exterior finishing.',
    fullDescription:
      'This villa project was executed from foundation to completion, focusing on structural strength, elegant design, and modern living standards.',
    images: [
      elevationModernVilla,
      elevationModernVillaSideView,
      elevationModernVillaConstruction,
    ],
    category: 'Building Construction',
    services: ['Construction', 'Roofing', 'Finishing'],
    location: 'Lagos, Nigeria',
    status: 'Completed',
    price: '$1,13,200',
    downPayment: '$20,216',
    highlights: {
      type: 'Townhomes',
      hoa: 'No HOA Fee',
      buildingYear: 2002,
      outside: 'City View',
      garden: 'Available',
      parking: 'Available',
    },
    agent: {
      name: 'Danial Doe',
      company: 'Exquisite Properties, LLC | Alabama',
      photo: '/src/assets/images/optimized/agent-placeholder.png',
      license: '#580573',
      phone: '+000 1234 123 123',
    },
    localInfo: {
      school: 'Excellent',
      crime: 'Low',
      noiseLevel: 'Medium',
      environment: 'Green',
    },
    duration: '6 months',
    yearCompleted: 2025,
    metrics: {
      beds: 5,
      baths: 4,
      size: '450 sqm',
      kitchen: 1,
      dining: 1,
    },
  },

  {
    id: 'minimalist-villa-renovation',
    title: 'Minimalist Villa Renovation',
    description:
      'A renovation project transforming an existing structure into a modern minimalist home.',
    fullDescription:
      'The renovation included structural adjustments, interior redesign, painting, and finishing to achieve a sleek minimalist aesthetic.',
    images: [
      contemporaryMinimalistVilla,
      contemporaryMinimalistVillaSideView,
      contemporaryMinimalistVillaConstruction,
    ],
    category: 'Renovation',
    services: ['Rewiring', 'Painting', 'Interior Finishing'],
    location: 'Abuja, Nigeria',
    status: 'Completed',
    price: '$98,500',
    downPayment: '$15,000',
    highlights: {
      type: 'Single Family',
      hoa: 'None',
      buildingYear: 2021,
      outside: 'Garden View',
      garden: 'Available',
      parking: 'Available',
    },
    agent: {
      name: 'Sarah Johnson',
      company: 'Premier Realty | Abuja',
      photo: '/src/assets/images/optimized/agent-placeholder.png',
      license: '#AB1234',
      phone: '+234 801 234 5678',
    },
    localInfo: {
      school: 'Good',
      crime: 'Very Low',
      noiseLevel: 'Low',
      environment: 'Quiet',
    },
    duration: '3 months',
    yearCompleted: 2024,
    metrics: {
      beds: 4,
      baths: 3,
      size: '320 sqm',
      kitchen: 1,
      dining: 1,
    },
  },

  {
    id: 'duplex-development',
    title: 'Modern Duplex Development',
    description:
      'A stylish duplex designed for functionality and modern family living.',
    fullDescription:
      'This duplex project combines durability with modern design, offering spacious interiors and a well-structured layout for comfort and efficiency.',
    images: [
      modernDuplex,
      duplexMansion,
      duplex,
    ],
    category: 'Residential Construction',
    services: ['Construction', 'Wiring', 'Roofing', 'Finishing'],
    location: 'Ibadan, Nigeria',
    status: 'Completed',
    price: '$85,000',
    downPayment: '$12,500',
    highlights: {
      type: 'Duplex',
      hoa: 'None',
      buildingYear: 2023,
      outside: 'Street View',
      garden: 'N/A',
      parking: 'Available',
    },
    agent: {
      name: 'Michael Chen',
      company: 'Metro Homes | Ibadan',
      photo: '/src/assets/images/optimized/agent-placeholder.png',
      license: '#IB9876',
      phone: '+234 902 345 6789',
    },
    localInfo: {
      school: 'Average',
      crime: 'Low',
      noiseLevel: 'Medium',
      environment: 'Urban',
    },
    duration: '5 months',
    yearCompleted: 2025,
    metrics: {
      beds: 4,
      baths: 4,
      size: '380 sqm',
      kitchen: 1,
      dining: 1,
    },
  },

  {
    id: 'minimalist-mansion-build',
    title: 'Minimalist Mansion Build',
    description:
      'A large-scale mansion project emphasizing simplicity, space, and luxury.',
    fullDescription:
      'This project focuses on delivering a premium residential mansion with high-end materials, spacious design, and modern minimalist aesthetics.',
    images: [
      modernMinimalistMansion,
      modernMinimalistMansionSideView,
      modernMinimalistMansionConstruction,
    ],
    category: 'Luxury Construction',
    services: ['Construction', 'Interior Finishing', 'Project Management'],
    location: 'Lekki, Nigeria',
    status: 'Ongoing',
    price: '$250,000',
    downPayment: '$50,000',
    highlights: {
      type: 'Luxury Mansion',
      hoa: 'Required',
      buildingYear: 2026,
      outside: 'Ocean View',
      garden: 'Planned',
      parking: '4 Spaces',
    },
    agent: {
      name: 'Victoria Azuka',
      company: 'Luxe Estates | Lekki',
      photo: '/src/assets/images/optimized/agent-placeholder.png',
      license: '#LK5566',
      phone: '+234 701 987 6543',
    },
    localInfo: {
      school: 'Excellent',
      crime: 'Very Low',
      noiseLevel: 'Low',
      environment: 'Private',
    },
    duration: '8 months (ongoing)',
    yearCompleted: 2026,
    metrics: {
      beds: 6,
      baths: 7,
      size: '650 sqm',
      kitchen: 2,
      dining: 2,
    },
  },

  {
    id: 'view-more',
    title: 'View More',
    description: 'Explore all our completed and ongoing projects.',
    images: [],
    category: '',
    services: [],
    location: '',
    status: 'Completed',
    isMoreCard: true,
  },
]
