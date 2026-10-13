import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

afterEach(() => cleanup())

// jsdom gaps that Radix primitives touch.
window.scrollTo = () => {}
Element.prototype.scrollIntoView = () => {}
