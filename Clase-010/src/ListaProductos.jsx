import { Table, Button } from "react-bootstrap"

//Componente para mostrar todos los productos en una tabla

function ListaProductos({productos, onEdit, onDelete}) { //recibe como argumento lo que le pasamos cuando la llamamos, el array de productos, las funciones de editar y de eliminar
    if (productos.length === 0) { //"validación" para el array -- si se ejecuta el return no se ejecuta el resto
        return <p>No hay productos cargados</p> // si no hay productos muestra el texto
    };

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th style={{width: '150px'}}>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(({id, nombre, precio}) => ( //usamos el map porque no es una cantidad fija, entonces nos permite iterar de acuerdo a la cantidad de productos que llegan y recorrer el array para ir mostrando
                    <tr key={id}>
                        <td>{id}</td> {/*muestr el id de cada producto que va mostrando del array */}
                        <td>{nombre}</td> {/*muestra el nombre de cada producto que va mostrando*/}
                        <td>${precio.toFixed(2)}</td> {/*fixed(2) lo que hace es poner una cantidad fija de decimales, en este caso 2 -- muestra el precio de cada producto que va mostrando*/}
                        <td>
                            <Button variant="warning" size="sm" className="me-2" 
                            onClick={() => onEdit({id, nombre, precio})}>Editar</Button>
                            {/*al hacer click en el boton dispara el evento onEdit que recibe la función editarProducto y la ejecuta, y le pasamos por parametro los argumentos que va a necesitar*/}
                            <Button variant="danger" size="sm" onClick={() => onDelete(id)}>Borrar</Button>
                            {/*el onClick ejecuta la funcion de eliminar creada en el componente que lo llama y le pasa el id por parametro */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
};

export default ListaProductos;