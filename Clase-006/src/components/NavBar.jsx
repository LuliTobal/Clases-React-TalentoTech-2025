import { Navbar, Nav , Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
    return(
        <Navbar expand="lg">
            <Container>
                {/*Esto ya es react-router, le aviso que esto se va a comportar como un link
                (usando a={Link}) y a donde me va a redirigir (usando to="/") */}
                <Navbar.Brand as={Link} to='/'>LOGUITO</Navbar.Brand> {/*Acá va el logo*/}
                <Navbar>
                    <Navbar.Collapse>
                        <Nav>
                            {/*Aca son los items del nav, que tengo que redireccionarlos */}
                            <Nav.Link as={Link} to='/'>Home</Nav.Link>
                            <Nav.Link as={Link} to='/about'>About</Nav.Link>
                            <Nav.Link as={Link} to='/contact'>Contacto</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </Navbar>
    );
};
{/*se configura en app las rutas, entonces cada ruta que le llege tiene que direccionarlo*/}

export default NavBar;