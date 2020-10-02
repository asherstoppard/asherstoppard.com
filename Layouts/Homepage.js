import React from 'react'
import {
  CallToAction,
  Container,
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
      <h2>Key Events</h2>
      <ul>
        <li>
          Experience integrating internal systems with ReactJS and MaterialUI for
          a FTSE250 company with over £150M in order throughput each month.
        </li>
        <li>
          Worked across five blue chip organisations on migrations or greenfield
          React projects.
        </li>
        <li>
          Previously integrated CI/CD pipelines with Terraform in AWS on
          server-less technology for fulfilment chains in a large retail project
          with resilience to cope with over 15,000 orders a minute.
        </li>
      </ul>

      <h2>Skills</h2>
      <ul>
        <li>
          Javascript (ES6/ES7) with Flow and Typescript transpiled with Babel
          NodeJS, Express and Koa
        </li>
        <li>Module bundling with Webpack and Parcel</li>
        <li>Monorepo configuration with Lerna and Yarn Workspaces</li>
        <li>
          React and frameworks including NextJS, AfterJS and Razzle served by
          Express/Koa
        </li>
        <li>
          Building reusable and responsive React components using
          styled-components and emotion (Previous experience with CSS3/Sass/SCSS
          and Less in OOCSS and BEM)
        </li>
        <li>Experience with Vue and Angular 1/2/4</li>
        <li>Postgres, DynamoDB, MongoDB and Firebase</li>
        <li>
          IAC experience with Cloudformation and Terraform on AWS, DigitalOcean
          and Zeit
        </li>
        <li>
          GraphQL configuration implementation using Apollo (Previous experience
          in RESTful micro services) Package management tools including NPM and
          Yarn with Vedaccio
        </li>
        <li>
          Unit testing utilising Jest, React testing library with experience in
          Mocha, Chai, Karma and Jasmine
        </li>
        <li>
          Semantically correct, SEO friendly, accessible page structuring with
          HTML5, Microformats and Aria accessibility attributes to AA and AAA
          WCAG2.0 standards
        </li>
        <li>
          GIT Repository Experience in GitHub and GitLab with a working knowledge
          of GitFlow CI/CD pipeline configuration withDocker, Jenkins, TravisCI
          and CircleCI
        </li>
        <li>
          Agile working methods with the Atlassian stack (Jira, Confluence and
          Slack)
        </li>
        <li>UX/UI and wire-framing and design experience</li>
      </ul>
      <h2>Experience</h2>


      <h2>Services</h2>
      <ul>
        <li>Web Applications</li>
        <li>Mobile Applications</li>
        <li>Components</li>
        <li>Infrastructure</li>
        <li>Testing &amp; Auditing</li>
      </ul>
    </Container>
    <CallToAction />
    <SiteFooter />
  </Layout>
)

export default Homepage
