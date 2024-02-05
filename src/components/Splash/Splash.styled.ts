import styled from 'styled-components'

export const SSplashBackground = styled.div`
  position: relative;
  background: url('/images/gradient-background.jpg') center center no-repeat;
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

export const SButtonContainer = styled.p`
  margin-top: 3rem;
`

export const SSplashContent = styled.div`
  position: relative;
  top: 12vh;
  color: white;
  width: 100%;
  left: 0;
  padding: 2rem 2rem 0;
  z-index: 3;

  p {
    font-size: 1.2rem;
    font-weight: 200;
  }

  h1 {
    color: ${({ theme }) => theme.colors.light};
    font-weight: 200;

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

      strong {
        font-size: 4vw;
      }
    }

    p {
      font-size: 1.25rem;
    }
  }
`

export const SSplashImage = styled.img`
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
