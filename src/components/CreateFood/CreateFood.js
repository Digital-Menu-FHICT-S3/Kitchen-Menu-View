import DishDetails from './DishDetails';
import IngredientDetails from './IngredientDetails'
import React, {useState, useEffect} from 'react';
import './CreateFood.css';
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import Container from "react-bootstrap/container";
import axios from "axios";

const CreateFood = () => {

    const [info, setInfo] = useState({
        category: 1
    })
    const [ingredients, setIngredients] = useState([])

    const onFormSubmit = () => {

        const category = {
            categoryId: info["category"],
            name: info["name"],
            price: info["price"],
            description: info["description"],
            vegan: true,
            lowSalt: true,
            imageUrl: info["image"],
            ingredients: ingredients
        }

        axios.post(
            'http://localhost:9191/menu/dishes/saveDish', category
        ).then(window.location.reload(false));
    };

        // This method is passed down to child components.
        // Child components pass this method data so it can be kept in CreateFood.js state
        // This way the state can be used when submitting data
        const onFormChange = ({name, value}) => {
            let copy = info;
            copy[name] = value
            setInfo(copy)
        }

        return (

            <div>
                <Container>
                    <Row>
                        <Col md={6}><DishDetails onFormChange={onFormChange}/></Col>
                        <Col md={6}><IngredientDetails selectedIngredients={ingredients} onIngredientChange={setIngredients}/></Col>
                    </Row>
                    <Row>
                        <Col id="buttonRow">
                            <div className="divButtons">
                                <button onClick={onFormSubmit} type="button" className="btn btn-primary">Add</button>

                                <button type="button" className="btn btn-light">Cancel</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }

    export default CreateFood;
