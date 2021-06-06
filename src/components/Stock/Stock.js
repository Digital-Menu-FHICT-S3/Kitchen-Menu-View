import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import "./Stock.css";
import axios from "axios";

const Stock = () => {
    const [quantity, setQuantity] = useState([]);
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:9191/ingredient/all')
            .then(res => {
                setIngredients(res.data)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])


    const test = () => {
        console.log(ingredients)
    }

    return (
        <div>
            <div className="container">
                <Row>
                    <Col>

                        <table className="table">
                            <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Handle</th>
                            </tr>
                            </thead>
                            <tbody>
                                {ingredients.map(ingredient => (
                                    <tr>
                                        <th scope="row">{ingredient.ingredientId}</th>
                                        <td>{ingredient.name}</td>
                                        <td>
                                            <div className="form-group col-md-2">
                                                <input type="number" className="form-control" id="inputZip" value={ingredient.amount} />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="cBtnContainer">
                                                <button type="button" className="btn btn-warning">Update</button>
                                            </div>
                                            <button type="button" className="btn btn-danger">Delete</button>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                        <div className="btnContainer">
                            <button type="button" className="btn btn-warning" onClick={test}>test</button>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Stock;
