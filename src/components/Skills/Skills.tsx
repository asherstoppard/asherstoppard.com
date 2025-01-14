import { FC, Fragment, useState } from 'react'
import { useFetch } from '@/hooks'
import { ISkill } from '@/types'
import { SSkillItem, SSkillItems, SSkills, SSkillTitle } from './Skills.styled'

export const Skills: FC = () => {
  const { data, error, loading } = useFetch<ISkill[]>('/api/v1/skills')
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({})

  if (loading) return 'Loading...'
  if (!data || error) return null

  const toggleSectionVisibility = (sectionName: string) => {
    setVisibleSections((s) => ({
      ...s,
      [sectionName]: !s[sectionName],
    }))
  }

  return (
    <SSkills>
      <h2>Skills</h2>
      {data.map(({ name, skills }) => (
        <Fragment key={name}>
          <h3>
            <SSkillTitle
              onClick={() => toggleSectionVisibility(name)}
              isVisible={visibleSections[name]}
            >
              {name} <span className="material-symbols-outlined">chevron_right</span>
            </SSkillTitle>
          </h3>
          <SSkillItems isVisible={visibleSections[name]}>
            {skills.map((skill) => (
              <SSkillItem key={`${name} ${skill}`}>{skill}</SSkillItem>
            ))}
          </SSkillItems>
        </Fragment>
      ))}
    </SSkills>
  )
}
