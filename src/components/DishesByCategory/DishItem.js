import React from 'react'
import { Card} from 'react-bootstrap'
import "./DishesByCategory.sass"

const DishItem = ({ Name, ImageLink, Description }) => {
    const imageClick = () => {
        alert(Name + ' CLICKED')
    }

    return (

        <Card onClick={imageClick}>
            <Card.Header>{Name}</Card.Header>
            <Card.Img className='CardImage' src={ImageLink} />
            <Card.Body>
                <Card.Text>{Description}</Card.Text>
            </Card.Body>
        </Card>
    );
}

export default DishItem
