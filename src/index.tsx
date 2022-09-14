import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Artigos from './paginas/artigos';
import Artigo from './paginas/artigo';
import Membros from './paginas/membros';
import Contato from './paginas/contato';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/paginas/artigos' element={<Artigos />} />
      <Route path='/paginas/:id' element={<Artigo />} />
      <Route path='/paginas/membros' element={<Membros />} />
      <Route path='/paginas/contato' element={<Contato />} />
    </Routes>
  </Router>
);