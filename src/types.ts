export interface ISkill {
  name: string
  skills: string[]
}

export interface IExperience {
  isMainConsultancy: boolean
  from: string
  to: string
  companyName: string
  position: string
  companyLogo: string
  tags: string[]
  location: string
  skills: string | string[]
}
