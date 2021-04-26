import React, { useState } from 'react'
import { Col, Row, Container } from "react-bootstrap";
import OrderItem from './OrderItem'

const FinishedOrders = () => {

    const [orders, setOrders] = useState([
        {
            id: 1,
            name: "Tafel 1",
            time: 1,
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png",
            status: "Done",
        },
        {
            id: 2,
            name: "Tafel 2",
            time: 2,
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826071810126381116/9k.png",
            status: "InProgress",
        },
        {
            id: 3,
            name: "Tafel 3",
            time: 3,
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072466295619604/9k.png",
            status: "OnHold",
        },
        {
            id: 4,
            name: "Tafel 4",
            time: 4,
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png",
            status: "InProgress"
        },
        {
            id: 4,
            name: "Tafel 5",
            time: 4,
            image:
                "https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png",
            status: "Done",
        },
    ]);

    return (
        <div>
            <Container>
                <Row>
                    {orders.filter(x => { return x.status === "Done" }).map((categorie) => (
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
