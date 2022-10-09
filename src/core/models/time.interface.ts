import { DateTime } from 'luxon'

export interface ITime {
  datetime: DateTime
  abbreviation: string
  day_of_week: number
  day_of_year: number
  timezone: string
  week_number: number
}
