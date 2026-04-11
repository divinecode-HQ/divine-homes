import { Icon } from '@iconify/react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Button from './Button'

const homeSectionLinks = [
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredNav, setHoveredNav] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  useEffect(() => {
    if (!location.hash) {
      return
    }

    const targetId = location.hash.replace('#', '')

    const scrollToTarget = () => {
      const element = document.getElementById(targetId)

      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }

    scrollToTarget()

    const timeoutId = window.setTimeout(scrollToTarget, 200)

    return () => window.clearTimeout(timeoutId)
  }, [location.hash, location.pathname])

  const handleHomeClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })

    if (location.pathname !== '/' || location.hash) {
      navigate('/')
    }
  }

  const handleSectionNavigation = (sectionId: string) => {
    if (location.pathname === '/') {
      navigate({ pathname: '/', hash: `#${sectionId}` })
      return
    }

    navigate({ pathname: '/', hash: `#${sectionId}` })
  }

  const handleMeetingNavigation = () => {
    navigate({ pathname: '/projects', hash: '#book-a-meeting' })
  }

  const currentHash = location.hash.replace('#', '')
  const isHomeActive = location.pathname === '/' && !currentHash
  const isSectionActive = (sectionId: string) =>
    location.pathname === '/' && currentHash === sectionId
  const isProjectsActive = location.pathname === '/projects'

  const desktopLinkClass = (isActive: boolean) =>
    `relative rounded-full px-4 py-2 text-sm font-semibold outline-none transition-colors focus:outline-none focus-visible:outline-none ${
      isActive ? 'text-ocean-blue' : 'text-charcoal hover:text-ocean-blue'
    }`

  const renderDesktopLink = (
    key: string,
    label: string,
    onClick: () => void,
    isActive: boolean,
  ) => (
    <motion.button
      key={key}
      type="button"
      onClick={onClick}
      onHoverStart={() => setHoveredNav(key)}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={desktopLinkClass(isActive)}
    >
      {hoveredNav === key && (
        <motion.span
          layoutId="desktop-nav-hover"
          className="absolute inset-0 rounded-full bg-ocean-blue/10"
          transition={{ type: 'spring', stiffness: 360, damping: 28 }}
        />
      )}
      <span className="relative z-10">{label}</span>
    </motion.button>
  )

  const mobileLinkClass = (isActive: boolean) =>
    `rounded-2xl border px-4 py-3 text-left text-sm font-semibold outline-none backdrop-blur-sm transition-colors focus:outline-none focus-visible:outline-none ${
      isActive
        ? 'border-ocean-blue/25 bg-ocean-blue/12 text-ocean-blue'
        : 'border-white/35 bg-white/35 text-charcoal hover:border-gold/30 hover:bg-gold/12 hover:text-charcoal'
    }`

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-white/25 bg-grey"
    >
      <nav
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:px-8"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-start">
          <motion.button
            type="button"
            onClick={handleHomeClick}
            whileHover={{ x: 2 }}
            whileTap={{ scale: 0.98 }}
            className="font-space text-lg font-bold tracking-[0.18em] text-charcoal uppercase outline-none focus:outline-none focus-visible:outline-none"
          >
            Divine Homes
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.35 }}
          onHoverEnd={() => setHoveredNav(null)}
          className="hidden items-center justify-center gap-2 rounded-full border border-white/30 bg-white/50 px-3 py-2 backdrop-blur-md lg:flex"
        >
          {renderDesktopLink('home', 'Home', handleHomeClick, isHomeActive)}

          {homeSectionLinks.map((link) =>
            renderDesktopLink(
              link.id,
              link.label,
              () => handleSectionNavigation(link.id),
              isSectionActive(link.id),
            ),
          )}

          <motion.div
            onHoverStart={() => setHoveredNav('projects')}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="relative"
          >
            <NavLink to="/projects" className={desktopLinkClass(isProjectsActive)}>
              {hoveredNav === 'projects' && (
                <motion.span
                  layoutId="desktop-nav-hover"
                  className="absolute inset-0 rounded-full bg-ocean-blue/10"
                  transition={{ type: 'spring', stiffness: 360, damping: 28 }}
                />
              )}
              <span className="relative z-10">Projects</span>
            </NavLink>
          </motion.div>
        </motion.div>

        <div className="hidden items-center justify-end lg:flex">
          <Button
            onClick={handleMeetingNavigation}
            variant="gold"
            className="rounded-md px-5 text-sm font-bold focus:ring-offset-grey"
          >
            Book a Meeting
          </Button>
        </div>

        <motion.button
          type="button"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen((open) => !open)}
          whileTap={{ scale: 0.9 }}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-charcoal/15 bg-white/60 text-charcoal outline-none backdrop-blur-sm focus:outline-none focus-visible:outline-none lg:hidden"
        >
          <Icon icon={isMenuOpen ? 'mdi:close' : 'mdi:menu'} className="text-[1.35rem]" />
        </motion.button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setIsMenuOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed inset-0 z-40 bg-charcoal/20 backdrop-blur-md lg:hidden"
            />

            <motion.div
              initial={{ x: '100%', opacity: 0.9 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0.96 }}
              transition={{ type: 'spring', stiffness: 280, damping: 28 }}
              className="fixed right-0 top-0 z-50 flex h-full w-[min(88vw,24rem)] flex-col border-l border-white/30 bg-white px-5 pb-6 pt-5 shadow-[0_18px_50px_rgba(24,39,75,0.18)] lg:hidden"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="font-space text-base font-bold tracking-[0.16em] text-charcoal uppercase">
                  Divine Homes
                </span>

                <motion.button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  whileTap={{ scale: 0.9 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-charcoal/15 bg-white/60 text-charcoal outline-none backdrop-blur-sm focus:outline-none focus-visible:outline-none"
                >
                  <Icon icon="mdi:close" className="text-[1.25rem]" />
                </motion.button>
              </div>

              <div className="flex flex-1 flex-col gap-3">
              <motion.button
                type="button"
                onClick={handleHomeClick}
                whileTap={{ scale: 0.96, x: -2 }}
                className={mobileLinkClass(isHomeActive)}
              >
                Home
              </motion.button>

              {homeSectionLinks.map((link) => (
                <motion.button
                  key={link.id}
                  type="button"
                  onClick={() => handleSectionNavigation(link.id)}
                  whileTap={{ scale: 0.96, x: -2 }}
                  className={mobileLinkClass(isSectionActive(link.id))}
                >
                  {link.label}
                </motion.button>
              ))}

              <NavLink
                to="/projects"
                className={mobileLinkClass(isProjectsActive)}
              >
                Projects
              </NavLink>
              </div>

              <Button
                onClick={handleMeetingNavigation}
                variant="gold"
                className="mt-6 rounded-md px-5 text-white"
              >
                Book a Meeting
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
