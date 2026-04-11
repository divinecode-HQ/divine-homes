import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'gold'

type ButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  to?: string
  variant?: ButtonVariant
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-ocean-blue text-white hover:brightness-95 focus:ring-ocean-blue/40',
  secondary:
    'border border-white/35 bg-white/12 text-white backdrop-blur-sm hover:bg-white/18 focus:ring-white/30',
  gold:
    'bg-gold text-white hover:brightness-95 focus:ring-gold/45',
}

function Button({
  children,
  className = '',
  href,
  onClick,
  to,
  variant = 'primary',
}: ButtonProps) {
  const classes =
    `inline-flex items-center justify-center appearance-none border-0 rounded-md px-6 py-3 text-sm font-semibold shadow-sm outline-none transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus-visible:outline-none ${variantClasses[variant]} ${className}`.trim()

  const content = to ? (
    <Link to={to} className={classes}>
      {children}
    </Link>
  ) : href ? (
    <a href={href} className={classes}>
      {children}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )

  return (
    <motion.div
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 500, damping: 20, mass: 0.45 }}
      className="inline-flex"
    >
      {content}
    </motion.div>
  )
}

export default Button
