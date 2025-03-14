import Navigation from '../../../components/navigation'
import FooterPage from '../../../components/footerPage'

import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/Nav'
import Row from "react-bootstrap/esm/Row"
import CardClouthing from '../../../components/cardClouthing'

const Inferiores = () => {
  const pecas = [
    { id: 1, name: "Saia Casual", url: `./assets/images/p1.png`, price: 50 },
    { id: 2, name: "Vestido Leve Roxo", url: `./assets/images/p2.png`, price: 58 },
    { id: 3, name: "Vestido Leve Preto", url: `./assets/images/p3.png`, price: 100 },    
    { id: 4, name: "Vestido Casual", url: `./assets/images/p4.png`, price: 210 },    
    { id: 8, name: "Vestido Amarelo", url: `./assets/images/p8.png`, price: 100 },    
    { id: 13, name: "Vestido Leve Estampado", url: `./assets/images/p13.png`, price: 130 }
  ]
  
  return (
    <>
      <Navigation />
      <Container>
        <Nav defaultActiveKey="/home" as="ul" className="d-flex justify-content-center">
          <Nav.Item as="li">
            <Nav.Link href="/" style={{ color: '#242424' }}>
              Todos
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link href="/superiores" style={{ color: '#242424' }}>
              Parte Superior
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Row className="d-flex justify-content-around">
          {
            pecas.map((peca) => {
              return <CardClouthing url={peca.url} name={peca.name} price={peca.price} id={peca.id} />
            })
          }
        </Row>
      </Container>
      <FooterPage />
    </>
  )
}

export default Inferiores