import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
//El enrutador (Router) al que le van a llegar los pedidos y direcciona
//una ruta especifica a un componente (Route) y agrupador de rutas (Routes)
import NavBar from './components/NavBar'
import AboutUs from './pages/AboutUs'
import Contacto from './pages/Contact'
import Home from './pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css'
//import './App.css'

function App() {

  return (
    <div>
      <Router> {/*Configuramos la ruta */}
        <div>
          <NavBar /> {/*ya inclui el navBar*/}
          <Routes> {/*Especificamos las rutas, todas las que tenga el navBar hay que identificarlas y enlazarlas especificar a donde va*/}
            <Route path='/' element={<Home />} /> {/*que cuando llegue la ruta que dice en path="<ruta>" a donde me 
            va a llevar a traves de element={<elemnto/pag/lo que sea que a donde me lleva>}*/}
            <Route path='about' element={<AboutUs />} />
            <Route path='contact' element={<Contacto />} />
            {/*Tiene que coincidir el path con lo que se manda por el to= en el NavBar */}
          </Routes>
        </div>
      </Router>
    </div>
  )
}

export default App
