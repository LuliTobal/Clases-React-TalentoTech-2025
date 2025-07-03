import { useState, useEffect } from "react";
import { Form, Button, Row, Col, Alert } from "react-bootstrap";

function ProductoForm({ onSubmit, productoAEditar, onCancel }) { //prps que recibe: funcion onSubmit (que se llama para enviar el formulario), evento onCancel y productoAeditar (si hay alguno para editar le llega por aca)
    const [nombre, setNombre] = useState(''); //para guardar lo ingresado en los inputs
    const [precio, setPrecio] = useState('');
    const [errores, setErrores] = useState([]);// para guardar los errores de navegación

    useEffect(() => { //se ejecuta cada vez que cambia productoAEditar, cuando se hace click a editar o cancelar
        if (productoAEditar) { //si hay producto para editar, carga los datos de ese producto en los inputs para modificarlos con esa base
            setNombre(productoAEditar.nombre);
            setPrecio(productoAEditar.precio.toString()); //carga el valor en el campo y lo pasa a texto porque los inputs manejan texto
            setErrores([]);
        } else { //sino, resetea los campos y deja vacios los inputs
            setNombre('');
            setPrecio('');
            setErrores([]);
        }
    }, [productoAEditar]); //se ejecuta cada vez que cambia productoAEditar -- ya sea cuando se acepta la edicion como cuando se cancela

    const validar = () =>{ //verifica que:
        const erroresValidacion = [];
        if (!nombre.trim()) { //.trim() elimina espacios antes y despues del texto, para verificar que haya sido completado con caracteres
            erroresValidacion.push('El nombre está vacio.'); //si se dan las condiciones guarda el error en erroresValidacion
        } if (precio === '' || isNaN(precio) || Number(precio) <= 0) { //validamos para que no este vacio, para que sea un numero valido y que no sea un 0
            erroresValidacion.push('El precio debe ser un número mayor a 0.') //si se dan las condiciones guarda el error en erroresValidacion
        } setErrores(erroresValidacion); //aca setea los errores
        return erroresValidacion.length === 0; //devuelve true o false
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // evita que se recargue la pagina al hacer submit
        if (!validar()) return; //corrobora que pase la validacion, si la validación es distinta a true, no sigue

        const producto = { //crea el objeto producto
            nombre: nombre.trim(), //con nombre "limpio" (sin espacios)
            precio: Number(precio), //con precio convertido a numero
        };

        if (productoAEditar){ //si es una edicion
            producto.id = productoAEditar.id; //le pone el id del producto original, el que va a editar
        };

        onSubmit(producto); //llama al on submit y le pasa el producto

        if(!productoAEditar) { //si no trae un producto para edita, osea que es un nuevo producto, limpia los campos
            setNombre('');
            setPrecio('');
        };
    };

    return(
        <Form onSubmit={handleSubmit}>
            {errores.length > 0 && ( //si hay errores recorre el array de errores y los muestra individualmente como lista
                <Alert variant="danger">
                    <ul>
                        {errores.map((err, index) => (
                            <li key={index}>{err}</li>
                        ))}
                    </ul>
                </Alert>
            )}
            <Form.Group as={Row} className="mb-3" controlId="nombre">
                <Form.Label column sm={2}>Nombre</Form.Label>
                <Col sm={10}>
                    <Form.Control type="text" placeholder="Nombre del producto" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        {/* -- el value conecta el input con el estado nombre
                        -- el onChange lo que hace es que cada vez que cambia el estado se produce un evento y se setea el valor en el nombre */}
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="price">
                <Form.Label column sm={2}>Precio</Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" placeholder="Pecio" value={precio} onChange={(e) => setPrecio(e.target.value)} min='0' step='0.01' />
                        {/* -- value y onChange igual que en nombre
                        -- type: solo permite numero
                        -- min = 0 solo permite numeros mayores a 0, no negativos
                        -- step = 0.01 permite decimales de dos digitos */}
                </Col>
            </Form.Group>

            <Button variant="primary" type="submit" className="me-2">{productoAEditar ? 'Actualizar' : 'Agregar'}</Button> 
            {/*el texto del boton cambia de acuerdo a si es un producto a editar o uno nuevo*/}

            {productoAEditar && ( //si estoy editando aparece el boton de cancelar
                <Button variant="secondary" onClick={onCancel}>Cancelar</Button>
                //este boton llama a la funcion onCancel creada en el componente que llama al form y pasada por parametro
            )}

        </Form>
    )
}

export default ProductoForm;