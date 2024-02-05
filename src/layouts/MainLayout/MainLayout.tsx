'use client'

import { FC, PropsWithChildren } from 'react'
import { SiteFooter, SiteHeader, Theme } from '@/components'

export const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <Theme>
    <SiteHeader />
    {children}
    <SiteFooter />
  </Theme>
)
