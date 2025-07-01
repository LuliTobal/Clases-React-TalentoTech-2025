import { useState } from 'react'
import { Container } from 'react-bootstrap';

function App() {

  const [productos, setProductos] = useState([]); //este va a cgrear un array con los productos
  const [productoAEditar, setProductoAEditar] = useState(null); //con este manjamos los productos del array
  const [contadorId, setContadorId] = useState(1); //este genera el id de cada producto

  const agregarProducto = (producto) => { //esta funcion sirve para concatenarle el id al producto, agregar el producto al array de productos
  // e incrementar en 1 el id para ek proximo producto
    const nuevoProducto = {...producto, id: contadorId}; //esta función spread (...) lo que hace es: al producto que ingresa le suma el id
    setProductos([...productos, nuevoProducto]) //al array de procudtos le voy a agregar uno mas
    setContadorId(contadorId + 1); //para cada producto incrementamos el id en 1
  };

  const actualizarProducto = (productoActualizado) => { //a esta función devuelve el producto con todos sus registros
    setProductos(productos.map(p.id === productoActualizado.id ? productoActualizado : p));
    //lo que hace es tomar un producto del array y comparar si el id es el mismo al producto que queremos actualizar
    //si es el mismo entonces setea el producto actualizado, sino lo deja como está
    setProductoAEditar(null);
  };

  const borrarProducto = (id) => {
    setProductos(productos.filter(p => p.id !== id)); //lo que hace esta linea es comparar del array los productos por el id
    //los que no coinciden en el id se setean nuevamente en el array, si coincide el id del producto con el que llega por parametro no se guarda
    //.filter hace un filtro, recorre el array, toma el id del objeto, lo compara con el de parametro y si es distinto se ejecuta el seteo
    //si es igual no lo setea, por ende lo quita del array
  };

  const editarProducto = (producto) => { //el producto que le llega por parametro lo recibe del form
    setProductoAEditar(producto) //lo manda al usestate de setProductoAEditar y la función de actualizarProducto lo va a tener listo para actualizar
  };

  return (
    <Container className='my-4'>
      <h2>Gestión de productos</h2>

      <ProductoForm onSubmit={productoAEditar ? actualizarProducto : agregarProducto} //usamos el operador ternario para ver si tenemos que editar un producto o crear uno nuevo
      productoAEditar={productoAEditar} //este va a ser el producto que le pase a la función editarProducto
      onCancel={() => setProductoAEditar(null)} // para cancelar la edición, directamente lo seteamos como null y no se guarda ese valor
      />

      <hr />

      <ListaProductos productos= {productos} //maneja la lista de productos
       onEdit= {editarProducto} //edita el producto
       onDelete= {borrarProducto} //elimina el producto del array
      />

    </Container>
  )
};

export default App
