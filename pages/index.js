import React from 'react'
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
import moment from 'moment';
import { toWords } from 'number-to-words';

const Homepage = () => {
  const experienceStartDate = moment('01/01/2006', 'DD/MM/YYYY');
  const yearsExperienceInYears = moment().diff(experienceStartDate, 'years');
  const yearsExperience = toWords(yearsExperienceInYears);

  console.log('   _    _      _ _\n  | |  | |    | | |\n  | |__| | ___| | | ___\n  |  __  |/ _ \\ | |/ _ \\\n  | |  | |  __/ | | (_) |\n  |_|  |_|\\___|_|_|\\___(_)');

  return (
      <Layout
          title="Asher Stoppard - Javascript Consultant specialising in isomorphic applications"
          description="I’m a software engineering consultant specialising in isomorphic javascript applications, centralisation and componentisation, architecture, CI/CD and testing."
          isHomepage
      >
        <SiteHeader />
        <Splash message="Available from October 2023." showCta={false}/>
        <Container>
          <h2>About</h2>
          <p>
            <strong>
              I’m a contract Software Engineer specialising in Javascript
              and NodeJS with expertise in user-centered design, visual design,
              interaction design, information architecture, accessibility and web
              standards.
            </strong>
          </p>
          <p>
            I have over {yearsExperience} years experience in both website design and software
            development. I am a data driven designer and developer, shaping user
            experiences based on research and analysis of quantitative and qualitative
            data. I combine this analytical approach with UI prototyping and UX
            experience to create visually engaging and highly usable products to
            industry accessibility standards.
          </p>
          <Achievements />
          <Skills />
          <Experience />
        </Container>
        <CallToAction />
        <SiteFooter />
      </Layout>
  )
}

export default Homepage
