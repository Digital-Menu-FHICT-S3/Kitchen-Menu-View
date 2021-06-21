import React, {useState, useEffect} from "react";
import {CardDeck, Container, Row} from "react-bootstrap";
import OrderItem from "./OrderItem";
import axios from "axios";
import {statusEnum} from './statusEnum'
import "./Order.sass"

const Orders = () => {
    const [order, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            const result = await axios("http://localhost:9191/orders/all");
            return result.data;
        };
        fetchOrders().then((r) => setOrders(r));

        setInterval(() => {
            const fetchOrders = async () => {
                const result = await axios("http://localhost:9191/orders/all");
                return result.data;
            };
            fetchOrders().then((r) => setOrders(r));
        }, 10000);
    }, []);

    const OnDone = (orderID) => {
        for (let i = order.length - 1; i >= 0; i--) {
            if (order[i].orderId === orderID) {
                order[i].orderStatus = statusEnum.Done.name;
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
        <div className="page-wrapper">
            <Container>
                <Row>
                    <CardDeck>
                        {order
                            .filter((x) => {
                                return x.orderStatus !== statusEnum.Done.name;
                            })
                            .map((orders, id) => (
                                <OrderItem
                                    listId={id}
                                    id={orders.orderId}
                                    title={orders.name}
                                    tableNum={orders.tableId}
                                    image={orders.image}
                                    orderTime={orders.dateTime}
                                    orderstatus={orders.orderStatus}
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
