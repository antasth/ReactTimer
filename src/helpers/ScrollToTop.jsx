import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToTop } from '../utils/pageFunctions'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    scrollToTop()
  }, [pathname])

  return null
}

export { ScrollToTop }
