import React from "react";


function simpleForm(){
    return(
        <div>
            <label>Name</label>
                <input type="text" name=""></input>
                <label>Country</label>
                <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>
        </div>
    )
};

export default simpleForm;