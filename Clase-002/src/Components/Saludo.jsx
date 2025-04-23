function Saludo(props){

    return(
        <div>
            <h1>Hola, {props.nombre}! {props.edad}</h1>
        </div>
    )

}

export default Saludo;