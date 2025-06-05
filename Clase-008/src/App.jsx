import { UserProvider } from './context/UserContext'
import { Container } from 'react-bootstrap'
import UserCardList from './components/UserCardList'
import CargarBotonUsuario from './components/CargarBotonUser'

function App() {

  return (
    <>
      <UserProvider> {/*todo lo que meta entre etiqueta de apertura y cierre ingresa al componente como hijo (children)
      y va a poder acceder a la información pasada por value en la creacion del contexto*/}
        <Container>
          <h1>Usuario Aleatorio</h1>
          <UserCardList /> {/*Si solo queremos una card llamamos el componente UserCard unicamente  hacemos las modificaciones correspondientes */}
          <CargarBotonUsuario /> 
        </Container>
      </UserProvider>
    </>
  )
}

export default App
