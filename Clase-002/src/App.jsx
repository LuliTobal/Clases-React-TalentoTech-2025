import { useState } from 'react'
import './App.css'
import ListaUsuario from './Components/ListaUsuarios'
import Saludo from './Components/Saludo'
import Usuarios from './Components/Usuarios'
import ListaProductos from './Components/ListaProductos'

function App() {
  const [count, setCount] = useState(0)

  //objeto
  const usuario={nombre:"Lourdes", edad:"29"}
  //array
  const nombres=["Lucas", "Juana", "Julio", "Maria"];
  //JSON
  const productos=[
    {
      id: 1,
      nombre: "mouse",
      precio: 2500,
      imagen: "https://picsum.photos/200/150?random=1",
    },
    {
      id: 2,
      nombre: "monitor",
      precio: 400000,
      imagen: "https://picsum.photos/200/150?random=2",
    },
    {
      id: 3,
      nombre: "teclado",
      precio: 21500,
      imagen: "https://picsum.photos/200/150?random=3",
    }
  ];

  return (
    //<ListaUsuario />
    //<Saludo nombre= {usuario.nombre} edad= {usuario.edad}/>
    //<Usuarios info={usuario} />
    <ListaProductos producto={productos} />
  )
}

export default App
