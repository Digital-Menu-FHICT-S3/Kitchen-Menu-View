import React from 'react'
import { Card } from 'react-bootstrap'

const OrderItem = ({Name}) => {
    return (
        <Card>
            <Card.Header>{Name}</Card.Header>
        </Card>
    )
}

export default OrderItem
