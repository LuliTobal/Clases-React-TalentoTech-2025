//Entorno de autenticación
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext(); //Generamos el contexto

//Creamos AuthProvider, es el provedor de la información que se va a poder utilizar del contexto
export function AuthProvider({ children }) {

    const [token, setToken] = useState(null); //Creamos useState para manejar el token
    const [usuario, setUsuario] = useState(null); //Creamos useState para manejar el usuario

    useEffect(() => {
        const savedToken = localStorage.getItem("token"); //constante que accede al token trayendolo con el .getItem del localStorage
        const savedUsuario = localStorage.getItem("usuario"); //esta trae la información guardada en el localStorage de usuario

        if (savedUsuario && savedToken) { //si ambas constantes tienen información
            setToken(savedToken); //se setea el token
            setUsuario(savedUsuario); // y se setea el usuario
        }
    }, []);

    const login = (usuarioName , contraseña) => {
        if (usuarioName === 'admin' && contraseña === '1234') {//harcodeamos la informacion y si el nombre del usuario que ingresa y la contraseña coinciden
            //se sucede este codigo donde guardamos los valores en el localStorage y nos devuelve true, lo que nos daría acceso a la info
            const tokenFalso = 'LrdS01tBL08pMb95';
            setToken(tokenFalso); 
            setUsuario(usuarioName);
            localStorage.setItem('token', tokenFalso); //le agrego la informacion al localStorage
            localStorage.setItem('usuario', usuarioName);// agrego el valor de usuarioName al usuario del localStorage
            return true;
        }
        return false;
    };

    const logout = () => { //borramos todo lo que hay en el localStorage para cerrar la sesión
        setToken('null');
        setUsuario('null');
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
    }

    return(
        <AuthContext.Provider value={{token, usuario, login, logout}}> {/*El authContext va a tener un valor, el de las funciones creadas arriba */}
            {children} {/*Todo lo que ingrese como children va a tener acceso a esos valores */}
        </AuthContext.Provider>
    )

};

export const useAuth = () => useContext(AuthContext); //un custom hook que da acceso al contexto mas facilmente y de forma mas 'limpia'
//devuelve el valor del contexto, cuando lo llamamos en otros componentes directamente importamos useAuth y llamamos a los valores que necesitamos
// ejemplo: import {useAuth} from '<su ruta>' /// mas adelante => /// const {login, token, usuario} = useAuth();