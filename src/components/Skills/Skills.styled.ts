import styled, { css } from 'styled-components'

export const SSkills = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 600;
  }
`

export const SSkillItems = styled.ul<{ isVisible?: boolean }>`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
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

export const SSkillTitle = styled.button<{ isVisible?: boolean }>`
  position: relative;
  appearance: none;
  font-weight: inherit;
  font-size: inherit;
  font-family: inherit;
  background: none;
  margin: 0;
  padding: 0 0 0 2rem;
  border: none;
  width: 100%;
  text-align: left;

  &:hover span {
    left: -0.25rem;
  }

  span {
    position: absolute;
    left: -0.5rem;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 2rem;
    transition: 0.3s ease-in-out;

    ${({ isVisible }) =>
      isVisible &&
      css`
        transform: rotate(90deg) translate(-50%, 0);
      `}
  }
`
