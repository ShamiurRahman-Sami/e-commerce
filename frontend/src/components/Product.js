import React from "react";
import { Card, Button } from "react-bootstrap";
import Rating from "./Rating";
import { Link } from "react-router-dom";

function Product({ product }) {
    return (
        <Card className="my-3" >
            <Link to={`/product/${product._id}`}>
                <Card.Img variant="top" src={product.image} />
            </Link>
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                    <Rating
                        value={product.rating}
                        text={`${product.numReviews} reviwes`}
                        color={"#f8e825"}
                    />
                </Card.Text>
                <Button variant="primary">${product.price}</Button>
            </Card.Body>
        </Card>
    );
}

export default Product;
