import Navigation from '../../components/navigation'
import FooterPage from '../../components/footerPage'

import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/Nav'
import Row from "react-bootstrap/esm/Row"
import CardClouthing from '../../components/cardClouthing'

const Store = () => {
  const pecas = [
    { id: 1, name: "Saia Casual", price: 50 },
    { id: 2, name: "Vestido Leve Roxo", price: 58 },
    { id: 3, name: "Vestido Leve Preto", price: 100 },
    { id: 4, name: "Vestido Casual", price: 210 },
    { id: 5, name: "Camisa Leve", price: 35 },
    { id: 6, name: "Camisa Florida", price: 40 },
    { id: 7, name: "Camisa Preta", price: 55 },
    { id: 8, name: "Vestido Amarelo", price: 100 },
    { id: 9, name: "Camisa Rosa", price: 60 },
    { id: 10, name: "Camisa Florida Rosa", price: 45 },
    { id: 11, name: "Camisa Manga Média", price: 35 },
    { id: 12, name: "Moletom", price: 44 },
    { id: 13, name: "Vestido Leve Estampado", price: 130 },
    { id: 14, name: "Camisa Cinza", price: 45 },
    { id: 15, name: "Camisa Branca", price: 57 },
    { id: 16, name: "Camisa Preta", price: 65 }
  ]

  return (
    <>
      <Navigation />
      <Container>
        <Nav defaultActiveKey="/home" as="ul" className="d-flex justify-content-center">
          <Nav.Item as="li">
            <Nav.Link href="/superiores" style={{ color: '#242424' }}>
              Parte Superior
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
            pecas.map((peca, indice) => {
              const url_image = `./assets/images/p${indice + 1}.png`
              return <CardClouthing url={url_image} name={peca.name} price={peca.price} id={peca.id}/>
            })
          }
        </Row>
      </Container>
      <FooterPage />
    </>
  )
}

export default Store