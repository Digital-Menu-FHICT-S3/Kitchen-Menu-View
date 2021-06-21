import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/row";
import Col from "react-bootstrap/col";
import "./Stock.css";
import axios from "axios";

const Stock = () => {
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




    const updateAmount = async (id, index) => {
        
        await axios.put(`http://localhost:9191/ingredient/update/${id}`, {
                ingredientId: id,
                name: document.getElementsByClassName("name")[index].value,
                amount: document.getElementsByClassName("amount")[index].value
                
            })
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log();
            }).then(window.location.reload(false));;
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

                                
                                {ingredients.map((ingredient, index) => (
                                    <tr>
                                        <th scope="row">{ingredient.ingredientId}</th>
                                        <td>
                                            <label>{ingredient.name}</label><br />
                                        <input type="text" name="name" className="form-control, name" placeholder="Enter name" />
                                        </td>
                                            
                                        <td>
                                            <div className="form-group col-md-2">
                                                <label>{ingredient.amount}</label>
                                                <input type="text" name="amount" className="form-control, amount" placeholder="Enter amount" />

                                            </div>
                                        </td>
                                        <td>
                                            <div className="cBtnContainer">
                                                <button type="button" className="btn btn-warning" id={index} onClick={()=>updateAmount(ingredient.ingredientId, index)}>edit</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>

                        <div className="btnContainer">
                            <button type="button" className="btn btn-warning">test</button>
                        </div>

                    </Col>
                </Row>
            </div>
        </div>
    );
}

export default Stock;
