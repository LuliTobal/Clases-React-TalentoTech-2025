import { Table, Button } from "react-bootstrap"

function ListaProductos({productos, onEdit, onDelete}) { //recibe como argumento lo que le pasamos cuando la llamamos
    if (productos.length === 0) { //"validación" para el array -- si se ejecuta el return no se ejecuta el resto
        return <p>No hay productos cargados</p>
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
                {productos.map(({id, nombre, precio}) => ( //usamos el map porque no es una cantidad fija, entonces nos permite iterar de acuerdo a la cantidad de productos que llegan
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{nombre}</td>
                        <td>${precio.toFixed(2)}</td> {/*fixed(2) lo que hace es poner una cantidad fija de decimales, en este caso 2 */}
                        <td>
                            <Button variant="warning" size="sm" className="me-2" 
                            onClick={() => onEdit({id, nombre, precio})}>Editar</Button>
                            {/*al hacer click en el boton disparal el evento onEdit que ejecuta la función creada en el componente que lo llama, y le pasamos por parametro los argumentos que va a necesitar*/}
                            <Button variant="danger" size="sm" onClick={() => onDelete(id)}>Borrar</Button>
                            {/*el onClick ejecuta la funcion de eliminar creada en el componente que lo llama */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
};