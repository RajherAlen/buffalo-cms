'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

type NavItem = {
  label: string
  url?: string
  children?: {
    label: string
    url: string
  }[]
}

const navList: NavItem[] = [
  {
    label: 'Planning',
    children: [
      { label: 'Pre-Planning', url: '/pre-planning' },
      { label: 'Funeral Services', url: '/funeral-services' },
      { label: 'Cremation Services', url: '/cremation-services' },
      { label: 'Memorial Products', url: '/memorial-products' },
    ],
  },
  {
    label: 'Remembrance',
    children: [
      { label: 'Obituaries', url: '/obituaries' },
      { label: 'Virtual Memorials', url: '/virtual-memorials' },
      { label: 'Grief Support', url: '/grief-support' },
    ],
  },
  {
    label: 'About Us',
    children: [
      { label: 'Our Story', url: '/our-story' },
      { label: 'Our Team', url: '/our-team' },
      { label: 'Careers', url: '/careers' },
      { label: 'Blog', url: '/blog' },
    ],
  },
  {
    label: 'Payments',
    children: [{ label: 'Make a Payment', url: '/make-a-payment' }],
  },
  { label: 'FAQ', url: '/faq' },
  { label: 'Contact', url: '/contact' },
]

// ---------------- NavLink Component ----------------
const NavLink = ({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) => (
  <Link
    href={href}
    className="relative inline-block after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full"
    onClick={onClick}
  >
    {children}
  </Link>
)

// ---------------- Dropdown Component ----------------
// Update Dropdown Props
type DropdownProps = {
  item: NavItem
  isOpen: boolean
  toggle: () => void
  closeDropdown: () => void
}

// Update Dropdown Component
const Dropdown = ({ item, isOpen, toggle, closeDropdown }: DropdownProps) => {
  if (!item.children) return <NavLink href={item.url || '#'}>{item.label}</NavLink>

  return (
    <div className="relative">
      <button
        onClick={toggle}
        className="flex items-center gap-1 hover:text-black focus:outline-none"
      >
        {item.label}
        <svg
          className={`w-4 h-4 mt-[1px] transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute left-0 top-full mt-2 w-48 bg-white shadow-lg rounded-md z-50 origin-top transition-all duration-300 ease-out transform
                ${isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
      >
        <ul className="p-1">
          {item.children.map((child, idx) => (
            <li key={idx} className="px-2 py-1">
              <NavLink href={child.url} onClick={closeDropdown}>
                {child.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

// ---------------- HeaderNav Component ----------------
export const HeaderNav = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const toggleDropdown = (index: number) => setOpenIndex(openIndex === index ? null : index)
  const closeDropdown = () => setOpenIndex(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      ref={dropdownRef}
      className="gap-6 items-center text-gray-800 text-[16px] font-medium relative hidden lg:flex"
    >
      {navList.map((item, i) => (
        <Dropdown
          key={i}
          item={item}
          isOpen={openIndex === i}
          toggle={() => toggleDropdown(i)}
          closeDropdown={closeDropdown}
        />
      ))}
    </nav>
  )
}
