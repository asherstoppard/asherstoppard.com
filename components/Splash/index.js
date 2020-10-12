import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const SplashBackground = styled.div`
  position: relative;
  background: url('images/splash-background.jpg') center center no-repeat;
  background-size: cover;
  height: auto;
  padding-bottom: 20vh;
  width: 100%;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    bottom: -70vh;
    left: -50vw;
    width: 200vw;
    height: 100vh;
    transform: rotate(-10deg);
    background: white;
  }
  
  @media (min-width: 680px) {
    height: 100vh;

    &:after {
      top: 75vh;
      bottom: auto;
    }
  
  }
`

const ButtonContainer = styled.p`
  margin-top: 2rem;
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
    font-size: 1.2rem;
  }

  h1 {
    font-weight: 300;

    strong {
      display: block;
    }
  }
  
  ${Button} {
    margin-top: 3rem;
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
    
    p {
      font-size: 1.4rem;
    }
  }
`

const SplashImage = styled.img`
  top: 15vh;
  position: relative;
  z-index: 10;
  padding: 1rem;

  @media (min-width: 730px) {
    position: absolute;
    left: 45vw;
    max-height: 80vh;
    padding: 0;
  }
`

const Splash = ({ message, showCta = true }) => (
  <SplashBackground>
    <SplashContent>
      <h1>
        <strong>Asher Stoppard.</strong> Javascript Consultant.
      </h1>
      <p>
        I’m a software engineering consultant specialising in isomorphic javascript
        applications, centralisation, open-source, javascript components, architecture, CI/CD
        and testing.
      </p>
      <p>
        <strong>{ message }</strong>
      </p>
      {showCta && <ButtonContainer>
        <Button href="">Contact Me</Button>
      </ButtonContainer>}
    </SplashContent>
    <SplashImage src="images/splash-image.png" alt="" />
  </SplashBackground>
)

export default Splash
