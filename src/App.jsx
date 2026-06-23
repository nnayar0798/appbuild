import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './Landing'
import Onboarding from './pages/Onboarding';
import Matched from './pages/Matched';
import Feed from './pages/Feed';
import './index.css';
 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"         element={<Landing />} />
        <Route path="/join"     element={<Onboarding />} />
        <Route path="/matched"  element={<Matched />} />
        <Route path="/feed"     element={<Feed />} />
        <Route path="*"         element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
