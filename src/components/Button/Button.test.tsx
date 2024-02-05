import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

const label = '__LABEL__'
const href = '__HREF__'

describe('atoms › Button', () => {
  beforeAll(() => {
    jest.resetAllMocks()
  })

  it('renders children as the button label', async () => {
    render(<Button>{label}</Button>)

    screen.getByText(label)
  })

  describe('element', () => {
    it('renders an "a" tag if "href" is provided', () => {
      render(<Button href={href}>{label}</Button>)

      const elButton = screen.getByText(label)

      expect(elButton.tagName).toBe('A')
    })

    it('renders a "button" tag if "href" is not provided', () => {
      render(<Button>{label}</Button>)

      const elButton = screen.getByText(label)

      expect(elButton.tagName).toBe('BUTTON')
    })
  })
})
