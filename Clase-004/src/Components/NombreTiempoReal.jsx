import { useState } from "react";

function NombreTiempoReal (){

    //useState
    const [nombre , setNombre] = useState ('');
    //funcion que vamos a pasar por el evento onChange
    //manejamos el evento con la letra e que es parte de la funcion que viene del input, ya sabe a que estoy haciendo referencia
    const escribirNombre = (e) => {
        //llama al value, que es lo que hace que se vaya actualizando
        setNombre(e.target.value);
    }

    return(
        <div>
            <h1>Escribí tu nombre:</h1>
            {/*Le pasamos por valor al input la variable nombre para que se vaya seteando
            Se maneja con el evento onChange y ahí le pasamos la función*/}
            <input type="text" placeholder="nombre..." value={nombre} onChange={escribirNombre}></input>
            {/*Usamos un operador ternario, para que si hubieron modificaciones se muestren,
             sino si la variable nombre está vacia va a mostrar desconocido */}
            <p>Hola, {nombre ? nombre : "desconocido"}</p>
        </div>
    );
}

export default NombreTiempoReal;