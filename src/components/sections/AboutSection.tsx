import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import aboutImage from '../../assets/images/divine-homes-modern-building-construction.jpg'

const trustPoints = [
  {
    title: 'Trusted Professionals',
    description:
      'Experienced building contractors in Nigeria committed to quality workmanship and careful attention to detail.',
    icon: 'mdi:hard-hat',
  },
  {
    title: 'Proven Track Record',
    description:
      'Successfully delivering renovation and construction projects with satisfied clients across different project sizes.',
    icon: 'mdi:check-decagram-outline',
  },
  {
    title: 'Complete Project Delivery',
    description:
      'From POP ceilings and electrical work to plumbing, screeding, and finishing, every stage is covered.',
    icon: 'mdi:clipboard-check-outline',
  },
  {
    title: 'Quality & Durability',
    description:
      'The right materials and methods are used to achieve lasting, dependable construction results.',
    icon: 'mdi:shield-check-outline',
  },
  {
    title: 'Reliable & Transparent',
    description:
      'Clear communication, honest pricing, and dependable project timelines from start to completion.',
    icon: 'mdi:handshake-outline',
  },
]

function AboutSection() {
  return (
    <section className="bg-[#F9FAFB] py-18 sm:py-22 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="font-space text-sm font-semibold tracking-[0.18em] text-ocean-blue uppercase">
            About Divine Homes
          </p>

          <h2 className="mt-4 font-space text-3xl font-bold leading-tight text-charcoal sm:text-4xl lg:text-[2.65rem]">
            Trusted Building Contractor in Nigeria Delivering Quality
            Construction & Renovation
          </h2>

          <p className="mt-5 max-w-2xl text-base leading-8 text-charcoal/74 sm:text-lg">
            Divine Homes is a reliable building contractor in Nigeria offering
            complete construction solutions, house renovation, POP ceiling
            design, electrical installation, plumbing work, and quality
            finishing for residential and commercial spaces.
          </p>

          <div className="mt-8 grid gap-4 lg:hidden">
            {trustPoints.map((point) => (
              <article
                key={point.title}
                className="rounded-[18px] border border-black/6 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-blue/10 text-ocean-blue">
                    <Icon icon={point.icon} className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-space text-lg font-bold text-charcoal">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-charcoal/72">
                      {point.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 hidden gap-4 lg:grid">
            {trustPoints.slice(0, 3).map((point) => (
              <article
                key={point.title}
                className="rounded-[18px] border border-black/6 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-blue/10 text-ocean-blue">
                    <Icon icon={point.icon} className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-space text-lg font-bold text-charcoal">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-charcoal/72">
                      {point.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
          className="self-start"
        >
          <div className="relative mx-auto max-w-xl">
            <div className="absolute -left-5 -top-5 h-28 w-28 rounded-[1.5rem] bg-gold/20 blur-2xl" />
            <div className="absolute -bottom-6 -right-6 h-40 w-40 rounded-[2rem] bg-ocean-blue/14 blur-3xl" />

            <div className="relative overflow-hidden rounded-[26px] border border-white/70 bg-white p-3 shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="grid gap-3 sm:grid-cols-[1.15fr_0.85fr]">
                <div className="overflow-hidden rounded-[22px]">
                  <img
                    src={aboutImage}
                    alt="Divine Homes construction team on site"
                    className="h-full min-h-95 w-full object-cover"
                  />
                </div>

                <div className="grid gap-3">
                  <div className="rounded-[20px] bg-charcoal px-5 py-6 text-white">
                    <p className="font-space text-xs font-semibold tracking-[0.16em] text-white/65 uppercase">
                      Project Focus
                    </p>
                    <p className="mt-3 text-2xl font-bold">Built for trust</p>
                    <p className="mt-2 text-sm leading-6 text-white/72">
                      Quality delivery with practical coordination from planning
                      through final handover.
                    </p>
                  </div>

                  <div className="rounded-[20px] bg-white px-5 py-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                    <p className="font-space text-xs font-semibold tracking-[0.16em] text-ocean-blue uppercase">
                      Site Standards
                    </p>
                    <p className="mt-3 text-lg font-bold text-charcoal">
                      Strong process, better finish
                    </p>
                    <p className="mt-2 text-sm leading-6 text-charcoal/72">
                      Reliable workmanship, careful supervision, and results
                      that hold up over time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 hidden gap-4 lg:grid">
            {trustPoints.slice(3).map((point) => (
              <article
                key={point.title}
                className="rounded-[18px] border border-black/6 bg-white p-5 shadow-[0_10px_28px_rgba(15,23,42,0.05)]"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ocean-blue/10 text-ocean-blue">
                    <Icon icon={point.icon} className="text-xl" />
                  </div>

                  <div>
                    <h3 className="font-space text-lg font-bold text-charcoal">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-charcoal/72">
                      {point.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutSection
