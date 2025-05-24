import { Navigate } from "react-router-dom";

{/*Esta funcion es un wraped - es un envoltorio, es código que sirve para mejorar algo que ya está hecho 
    todo lo que este dentro de la function rutaProtegida va a si o si requerir que el auth sea true.. si no es true no me va a dejar acceder */}
function RutaProtegida ({ children }) {
    {/*children quiere decir que todos los elementos que formen parte de una ruta protegida tambien van a estarlo */}

    const auth = localStorage.getItem('auth') === 'true';
    return auth ? children : <Navigate to='/login' />;
    
}

export default RutaProtegida;