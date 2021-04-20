import React, { useState } from "react";
import { CardDeck, Container, Row } from "react-bootstrap";
import OrderItem from "./OrderItem";

const Orders = () => {
  const [order, setOrders] = useState([
    {
      id: 1,
      name: "Tafel 1",
      time: 1,
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
    },
    {
      id: 2,
      name: "Tafel 2",
      time: 2,
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826071810126381116/9k.png",
    },
    {
      id: 3,
      name: "Tafel 3",
      time: 3,
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826072466295619604/9k.png",
    },
    {
      id: 4,
      name: "Tafel 4",
      time: 4,
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png",
    },
    {
      id: 4,
      name: "Tafel 5",
      time: 4,
      image:
        "https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png",
    },
  ]);

  return (
    <div>
      <Container>
        <Row>
          <CardDeck>
            {order.map((orders) => (
              <OrderItem
                title={orders.name}
                image={orders.image}
                orderTime={orders.time}
              />
            ))}
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default Orders;
