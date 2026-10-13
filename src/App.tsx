import { Route, Routes } from 'react-router'

import { SiteLayout } from '@/components/layout/site-layout'
import { CorporateHome } from '@/pages/corporate-home'
import { HowItWorks } from '@/pages/how-it-works'
import { LocalShop } from '@/pages/local-shop'
import { NotFound } from '@/pages/not-found'
import { Work } from '@/pages/work'

export function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<CorporateHome />} />
        <Route path="how-it-works" element={<HowItWorks />} />
        <Route path="work" element={<Work />} />
        <Route path="local-shop" element={<LocalShop />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
