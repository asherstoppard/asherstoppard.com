import React from 'react'
const ButtonContainer = styled.button`
  display: inline-block;
  position: relative;
  overflow: hidden;
  background: none;
  border: none;
  padding: 1rem 4rem;
  min-width: 15rem;
  border-radius: 5rem;
  font-weight: 600;
  color: white;
  background: ${({ theme }) => theme.colors.brandSecondary};
  font-family: ${({ theme }) => theme.base.fontFamily};
  transition: 0.3s ease-in-out;

  &:after {
    display: none;
  }
  
  &:hover {
    box-shadow: 0 0 0 5px rgba(26, 21, 84, 0.5);
    padding: 1rem 5rem 1rem 3rem;
    
    i {
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  
  i {
    position: absolute;
    right: 2rem;
    top: 0;
    transform: translate(0, -100%);
    margin-right: 0.5rem;
    color: rgb(255, 19, 97);
    transition: 0.3s ease-in-out;
  }
`

import styled from 'styled-components'

const LinkContainer = ButtonContainer.withComponent('a')

const Button = ({ children, href }) => {
  return href ? (
    <LinkContainer href={href}>{children}</LinkContainer>
  ) : (
    <ButtonContainer>{children}</ButtonContainer>
  )
}

export default Button
