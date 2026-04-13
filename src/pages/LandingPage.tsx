import { Helmet } from 'react-helmet-async'
import AboutSection from '../components/sections/AboutSection'
import CtaSection from '../components/sections/CtaSection'
import HeroSection from '../components/sections/HeroSection'
import ProjectsSection from '../components/sections/ProjectsSection'
import ServicesSection from '../components/sections/ServicesSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'

function LandingPage() {
  return (
    <>
      <Helmet>
        <title>
          Building Contractor in Nigeria | House Renovation & Construction
          Services â€“ Divine Homes
        </title>
      </Helmet>

      <div className="relative pb-16 sm:pb-20 lg:pb-24">
        <HeroSection />

        <div className="relative z-20 mx-auto -mt-28 max-w-[110rem] px-4 sm:-mt-32 sm:px-6 lg:-mt-36 lg:px-8">
          <ServicesSection />
        </div>
      </div>

      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  )
}

export default LandingPage
