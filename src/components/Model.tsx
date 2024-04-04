import React from "react";
import {adidasArr} from "./pages/Adidas";
import {Link, useParams} from "react-router-dom";

export const Model = () => {
    const params = useParams()
    console.log(params.id)
    return (
        <div style={{textAlign: 'center'}}>
            <h2>{adidasArr[Number(params.id)].model}</h2>
            <h4>{adidasArr[Number(params.id)].collection}</h4>
            <h3>{adidasArr[Number(params.id)].price}</h3>

            <img src={adidasArr[Number(params.id)].picture}
                 alt={adidasArr[Number(params.id)].model}
                 style={{width: '600px', height: 'auto', marginRight: '10px'}}/>
        </div>
    )
}