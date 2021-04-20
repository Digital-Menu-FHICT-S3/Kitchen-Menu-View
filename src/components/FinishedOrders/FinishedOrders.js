import React, { useState, useEffect } from 'react'
import { Col, Row, Container } from "react-bootstrap";
import OrderItem from './OrderItem'

const FinishedOrders = () => {

    const [orders, setOrders] = useState([
        {
            id: 1,
            name: "Tomato Soup",
            status: "Done",
        },
        {
            id: 2,
            name: "Salad",
            status: "InProgress",
        },
        {
            id: 3,
            name: "Steak",
            status: "OnHold",
        },
        {
            id: 4,
            name: "Soup of the day",
            status: "Done",
        },
    ]);

    return (
        <div>
            <Container>
                <Row>
                    {orders.filter(x => {return x.status == "Done"}).map((categorie) => (
                        <Col className="Column" sm={4}>
                            <OrderItem
                                Name={categorie.name}
                                ImageLink={categorie.image}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default FinishedOrders
