import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const SplashBackground = styled.div`
  position: relative;
  background: url('images/splash-background.jpg') center center no-repeat;
  background-size: cover;
  height: 100vh;
  width: 100%;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 75vh;
    left: -50vw;
    width: 200vw;
    height: 100vh;
    transform: rotate(-10deg);
    background: white;
  }
`

const SplashContent = styled.div`
  position: relative;
  top: 12vh;
  color: white;
  width: 100%;
  left: 0;
  padding: 2rem 2rem 0;
  z-index: 3;

  p {
    font-size: 1.5rem;
  }

  h1 {
    font-weight: 300;

    strong {
      display: block;
    }
  }

  @media (min-width: 730px) {
    top: 15vh;
    width: 45vw;
    padding: 2rem;

    h1 {
      font-size: 3.5vw;
      line-height: 1.1;
      letter-spacing: -2px;

      strong {
        font-size: 4vw;
      }
    }
  }
`

const SplashImage = styled.img`
  top: 15vh;
  position: relative;
  z-index: 10;

  @media (min-width: 730px) {
    position: absolute;
    left: 45vw;
    max-height: 80vh;
    width: auto;
  }
`

const Splash = ({ message, showCta = true }) => (
  <SplashBackground>
    <SplashContent>
      <h1>
        <strong>Asher Stoppard.</strong> Javascript Consultant.
      </h1>
      <p>
        I’m a contract software engineer specialising in isomorphic javascript
        applications, centralisation and componentisation, architecture, CI/CD
        and testing.
      </p>
      <p>
        <strong>{ message }</strong>
      </p>
      {showCta && <p>
        <Button href="">Contact Me</Button>
      </p>}
    </SplashContent>
    <SplashImage src="images/splash-image.png" alt="" />
  </SplashBackground>
)

export default Splash
