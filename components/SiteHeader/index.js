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
  
  ${({ isCondensed }) => isCondensed && `
    padding: 1rem 0;
  `}
  
  ${({ isCondensed, isNavOpen }) => (isCondensed || isNavOpen) && `
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
  display: block;
  padding: 0.7rem 2rem;
  color: white;

  @media (min-width: 730px) {
    float: right !important;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid white;
    border-radius: 50px;
    padding: 1rem 2rem;
    color: white;
  }
`

const Nav = styled.nav`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: url('images/splash-background.jpg') bottom center no-repeat;
  background-size: cover;
  
  ${({ isNavOpen }) => isNavOpen && `
    display: block;
  `};

  @media (min-width: 730px) {
    display: block;
    position: relative;
    float: left;
    padding-left: 2rem;
    width: calc(100% - 4rem);
    background: none;
    top: auto;
  }
`

const Link = styled.a`
  display: block;
  width: 100%;
  padding: 0.7rem 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  
  @media (min-width: 730px) {
    float: left;
    padding: 1.2rem 1rem 1rem;
    color: white;
    border-bottom: none;
    width: auto;
  }
`

const NavTrigger = styled.button`
  position: relative;
  background: none;
  padding: 1rem;
  font-size: 1.5rem;
  margin: 0;
  border: none;
  float: right;
  color: white;
  
  @media (min-width: 730px) {
    display: none;
  }
`

const SiteHeader = ({ showNav = true }) => {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [isNavOpen, toggleNav] = useState(false)
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
    <Header isCondensed={isCondensed} isNavOpen={isNavOpen}>
      <HeaderContainer isCondensed={isCondensed}>
        <Logo href="/">
          <img src="/images/main-logo.png" alt="" />
        </Logo>
        {showNav && <>
          <Nav isNavOpen={isNavOpen}>
            <Link href="">About</Link>
            <Link href="">Skills</Link>
            <Link href="">Experience</Link>
            <FeaturedLink href="">Contact Me</FeaturedLink>
          </Nav>
          <NavTrigger onClick={() => toggleNav(!isNavOpen)}><i className={`fa fa-${isNavOpen ? 'times' : 'bars'}`} /></NavTrigger>
        </>}
      </HeaderContainer>
    </Header>
  )
}

export default SiteHeader
