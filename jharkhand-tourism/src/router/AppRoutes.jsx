import React from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import PlacePage from '../pages/PlacePage'
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/place/:id" element={<PlacePage />} />
      </Routes>
    </BrowserRouter>
  )
}
export default AppRoutes