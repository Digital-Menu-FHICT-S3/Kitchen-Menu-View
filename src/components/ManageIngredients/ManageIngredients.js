import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form"

function ManageIngredients() {
    const [ingredients, setIngredients] = useState([])
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        FetchOrders()
    }, []);

    async function OnRemove(IngredientId) {

        await axios
            .delete("http://localhost:9191/ingredient/delete/" + IngredientId,
                { headers: { "Content-Type": "application/json" } }
            )
            .then(r => console.log(r.status))
            .catch(e => console.log(e));

        FetchOrders();
    }

    async function OnAdd(props, e) {

        await axios
            .post(
                "http://localhost:9191/ingredient/create/",
                {
                    name: props.Name,
                },
                { headers: { "Content-Type": "application/json" } }
            )
            .then(r => console.log(r.status))
            .catch(e => console.log(e));

        FetchOrders();

        e.target.reset();

    }

    function FetchOrders() {
        const fetchOrders = async () => {
            const result = await axios("http://localhost:9191/ingredient/all");
            return result.data;
        };
        fetchOrders().then((r) => setIngredients(r));
    }

    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        {ingredients
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((ingredient) => (
                                <Row>
                                    <Col className='Column' sm={2}>
                                        <label>{ingredient.name}</label>
                                    </Col>

                                    <Col className='Column' sm={2}>
                                        <button className='btn btn-danger' onClick={() => OnRemove(ingredient.ingredientId)}>X</button>
                                    </Col>
                                </Row>
                            ))}
                    </Col>
                    <Col>
                        <Form onSubmit={handleSubmit(OnAdd)}>
                            <Form.Group controlId="formBasicName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Name" name="Name" ref={register} />

                            </Form.Group>

                            <div className="buttonContainer">
                                <div className="divButtons">
                                    <button type="submit" className="btn btn-primary" >Add</button>
                                </div>
                            </div>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ManageIngredients
