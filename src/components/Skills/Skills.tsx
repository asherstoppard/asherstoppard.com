import { FC, Fragment } from 'react'
import { useFetch } from '@/hooks'
import { SSkillItem, SSkillItems, SSkills } from './Skills.styled'
import { ISkill } from '@/types'

export const Skills: FC = () => {
  const { data, error, loading } = useFetch<ISkill[]>('/api/v1/skills')

  if (loading) return 'Loading...'
  if (!data || error) return null

  return (
    <SSkills>
      <h2>Skills</h2>
      {data.map(({ name, skills }) => (
        <Fragment key={name}>
          <h3>{name}</h3>
          <SSkillItems>
            {skills.map((skill) => (
              <SSkillItem key={`${name} ${skill}`}>{skill}</SSkillItem>
            ))}
          </SSkillItems>
        </Fragment>
      ))}
    </SSkills>
  )
}
