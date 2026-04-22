import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import contemporaryMinimalistVillaConstruction from '../../assets/images/optimized/contemporary-minimalist-villa-in-construction.png'
import contemporaryMinimalistVillaSideView from '../../assets/images/optimized/contemporary-minimalist-villa-side-view.png'
import contemporaryMinimalistVilla from '../../assets/images/optimized/contemporary-minimalist-villa.png'
import duplexMansion from '../../assets/images/optimized/duplex-mansion.png'
import duplex from '../../assets/images/optimized/duplex.jpg'
import elevationModernVillaConstruction from '../../assets/images/optimized/elevation-modern-villa-in-construction.png'
import elevationModernVillaSideView from '../../assets/images/optimized/elevation-modern-villa-side-view.png'
import elevationModernVilla from '../../assets/images/optimized/elevation-modern-villa.png'
import modernDuplex from '../../assets/images/optimized/modern-duplex.png'
import modernMinimalistMansionConstruction from '../../assets/images/optimized/modern-minimalist-mansion-in-construction.png'
import modernMinimalistMansionSideView from '../../assets/images/optimized/modern-minimalist-mansion-side-view.png'
import modernMinimalistMansion from '../../assets/images/optimized/modern-minimalist-mansion.png'
import { projects } from '../../data/projects'

type ProjectCardProps = {
  isActive: boolean
  project: Project
}

function ImageIndicators({
  activeImage,
  onSelect,
}: {
  activeImage: number
  onSelect: (index: number) => void
}) {
  return (
    <div className="flex items-center gap-2">
      {[0, 1, 2].map((index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show project image ${index + 1}`}
          aria-pressed={activeImage === index}
          onClick={() => onSelect(index)}
          className={`h-2.5 w-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-gold/45 focus:ring-offset-2 focus:ring-offset-charcoal ${
            activeImage === index
              ? 'bg-gold'
              : 'bg-white/30 hover:bg-white/55'
          }`}
        />
      ))}
    </div>
  )
}

function MoreProjectCard() {
  return (
    <motion.article
      whileHover={{ y: -4, scale: 1.03 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      className="flex min-h-112 items-center justify-center rounded-[20px] bg-grey/14 p-6"
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

function ProjectCard({ project, isActive }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const [isUserControlled, setIsUserControlled] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const hoverDelayRef = useRef<number | null>(null)
  const intervalRef = useRef<number | null>(null)
  const resumeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)')

    const updateDesktopState = () => {
      setIsDesktop(mediaQuery.matches)
    }

    updateDesktopState()
    mediaQuery.addEventListener('change', updateDesktopState)

    return () => {
      mediaQuery.removeEventListener('change', updateDesktopState)
    }
  }, [])

  useEffect(() => {
    const shouldAutoPlay = isDesktop ? isHovered : isActive

    if (!shouldAutoPlay) {
      if (hoverDelayRef.current) {
        window.clearTimeout(hoverDelayRef.current)
      }

      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }

      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current)
      }

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsUserControlled(false)
      setActiveImage(0)
      return
    }

    if (isUserControlled) {
      return
    }

    hoverDelayRef.current = window.setTimeout(() => {
      intervalRef.current = window.setInterval(() => {
        setActiveImage((current) => (current + 1) % 3)
      }, 6000)
    }, 1000)

    return () => {
      if (hoverDelayRef.current) {
        window.clearTimeout(hoverDelayRef.current)
      }

      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }
    }
  }, [isActive, isDesktop, isHovered, isUserControlled])

  useEffect(() => {
    return () => {
      if (hoverDelayRef.current) {
        window.clearTimeout(hoverDelayRef.current)
      }

      if (intervalRef.current) {
        window.clearInterval(intervalRef.current)
      }

      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current)
      }
    }
  }, [])

  if (project.isMoreCard) {
    return <MoreProjectCard />
  }

  const handleDotSelect = (index: number) => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current)
    }

    if (hoverDelayRef.current) {
      window.clearTimeout(hoverDelayRef.current)
    }

    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current)
    }

    setIsUserControlled(true)
    setActiveImage(index)

    if ((isDesktop && isHovered) || (!isDesktop && isActive)) {
      resumeTimeoutRef.current = window.setTimeout(() => {
        setIsUserControlled(false)
      }, 2200)
    }
  }

  return (
    <motion.article
      whileHover={isDesktop ? { y: -4, scale: 1.03 } : undefined}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      onHoverStart={() => {
        if (isDesktop) {
          setIsHovered(true)
        }
      }}
      onHoverEnd={() => {
        if (isDesktop) {
          setIsHovered(false)
        }
      }}
      className="group relative min-h-112 overflow-hidden rounded-[20px]"
    >
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeImage}
            src={project.images?.[activeImage]}
            alt={`${project.title} view ${activeImage + 1}`}
            loading="lazy"
            decoding="async"
            initial={{ opacity: 0, x: 24, scale: 1.02 }}
            animate={{ opacity: 1, x: 0, scale: isDesktop && isHovered ? 1.06 : 1 }}
            exit={{ opacity: 0, x: -24, scale: 1.04 }}
            transition={{ duration: 0.38, ease: 'easeOut' }}
            className="absolute inset-0 h-full w-full object-cover"
          />
        </AnimatePresence>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,15,20,0.08),rgba(10,15,20,0.62)_72%,rgba(10,15,20,0.9))]" />
      <div className={`absolute inset-0 bg-black/6 transition-colors duration-300 ${isDesktop ? 'group-hover:bg-black/14' : ''}`} />

      <div className="absolute inset-x-0 bottom-0 px-6 pt-6 pb-12 sm:px-7 sm:pt-7 sm:pb-11">
        <div className={`text-white transition-transform duration-300 ease-out ${isDesktop ? 'translate-y-15 group-hover:translate-y-4' : 'translate-y-3'}`}>
          <h3 className="font-space text-2xl font-bold">{project.title}</h3>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/76">
            {project.description}
          </p>

          <div className="mt-4 flex items-center justify-between gap-3">
            <ImageIndicators activeImage={activeImage} onSelect={handleDotSelect} />

            <Link
              to={`/projects/${project.id}`}
              aria-label={`View ${project.title}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/24 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/16 focus:outline-none focus:ring-2 focus:ring-gold/45 focus:ring-offset-2 focus:ring-offset-charcoal md:hidden"
            >
              <Icon icon="mdi:arrow-top-right" className="text-lg" />
            </Link>
          </div>

          <div className="pointer-events-none mt-3 hidden translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 md:block">

            <Link
              to={`/projects/${project.id}`}
              className="mt-2 inline-flex items-center justify-center rounded-md border border-white/28 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/16 focus:outline-none focus:ring-2 focus:ring-gold/45 focus:ring-offset-2 focus:ring-offset-charcoal"
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
            {projects.map((project, index) => (
              <div
                key={project.title}
                data-project-card
                className="w-[88%] min-w-[88%] snap-center sm:w-[72%] sm:min-w-[72%] lg:w-88 lg:min-w-88 xl:w-[24rem] xl:min-w-[24rem]"
              >
                <ProjectCard project={project} isActive={activeIndex === index} />
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
