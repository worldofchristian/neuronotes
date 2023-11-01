import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VisualSystem from './pages/VisualSystem';
import AuditorySystem from './pages/AuditorySystem'
import HypothesisTesting from './pages/HypothesisTesting';
import OlfactorySystem from './pages/OlfactorySystem';


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/visualsystem' element={<VisualSystem />} />
        <Route path='/auditorysystem' element={<AuditorySystem />} />
        <Route path='/hypothesistesting' element={<HypothesisTesting />} />
        <Route path='/olfactorysystem' element={<OlfactorySystem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch