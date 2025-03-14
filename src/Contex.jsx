import React, { createContext, useContext, useState } from 'react'

const CarrinhoContext = createContext()

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState(() => {
    const carrinhoSalvo = localStorage.getItem('carrinho')
    
    return carrinhoSalvo ? JSON.parse(carrinhoSalvo) : []
  })

  const adicionarNoCarrinho = (item) => {
    const carrinhoAtualizado = [...carrinho, item]
    setCarrinho(carrinhoAtualizado)
    
    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtualizado))
  }

  const removerDoCarrinho = (name) => {
    const carrinhoAtualizado = carrinho.filter(item => item.name !== name)
    setCarrinho(carrinhoAtualizado)

    localStorage.setItem('carrinho', JSON.stringify(carrinhoAtualizado))
  }

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarNoCarrinho, removerDoCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  )
}

export const useCarrinho = () => {
  return useContext(CarrinhoContext)
}
