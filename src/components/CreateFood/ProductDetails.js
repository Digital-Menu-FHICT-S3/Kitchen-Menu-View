import React from 'react';
import { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"


export default function ProductDetails() {

    const [text, setText] = useState ('')
    const [description, setDescription] = useState ('')
    const [price, setPrice] = useState ('')
    const [allergy, setAllergy] = useState ('')
    const [categorys, setCategory] = useState ([  {
        id: "1",
        value: "Pasta",
    },
        {
            id: "2",
            value: "Meat",
        },
        {
            id: "3",
            value: "Fish",
        },
        {
            id: "4",
            value: "Test",
        }])
    const [ingredients, setIngredient] = useState (['Union', 'Garlic', 'Lemon'])

    const [btnAddItems, setBtnAddItems] = useState ([])

    const addInfo = () => {
        setBtnAddItems([...btnAddItems, {
            id: btnAddItems.length,
            value: "",
        }])
    }

    return (
        <>
            <div className="productDetails">
                
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Name"   onChange={(e) => setText(e.target.value)}/>

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Price</Form.Label>
                        <Form.Control type="text" placeholder="Price" onChange={(e) => setText(e.target.value)} />
                    </Form.Group>


                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3}  onChange={(e) => setText(e.target.value)} />
                    </Form.Group>

                    
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Vegan" />
                        <Form.Check type="checkbox" label="Low in salt" />
                    </Form.Group>
                </Form>



                <select className="form-control" id="category" name="category">
                    
                    {categorys.map(category => (
                            <option value={category.value}>{category.value}</option>
                    ))}
                </select>


            </div>
        </>
    )
}
