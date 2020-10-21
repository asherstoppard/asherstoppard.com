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
    background-image: linear-gradient(90deg, #231557 -1%, #44107A 10%, #FF1361 67%, #ffa631 100%);
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

const Nav = styled.nav`
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-image: linear-gradient(90deg, #231557 -1%, #44107A 10%, #FF1361 67%, #ffa631 100%);
  
  ${({ isNavOpen }) => isNavOpen && `
    display: block;
    border-top: 1px solid rgba(255, 255, 255, 0.3);
  `};

  @media (min-width: 730px) {
    display: block;
    width: auto;
    position: relative;
    float: right;
    padding-left: 2rem;
    background: none;
    top: auto;
    border-top: none;
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
  
  &:hover {
    text-decoration: underline;
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

const SiteHeader = () => {
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
        <Nav isNavOpen={isNavOpen}>
          <Link href="tel:+447398767388"><i className="fa fa-tablet" /> +44 7398 767 388</Link>
          <Link href="mailto:asher@asherstoppard.com"><i className="fa fa-envelope-o" /> asher@asherstoppard.com</Link>
        </Nav>
        <NavTrigger onClick={() => toggleNav(!isNavOpen)}><i className={`fa fa-${isNavOpen ? 'times' : 'bars'}`} /></NavTrigger>
      </HeaderContainer>
    </Header>
  )
}

export default SiteHeader
