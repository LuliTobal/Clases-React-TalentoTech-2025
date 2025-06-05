import { createContext, useState, useEffect } from "react";


export const UserContext = createContext(); //createContext() crea el contenedor para el valor que queremos compartir, el UserContext es lo que se va a "compartir" y es lo que contiene los valores que queremos compartir. Es el global

//armamos el wrapper, como envoltorio donde poder usar el UserContext
export const UserProvider = ({ children }) => { //funcion flecha que especifica su disponibilidad  a los elementos hijos, por eso {{children}}, los elementos que luego vamos a envolver en el wrap
    //useState cambia de manera dinámica el valor de user a partir de setUser
    const [user, setUser] = useState([]);// Lo iniciamos como array porque queremos renderizar mas de una car con distinta info sino lo iniciamos (null)

    //creamos la constante que realmente vale, con la informacion de la API publica de random user en este caso
    const fetchRandomUser = async () => { //esta constante es igual a una función asincrónica que va a ser un fetch
        const res = await fetch('https://randomuser.me/api/'); //guardamos en una constante la respuesta que trae de la API
        const data = await res.json(); //esperamos la respuesta y una vez que llega la guardamos la respuesta y la parseamos para convertirla en un array de objetos JS
        //setUser(data.results[0]); esto es si queremos traer solo uno seteamos el primer usuario, si trae mas de uno no lo setea por eso [0] para que se quede con los datos del primero
        setUser((prevUser) => [...prevUser,data.results[0]]); //aca seteamos el array, arranca nullo, al ejecutarse la funcion se agrega un objeto,
        // al hacer click en el boton se ejecuta de nuevo y suma un nuevo objeto al array a travez de la funcion flecha
    };

    useEffect(() => { //funcion flecha que llama a la constante del fetch para que la cargue inicialmente
        fetchRandomUser();
    }, []);

    //El fetchRandomUser lo que va a hacer es: ir a la api hacer un fetch a la api / ir seteando el user a partir del setUser

    return ( //acá se convierte en wrapper, relacionandole un proveedor (Provider) al UserContext
        <UserContext.Provider value = {{user, fetchRandomUser}}> {/*ese provider va a ser el user y el fetchRandomUser pasado por value */}
            {children} {/*le paso children que hace que todo lo que este entre etiqueta de apertura y cierre UserContext reciva el user (un usuario) y el fetch (con otro/s usuario/s)
            así puedo tener un objeto inicial y crear un boton para que cada vez que lo apriete pueda tener nuevos usuarios.
            Todo lo que ingrese como children va a poder ver el UserContext creado*/}
        </UserContext.Provider>
    );
};