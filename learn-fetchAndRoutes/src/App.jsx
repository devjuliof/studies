import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Contato from './components/Contato';
import Header from './components/Header';
import './components/App.css';
import ProdutoDesc from './components/ProdutoDesc';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contato" element={<Contato />} />
        <Route path="produto/:id" element={<ProdutoDesc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
