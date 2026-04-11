import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { useMemo, useRef, useState } from 'react'

type Service = {
  title: string
  description: string
  icon: string
}

const services: Service[] = [
  {
    title: 'Building Construction',
    description:
      'Reliable residential and commercial construction delivered from foundation work to finishing.',
    icon: 'mdi:office-building-cog',
  },
  {
    title: 'House Renovation',
    description:
      'Professional renovation work for remodeling, upgrades, and careful home restoration.',
    icon: 'mdi:home-edit-outline',
  },
  {
    title: 'POP Ceiling Design',
    description:
      'Modern ceiling designs that improve interior beauty with durable stylish finishes.',
    icon: 'mdi:ceiling-light',
  },
  {
    title: 'Electrical Installation',
    description:
      'Safe wiring, fittings, and full electrical installation by certified contractors.',
    icon: 'mdi:lightning-bolt-outline',
  },
  {
    title: 'Plumbing Services',
    description:
      'Reliable plumbing and water system installation for homes and commercial properties.',
    icon: 'mdi:faucet',
  },
  {
    title: 'Screeding & Finishing',
    description:
      'Smooth walls, strong surfaces, and polished finishing through expert screeding work.',
    icon: 'mdi:texture-box',
  },
]

type ServiceCardProps = {
  service: Service
}

function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -5 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className="group flex min-h-62.5 flex-col items-center border border-black/6 bg-white p-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-shadow hover:border-ocean-blue/18 focus:shadow-[0_22px_48px_rgba(15,23,42,0.12)] focus:border-ocean-blue/18 hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)]"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ocean-blue/10 text-ocean-blue">
        <Icon icon={service.icon} className="text-[1.7rem]" />
      </div>

      <h3 className="mt-5 font-space text-xl font-bold text-charcoal">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-charcoal/72">
        {service.description}
      </p>
    </motion.article>
  )
}

function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const totalCards = useMemo(() => services.length, [])

  const updateActiveIndex = () => {
    const container = scrollRef.current

    if (!container) {
      return
    }

    const firstCard = container.querySelector<HTMLElement>('[data-service-card]')

    if (!firstCard) {
      return
    }

    const cardWidth = firstCard.offsetWidth
    const gap = 16
    const index = Math.round(container.scrollLeft / (cardWidth + gap))

    setActiveIndex(Math.max(0, Math.min(index, totalCards - 1)))
  }

  const scrollToCard = (index: number) => {
    const container = scrollRef.current

    if (!container) {
      return
    }

    const cards = container.querySelectorAll<HTMLElement>('[data-service-card]')
    const targetCard = cards[index]

    if (!targetCard) {
      return
    }

    container.scrollTo({
      left: targetCard.offsetLeft - container.offsetLeft,
      behavior: 'smooth',
    })

    setActiveIndex(index)
  }

  return (
    <div className="w-full h-fit py-6">
      <div
        ref={scrollRef}
        onScroll={updateActiveIndex}
        className="flex snap-x snap-mandatory gap-1 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {services.map((service) => (
          <div
            key={service.title}
            data-service-card
            className="w-[88%] min-w-[88%] snap-center sm:w-[70%] sm:min-w-[70%] lg:w-[24rem] lg:min-w-[24rem] xl:w-102 xl:min-w-102"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {services.map((service, index) => (
          <button
            key={service.title}
            type="button"
            aria-label={`Scroll to ${service.title}`}
            aria-pressed={activeIndex === index}
            onClick={() => scrollToCard(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold/55 focus:ring-offset-2 focus:ring-offset-white ${
              activeIndex === index
                ? 'bg-gold'
                : 'w-2.5 bg-charcoal/18 hover:bg-ocean-blue/45'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
