import Navigation from '../../components/navigation'
import FooterPage from '../../components/footerPage'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

const About = () => {
  return (
    <>
      <Navigation />
      <Container style={{ paddingTop: 50 }}>
        <Row>
          <Col>
            <Image src="./assets/images/about_image.jpg" fluid style={{ borderRadius: 10 }} />
          </Col>
          <Col>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eum fugit adipisci nihil reiciendis dolorum odio distinctio
              illum facilis laudantium beatae sequi soluta, eligendi
              accusantium magni quis quos sunt ut voluptate?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis debitis praesentium reprehenderit repudiandae ea quo
              dolore dignissimos perspiciatis earum incidunt, eos reiciendis
              possimus ullam inventore tempora suscipit veritatis magnam ipsa?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eum fugit adipisci nihil reiciendis dolorum odio distinctio
              illum facilis laudantium beatae sequi soluta, eligendi
              accusantium magni quis quos sunt ut voluptate?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis debitis praesentium reprehenderit repudiandae ea quo
              dolore dignissimos perspiciatis earum incidunt, eos reiciendis
              possimus ullam inventore tempora suscipit veritatis magnam ipsa?
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Eum fugit adipisci nihil reiciendis dolorum odio distinctio
              illum facilis laudantium beatae sequi soluta, eligendi
              accusantium magni quis quos sunt ut voluptate?
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Officiis debitis praesentium reprehenderit repudiandae ea quo
              dolore dignissimos perspiciatis earum incidunt, eos reiciendis
              possimus ullam inventore tempora suscipit veritatis magnam ipsa?
            </p>
          </Col>
        </Row>
      </Container>
      <FooterPage />
    </>
  )
}

export default About