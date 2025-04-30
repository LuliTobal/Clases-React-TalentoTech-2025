import { useState } from "react";

function Contador (){

    //Creamos una constante con dos partes, una variable que va a guardar el dato (contador) y la función que lo setea (setContador)
    //este componente va a ser igual a useState y le damos un valor inicial
    const [contador, setContador] = useState (0); //set en un nombre significa que esta poniendo un valor (segun la nomenclatura tradicional)
    return(
        <div>
            <h2>Contador: {contador}</h2>
            {/* boton siempre asociado un evento en este caso onClick*/}
            <button onClick={() => setContador(contador + 1)}>Aumentar</button>
            <button onClick={() => setContador(contador - 1)}>Disminuir</button>
        </div>
    )
}

export default Contador;