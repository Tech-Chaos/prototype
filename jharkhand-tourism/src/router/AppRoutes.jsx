import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import PlacePage from '../pages/JoannaFalls'
import JharkhandLandingPage from '../pages/LandingPage'
import Bazaar from '../pages/Bazaar'
import Itinerary from '../pages/Iternary'
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<JharkhandLandingPage />} />
        <Route path="/bazaar" element={<Bazaar />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/place/:id" element={<PlacePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes