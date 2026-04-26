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

  // NEW CLEAN FIELDS
  duration?: string
  yearCompleted?: number

  metrics?: {
    bedrooms?: number
    rooms?: number
    kitchens?: number
    size?: string
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
      'Executed from foundation to completion with a focus on durability, aesthetics, and modern living.',
    images: [
      elevationModernVilla,
      elevationModernVillaSideView,
      elevationModernVillaConstruction,
    ],
    category: 'Building Construction',
    services: ['Foundation', 'Roofing', 'Finishing'],
    location: 'Lagos, Nigeria',
    status: 'Completed',
    duration: '6 months',
    yearCompleted: 2025,
    metrics: {
      bedrooms: 5,
      rooms: 8,
      kitchens: 1,
      size: '450 sqm',
    },
  },

  {
    id: 'minimalist-villa-renovation',
    title: 'Minimalist Villa Renovation',
    description:
      'Transformation of an existing structure into a sleek minimalist home.',
    fullDescription:
      'Included structural upgrades, rewiring, painting, and full interior finishing.',
    images: [
      contemporaryMinimalistVilla,
      contemporaryMinimalistVillaSideView,
      contemporaryMinimalistVillaConstruction,
    ],
    category: 'Renovation',
    services: ['Rewiring', 'Painting', 'Interior Finishing'],
    location: 'Abuja, Nigeria',
    status: 'Completed',
    duration: '3 months',
    yearCompleted: 2024,
    metrics: {
      bedrooms: 4,
      rooms: 6,
      kitchens: 1,
      size: '320 sqm',
    },
  },

  {
    id: 'duplex-development',
    title: 'Modern Duplex Development',
    description:
      'A functional and stylish duplex for modern family living.',
    fullDescription:
      'Designed with durability and comfort in mind, offering efficient space utilization.',
    images: [
      modernDuplex,
      duplexMansion,
      duplex,
    ],
    category: 'Residential Construction',
    services: ['Construction', 'Wiring', 'Roofing', 'Finishing'],
    location: 'Ibadan, Nigeria',
    status: 'Completed',
    duration: '5 months',
    yearCompleted: 2025,
    metrics: {
      bedrooms: 4,
      rooms: 7,
      kitchens: 1,
      size: '380 sqm',
    },
  },

  {
    id: 'minimalist-mansion-build',
    title: 'Minimalist Mansion Build',
    description:
      'A luxury mansion project focused on space, elegance, and premium finishing.',
    fullDescription:
      'A high-end construction project using top-quality materials and modern design principles.',
    images: [
      modernMinimalistMansion,
      modernMinimalistMansionSideView,
      modernMinimalistMansionConstruction,
    ],
    category: 'Luxury Construction',
    services: ['Construction', 'Interior Finishing', 'Project Management'],
    location: 'Lekki, Nigeria',
    status: 'Ongoing',
    duration: '2 months remaining',
    yearCompleted: 2026,
    metrics: {
      bedrooms: 6,
      rooms: 10,
      kitchens: 2,
      size: '650 sqm',
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
