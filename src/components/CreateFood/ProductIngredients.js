import React from 'react';
import { useState } from 'react'


export default function ProductIngredients() {


    const [text, setText] = useState ('')
    const [description, setDescription] = useState ('')
    const [price, setPrice] = useState ('')

    const [ingredients, setIngredient] = useState (['Union', 'Garlic', 'Lemon'])

    const [btnAddItems, setBtnAddItems] = useState ([])

    /* addIngredient() {
         this.setState({[e.target.name]: e.target.value });
     }
     */

    const addInfo = () => {
        setBtnAddItems([...btnAddItems, {
            id: btnAddItems.length,
            value: "hoi",
        }])
        console.log(btnAddItems.length)
    }



    const deleteIngredient = (index) => {
        alert(index)
        var newList = btnAddItems;
        newList.splice(index, 1);
        setBtnAddItems([...newList]);
    }



    return (

        <div>
            <div className="ingredientDetails">
                <label for="inputPassword2" className="sr-only">ingredienten</label>
                {btnAddItems.map((item, idx) => (
                    <div className="containerIngredients">
                        <div className="form-group mx-sm-3 mb-2" id="div1">

                            <select className="form-control" id="category" name="category">
                                {ingredients.map(ingredient => (
                                    <option value={ingredient.value}>{ingredient}</option>
                                ))}
                            </select>
                        </div>
                        <div key={idx} id="div2">
                            <input type="number" className="form-control"/></div> <div className="deleteBtn">
                        <button type="button" className="btn btn-danger" onClick={()=>deleteIngredient(idx)}>x</button>
                    </div>
                    </div>
                ))}
            </div>



            <div className="divContainerIngredients">
                <div className="addIngredients">
                    <button  class="btn btn-default btn-lg" onClick={addInfo}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                        </svg>
                    </button>

                </div>
            </div>
        </div>

    )
}
