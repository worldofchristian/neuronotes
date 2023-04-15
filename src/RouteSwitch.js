import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Explore from './components/Explore';
import LifeonEarth from './components/Earth/LifeonEarth';
import VisualSystem from './components/Brain/VisualSystem';
import AuditorySystem from './components/Brain/AuditorySystem';
import Olfaction from './components/Brain/Olfaction'

const RouteSwitch = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/lifeonearth' element={<LifeonEarth />} />
        <Route path='/visualsystem' element={<VisualSystem />} />
        <Route path='/auditorysystem' element={<AuditorySystem />} />
        <Route path='/olfaction' element={<Olfaction />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default RouteSwitch