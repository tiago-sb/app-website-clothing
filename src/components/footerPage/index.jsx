import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'

const FooterPage = () => {
  return (
    <Container>
      <Row><hr /></Row>
      <Row>
        <Col>
          <p>© 2025 Tiago Produções</p>
        </Col>
        <Col>
        </Col>
        <Col>
          <Nav defaultActiveKey="/home" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/" style={{ color: '#242424'}}>
                Início
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/catalogo" style={{ color: '#242424'}}>
                Catálogo
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/sobre" style={{ color: '#242424'}}>
                Sobre
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/contato" style={{ color: '#242424'}}>
                Contato
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Container>
  )
}

export default FooterPage
