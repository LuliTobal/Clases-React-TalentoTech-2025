import { useState } from 'react'
import { UserProvider } from './context/UserContext'
import { Container } from 'react-bootstrap'
import UserCard from './components/UserCard'
import CargarBotonUsuario from './components/CargarBotonUser'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserProvider> {/*todo lo que meta entre etiqueta de apertura y cierre ingresa al componente como hijo (children)
      y va a poder acceder a la información pasada por value en la creacion del contexto*/}
        <Container>
          <h1>Usuario Aleatorio</h1>
          <UserCard />
          <CargarBotonUsuario />
        </Container>
      </UserProvider>
    </>
  )
}

export default App
