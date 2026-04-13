import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type Testimonial = {
  initials: string
  location: string
  name: string
  reviewUrl: string
  role: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    initials: 'AO',
    name: 'Adaeze Okafor',
    role: 'Home Owner',
    location: 'Lagos',
    reviewUrl: 'https://www.google.com/search?q=Divine+Homes+reviews',
    text: 'Divine Homes handled our house renovation in Nigeria professionally. From POP ceiling design to electrical wiring, everything was delivered with precision.',
  },
  {
    initials: 'TI',
    name: 'Tunde Ibrahim',
    role: 'Property Developer',
    location: 'Abuja',
    reviewUrl: 'https://www.google.com/search?q=Divine+Homes+reviews',
    text: 'A reliable building contractor in Nigeria. Their plumbing services and screeding work were clean, fast, and well executed.',
  },
  {
    initials: 'EN',
    name: 'Ebere Nwosu',
    role: 'Home Owner',
    location: 'Port Harcourt',
    reviewUrl: 'https://www.google.com/search?q=Divine+Homes+reviews',
    text: 'We hired Divine Homes for full construction and renovation. Their electrical work and POP ceiling finishing exceeded expectations.',
  },
  {
    initials: 'SO',
    name: 'Samuel Ojo',
    role: 'Property Manager',
    location: 'Ibadan',
    reviewUrl: 'https://www.google.com/search?q=Divine+Homes+reviews',
    text: 'Top-quality house renovation service. The team handled plumbing, plastering, and finishing with great attention to detail.',
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="flex h-full min-h-48 flex-col rounded-[20px] bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_18px_36px_rgba(15,23,42,0.1)]"
    >
      <p className="text-sm leading-7 text-charcoal/74 sm:text-[0.96rem]">
        {testimonial.text}
      </p>

      <div className="mt-auto pt-6 flex items-end justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-13 w-13 items-center justify-center rounded-full bg-ocean-blue/12 font-space text-sm font-bold text-ocean-blue">
            {testimonial.initials}
          </div>

          <div>
            <p className="font-space text-base font-bold text-charcoal">
              {testimonial.name}
            </p>
            <p className="text-sm text-charcoal/62">
              {testimonial.role}
              {' • '}
              {testimonial.location}
            </p>
          </div>
        </div>

        <div className="shrink-0 text-right">
          <div className="flex items-center justify-end gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, index) => (
              <Icon key={index} icon="mdi:star" className="text-base" />
            ))}
          </div>

          <a
            href={testimonial.reviewUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-medium text-ocean-blue underline decoration-ocean-blue/75 underline-offset-3 transition hover:text-charcoal"
          >
            View original review
          </a>
        </div>
      </div>
    </motion.article>
  )
}

function TestimonialsSection() {
  const [isExpanded, setIsExpanded] = useState(false)
  const mobilePrimaryTestimonials = testimonials.slice(0, 2)
  const mobileExtraTestimonials = testimonials.slice(2)

  return (
    <section className="bg-[color:rgba(76,132,166,0.06)] py-18 sm:py-22 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-4xl"
        >
          <p className="font-space text-sm font-semibold tracking-[0.18em] text-ocean-blue uppercase">
            Testimonials
          </p>

          <h2 className="mt-4 font-space text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-[2.65rem]">
            What Clients Say About Our Building Contractor & Renovation Services
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-charcoal/72 sm:text-base">
            Trusted feedback from clients who experienced our house renovation, electrical, plumbing, screeding, and full building contractor services in Nigeria.
          </p>
        </motion.div>

        <div className="mt-10 rounded-[28px] bg-ocean-blue/8 p-4 sm:p-5 lg:p-6">
          <div className="hidden gap-5 md:grid md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="md:hidden">
            <div className="grid gap-4">
              {mobilePrimaryTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  testimonial={testimonial}
                />
              ))}
            </div>

            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-4 grid gap-4">
                    {mobileExtraTestimonials.map((testimonial) => (
                      <TestimonialCard
                        key={testimonial.name}
                        testimonial={testimonial}
                      />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 text-center">
              <button
                type="button"
                onClick={() => setIsExpanded((value) => !value)}
                className="text-sm font-semibold text-ocean-blue underline decoration-ocean-blue/75 underline-offset-3 outline-none transition hover:text-charcoal focus:outline-none focus-visible:outline-none"
              >
                {isExpanded ? 'See less' : 'See more'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
