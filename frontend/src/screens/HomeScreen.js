import React, { useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../redux-utils/actions/productActions';
import Loader from '../utils/Loader';
import AlertMessage from '../utils/AlertMessage';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productLists = useSelector((state) => state.productList);
  const { loading, products, error } = productLists;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <AlertMessage variant='danger'>{error} </AlertMessage>
      ) : (
        products.map((product) => {
          return (
            <Row>
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} key={product._id} />
              </Col>
            </Row>
          );
        })
      )}
    </>
  );
};

export default HomeScreen;
