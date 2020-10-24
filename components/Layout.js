import React from 'react'
import T from 'prop-types'
import Head from './Head'
import Theme from './Theme'

const Layout = ({ children, description, title, isHomepage = false }) => (
  <main>
    <Theme>
      <>
        <Head title={title} description={description} isHomepage={isHomepage} />
        {children}
      </>
    </Theme>
  </main>
)

Layout.propTypes = {
  children: T.node.isRequired,
  title: T.string,
}

Layout.defaultProps = {
  title: 'Javascript and NodeJS contractor, Nottingham - Asher Stoppard',
}

export default Layout
