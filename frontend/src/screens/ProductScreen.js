import React, {useState, useEffect} from 'react'
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Card,
  Container,
  ListGroupItem,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";
import axios from 'axios'

function ProductScreen({ match }) {

  const [product, setProduct ] = useState([])

    useEffect (() => {
        async function fetchProduct(){
            const {data} = await axios.get(`/api/products/${match.id}`)
            setProduct(data)
        }
        fetchProduct()
    },[])
  
  return (
    <div>
      <Link to="/" className="btn btn-primary btn-sm my-5">
        Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md= {6}>
        <ListGroup>
          <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
          <ListGroup.Item>  
              <p>{product.description}</p>
          </ListGroup.Item>  
          <ListGroup.Item>
              <Row>
                <Col md={6}><stong>Price : </stong>${product.price}</Col>
                <Col md={6}>{product.countInStock > 0 ? "In Stock" : "Out of Stock"}</Col>
              </Row>
              <Row>
                <Button disabled = {product.countInStock ==0 } variant="primary" size="md" block className="my-3">
                  Add to Cart
                </Button>
              </Row>
          </ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
    </div>
  );
}

export default ProductScreen;
