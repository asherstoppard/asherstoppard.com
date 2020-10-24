import React, { Fragment } from 'react'
import styled from 'styled-components'
import { skills } from '../../data'

const Skills = styled.div`
  h3 {
    font-size: 1.5rem;
    font-weight: 700;
  }
`

const SkillItems = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid ${({ theme }) => theme.colors.light};
  border-top: 1px solid ${({ theme }) => theme.colors.light};
`

const SkillItem = styled.li`
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

const SkillsComponent = () => (
  <Skills>
    <h2>Skills</h2>
    {skills.map(({ name, skills: skillItems }) => <Fragment key={name}>
        <h3>{name}</h3>
        <SkillItems>
          {skillItems.map(skill => <SkillItem key={`${name} ${skill}`}>{skill}</SkillItem>)}
        </SkillItems>
      </Fragment>
    )}
  </Skills>
)

export default SkillsComponent
