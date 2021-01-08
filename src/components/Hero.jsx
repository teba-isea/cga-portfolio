import React from "react"
import Youtube from "react-youtube"
import { Container, Row, Col } from "reactstrap"

const Hero = () => {
  return (
    <Container className="d-none d-md-block">
      <Row className="justify-content-center my-4">
        <Col sm="12" md="8" className="d-flex justify-content-center">
          <Youtube videoId="CTwowWt12bw" />
        </Col>
      </Row>
    </Container>
  )
}

export default Hero
