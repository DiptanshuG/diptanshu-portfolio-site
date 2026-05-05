import { useCallback, useEffect, useState } from 'react'

const useResponsiveSize = () => {
  const getWindowSize = useCallback(() => {
    if (typeof window === 'undefined') {
      return { width: 0, height: 0 }
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    }
  }, [])

  const [size, setSize] = useState(getWindowSize)

  const handleResize = useCallback(() => {
    setSize(getWindowSize)
  }, [getWindowSize])

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return { width: size.width, height: size.height }
}

export default useResponsiveSize