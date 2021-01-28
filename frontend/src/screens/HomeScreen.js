import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    const { data } = await axios.get('/api/products')
    setProducts(data)
  }

  return (
    <Row>
      {products.map((product) => {
        return (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} key={product._id} />
          </Col>
        )
      })}
    </Row>
  )
}

export default HomeScreen
