import contemporaryMinimalistVillaConstruction from '../assets/images/optimized/contemporary-minimalist-villa-in-construction.png'
import contemporaryMinimalistVillaSideView from '../assets/images/optimized/contemporary-minimalist-villa-side-view.png'
import contemporaryMinimalistVilla from '../assets/images/optimized/contemporary-minimalist-villa.png'
import duplexMansion from '../assets/images/optimized/duplex-mansion.png'
import duplex from '../assets/images/optimized/duplex.jpg'
import elevationModernVillaConstruction from '../assets/images/optimized/elevation-modern-villa-in-construction.png'
import elevationModernVillaSideView from '../assets/images/optimized/elevation-modern-villa-side-view.png'
import elevationModernVilla from '../assets/images/optimized/elevation-modern-villa.png'
import modernDuplex from '../assets/images/optimized/modern-duplex.png'
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
    id: 'luxury-residential-building',
    title: 'Luxury Residential Building',
    description:
      'A refined residence delivered with premium finishing and careful structural detailing.',
    fullDescription:
      'This project involved full structural development, finishing, and engineering execution from foundation to completion.',
    images: [
      elevationModernVilla,
      elevationModernVillaSideView,
      elevationModernVillaConstruction,
    ],
    category: 'Building Construction',
    services: ['Construction', 'Wiring', 'Roofing', 'Finishing'],
    location: 'Lagos, Nigeria',
    status: 'Completed',
  },
  {
    id: 'modern-house-renovation',
    title: 'Modern House Renovation',
    description:
      'A full renovation project designed to improve comfort, value, and visual appeal.',
    fullDescription:
      'Renovation included structural upgrades, rewiring, interior finishing, and repainting.',
    images: [
      contemporaryMinimalistVilla,
      contemporaryMinimalistVillaSideView,
      contemporaryMinimalistVillaConstruction,
    ],
    category: 'Renovation',
    services: ['Rewiring', 'Painting', 'Screeding'],
    location: 'Abuja, Nigeria',
    status: 'Completed',
  },
]
