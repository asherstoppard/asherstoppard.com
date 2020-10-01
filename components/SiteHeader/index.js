import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  padding: 2rem 0;
  transition: padding 0.5s ease-in-out;
  
    ${({ isCondensed }) =>
  isCondensed &&
  `
    padding: 1rem 0;
    background: url('images/splash-background.jpg') top center no-repeat;
    background-size: cover;
  `}
`

const HeaderContainer = styled.div`
  padding: 0 2rem;
`

const Logo = styled.a`
  display: inline-block;
  width: 4rem;
  float: left;
`

const FeaturedLink = styled.a`
  float: right !important;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  border-radius: 50px;
  padding: 1rem 2rem;
  color: white;
`

const Nav = styled.nav`
  position: relative;
  display: block !important;
  float: left;
  padding-left: 2rem;
  width: calc(100% - 4rem);
`

const Link = styled.a`
  float: left;
  padding: 1rem;
  color: white;
`

const SiteHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const isCondensed = scrollPosition > 0

  return (
    <Header isCondensed={isCondensed}>
      <HeaderContainer isCondensed={isCondensed}>
        <Logo href="/">
          <img src="/images/main-logo.png" alt="" />
        </Logo>
        <Nav>
          <Link href="">About</Link>
          <Link href="">Skills</Link>
          <Link href="">Experience</Link>
          <FeaturedLink href="">Contact</FeaturedLink>
        </Nav>
      </HeaderContainer>
    </Header>
  )
}

export default SiteHeader
