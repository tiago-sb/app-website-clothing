import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import { PiShoppingCart } from 'react-icons/pi'

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" style={{ fontFamily: 'Poppins', background: 'none' }}>
      <Container>
        <Navbar.Brand href="/">Clothing</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/catalogo">Catálogo</Nav.Link>
            <Nav.Link href="/sobre">Sobre</Nav.Link>
            <Nav.Link href="/contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/carrinho">
          <PiShoppingCart />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Navigation