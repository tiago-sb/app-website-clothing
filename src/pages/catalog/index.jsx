import Navigation from '../../components/navigation'
import FooterPage from '../../components/footerPage'

import Carousel from 'react-bootstrap/Carousel'
import CarouselImage from '../../components/CarouselImage'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Catalog = () => {
  return (
    <>
    <Navigation />
      <Container className='d-flex justify-content-center' style={{ paddingTop: 50, paddingBottom: 50 }}>
        <Row>
          <Carousel>
            <Carousel.Item interval={2000}>
              <CarouselImage src="./assets/images/c1.jpg" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <CarouselImage src="./assets/images/c2.jpg" />
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <CarouselImage src="./assets/images/c3.jpg" />
            </Carousel.Item>
          </Carousel>
        </Row>
      </Container>
      <FooterPage />
    </>
  )
}

export default Catalog