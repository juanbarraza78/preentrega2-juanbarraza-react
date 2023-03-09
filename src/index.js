import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contactos from './components/Contactos/Contactos';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <NavBar />

      <Routes>

        <Route exact path='/' element={<ItemListContainer />} />
        <Route exact path='/contactos' element={<Contactos />} />
        <Route exact path='/producto/:id' element={<ItemDetailContainer />} />

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);