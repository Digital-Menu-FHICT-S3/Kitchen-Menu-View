import React from 'react'
import { Card} from 'react-bootstrap'
import "./Category.sass"
import { Link } from "react-router-dom";

const CategoriesItem = ({ Name, ImageLink}) => {

    return (
        <Link to="/dishesbycategory">
            <Card>
                <Card.Header>{Name}</Card.Header>
                <Card.Img className='CardImage' src={ImageLink} />
            </Card>
        </Link>
    );
}

export default CategoriesItem
