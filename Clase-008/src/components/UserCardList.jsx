//COMPONENTE CREADO SI QUIERO MOSTRAR MUCHAS CARDS
//Lo que hace, es tomar el array generado en el UserContex
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import UserCard from "./UserCard";

const UserCardList = () => {
    const {user} = useContext(UserContext); //aca accede al array de objetos y lo guarda en una variable user

    if (user.lenght === 0 ) { //si user.lenght viene sin objetos va a mostrar el msj
        return (
            <p>No hay ususario para mostrar</p>
        )
    }
    //sino renderiza el return:
    return(
        <div>{/* hace un map del array que trae del contexto y le pasa el valor del index y el objeto para que la card lo muestre*/}
            { user.map((user, index) => ( 
                <UserCard key={index} user={user} />
            ))}
        </div>
    )
};

export default UserCardList;