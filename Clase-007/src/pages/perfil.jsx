import { useParams } from "react-router-dom"; //un hook que sirve para capturar el dato que viene de la query de la url (en este caso el valor del id pasado como atributo a travez del navigate en la pagina del logIn)
import { Container } from "react-bootstrap";

function Perfil(){

    const { id } = useParams(); //acá se captura el atributo enviado desde logIn a travez del navigate() - valor del {id} = usuario123

    return(
        <Container className="mt-4">
            <h2>Perfil del usuario</h2>
            <p>Bienvenido, {id}</p>
        </Container>
    );
};

export default Perfil;