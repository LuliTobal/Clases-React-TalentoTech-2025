import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"
import { Card, Form, Container, Alert, Button, } from "react-bootstrap";

export default function Login() {

    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [error, setError] = useState ("");
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (login (usuario , pass)) { //si usuario y contraseña son correctos
            navigate('/dashboard'); //me lleva al dashboard
        } else { //sino
            setError('Usuario o contraseña inválidos'); //tira un msj de error
        }
    };

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Card style={{ width: "24rem" }}>
                <Card.Body>
                    <Card.Title className="mb-4 text-center">Login</Card.Title>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Usuario</Form.Label>
                            <Form.Control type="text" placeholder="Ingrese usuario" value={ usuario } onChange={(e) => setUsuario(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type="password" placeholder="Ingrese contraseña" value={ pass } onChange={(e) => setPass(e.target.value)} />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100">Ingresar</Button> {/*Evento submit envia el form */}
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
};