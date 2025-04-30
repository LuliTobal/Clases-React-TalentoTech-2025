import { useState } from "react";

function Texto (){
    const [resaltado , setResaltado] = useState(false);
    return(
        <div>
            {/*al elemento le pasamos los eventos que se van a disparar
            y en los eventos le pasamos la funcion setResaltador para que se setee como true o false
            y en el evento de mouseOut le seteamos como false de nuevo
            Esto va a hacer que al estar sobre el elemento se active la funcion que va a cambiar su estilo*/}
            <h2 onMouseOver={() => setResaltado(true)} onMouseOut={() => setResaltado(false)}
                style={{
                    // le pasamos codigo de react
                    // a color que es css le pasamos una variable que es resaltar
                    // por un operador ternario le pasamos el valor de ese "color"
                    // si es false el valor de resaltado me va a mostrar el texto en red,
                    // si no, me lo va a mostrar en blue
                    color: resaltado ? 'red' : 'blue',
                    //le podemos agregar una trensición
                    transition: 'color 0.3s ease',
                    //esto es propiedades y valores de css, se pasan por atributo style
                    //y se pone la propiedad a la que referimos y el valor entre comillas
                    
                }}>Talento Tech 2025</h2>
        </div>
    )
}

export default Texto;