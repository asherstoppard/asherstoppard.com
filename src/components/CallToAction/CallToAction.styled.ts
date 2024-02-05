import styled from 'styled-components'

export const SCallToActionContainer = styled.div`
  overflow: hidden;
  text-align: center;
  position: relative;
  padding: 8rem 0 4rem;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    z-index: 1;
    left: -50vw;
    width: 200vw;
    height: 100vh;
    transform: rotate(-10deg);
    background: #eceff1;
  }
`

export const SCallToAction = styled.div`
  margin: 0 auto;
  width: 80%;
  position: relative;
  padding: 4rem 2rem;
  background: white;
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  z-index: 2;

  h2 {
    font-weight: 300;
    font-size: 2.5rem;
    margin: 0 0 0.5rem;
  }
`
