import React, { useState, useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import {
  Row,
  Col,
  Button,
  Image,
  ListGroup,
  Card,
  Badge,
  Form,
} from "react-bootstrap";
import { Rating } from "../components/Rating";
import { useSelector, useDispatch } from "react-redux";
import { productDetails } from "../redux-utils/actions/productActions";
import Loader from "../utils/Loader";
import AlertMessage from "../utils/AlertMessage";

export const ProductScreen = ({ history, match }) => {
  const dispatch = useDispatch();
  const productDetail = useSelector((state) => state.productDetail);
  const { loading, product, error } = productDetail;
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    dispatch(productDetails(match.params._id));
  }, [dispatch, match.params._id]);

  const submitHandler = () => {
    history.push(`/cart/${product._id}?quantity=${quantity}`)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <AlertMessage variant="danger">{error} </AlertMessage>
      ) : (
        <div>
          <LinkContainer to="/">
            <Button variant="secondary" className="mb-5">
              <i className="fas fa-arrow-left"></i> Back
            </Button>
          </LinkContainer>
          <Card>
            <Row>
              <Col md={6}>
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
                    <Badge variant={product.countInStock > 0 ? "info" : "dark"}>
                      {product.countInStock > 0 ? "In-stock" : "Out of stock"}
                    </Badge>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <p>{product.description}</p>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Button
                      variant="primary"
                      disabled={product.countInStock === 0}
                      onClick={submitHandler}
                    >
                      <i className="fas fa-shopping-cart"></i> Add to Cart
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col md={3}>
                <Card>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <Row>
                        <Col>Price:</Col>
                        <Col>${product.price}</Col>
                      </Row>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Row>
                        <Col>Stock:</Col>
                        <Col>
                          <Badge
                            variant={product.countInStock > 0 ? "info" : "dark"}
                          >
                            {product.countInStock > 0
                              ? "In-stock"
                              : "Out of stock"}
                          </Badge>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                    {product.countInStock > 0 ? (
                      <ListGroup.Item>
                        <Row>
                          <Col>Quanityt:</Col>
                          <Col>
                            <Form.Control
                              as="select"
                              onChange={(e) => setQuantity(e.target.value)}
                              defaultValue={quantity}
                            >
                              <option value="0" key="-1">
                                0
                              </option>
                              {[...Array(product.countInStock).keys()].map(
                                (number) => {
                                  return (
                                    <option value={number + 1} key={number}>
                                      {number + 1}
                                    </option>
                                  );
                                }
                              )}
                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ) : null}
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Card>
        </div>
      )}
    </>
  );
};
