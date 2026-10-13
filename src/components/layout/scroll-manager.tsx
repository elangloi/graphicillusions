import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router'

function scrollToHash(hash: string) {
  const target = () => document.getElementById(decodeURIComponent(hash.slice(1)))
  // Wait a frame so a newly navigated page has rendered, then try once more
  // after the mobile menu's close animation releases its scroll lock.
  requestAnimationFrame(() => target()?.scrollIntoView({ behavior: 'smooth', block: 'start' }))
  window.setTimeout(() => {
    const el = target()
    if (el && Math.abs(el.getBoundingClientRect().top) > 120) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, 350)
}

/**
 * Scrolls to the #hash target on every navigation that has one, including a
 * repeat click on the same link, and to the top when moving to a new page.
 */
export function ScrollManager() {
  const { key, pathname, hash } = useLocation()
  const previousPath = useRef(pathname)

  useEffect(() => {
    const changedPage = previousPath.current !== pathname
    previousPath.current = pathname
    if (hash) scrollToHash(hash)
    else if (changedPage) window.scrollTo(0, 0)
  }, [key, pathname, hash])

  return null
}
