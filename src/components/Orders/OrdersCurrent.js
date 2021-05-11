import React, { useState, useEffect } from "react";
import { CardDeck, Container, Row } from "react-bootstrap";
import OrderItem from "./OrderItem";
import axios from "axios";

const Orders = () => {
  // const [order, setOrders] = useState([
  //   {
  //     id: 1,
  //     name: "Tafel 1",
  //     time: 1,
  //     image:
  //       "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
  //     status: "Done",
  //   },
  //   {
  //     id: 2,
  //     name: "Tafel 2",
  //     time: 2,
  //     image:
  //       "https://media.discordapp.net/attachments/826071766807216128/826071810126381116/9k.png",
  //     status: "Done",
  //   },
  //   {
  //     id: 3,
  //     name: "Tafel 3",
  //     time: 3,
  //     image:
  //       "https://media.discordapp.net/attachments/826071766807216128/826072466295619604/9k.png",
  //     status: "Done",
  //   },
  //   {
  //     id: 4,
  //     name: "Tafel 4",
  //     time: 4,
  //     image:
  //       "https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png",
  //     status: "InProgress",
  //   },
  //   {
  //     id: 5,
  //     name: "Tafel 5",
  //     time: 4,
  //     image:
  //       "https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png",
  //     status: "InProgress",
  //   },
  // ]);
  const [order, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const result = await axios("http://localhost:9191/orders/all");
      return result.data;
    };
    fetchOrders().then((r) => setOrders(r));
  }, []);

  const OnDone = (orderID) => {
    for (let i = order.length - 1; i >= 0; i--) {
      if (order[i].orderId === orderID) {
        order[i].orderStatus = "Done";
        axios
          .put(
            "http://localhost:9191/orders/update/" + order[i].orderId,
            order[i],
            { headers: { "Content-Type": "application/json" } }
          )
          .then(r => console.log(r.status))
          .catch(e => console.log(e));
      }
    }
    setOrders([...order]);
  };

  return (
    <div>
      <Container>
        <Row>
          <CardDeck>
            {order
              .filter((x) => {
                return x.orderStatus !== "Done";
              })
              .map((orders) => (
                <OrderItem
                  title={orders.name}
                  tableNum={orders.tableId}
                  image={orders.image}
                  orderTime={orders.dateTime}
                  onDoneClick={() => OnDone(orders.orderId)}
                />
              ))}
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
};

export default Orders;
