import { useState, useEffect, useCallback, useRef } from 'react'

const initSize = {
  width: 0,
  height: 0,
}

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(initSize)
  const windowSizeRef = useRef(initSize)

  windowSizeRef.current = windowSize

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      handleResize()

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])
  return windowSizeRef.current
}
