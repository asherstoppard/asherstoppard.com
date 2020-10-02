import React from 'react'
import {
  Layout,
  Splash,
  SiteHeader,
  SiteFooter
} from '../components'

const Homepage = () => (
  <Layout
    title="Asher Stoppard - Javascript Consultant specialising in isomorphic applications"
    isInnerPage={false}
  >
    <SiteHeader showNav={false} />
    <Splash message="New website coming soon." showCta={false} />
    <SiteFooter />
  </Layout>
)

export default Homepage
