import { useState, useEffect } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";

const UrlApi = 'https://686bea7214219674dcc69866.mockapi.io/api/clientes/clientes'; //creamos una variable/constante para guardar la URL que vamos a usar reiteradas veces

const ClientesCRUD = () => {
    const [clientes, setClientes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [modalMode, setModalMode] = useState('create');
    const [currentCliente, setCurrentCliente] = useState({name: '', description: '', })

    //Creamos la carga inicial
    const fetchClientes = async () => { // funcion asincrónica -- para que se ejecute lo que le sigue tiene que haber terminado de ejecutarse esta

        setLoading(true); //ponemos en true el estado del Loading para la carga inicial
        try{ //usamos el try para manejar los errores, sobre todo en bloques de código que son potenciales a arrojarlos, le decimos que intente hacer lo que está entre {} sino puede va a devolver un error que va a ser recibido por el catch
            const res = await fetch(UrlApi); //hacemos una petición http para obtener datos de la url -- el await simplifica el fetch y aclara que hasta tanto no se haga el fetch, que no siga
            if (!res.ok) throw new Error('Error al obtener información de Clientes'); //si res está vacia o la respuesta es diferente de ok (por eso el .ok), arroja el error con el msj. Si no sucede esto sigue con el codigo
            const data = await res.json(); //convertimos la respuesta del fetch en un formato legible
            setClientes(data); //guardamos en items la información de data
        } catch (error) {
            alert('Error al cargar los datos');
            console.log(error);
        }
        finally { //indica que terminó la carga de datos, más a lla de que haya habido un error
            setLoading(false);
        }
    };

    useEffect(() => { // hook que lo usamos para consumir la api
       fetchClientes(); //llamamos a la constante que consume la api
    },[])  //se ejecuta en el montaje inicial, por eso []

    const handleChange = (e) => { //esta función maneja el evento (e (es el evento onChange que se produce al quitar el cursor del input)) de un input que al salir del mismo se actualice
        setCurrentCliente({ ...currentCliente, [e.target.name]: e.target.value }) //a la lista de 
    }

    const handleCreate = async () => { //función guardada en una constante
        try{ //bloque try
            const res = await fetch(UrlApi,//con constante que hace un await fetch a la url
                { //aca dentro va lo que necesito para que el fetch funcione
                method: 'POST', //le digo el verbo o lo que quiero que haga el fetch - en este caso este metodo es para crear un nuevo
                headers: {"Content-Type": "application/JSON"}, // le digo como es el encabezado, que le estoy mandando un JSON
                body: JSON.stringify(currentCliente), //le digo cual es el cuerpo y le pasamos un item que lo convierte a travez del JSON.stringify en formato json
            });

            if (!res.ok) throw new Error('Error al cargar el nuevo cliente');
            await fetchClientes();
            handleCloseModal(); //función que abre y cierra el modal
        } catch(error) {
            alert('El cliente no pudo ser cargado');
            console.error(error);
        };
    };

    const handleUpdate = async () => {
        try {
            const res = await fetch(`${UrlApi}/${currentCliente.id}`, { //a la api le pasamos un dato para especificar que las modificaciones son al elemento al que refiere
                method: 'PUT', //metodo que usamos para actualizar un objeto
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(currentCliente), //le pasamos al body todo el objeto completo y lo traduce al formato json
            });
            if (!res.ok) throw new Error('Error al actualizar los datos del cliente');
            await fetchClientes();
            handleCloseModal();
        } catch (error) {
            alert('Error al actualizar cliente');
            console.error(error);
        };
    };

    const handleDelete = async () => {
        if (window.confirm('Seguro que quieres eliminar este cliente?')){
            try {
                const res = await fetch(`${UrlApi}/${id}`, { //solo le pasamos el id para que identifique el ojeto a eliminar
                    method: 'DELETE', //solo le mandamos solo el verbo, no sirve mandarle el cuerpo de algo que va a borrar
                });
                if (!res.ok) throw new Error('El cliente no se pudo eliminar');
                await fetchClientes();
                handleCloseModal();
            } catch(error) {
                alert('Error al eliminar al cliente');
                console.error(error);
            };
        };
    };

    const openCreateModal = () => { //función para que se visualice el modal de crear un nuevo elemento
        setModalMode('create');
        setCurrentCliente({name: '', description: ''});
        setShowModal(true);
    };

    const openEditModal = () => { //función para que se visualice el modal de modificar un elemento
        setModalMode('edit');
        setCurrentCliente(clientes);
        setShowModal(true);
    };

    const handleCloseModal = () => { //funsion para cerrar el modal
        setShowModal(false); //setea el modal en false para que deje de verse
    };

    return (
        <Container className="mt-4">
            <h1>Clase 11 práctica</h1>
            {/*Boton para cargar nuevo cliente al hacer click se abre el modal para cargar los datos*/}
            <Button variant="primary" onClick={openCreateModal} className="mb-3">Nuevo Cliente</Button> 
            {/*si loading es true muestra que se esta cargando, sino directamente muestra la tabla*/}
            {loading ? ( 
                <p>Cargando...</p>
            ) : (
                <Table striped bordered hover> {/*La tabla */}
                    <thead> {/*La cabecera de la tabla */}
                        <tr> {/*La fila de celdas con los titulos */}
                            <th>Id</th>
                            <th>Nombre</th>
                            <th>Descripción</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody> {/*El body de la tabla */}
                        {/*si la longitud del array clientes es igual a 0 (osea que no trajo datos) muestra un texto que dice que no hay info*/}
                        {clientes.length === 0 && ( 
                            <tr>
                                <td colSpan='4' className="text-center">No hay clientes</td>
                            </tr>
                        )}
                        {/*sino entra en la porción de codigo anterior se ejecuta la siguiente*/}
                        {/*se recorre el array clientes y por cada cliente que encuentra muestra en la tabla los datos del registro y por cada uno crea dos botones que lollevan a la función de editar la informacion o eliminarla*/}
                        {clientes.map((cliente) => (
                            <tr key={cliente.id}>
                                <td>{cliente.id}</td>
                                <td>{cliente.name}</td>
                                <td>{cliente.description}</td>
                                <td>
                                    <Button variant="warning" size="sm" onClick={() => openEditModal(cliente)} className="me-2">Editar</Button> {/*le pasamos a la función que objeto queremos modificar*/}
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(cliente.id)} className="me-2">Eliminar</Button>{/*pasamos por promp el id del registro que queremos eliminar*/}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            {/*El modal*/}
            <Modal show={showModal} onHide={handleCloseModal}> {/*a travez de showModal se pasa si es true o false, si esta en true se abre*/}
                <Modal.Header closeButton>
                    <Modal.Title>
                        {modalMode === 'create' ? 'Crear nuevo cliente' : 'Editar cliente'} {/*El titulo del modal lo manejamos con un operador ternario de acuerdo al modo del modal*/}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese el nombre" name="name" value={currentCliente.name} onChange={handleChange} /> {/*como valor trae el name seteado por la función handleChange*/}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formDescription">
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Ingrese descripción" name="description" value={currentCliente.description} onChange={handleChange} />
                        </Form.Group>
                    </Form>                        
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" on onClick={handleCloseModal}>Cancelar</Button> {/*evalua el mode del modal para que se ejecute una función u otra */}
                    <Button variant="primary" onClick={modalMode === "create" ? handleCreate : handleUpdate} 
                    disabled = {!currentCliente.name || !currentCliente.description }>
                        {modalMode === 'create' ? 'Crear' : 'Actualizar'} {/*evalua el mode del modal para que el texto del boton */}
                    </Button>
                </Modal.Footer>
            </Modal>                        
        </Container>
    );
};

export default ClientesCRUD;
