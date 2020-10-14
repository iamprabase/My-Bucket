import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            <i className="fas fa-copyright">My Bucket 2020</i>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
