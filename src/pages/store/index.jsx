import Navigation from '../../components/navigation'
import FooterPage from '../../components/footerPage'

import Container from "react-bootstrap/esm/Container"
import Nav from 'react-bootstrap/Nav'
import Row from "react-bootstrap/esm/Row"
import CardClouthing from "../../components/CardClouthing"

const Store = () => {
  const pecas = [
    "Saia Casual",
    "Vestido Leve Roxo",
    "Vestido Leve Preto",
    "Vestido Casual",
    "Camisa Leve",
    "Camisa Florida",
    "Camisa Preta",
    "Vestido Amarelo",
    "Camisa Rosa",
    "Camisa Florida Rosa",
    "Camisa Manga Média",
    "Moletom",
    "Vestido Leve Estampado",
    "Camisa Cinza",
    "Camisa Branca",
    "Camisa Preta"
  ]

  return (
    <>
      <Navigation />
      <Container>
        <Nav defaultActiveKey="/home" as="ul" className="d-flex justify-content-center">
          <Nav.Item as="li">
            <Nav.Link href="/home" style={{ color: '#242424' }}>
              Camisa Feminina
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link style={{ color: '#242424' }}>
              Camisa Masculina
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link style={{ color: '#242424' }}>
              Saia
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link style={{ color: '#242424' }}>
              Vestido
            </Nav.Link>
          </Nav.Item>
        </Nav>
        <hr />
        <Row className="d-flex justify-content-around">
          {
            pecas.map((peca, indice) => {
              const url_image = `./assets/images/p${indice + 1}.png`
              return <CardClouthing url={url_image} name={peca} />
            })
          }
        </Row>
      </Container>
      <FooterPage />
    </>
  )
}

export default Store