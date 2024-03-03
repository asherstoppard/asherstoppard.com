import { PropsWithChildren } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { mainTheme } from './themes'

const Globals = createGlobalStyle`
  ${normalize()};
  
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }
  
  body {
    font-weight: 200;
    color: #263238;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 200;
    font-size: 3rem;
    color: #231557;
  }
  
  strong,
  b {
    font-weight: 700;
  }
  
  img {
    max-width: 100%;
    vertical-align: middle;
  }
  
  a {
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.brandPrimary};
    font-weight: 600;
  }
`

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={mainTheme}>
    <>
      <Globals />
      {children}
    </>
  </ThemeProvider>
)
