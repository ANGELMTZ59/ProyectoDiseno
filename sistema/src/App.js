import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import PaginaPrincipal from './components/PaginaPrincipal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/principal" element={<PaginaPrincipal />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
