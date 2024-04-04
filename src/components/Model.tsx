import React from "react";
import {adidasArr, AdidasItem} from "./pages/Adidas";
import { useParams } from "react-router-dom";
import {pumaArr, PumaItem} from "./pages/Puma";

type CrossModels={
    [key:string]: (AdidasItem[] | PumaItem[] );
}

const crossModels: CrossModels = {
    adidas:adidasArr,
    puma:pumaArr,
}

export const Model = () => {
    const {  model, id } = useParams();

    const currentModel = model
     ? crossModels[model].find(el => el.id === Number(id))
     : null

    if (!currentModel) {
        return <div style={{textAlign: 'center'}}><h2>Такой модели не существует</h2></div>;
    }

    return (
        <div style={{textAlign: 'center'}}>
            <h2>{currentModel.model}</h2>
            <h4>{currentModel.collection}</h4>
            <h3>{currentModel.price}</h3>
            <img src={currentModel.picture}
                 alt={currentModel.model}
                 style={{width: '600px', height: 'auto', marginRight: '10px'}}/>
        </div>
    );
};
