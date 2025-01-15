'use client'

import { Achievements, CallToAction, Container, Experience, Skills, Splash } from '@/components'
import { getYearsPassedFromDate, numberToWords } from '@/utils'

const HomePage = () => {
  const yearsExperience = getYearsPassedFromDate('01/01/2006')
  const yearsExperienceInWords = numberToWords(yearsExperience)

  return (
    <main>
      <Splash />
      <Container>
        <h2>About</h2>
        <p>
          <strong>
            I’m a contract Software Engineer specialising in Javascript and NodeJS with expertise in
            user-centered design, visual design, interaction design, information architecture,
            accessibility and web standards.
          </strong>
        </p>
        <p>
          I have over {yearsExperienceInWords} years experience in both website design and software
          development. I am a data driven designer and developer, shaping user experiences based on
          research and analysis of quantitative and qualitative data. I combine this analytical
          approach with UI prototyping and UX experience to create visually engaging and highly
          usable products to industry accessibility standards.
        </p>
        <Achievements />
        <Skills />
        <Experience />
      </Container>
      <CallToAction />
    </main>
  )
}

export default HomePage
