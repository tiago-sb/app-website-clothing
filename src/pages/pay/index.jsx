import Navigation from '../../components/navigation'
import FooterPage from '../../components/footerPage'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import { Container } from 'react-bootstrap';
import { useCarrinho } from '../../Contex';

const Pay = () => {
  const { carrinho } = useCarrinho()

  return (
    <>
      <Navigation />
      <Container style={{ marginTop: 20, marginBottom: 20 }}>
        <Card>
          <Card.Header><b>Status da Compra</b></Card.Header>
          <Card.Body>
            <Card.Text>
              {
                carrinho.map((item) => {
                  return <p><b>{item.name} - R$ {item.price}</b></p>
                })
              }
              <p>
                <b>Total: R$ 
                  {
                    carrinho.reduce((acumulador, item) => {
                      return acumulador + item.price
                    }, 0)
                  }
                </b>
              </p>
            </Card.Text>
            <Button variant="dark">Pagar</Button>
          </Card.Body>
        </Card>
      </Container>
      <FooterPage />
    </>
  )
}

export default Pay