import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './AuthContext'
import Dashboard from './Dashboard'
import Login from './Login'
import ProtectedRoute from './ProtectedRoute'

function App() {

  return (
    <>
      <AuthProvider> {/*envolvemos todo lo que va a tener acceso al contexto (variable sy funciones del mismo), sin acceso al contexto no va a poder accederse
      al haber envuelto todo con el contexto y tener acceso a la info, se puede validar que el ususario sea el que correspone y darle acceso al resto de los elementos
      // disponibiliza la información */}
        <BrowserRouter> {/*genreamos el ruteo de la app // conjunto de rutas con acceso al contexto si lo quisieran o necesitasen*/}
          <Routes>
            <Route path='/' element={<Login />} /> {/*todo lo que tenga una / va al login */}
            <Route path='/dashboard' element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
              } />
              {/*el ruteo al poner /dashboard en la url del proyecto va a renderizar la vista del dashboard,
              pero al estar el componente de la vista entre etiquetas de protectedRoute
              tiene que cumplicer la condición que le da acceso, en este caso la existencia de un token
              al cual protectedRoute accede por medio del contexto creado y hace la verificación*/}
          </Routes>
        </BrowserRouter>
      </AuthProvider>
      
    </>
  )
}

export default App
