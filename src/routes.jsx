import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Store from './pages/store'
import Catalog from './pages/catalog'
import About from './pages/about'
import Contact from './pages/contact'
import Carrinho from './pages/cart'

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Store />} path="/" exact />
        <Route element={<Catalog />} path="/catalogo" exact />
        <Route element={<About />} path="/sobre" exact />
        <Route element={<Contact />} path="/contato" exact />
        <Route element={<Carrinho />} path="/carrinho" exact />
      </Routes>
    </BrowserRouter>
  )
}

export default Rotas