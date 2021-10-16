import React, {useState} from "react";

export default function Servicios(){
    const [valor, setValor] = useState ("tocame")
    return (
        <div>
           
            <h1>Servicios</h1>
            <h2>{valor}</h2> 
            <p> 
                <ol>
                <li> Servicios 1</li>
                <li> Servicios 2</li>
                <li> Servicios 3</li>
                <li> Servicios 4</li>
                </ol> 
                <button onClick={() =>setValor("ya toco")}>{valor}</button>
            </p> 
        </div>
    )
}