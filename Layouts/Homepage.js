import React from 'react'
import {
  CallToAction,
  Container,
  Experience,
  Layout,
  List,
  ListItem,
  Splash,
  SiteHeader,
  SiteFooter,
  Skills
} from '../components'

const Homepage = () => (
  <Layout
    title="Asher Stoppard - Javascript Consultant specialising in isomorphic applications"
    isInnerPage={false}
  >
    <SiteHeader />
    <Splash message="Currently available from December 21st, 2020." />
    <Container>
      <h2>About</h2>
      <p>
        <strong>
          I’m a 29 year old contract Software Engineer specialising in Javascript
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
      <h2>Achievements</h2>
      <List>
        <ListItem>
          Integrated internal systems with ReactJS and MaterialUI for
          a FTSE250 company with over £150M in order throughput each month.
        </ListItem>
        <ListItem>
          Worked across five blue chip organisations on migrations or greenfield
          React projects.
        </ListItem>
        <ListItem>
          Integrated CI/CD pipelines with Terraform in AWS on
          server-less technology for fulfilment chains in a large retail project
          with resilience to cope with over 15,000 orders a minute.
        </ListItem>
        <ListItem>
          Worked as a technical lead and architect, upskilling six teams to deliver an eight figure software project for a household name.
        </ListItem>
      </List>
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
