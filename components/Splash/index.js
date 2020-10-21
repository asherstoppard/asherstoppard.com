import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const SplashBackground = styled.div`
  @keyframes SplashBackground {
      0%{background-position:left center}
      50%{background-position: right center}
      100%{background-position: left center}
  }

  position: relative;
  background-image: linear-gradient(
    30deg,
    #231557 0%,
    #44107A 5%,
    #FF1361 28%,
    #ff6431 45%,
    #ff6431 53%,
    #FF1361 70%,
    #44107A 95%,
    #231557 100%
  );
  background-position: left center;
  background-size: 400% 100%;
  height: auto;
  padding-bottom: 20vh;
  width: 100%;
  overflow: hidden;
  animation: SplashBackground 45s linear infinite;

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
  margin-top: 3rem;
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

const Splash = ({ message }) => (
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
      <ButtonContainer>
        <Button href="/documents/Asher%20Stoppard%20-%20CV%20-%202020.pdf" target="_blank" rel="noopener noreferrer"><i className="fa fa-file-pdf-o" /> Download My CV</Button>
      </ButtonContainer>
    </SplashContent>
    <SplashImage src="images/splash-image.png" alt="" />
  </SplashBackground>
)

export default Splash
