import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from './layouts/MainLayout'
import { AboutPage } from './pages/AboutPage'
import { CasePage } from './pages/CasePage'
import { ContactPage } from './pages/ContactPage'
import { FAQPage } from './pages/FAQPage'
import { HomeProductPage } from './pages/HomeProductPage'
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage'
import { TermsOfServicePage } from './pages/TermsOfServicePage'
import { PricingPage } from './pages/PricingPage'
import { WorkPage } from './pages/WorkPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomeProductPage />} />
          <Route path="priser" element={<PricingPage />} />
          <Route path="kontor" element={<WorkPage />} />
          <Route path="work" element={<Navigate to="/kontor" replace />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="case" element={<CasePage />} />
          <Route path="reel-estate" element={<AboutPage />} />
          <Route path="kontakt" element={<ContactPage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="anvandarvillkor" element={<TermsOfServicePage />} />
          <Route path="integritet" element={<PrivacyPolicyPage />} />
          <Route
            path="integritetspolicy"
            element={<Navigate to="/integritet" replace />}
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
