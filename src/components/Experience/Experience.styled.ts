import styled from 'styled-components'

export const SExperience = styled.div`
  position: relative;
  border-left: 0.25rem solid #eceff1;
  padding-left: 2rem;
`

export const SExperienceEntry = styled.div`
  position: relative;
  margin-bottom: 4rem;
  top: -0.2rem;

  h3 {
    font-size: 2.25rem;
    font-weight: 600;
    margin: 0;
  }

  &:before {
    content: '';
    border: 4px solid #ff1361;
    position: absolute;
    left: -2.125rem;
    top: 0.2rem;
    transform: translate(-50%, 0);
    background: white;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
`

export const SDate = styled.p`
  border-radius: 1rem;
  margin: 0;
  color: #ff1361;
  font-weight: 600;
`

export const SPosition = styled.p`
  margin-top: 0;
`

export const SCompanyLogo = styled.div`
  position: absolute;
  right: 0;
  top: 1rem;
  width: 15rem;
  text-align: right;

  img {
    display: none;
    max-height: 5rem;

    @media (min-width: 730px) {
      display: inline;
    }
  }
`

export const STag = styled.li`
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.1rem 0.5rem;
  color: #423e78;
  font-weight: 700;
  background: #eceff1;
  margin-right: 0.2rem;
  border-radius: 1rem;
`

export const STags = styled.ul`
  list-style-type: none;
  margin: 0 0 1rem 0;
  padding: 0;
`
