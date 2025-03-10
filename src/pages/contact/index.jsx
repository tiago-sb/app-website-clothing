import Navigation from '../../components/navigation'
import FooterPage from '../../components/footerPage'

import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const Contact = () => {
  return (
    <>
      <Navigation />
      <Container style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Row>
          <Col>
            <h2>Fale Conosco!</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam hic quod reprehenderit atque voluptates,
              similique blanditiis commodi, aut temporibus quidem
              ipsum quae maxime adipisci iste sunt ad voluptatibus, fugit at.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aperiam hic quod reprehenderit atque voluptates,
              similique blanditiis commodi, aut temporibus quidem
              ipsum quae maxime adipisci iste sunt ad voluptatibus, fugit at.
            </p>
          </Col>
          <Col>
            <Form>
              <Row>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Primeiro Nome (Obrigatório)</Form.Label>
                    <Form.Control placeholder="Seu nome" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Sobrenome (Obrigatório)</Form.Label>
                    <Form.Control placeholder="Seu sobrenome" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email (Obrigatório)</Form.Label>
                  <Form.Control type="email" placeholder="Seu email" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Assunto (Obrigatório)</Form.Label>
                  <Form.Control placeholder="Assunto da Mensagem" />
                </Form.Group>
              </Row>
              <Row>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Mensagem (Obrigatório)</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Mensagem" />
                </Form.Group>
              </Row>
              <Button variant="dark" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      <FooterPage />
    </>
  )
}

export default Contact