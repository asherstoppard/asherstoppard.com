import React from 'react'
import T from 'prop-types'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import variables from './variables'

const Globals = createGlobalStyle`
	${normalize()};
	
	*,
	*:before,
	*:after {
		box-sizing: border-box;
	}

	body {
	  font: 300 1rem 'Open Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
		color: #263238;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
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

const Theme = ({ children }) => (
  <ThemeProvider theme={variables}>
    <>
      <Globals />
      {children}
    </>
  </ThemeProvider>
)

Theme.propTypes = {
  children: T.node.isRequired,
}

export default Theme
