import { useEffect } from 'react'
import { useLocation } from 'react-router'

/** Scrolls to the #hash target after navigation, or to the top for a new page. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView()
      return
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
