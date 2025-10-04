'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Caveat } from 'next/font/google'

const caveat = Caveat({ subsets: ['latin'], weight: ['600','700'], variable: '--font-caveat' })

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`sticky top-0 z-50 border-b border-border bg-surface/80 backdrop-blur-md ${caveat.variable}`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 md:px-6">
        <Link 
          href="/"
          className="font-bold text-accent transition-colors text-2xl tracking-wide [font-family:var(--font-caveat)]"
        >
          J‑Tech
        </Link>
        
        <div className="hidden items-center space-x-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative text-sm font-medium transition-colors hover:text-accent ${
                activeSection === item.href.slice(1) ? 'text-accent' : 'text-muted'
              }`}
            >
              {item.label}
              {activeSection === item.href.slice(1) && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Mobile menu button - TODO: Implement mobile menu */}
        <button className="md:hidden text-text hover:text-accent transition-colors">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </motion.header>
  )
}
