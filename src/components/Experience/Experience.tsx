import { useFetch } from '@/hooks'
import { IExperience } from '@/types'
import dayjs from 'dayjs'
import {
  SCompanyLogo,
  SDate,
  SExperience,
  SExperienceEntry,
  SPosition,
  STag,
  STags,
} from './Experience.styled'
import { List } from '../List'
import { ListItem } from '../ListItem'

export const Experience = () => {
  const { data, error, loading } = useFetch<IExperience[]>('/api/v1/experience')

  if (loading) return 'Loading...'
  if (!data || error) return null

  return (
    <>
      <h2>Experience</h2>
      <SExperience>
        {data.map(({ from, to, companyName, companyLogo, position, skills, tags }) => (
          <SExperienceEntry key={companyName}>
            <SDate>
              {dayjs(from, 'MM/YYYY').format('MMMM YYYY')} -{' '}
              {to ? dayjs(to, 'MM/YYYY').format('MMMM YYYY') : 'Present day'}
            </SDate>
            {companyLogo && (
              <SCompanyLogo>
                <img src={companyLogo} alt={`${companyName} Logo`} />
              </SCompanyLogo>
            )}
            <h3>{companyName}</h3>
            <SPosition>
              <strong>{position}</strong>
            </SPosition>
            {tags && (
              <STags>
                {tags.map((tag) => (
                  <STag key={`${companyName}${tag}`}>{tag}</STag>
                ))}
              </STags>
            )}
            {typeof skills === 'string' ? (
              skills
            ) : (
              <List>
                {skills && skills.map((skill) => <ListItem key={skill}>{skill}</ListItem>)}
              </List>
            )}
          </SExperienceEntry>
        ))}
      </SExperience>
    </>
  )
}
