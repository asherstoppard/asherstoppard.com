import styled from 'styled-components'

export const SSkills = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`

export const SSkillItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid ${({ theme }) => theme.colors.light};
  border-top: 1px solid ${({ theme }) => theme.colors.light};
`

export const SSkillItem = styled.li`
  border-right: 1px solid ${({ theme }) => theme.colors.light};
  border-bottom: 1px solid ${({ theme }) => theme.colors.light};
  margin: 0;
  width: 100%;
  padding: 2rem;
  text-align: center;

  @media (min-width: 480px) {
    width: 50%;
  }

  @media (min-width: 768px) {
    width: 33.333%;
  }

  @media (min-width: 1000px) {
    width: 25%;
  }
`
