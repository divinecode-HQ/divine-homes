import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import projectImageOne from '../../assets/images/divine-homes-modern-building-construction.jpg'
import projectImageTwo from '../../assets/images/hero-section.png'

type Project = {
  description?: string
  title: string
  image?: string
  isMoreCard?: boolean
}

const projects: Project[] = [
  {
    title: 'Luxury Residential Building',
    description: 'A refined residence delivered with premium finishing and careful structural detailing.',
    image: projectImageOne,
  },
  {
    title: 'Modern House Renovation',
    description: 'A full renovation project designed to improve comfort, value, and visual appeal.',
    image: projectImageTwo,
  },
  {
    title: 'Contemporary Family Home',
    description: 'A clean, modern build executed with durable materials and coordinated site delivery.',
    image: projectImageOne,
  },
  {
    title: 'Premium Interior Upgrade',
    description: 'A carefully managed upgrade focused on stronger function, cleaner finishes, and a brighter interior.',
    image: projectImageTwo,
  },
  {
    title: 'View More',
    isMoreCard: true,
  },
]

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  if (project.isMoreCard) {
    return (
      <motion.article
        whileHover={{ y: -4, scale: 1.03 }}
        transition={{ duration: 0.32, ease: 'easeOut' }}
        className="flex min-h-[27rem] items-center justify-center rounded-[20px] bg-grey/14 p-6"
      >
        <Link
          to="/projects"
          className="inline-flex items-center justify-center rounded-md border border-white/22 bg-white/8 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/14 focus:outline-none focus:ring-2 focus:ring-gold/45 focus:ring-offset-2 focus:ring-offset-charcoal"
        >
          View More
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      className="group relative min-h-[27rem] overflow-hidden rounded-[20px]"
    >
      <motion.img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full object-cover"
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,20,0.08),rgba(10,15,20,0.72)_72%,rgba(10,15,20,0.92))]" />
      <div className="absolute inset-0 bg-black/6 transition-colors duration-300 group-hover:bg-black/14" />

      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <div className="translate-y-4 text-white transition-transform duration-300 ease-out group-hover:-translate-y-2">
          <h3 className="font-space text-2xl font-bold">
            {project.title}
          </h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/76">
            {project.description}
          </p>

          <div className="pointer-events-none mt-5 translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              to="/projects"
              className="inline-flex items-center justify-center rounded-md border border-white/28 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/16 focus:outline-none focus:ring-2 focus:ring-gold/45 focus:ring-offset-2 focus:ring-offset-charcoal"
            >
              View Project
            </Link>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

function ProjectsSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = () => {
    const container = scrollRef.current

    if (!container) {
      return
    }

    const firstCard = container.querySelector<HTMLElement>('[data-project-card]')

    if (!firstCard) {
      return
    }

    const gap = 24
    const cardWidth = firstCard.offsetWidth
    const index = Math.round(container.scrollLeft / (cardWidth + gap))

    setActiveIndex(Math.max(0, Math.min(index, projects.length - 1)))
  }

  const scrollToCard = (index: number) => {
    const container = scrollRef.current

    if (!container) {
      return
    }

    const cards = container.querySelectorAll<HTMLElement>('[data-project-card]')
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

  const handleArrowScroll = (direction: 'prev' | 'next') => {
    const nextIndex =
      direction === 'next'
        ? Math.min(activeIndex + 1, projects.length - 1)
        : Math.max(activeIndex - 1, 0)

    scrollToCard(nextIndex)
  }

  return (
    <section className="bg-charcoal py-18 text-white sm:py-22 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="font-space text-sm font-semibold tracking-[0.18em] text-gold uppercase">
            Our Work
          </p>
          <h2 className="mt-4 font-space text-3xl font-bold sm:text-4xl">
            Our Completed Projects
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
            A selection of finished projects reflecting the quality, detail, and execution Divine Homes brings to every build.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: 'easeOut', delay: 0.08 }}
          className="mt-10"
        >
          <div
            ref={scrollRef}
            onScroll={updateActiveIndex}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project) => (
              <div
                key={project.title}
                data-project-card
                className="w-[88%] min-w-[88%] snap-center sm:w-[72%] sm:min-w-[72%] lg:w-[32rem] lg:min-w-[32rem]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Scroll projects left"
              onClick={() => handleArrowScroll('prev')}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/6 text-white transition hover:border-gold/45 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/45 focus:ring-offset-2 focus:ring-offset-charcoal lg:inline-flex"
            >
              <Icon icon="mdi:arrow-left" className="text-lg" />
            </button>

            <div className="flex items-center justify-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  aria-label={`Scroll to ${project.title}`}
                  aria-pressed={activeIndex === index}
                  onClick={() => scrollToCard(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold/45 focus:ring-offset-2 focus:ring-offset-charcoal ${
                    activeIndex === index
                      ? 'bg-gold'
                      : 'bg-white/22 hover:bg-white/46'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Scroll projects right"
              onClick={() => handleArrowScroll('next')}
              className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/18 bg-white/6 text-white transition hover:border-gold/45 hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/45 focus:ring-offset-2 focus:ring-offset-charcoal lg:inline-flex"
            >
              <Icon icon="mdi:arrow-right" className="text-lg" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
