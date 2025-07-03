import { useState } from 'react'
import { Container } from 'react-bootstrap';
import ProductoForm from './ProductoForm';
import ListaProductos from './ListaProductos';

function App() {

  const [productos, setProductos] = useState([]); //este va a cgrear un array con los productos, cada vez que se agrega, edita o elimina un producto se setea con el setProductos
  const [productoAEditar, setProductoAEditar] = useState(null); //con este manjamos los productos del array, almacena el seleccionado para editar, si es null no hay ninguno seleccionado
  const [contadorId, setContadorId] = useState(1); //este genera el id de cada producto

  const agregarProducto = (producto) => { //esta funcion sirve para concatenarle el id al producto y agregar el producto al array de productos... recibe el "producto" desde el form
  // e incrementar en 1 el id para ek proximo producto
    const nuevoProducto = {...producto, id: contadorId}; //esta función spread (...) lo que hace es: al producto que ingresa le suma el id
    setProductos([...productos, nuevoProducto]) //agrega el producto al array, spread ...productos trae el array de productos, lo lee, le agrega producto nuevo y lo setea en el array
    setContadorId(contadorId + 1); //incrementamos el id en 1 para el proximo
  };

  const actualizarProducto = (productoActualizado) => { //a esta función devuelve el producto con todos sus registros --- recibe el producto actualizado por parametro
    setProductos(productos.map(p => p.id === productoActualizado.id ? productoActualizado : p)); //usa el .map para recorrer todo el array
    //lo que hace es tomar un producto del array y comparar si el id es el mismo al producto que queremos actualizar
    //si es el mismo entonces setea el producto actualizado, sino lo deja como está
    setProductoAEditar(null); //vuelve el producto a editar en null para volver al modo crear producto
  }; //este es la segunda parte del metodo editar, esta función lo actualiza

  const borrarProducto = (id) => { //recibe le id del producto a eliminar
    setProductos(productos.filter(p => p.id !== id)); //lo que hace esta linea es comparar del array los productos por el id
    //los que no coinciden en el id se setean nuevamente en el array, si coincide el id del producto con el que llega por parametro no se guarda
    //.filter hace un filtro, recorre el array, toma el id del objeto, lo compara con el de parametro y si es distinto se ejecuta el seteo
    //si es igual no lo setea, por ende lo quita del array
  };

  const editarProducto = (producto) => { //el producto que le llega por parametro lo recibe del form cuando el usuario hace click en editar
    setProductoAEditar(producto) //lo manda al usestate de setProductoAEditar y la función de actualizarProducto lo va a tener listo para actualizar
    // el producto que llega por parametro se guarda en producto a editar y esto avisa al formulario que esta en modo edicion, porque lo está pasando tambien al form
  }; //necesita de dos partes, esta setea el producto en el form, devuelve el resultado

  return (
    <Container className='my-4'>
      <h2>Gestión de productos</h2>

      <ProductoForm onSubmit={productoAEditar ? actualizarProducto : agregarProducto} //funcion onSubmit, usamos el operador ternario para ver si tenemos que editar un producto o crear uno nuevo
      productoAEditar={productoAEditar} //este va a ser el producto que le llega de la función editarProducto, si hay un producto para editar, llega a la funcion por parametro y lo setea en la variante que luego vamos a llamar aca
      onCancel={() => setProductoAEditar(null)} // para cancelar la edición, directamente lo seteamos como null y no se guarda ese valor
      /> {/*Pasa al form: - la funcion del onSubmit
       - El producto a editar, si hay uno
       - la función onCancel
       TODO ESTO LE VA A LLEGAR POR PARAMETRO AL FORM*/}
      <hr />

      <ListaProductos productos= {productos} //maneja la lista de productos
       onEdit= {editarProducto} //edita el producto
       onDelete= {borrarProducto} //elimina el producto del array
      /> {/*Pasa a la lista: - todos los productos
      - la función para editar productos
      - la funcion para borrar productos */}

    </Container>
  )
};

export default App;
