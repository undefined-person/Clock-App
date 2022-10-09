import { useWindowSize } from './useWindowSize'
import { useIsDay } from './useIsDay'
import { backgroundData } from 'core/data'

export const useAppBackground = () => {
  const { width } = useWindowSize()
  const { stringValue } = useIsDay()

  let deviceType = 'lg'

  if (width <= 992 && width > 600) {
    deviceType = 'md'
  } else if (width <= 600) {
    deviceType = 'sm'
  }

  return backgroundData[deviceType][stringValue]
}
