import { convertMillisecondsToYears } from '../convertMillisecondsToYears'

export const getYearsPassedFromDate = (date: string): number => {
  const startDate = new Date(date).getTime()
  const now = new Date().getTime()
  const diff = now - startDate

  return convertMillisecondsToYears(diff)
}
