import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VisualSystem from './components/VisualSystem';
import AuditorySystem from './components/AuditorySystem'
import HypothesisTesting from './components/HypothesisTesting';

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/visualsystem' element={<VisualSystem />} />
        <Route path='/auditorysystem' element={<AuditorySystem />} />
        <Route path='/hypothesistesting' element={<HypothesisTesting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch