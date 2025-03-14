import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'

import Store from './pages/store'
import Catalog from './pages/catalog'
import About from './pages/about'
import Contact from './pages/contact'
import { CarrinhoProvider } from './Contex'
import Superiores from './pages/store/superiores'
import Inferiores from './pages/store/inferiores'
import Pay from './pages/pay'

const Rotas = () => {
  return (
    <CarrinhoProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Store />} path="/" />
          <Route element={<Superiores />} path="/superiores" />
          <Route element={<Inferiores />} path="/inferiores" />
          <Route element={<Catalog />} path="/catalogo" />
          <Route element={<About />} path="/sobre" />
          <Route element={<Contact />} path="/contato" />
          <Route element={<Pay />} path='/pagamento'/>
        </Routes>
      </BrowserRouter>
    </CarrinhoProvider>
  )
}

export default Rotas