import { motion } from 'framer-motion'
import ctaImage from '../../assets/images/construction-manager.png'
import Button from '../Button'

function CtaSection() {
  return (
    <section className="py-18 sm:py-22 lg:py-24">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative overflow-hidden rounded-[28px] border border-black/6 px-6 py-12 sm:px-10 sm:py-14"
        >
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(249,250,251,0.98)_0%,rgba(249,250,251,0.96)_44%,rgba(249,250,251,0.72)_72%,rgba(249,250,251,0.28)_100%)]" />

          <div className="pointer-events-none absolute -bottom-34 -right-10 h-72 w-[18rem] max-[400px]:hidden md:-bottom-20 md:right-0 md:h-96 md:w-[24rem] lg:-bottom-24 lg:h-116 lg:w-116">
            <div className="absolute inset-0 rounded-full bg-ocean-blue/10 blur-3xl" />
            <img
              src={ctaImage}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 h-full w-full object-cover opacity-80"
              style={{
                WebkitMaskImage:
                  'radial-gradient(circle at 62% 62%, black 42%, transparent 82%)',
                maskImage:
                  'radial-gradient(circle at 62% 62%, black 42%, transparent 82%)',
              }}
            />
          </div>

          <div className="pointer-events-none absolute -bottom-22 right-0 h-36 w-44 max-[400px]:hidden bg-[linear-gradient(180deg,rgba(249,250,251,0),rgba(249,250,251,0.98))] md:-bottom-8 md:h-32 md:w-56" />

          <div className="relative z-10 max-w-3xl text-left max-[400px]:mx-auto max-[400px]:text-center">
            <p className="font-space text-sm font-semibold tracking-[0.18em] text-gold uppercase">
              Start Your Project
            </p>

            <h2 className="mt-4 max-w-md font-space text-3xl font-bold leading-tight text-charcoal sm:max-w-84 md:max-w-104 lg:max-w-xl lg:text-[2.8rem]">
              Let&apos;s Discuss Your Future Home with Divine Touch
            </h2>

            <p className="mt-5 max-w-md md:max-w-100 lg:max-w-lg text-sm leading-7 text-charcoal/72 sm:max-w-2xl sm:text-base">
              Share your ideas, renovation goals, or new-build plans and let
              Divine Homes help shape the next step with clarity and care.
            </p>

            <div className="mt-8">
              <Button
                to="/projects#book-a-meeting"
                variant="gold"
                className="rounded-md px-5 text-sm font-bold"
              >
                Book a Meeting
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CtaSection
