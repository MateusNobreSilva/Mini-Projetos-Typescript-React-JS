import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './Pages/Home';
import BackgroundColor from './Pages/BackgroundColor';
import Contador from './Pages/Contador';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/BackgroundColor" element={<BackgroundColor />} />
        <Route path="/Contador" element={<Contador />} />
        {/* <Route path="users/*" element={<Users />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
