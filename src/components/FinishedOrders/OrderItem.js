import React from "react";
import { Card, Button } from "react-bootstrap";

const OrderItem = ({ Name, ImageLink }) => {
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={ImageLink} />
                <Card.Body>
                    <Card.Title>{Name}</Card.Title>
                    <Card.Text>Food Items</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default OrderItem;
