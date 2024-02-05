import React, { useState, useEffect } from 'react'
import { SHeader, SHeaderContainer, SLink, SLogo, SNav, SNavTrigger } from './SiteHeader.styled'
import { Icon } from '@/components'

export const SiteHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isNavOpen, toggleNav] = useState(false)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  const isCondensed = scrollPosition > 0

  return (
    <SHeader isCondensed={isCondensed} isNavOpen={isNavOpen}>
      <SHeaderContainer>
        <SLogo href="/">
          <img src="/images/main-logo.svg" alt="Asher Stoppard Limited - Logo" />
        </SLogo>
        <SNavTrigger onClick={() => toggleNav(!isNavOpen)}>
          <Icon icon={isNavOpen ? 'close' : 'menu'} />
        </SNavTrigger>
        <SNav isNavOpen={isNavOpen}>
          <SLink href="mailto:asher@asherstoppard.com">
            <Icon icon="mail" /> <strong>asher@asherstoppard.com</strong>
          </SLink>
        </SNav>
      </SHeaderContainer>
    </SHeader>
  )
}

export default SiteHeader
