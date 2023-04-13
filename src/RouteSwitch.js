import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Explore from './components/Explore';
import VisualSystem from './components/VisualSystem';
import AuditorySystem from './components/AuditorySystem';
import Olfaction from './components/Olfaction'

const RouteSwitch = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/visualsystem' element={<VisualSystem />} />
        <Route path='/auditorysystem' element={<AuditorySystem />} />
        <Route path='/olfaction' element={<Olfaction />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteSwitch