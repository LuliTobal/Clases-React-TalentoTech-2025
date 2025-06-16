// ESTE COMPONENTE TAMBIEN ES UN WRAPPWER
import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRoute ({ children }) { //Wraper que recibe un children (recibe el componente al que envuelve)

    const { token } = useAuth(); // aca solo guardamos en una constante si el useAuth devuelve algo
    return token ? children : <Navigate to='/' />; //aca busco protejer para que el children se muestre solo si existe un token
    //entonces, si el token del contexto existe mostra children, sino nos lleva a '/' que en app esta configurado para que sea el login

};