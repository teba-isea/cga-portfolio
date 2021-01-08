import React from "react"
import Social from "./Social"
import { Container, Row, Col } from "reactstrap"

const Footer = () => {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center mt-5">
        <Col sm="12" md="4">
          <footer>
            <Social />
            <h5 className="text-center my-4">
              CGA Automation SAS © . copyright 2020
            </h5>
          </footer>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
