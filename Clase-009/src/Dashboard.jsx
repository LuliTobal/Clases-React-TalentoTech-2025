import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { Container, Button, Card, Navbar, Nav } from "react-bootstrap";

export default function Dashboard() {

    const {usuario, logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => { //función para salirse llama:
        logout(); //llama a la funcion logout del contexto (la que mata el localStorage )
        navigate('/'); {/*con navigte la hace navegar a la pagina de inicio */}
    };

    return (
        <>
            <Navbar bg='dark' variant="dark" expand='lg'>
                <Container>
                    <Navbar.Brand href="#">La Tiendita</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link href="#">Inicio</Nav.Link>
                            <Nav.Link href="#">Perfil</Nav.Link>
                        </Nav>
                        <Navbar.Text className="me-3">
                            Usuario: <strong>{usuario}</strong>
                        </Navbar.Text>
                        <Button variant="outline-light" onClick={handleLogout}>Cerrar sesión</Button> {/*Boton que al producirse el evento llama a la funcion */}
                    </Navbar.Collapse>
                </Container>
            </Navbar>          

            <Container className="d-flex justify-content-center align-items">
                <Card style={{width: "30rem"}}>
                    <Card.Body className="text-center">
                        <Card.Title>Dashboard</Card.Title>
                        <Card.Text className="mb-4">
                            Hola <strong>{usuario}</strong>, bienvenido a la pagina principal!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );

};