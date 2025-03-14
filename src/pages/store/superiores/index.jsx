import Navigation from '../../../components/navigation'
import FooterPage from '../../../components/footerPage'

import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/Nav'
import Row from "react-bootstrap/esm/Row"
import CardClouthing from '../../../components/cardClouthing'

const Superiores = () => {
  const pecas = [
    { id: 5, name: "Camisa Leve", url: `./assets/images/p5.png`, price: 35 },
    { id: 6, name: "Camisa Florida", url: `./assets/images/p6.png`, price: 40 },
    { id: 7, name: "Camisa Preta", url: `./assets/images/p7.png`, price: 55 },    
    { id: 9, name: "Camisa Rosa", url: `./assets/images/p9.png`, price: 60 },    
    { id: 10, name: "Camisa Florida Rosa", url: `./assets/images/p10.png`, price: 45 },    
    { id: 11, name: "Camisa Manga Média", url: `./assets/images/p11.png`, price: 35 },
    { id: 12, name: "Moletom", url: `./assets/images/p12.png`, price: 44 },
    { id: 14, name: "Camisa Cinza", url: `./assets/images/p14.png`, price: 45 },
    { id: 15, name: "Camisa Branca", url: `./assets/images/p15.png`, price: 57 },
    { id: 16, name: "Camisa Preta", url: `./assets/images/p16.png`, price: 65 }
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
            <Nav.Link href="/inferiores" style={{ color: '#242424' }}>
              Parte Inferior
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Row className="d-flex justify-content-around">
          {
            pecas.map((peca) => {
              return <CardClouthing url={peca.url} name={peca.name} price={peca.price} id={peca.id}/>
            })
          }
        </Row>
      </Container>
      <FooterPage />
    </>
  )
}

export default Superiores