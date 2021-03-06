import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { experience } from '../../data'
import { List, ListItem } from '../List'

const Experiences = styled.div`
  position: relative;
  border-left: 0.25rem solid #eceff1;
  padding-left: 2rem;
`

const Experience = styled.div`
  position: relative;
  margin-bottom: 4rem;
  top: -0.2rem;
  
  h3 {
    font-size: 2.25rem;
    font-weight: 700;
    margin: 0;
  }
  
  &:before {
    content: '';
    border: 4px solid #FF1361;
    position: absolute;
    left: -2.125rem;
    top: 0.2rem;
    transform:translate(-50%, 0);
    background: white;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
`

const Date = styled.p`
  border-radius: 1rem;
  margin: 0;
  color: #FF1361;
  font-weight: 700;
`

const Position = styled.p`
  margin-top: 0;
`

const CompanyLogo = styled.div`
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

const Tag = styled.li`
  display: inline-block;
  font-size: 0.8rem;
  padding: 0.1rem 0.5rem;
  color: #423e78;
  font-weight: 700;
  background: #eceff1;
  margin-right: 0.2rem;
  border-radius: 1rem
`

const Tags = styled.ul`
  list-style-type: none;
  margin: 0 0 1rem 0;
  padding: 0;
`

const ExperienceComponent = () => <>
  <h2>Experience</h2>
  <Experiences>
    {experience.map(({
       from,
       to,
       companyName,
       companyLogo,
       position,
       skills,
      tags
     }) => (
      <Experience key={companyName}>
        <Date>{moment(from, 'MM/YYYY').format('MMMM YYYY')} - {to ? moment(to, 'MM/YYYY').format('MMMM YYYY') : 'Present day'}</Date>
        {companyLogo && <CompanyLogo>
          <img src={companyLogo} alt={`${companyName} Logo`}/>
        </CompanyLogo>}
        <h3>{companyName}</h3>
        <Position><strong>{position}</strong></Position>
        {tags && <Tags>{tags.map(tag => <Tag key={`${companyName}${tag}`}>{tag}</Tag>)}</Tags>}
        {typeof skills === 'string' ? skills : <List>
          {skills && skills.map(skill => <ListItem key={skill}>{skill}</ListItem>)}
        </List>}
      </Experience>
    ))}
  </Experiences>
</>

export default ExperienceComponent
