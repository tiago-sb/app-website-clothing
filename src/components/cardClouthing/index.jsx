import { useState } from 'react'
import { Card, Modal } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { CarrinhoProvider, useCarrinho } from '../../Contex'
import './styles.css'

const CardClouthing = ({ id, url, name, price }) => {
  const [tamanhoPeca, setTamanhoPeca] = useState('PP')
  const [quantidade, setQuantidade] = useState(1)
  const { adicionarNoCarrinho } = useCarrinho()

  const [showModal, setShowModal] = useState(false)
  const handleShowModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)
  
  const escolherNaLoja = () => {
    price = price * quantidade
    adicionarNoCarrinho({ id, name, url, tamanhoPeca, quantidade, price })
    handleCloseModal()
  }
  
  return (
    <>
      <Card style={{ width: '18rem', marginBottom: 20, position: 'relative', cursor: 'pointer' }}
        onClick={handleShowModal} className="card-hover"
      >
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>R$ {price}</Card.Text>
        </Card.Body>
      </Card>
      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={url} alt={name} style={{ width: '100%' }} />
          <br />
          <Card.Title>Descrição</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Cumque rem velit eum ex exercitationem officiis et labore
            dolore quaerat totam fugiat quisquam, numquam asperiores
            porro nihil voluptatem doloremque tempora amet!
          </Card.Text>
          <Form.Group className="mb-3">
            <Form.Label>Tamanho</Form.Label>
            <Form.Select size="sm" onChange={(tamanhoEscolhido) => setTamanhoPeca(tamanhoEscolhido.target.value)} value={tamanhoPeca}>
              <option>PP</option>
              <option>P</option>
              <option>M</option>
              <option>G</option>
              <option>GG</option>
              <option>XGG</option>
            </Form.Select>
          </Form.Group>
          <div class="mb-3">
            <label for="inputNumber" class="form-label">Quantidade</label>
            <input type="number" class="form-control" id="inputNumber"
              placeholder="Digite um número" min="1" max="100" step="1"
              onChange={(quantidadeEscolhida) => setQuantidade(Number(quantidadeEscolhida.target.value))} />
          </div>
          <Button variant="dark" onClick={escolherNaLoja}>
            Adicionar ao Carrinho
          </Button>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default CardClouthing
