import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Inicio from './pages/inicio'
import LogIn from './pages/logIn'
import Perfil from './pages/perfil'
import Administracion from './pages/administracion'
import Productos from './pages/productos';
import RutaProtegida from './components/rutaProtegida'

function App() {

  return (
      <BrowserRouter>
        <Header />
        <Routes>
          {/*Rutas que no están protegidas */}
          <Route path='/' element={<Inicio />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/productos' element={<Productos />} />

          <Route path='/perfil/:id' element={
            <RutaProtegida><Perfil /></RutaProtegida>
          } />
          {/*esto va a remplazar con el id que le paso por el login y se envuelve la vista que quiero proteger con el wrapper creado anteriormente,
          al estar envuelto en el wrapper pasa a ser children del mismo y si no se da la condición no se tiene acceso*/}
          <Route path='/admin' element={
            <RutaProtegida><Administracion /></RutaProtegida>
          } />
        </Routes>
        <Footer />
      </BrowserRouter>
  );
};

export default App;
