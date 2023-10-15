import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VisualSystem from './components/VisualSystem';
import AuditorySystem from './components/AuditorySystem'
import StatisticalTests from './components/StatisticalTests';
import OlfactorySystem from './components/OlfactorySystem';


const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/visualsystem' element={<VisualSystem />} />
        <Route path='/auditorysystem' element={<AuditorySystem />} />
        <Route path='/statisticaltests' element={<StatisticalTests />} />
        <Route path='/olfactorysystem' element={<OlfactorySystem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch