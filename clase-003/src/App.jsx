import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  // const [count, setCount] = useState(0)
  const usuario = "Lourdes Tobal";
  const tipo = "Admin";

  const navItems = ["Inicio", "Galeria", "Contacto"];

  const imagenes = [
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3"
  ];

  //Necisatos que de alguna manera la app recuerde en donde está parada
  //por eso usamos el useState que es un hook que va recordando los estados en
  // en el que esta parado cada vez que se hace click en alguna de las secciones de la pag
  // tiene dos partes, una que lo setea y otra que lo recuerda
  // y el valor de inicio (es el que está dentro de los parentesis en este caso "Inicio"),
  // que el primer valor de inicio es ese, pero despues se va a ir almacenando
  // despues lo que se vaya cambiando va a ir almacenandose en el section
  const [seccion, setSeccion] = useState("Inicio"); //setSection setea, section guarda
  //ya tengo el section guardado, tengo el "inicio"
  // pero al hacer click en distintos elementos, va a ir guardando el elemento donde clickee
  //si guardo el elemento donde clickee tengo que usar una estructura para poder tomar diferentes caminos de acuerdo a la opcion (switch)
  const renderContenido = () =>
    {
      switch(seccion){
        case "Inicio":
          return <Home />;
        case "Galeria":
          return <Gallery imagenes={imagenes} />;  
        case "Contacto":
          return <Contact />;
        default:
          return <Home />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header tipo={tipo} usuario={usuario} />
      {/* al header le pasamos las props que fueron definidas mas arriba*/}
      <Nav items={navItems} onSeleccion={setSeccion} /> 
      {/* para catualizar el setSection cada vez que haga un OnSelection (que lo paso como prop) le paso como valor del prop el setSelection */}
      <main className="flex-grow-1 p-3">
        {/*para que el main muestre el contenido de acuerdo a que se selleccionó en el menú se llama a la funcion switch que en caso de seleccionar uno u otra seccíon va a mostrar un u otro contenido*/}
        {renderContenido()}
      </main>
    </div>
  );
}

export default App;
