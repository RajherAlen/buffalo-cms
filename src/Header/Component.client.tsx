'use client'

import Link from 'next/link'
import React from 'react'

import type { Header } from '@/payload-types'

import { Logo } from '@/components/Logo/Logo'
import { HeaderNav } from './Nav'
import { buttonVariants } from '@/components/ui/button'

interface HeaderClientProps {
  data?: Header
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  return (
    <header className="container relative z-20">
      <div className="py-8 flex justify-between items-center">
        <Link href="/">
          <Logo loading="eager" priority="high" />
        </Link>

        <HeaderNav navItems={data?.navItems || []} />

        <Link href="/locate-a-loved-one" className={buttonVariants({ variant: 'outline' })}>
          Locate a Loved One
        </Link>
      </div>
    </header>
  )
}
