import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

const ButtonContainer = styled.button`
  background: none;
  border: none;
  padding: 1rem 4rem;
  min-width: 15rem;
  border-radius: 5rem;
  font-weight: 600;
  color: white;
  background: ${({ theme }) => theme.colors.brandPrimary};
  font-family: ${({ theme }) => theme.base.fontFamily};

  &:after {
    display: none;
  }
`

const LinkContainer = ButtonContainer.withComponent('a')

const Button = ({ children, href }) => {
  return href ? (
    <LinkContainer href={href}>{children}</LinkContainer>
  ) : (
    <ButtonContainer>{children}</ButtonContainer>
  )
}

export default Button
