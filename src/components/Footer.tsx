import { Icon } from '@iconify/react'
import { NavLink } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/#contact' },
]

const socialLinks = [
  { label: 'Instagram', icon: 'mdi:instagram', href: '#' },
  { label: 'Facebook', icon: 'mdi:facebook', href: '#' },
  { label: 'X', icon: 'mdi:twitter', href: '#' },
  { label: 'LinkedIn', icon: 'mdi:linkedin', href: '#' },
]

function Footer() {
  return (
    <footer className="bg-[#171719] px-6 py-12 text-white sm:px-8 sm:py-14 lg:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <NavLink
          to="/"
          className="font-space text-lg font-bold tracking-[0.18em] text-white uppercase"
        >
          Divine Homes
        </NavLink>

        <div className="mt-5 h-px w-14 bg-gold/75" />

        <nav className="mt-6" aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[0.7rem] font-medium tracking-[0.16em] text-white/62 uppercase">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className="outline-none transition hover:text-gold focus:outline-none focus-visible:outline-none"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-7 flex items-center justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              title={link.label}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/4 text-white/72 transition hover:border-gold/35 hover:text-white"
            >
              <Icon icon={link.icon} className="text-[1rem]" />
            </a>
          ))}
        </div>

        <div className="mt-8 h-px w-full max-w-md bg-white/8" />

        <p className="mt-5 text-xs tracking-[0.08em] text-white/38 uppercase">
          © 2026 Divine Homes
        </p>
      </div>
    </footer>
  )
}

export default Footer
