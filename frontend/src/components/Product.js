import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Rating } from './Rating'

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`product/${product._id}`}>
        <Card.Img variant="top" src={product.image} />
      </a>
      <Card.Body>
        <h4>
          <a href={`product/${product._id}`}>
            <Card.Title as="div">
              <strong>{product.name}</strong>
            </Card.Title>
          </a>
        </h4>
        <Card.Title as="div">
          <div className="my-3">
            <Rating
              rating={product.rating}
              reviews={`${product.numReviews} reviews`}
            />
          </div>
        </Card.Title>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        <Button variant="primary">
          <i className="fas fa-shopping-cart"></i>
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Product
