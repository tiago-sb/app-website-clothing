import { use, useState } from 'react'
import { Nav } from 'react-bootstrap'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { PiShoppingCart } from 'react-icons/pi'
import { useCarrinho } from '../../Contex'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'

const Carrinho = () => {
  const { carrinho, removerDoCarrinho } = useCarrinho()
  
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const removedorDeItem = (id) => {
    console.log(id)
    // removerDoCarrinho(id)
  }

  const calculoTotalCarrinho = () => {
    
    const somaElementosCarrinhos = carrinho.reduce((acumulador, item) => {
      return acumulador + item.price 
    }, 0)

    return somaElementosCarrinhos
  }

  return (
    <>
      <Nav onClick={handleShow} style={{ cursor: 'pointer' }}>
        <PiShoppingCart />
        <span className='notification'>{carrinho.length}</span>
      </Nav>
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho de Compras</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {
            carrinho.length === 0 ? (
              <p>Carrinho vazio</p>
            ) : (
              carrinho.map((item) => (
                <Card style={{ marginBottom: 10 }}>
                  <CloseButton style={{ margin: 10, position: 'absolute', right: 0 }} 
                    onClick={() => removedorDeItem(item)}
                  />
                  <Card.Img variant="top" src={item.url} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>Tamanho: {item.tamanhoPeca}</ListGroup.Item>
                    <ListGroup.Item>Quantidade: {item.quantidade}</ListGroup.Item>
                    <ListGroup.Item>Valor: R$ {item.price}</ListGroup.Item>
                  </ListGroup>
                </Card>
              ))
            )}
          <p>
            <hr />
            <b>Total Compra</b>: R$
            {
              carrinho.length === 0 ? <span>0</span> : <span> { calculoTotalCarrinho() } </span>
            }
          </p>
          <hr />
          <Button variant="dark">Finalizar Compra</Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Carrinho

// key={index}