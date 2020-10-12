import React from 'react'
import { Helmet } from 'react-helmet'
import {
  Achievements,
  CallToAction,
  Container,
  Experience,
  Layout,
  SiteHeader,
  SiteFooter,
  Skills,
  Splash
} from '../components'

const Homepage = () => (
  <Layout
    title="Asher Stoppard - Javascript Consultant specialising in isomorphic applications"
    description="I’m a software engineering consultant specialising in isomorphic javascript applications, centralisation and componentisation, architecture, CI/CD and testing."
    isInnerPage={false}
  >
    <Helmet>
      <script type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "Corporation",
          "name": "Asher Stoppard",
          "url": "https://www.asherstoppard.com/",
          "logo": "https://www.asherstoppard.com/images/external-logo.jpg",
          "sameAs": [
          "https://www.asherstoppard.com/",
          "https://github.com/asherstoppard/",
          "https://www.linkedin.com/in/asherstoppard"
          ]
        }`}
      </script>
    </Helmet>
    <SiteHeader />
    <Splash message="Currently available from December 21st, 2020." />
    <Container>
      <h2>About</h2>
      <p>
        <strong>
          I’m a 30 year old contract Software Engineer specialising in Javascript
          and NodeJS with expertise in user-centered design, visual design,
          interaction design, information architecture, accessibility and web
          standards.
        </strong>
      </p>
      <p>
        I have over ten years experience in both website design and software
        development. I am a data driven designer and developer, shaping user
        experiences based on research and analysis of quantitative and qualitative
        data. I combine this analytical approach with UI prototyping and UX
        experience to create visually engaging and highly usable products to
        industry accessibility standards.
      </p>
      <Achievements />
      <Skills />
      <Experience />


      {/*<h2>Services</h2>*/}
      {/*<List>*/}
      {/*  <ListItem>Web Applications</li>*/}
      {/*  <ListItem>Mobile Applications</li>*/}
      {/*  <ListItem>Components</li>*/}
      {/*  <ListItem>Infrastructure</li>*/}
      {/*  <ListItem>Testing &amp; Auditing</li>*/}
      {/*</ul>*/}
    </Container>
    <CallToAction />
    <SiteFooter />
  </Layout>
)

export default Homepage
