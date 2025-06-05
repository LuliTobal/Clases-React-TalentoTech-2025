import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Button } from "react-bootstrap";

const CargarBotonUsuario = () => {
    const { fetchRandomUser } = useContext(UserContext); //guardo los datos del contexto al que quiero acceder en una variable

    return(
        <div className="text-center mt-3">
            <Button variant="primary" onClick={fetchRandomUser}> {/*Le paso el nombre de la funcion del context a la que tiene que acceder esto ejecuta la función en cada click*/}
                Cargar nuevo usuario
            </Button>
        </div>
    );
};

export default CargarBotonUsuario;