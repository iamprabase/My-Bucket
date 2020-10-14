import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import {
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  Card,
  Badge,
} from 'react-bootstrap'
import products from '../products.js'
import { Rating } from '../components/Rating'

export const ProductScreen = ({ match }) => {
  const product = products.find((product) => product._id === match.params._id)

  return (
    <div>
      <LinkContainer to="/">
        <Button variant="secondary" className="mb-5">
          <i className="fas fa-arrow-left"></i> Back
        </Button>
      </LinkContainer>
      <Card>
        <Row>
          <Col md={7}>
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  rating={product.rating}
                  reviews={`${product.numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>
                <h3>${product.price}</h3>
                <Badge variant={product.countInStock > 0 ? 'info' : 'dark'}>
                  {product.countInStock > 0 ? 'In-stock' : 'Out of stock'}
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item>
                <p>{product.description}</p>
              </ListGroup.Item>

              <ListGroup.Item>
                <Button variant="primary" disabled={product.countInStock === 0}>
                  <i className="fas fa-shopping-cart"></i> Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
