'use client'
import { useHeaderTheme } from '@/providers/HeaderTheme'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { buttonVariants } from '@/components/ui/button'

interface HeaderClientProps {
  data?: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = () => {
  const [theme, setTheme] = useState<string | null>(null)
  const { headerTheme, setHeaderTheme } = useHeaderTheme()
  const pathname = usePathname()

  useEffect(() => {
    setHeaderTheme(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme])

  return (
    <header className="container relative z-20">
      <div className="py-8 flex justify-between items-center">
        <Link href="/">
          <Logo loading="eager" priority="high" />
        </Link>
        <HeaderNav />

        <Link href="locate-a-loved-one" className={buttonVariants({ variant: 'outline' })}>
          Locate a Loved One
        </Link>
      </div>
    </header>
  )
}
