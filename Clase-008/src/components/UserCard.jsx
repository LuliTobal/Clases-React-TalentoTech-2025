import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Card, Spinner } from 'react-bootstrap';

const UserCard = () => {
    const {user}=useContext(UserContext); // variable que llama a useContex y entre {} le pasamos a cual "contexto queremos acceder"
    //guardamos en user el array de objetos que trae UserContext

    if(!user) {
        return(
            <div className="d-flex justify-content-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden" > Cargando...</span>
                </Spinner>
            </div>
        )
    };

    return(
        <div className="d-flex justify-content-center mt-4">
            <Card style={{ width: '20rem' }} className="shadow border-0">
                <Card.Img variant="top" src={user.picture.large} />
                <Card.Body>
                    <Card.Title>
                        {user.name.first} {user.name.last}
                    </Card.Title>
                    <Card.Text>
                        <strong>Email:</strong> {user.email}<br />
                        <strong>Ubicación:</strong> {user.location.city}, {user.location.country}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default UserCard;