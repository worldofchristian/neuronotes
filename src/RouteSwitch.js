import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import VisualSystem from './components/VisualSystem';

const RouteSwitch = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/visualsystem' element={<VisualSystem />} />
      </Routes>
    </BrowserRouter>
    </>
  );
};

export default RouteSwitch