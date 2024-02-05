const millisecondsInOneCalendarYear = 365 * 24 * 60 * 60 * 1000

export const convertMillisecondsToYears = (milliseconds: number): number => {
  const years = milliseconds / millisecondsInOneCalendarYear

  return Math.floor(years)
}
