import styled, { css } from 'styled-components'

export const SHeader = styled.header<{ $isCondensed?: boolean; $isNavOpen?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  padding: 2rem 0;
  transition: padding 0.5s ease-in-out;

  ${({ $isCondensed }) =>
    $isCondensed &&
    css`
      padding: 1rem 0;
    `}

  ${({ $isCondensed, $isNavOpen }) =>
    ($isCondensed || $isNavOpen) &&
    css`
      background: url('/images/gradient-background.jpg') top center no-repeat;
      background-size: cover;
    `}
`

export const SHeaderContainer = styled.div`
  padding: 0 2rem;
`

export const SLogo = styled.a`
  display: inline-block;
  width: 2.5rem;
  float: left;
`

export const SNav = styled.nav<{ $isNavOpen?: boolean }>`
  display: none;
  width: 100%;
  clear: both;
  position: relative;
  top: 1rem;

  ${({ $isNavOpen }) =>
    $isNavOpen &&
    css`
      display: block;
      border-top: 1px solid rgba(255, 255, 255, 0.3);
    `};

  @media (min-width: 730px) {
    display: block;
    width: auto;
    float: right;
    padding-left: 2rem;
    background: none;
    top: auto;
    border-top: none;
    clear: none;
  }
`

export const SLink = styled.a`
  display: inline-flex;
  width: 100%;
  padding: 0.7rem 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  color: white;

  span {
    display: block;
    margin-right: 0.25rem;
    text-decoration: none;
  }

  strong {
    font-weight: 600;
  }

  @media (min-width: 730px) {
    float: left;
    padding: 1.2rem 1rem 1rem;
    color: white;
    border-bottom: none;
    width: auto;
  }

  &:hover strong {
    text-decoration: underline;
  }
`

export const SNavTrigger = styled.button`
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
