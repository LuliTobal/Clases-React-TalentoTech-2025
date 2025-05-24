import { Navbar , Container, Nav, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {

    const navigate = useNavigate();
    const isAuth = localStorage.getItem ('auth') === 'true'; //isAuth va a recuperar el valor del localStorage en su clave valor auth (definida en la pag del logIn)
    //  y va a guardar true o false (en este caso siempre true)

    //creamos una funcion que lo unico que hace es removeItem, quita el registro (valor) auth del localStorage. Y nos redirige al login a travez del navigate
    const cerrarSesion = () => {
        localStorage.removeItem('auth');
        navigate ('/login');
    };

    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={Link} to='/'>CompuMundo</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav className='me-auto'>
                        <Nav.Link as={Link} to='/'>Inicio</Nav.Link>
                        <Nav.Link as={Link} to='/Productos'>Productos</Nav.Link>

                        {/*Acá van las paginas a las que se puede acceder y ver SOLO si esta Logueado.
                        Si isAuth es verdadero me va a mostrar los dos links iniciales mas los dos nuevos,
                        si es false no lo va a renderizar (eso le estoy diciendo con la formula &&) */}
                        {isAuth && (
                            <>
                                <Nav.Link as={Link} to='/perfil/usuario123'>Perfil</Nav.Link>
                                <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
                            </>
                        )}
                    </Nav>
                    <Nav>
                        {!isAuth ? (
                            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                        ) : (
                            <Button variant="outline-light" onClick={cerrarSesion}>Cerrar sesion</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;