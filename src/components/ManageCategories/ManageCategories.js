import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form"

function ManageCategories() {

    const [categories, setCategories] = useState([])
    const { register, handleSubmit } = useForm();

    useEffect(() => {
        FetchCategories()
    }, []);

    async function OnRemove(CategorieId) {

        await axios
            .delete("http://localhost:9191/menu/categories/delete/" + CategorieId,
                { headers: { "Content-Type": "application/json" } }
            )
            .then(r => console.log(r.status))
            .catch(e => console.log(e));

        FetchCategories();
    }

    async function OnAdd(props, e) {

        await axios
            .post(
                "http://localhost:9191/menu/categories/create/",
                {
                    name: props.Name,
                    imageUrl: props.Url
                },
                { headers: { "Content-Type": "application/json" } }
            )
            .then(r => console.log(r.status))
            .catch(e => console.log(e));

        FetchCategories();

        e.target.reset();

    }

    function FetchCategories() {
        const fetchCategories = async () => {
            const result = await axios("http://localhost:9191/menu/categories/all");
            return result.data;
        };
        fetchCategories().then((r) => setCategories(r));
    }


    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        {categories
                            .sort((a, b) => a.name.localeCompare(b.name))
                            .map((categorie) => (
                                <Row>
                                    <Col className='Column' sm={1}>
                                        <button className='btn btn-danger' onClick={() => OnRemove(categorie.categoryId)}>X</button>
                                    </Col>

                                    <Col className='Column'>
                                        <label>{categorie.name}</label>
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

                            <Form.Group controlId="formBasicUrl">
                                <Form.Label>ImageLink</Form.Label>
                                <Form.Control type="text" placeholder="https://site.nl/image" name="Url" ref={register} />
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

export default ManageCategories
