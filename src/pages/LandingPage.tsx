import { motion } from 'framer-motion'
import heroImage from '../assets/images/hero-section.png'
import Button from '../components/Button'
import { Helmet } from 'react-helmet-async'

function LandingPage() {
  return (
    <>
    <Helmet>
      <title>Building Contractor in Nigeria | House Renovation & Construction Services – Divine Homes</title>
    </Helmet>

      <section className="relative -mt-19.25 flex min-h-screen items-center justify-center overflow-hidden px-6 pt-32 pb-16 sm:px-8 lg:px-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[4px]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,250,252,0.18),rgba(24,39,75,0.24))]" />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <h1 className="font-space text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Reliable Building Contractor in Nigeria for Construction & House Renovation
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-white/86 sm:text-lg">
            Divine Homes construction services delivers complete building solutions—from house renovation, POP ceiling design, plumbing and electrical work, to screeding and finishing—bringing your projects to life from start to finish.
          </p>

          <div className="mt-8 flex flex-col gap-6 xs:flex-row">
            <Button to="/projects" variant="primary">
              View Projects
            </Button>

            <Button href="#contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </motion.div>
      </section>
    </>
  )
}

export default LandingPage
