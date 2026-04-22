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
  },
]
