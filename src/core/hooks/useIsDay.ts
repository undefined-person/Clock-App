import { timeAPI } from '../services'
import { getIsDay } from '../utils'

export const useIsDay = () => {
  const { data } = timeAPI.useFetchTimeQuery()

  const isDay = getIsDay(data!.datetime.hour)

  return {
    isDay,
    stringValue: isDay ? 'day' : 'night',
  }
}
