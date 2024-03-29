import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.css"
export const Item = ({ title, img, price, id }) => {
    return (

        <Card className="itemCard">
            <Link to={`/item/${id}`}>
                <Card.Img variant="top" src={img} className="itemImage" />
            </Link>
            <Card.Body>
                <Card.Title>{title.length > 50 ? title.substring(0, 50) + "..." : title}</Card.Title>
                <hr />
                <h3>Precio: ${price}.00</h3>
                <Button variant="outline-info" as={Link} to={`/item/${id}`} className="m-1">Detalle</Button>
            </Card.Body>
        </Card>

    );
};
