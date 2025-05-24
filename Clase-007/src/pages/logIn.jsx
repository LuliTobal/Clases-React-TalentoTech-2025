import { useNavigate } from "react-router-dom";
import { Container, Form, Button } from "react-bootstrap";

function LogIn() {

    const navigate = useNavigate(); //hook para navegar entre páginas que realizan una acción y comparten datos
    //en este caso estamos redirigiendo a una vista que tiene un dato adicional (el usuario hardcodeado)
    
    const handleLogIn = () => {
        localStorage.setItem( 'auth', 'true'); //aca está hardcodeado el usuario
        navigate('/perfil/usuario123'); //esta es la vista a la que redirige (/perfil) y le pasa el argumento (usuario123) (ese llega a la vista perfil y entra a traves del useParams)
    }

    return(

        <Container className="mt-4" style={{ maxWidth:400 }}>
            <h2>Iniciar sesión</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Usuario</Form.Label>
                    <Form.Control type="text" />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" onClick={handleLogIn}>Entrar</Button>
                {/*Al hacer click en ese boton, llama a la funcion de mas arriba y esta
                a traves del navigate me va a redirigir a la vista perfil y le va a pasar el argumento 'usuario123' */}
            </Form>

        </Container>

    );
};

export default LogIn;