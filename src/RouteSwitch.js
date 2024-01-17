import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VisualSystem from './pages/VisualSystem';
import AuditorySystem from './pages/AuditorySystem'
import HypothesisTesting from './pages/HypothesisTesting';
import OlfactorySystem from './pages/OlfactorySystem';
import Almost from './pages/Almost';


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/almost' element={<Almost />} />
        <Route path='/visualnetwork' element={<VisualSystem />} />
        <Route path='/auditorynetwork' element={<AuditorySystem />} />
        <Route path='/hypothesistesting' element={<HypothesisTesting />} />
        <Route path='/olfactorysystem' element={<OlfactorySystem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch