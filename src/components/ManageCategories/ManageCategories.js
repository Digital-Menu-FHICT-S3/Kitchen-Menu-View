import React, { useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import { useForm } from "react-hook-form"

function ManageCategories() {
    const { register, handleSubmit } = useForm();

    const OnRemove = (categorieID) => {
        alert(`${categorieID} Removed`);

        for (let i = categories.length - 1; i >= 0; i--) {
            if (categories[i].id === categorieID) {
                categories.splice(i, 1);
                break;
            }
        }

        setCategories([...categories]);
    }

    const OnAdd = (props) => {

        setCategories(categories => [...categories, {
            id: Math.max.apply(Math, categories.map(function (o) { return o.id })) + 1,
            name: props.Name,
            image: props.Url,
        }]);
    }

    const [categories, setCategories] = useState([
        {
            id: 0,
            name: 'Pasta',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072364059852800/Z.png'
        },
        {
            id: 1,
            name: 'Vlees',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826071810126381116/9k.png'
        },
        {
            id: 2,
            name: 'Vis',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072466295619604/9k.png'
        },
        {
            id: 3,
            name: 'Soep',
            image: 'https://media.discordapp.net/attachments/826071766807216128/826072533803204628/Z.png'
        }
    ])

    return (
        <div>
            <Container >
                <Row>
                    <Col>
                        {categories.map((categorie) => (
                            <Row>
                                <Col className='Column' sm={2}>
                                    <label>{categorie.name}</label>
                                </Col>

                                <Col className='Column' sm={2}>
                                    <button className='btn btn-danger' onClick={() => OnRemove(categorie.id)}>X</button>
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
