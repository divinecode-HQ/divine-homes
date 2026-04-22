export type Project = {
  slug: string
  title: string
  description: string
  fullDescription?: string
  images: string[]
  category: string
  status: string
  location: string
  services: string[]
}

import img1 from '../assets/images/optimized/elevation-modern-villa.png'
import img2 from '../assets/images/optimized/elevation-modern-villa-side-view.png'
import img3 from '../assets/images/optimized/elevation-modern-villa-in-construction.png'

export const projects: Project[] = [
  {
    slug: 'luxury-residential-building',
    title: 'Luxury Residential Building',
    description: 'Premium residential construction project.',
    fullDescription:
      'Full construction from foundation to finishing including electrical, plumbing, and painting.',
    images: [img1, img2, img3],
    category: 'Building Construction',
    status: 'Completed',
    location: 'Abuja, Nigeria',
    services: [
      'Construction',
      'Electrical Wiring',
      'Plumbing',
      'Screeding',
      'Painting',
    ],
  },
]
