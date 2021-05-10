import React from "react";
import { Card, Button } from "react-bootstrap";

const OrderItem = ({ title, image, orderTime, onDoneClick }) => {
  return (
    <div>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>Food Items</Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">{orderTime} mins ago</small>
          <Button className="float-right" onClick={onDoneClick}>Done</Button>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default OrderItem;
