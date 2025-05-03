import { useState } from 'react';
import Swal from 'sweetalert2';

function Formulario(){
    //3 useStates para manejar los distintos datos del componente
    const [nombre , setNombre] = useState('');
    const [mail , setMail] = useState('');
    const [mensaje , setMensaje] = useState('');

    
    const mailValido = (mail) =>{
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //expresion regular
        return regex.test(mail); //ESTE RETURN VA A ACTUAR EN CONJUNTO CON EL e.preventDefault()
        //regex.test compara el argumento que le paso por () con la const regex
        //si coincide y pasa me retorna un true, sino retorna false
    };
     // con el handleSubmit manejo el evento del submit
    const handleSubmit = (e) => { //esto es funcion flecha, la (e) es el elemento que desencadena el evento, en este caso el form a travez del onSubmit
        e.preventDefault(); // EL .preventDefault() es la manera que yo tengo de avisarle que vamos a trabajar de otra manera,
        // en caso de que ocurra un return (acá entra el rol de los return) vas a quedar parado hasta tanto no haya ningun return
        
        //el comportamiento por default de un form es enviarlo
        //con el prevent defaul prevenimos ese comportamiento, le ponemos un freno al envio del form
        //validar que no haya campos vacios
        if(nombre.trim()=== '' || mail.trim()==='' || mensaje.trim() === ''){
            //si cumple con algunas de las condiciones entra al if
            //este if lanza el alert y devuelve un return
            Swal.fire({
                icon: 'error',
                title: 'Campos incompletos',
                text: 'Por favor completar todos los campos',
            });
            //el return le pone un freno al envio del form
            return; //ESTE RETURN VA A ACTUAR EN CONJUNTO CON EL e.preventDefault()

            //si no entra al if no devuelve el return y deberia enviarse el form
        }

        //validación de que el formato del mail coincide con la expresión regular
        if (!mailValido(mail)) { //si mailValido NO es true (el formato del mail no coincide con la expresión regular)
            //salta el alert
            Swal.fire({
                icon: 'error',
                title: 'Email no es valido',
                text: 'Por favor ingresa un mail con formato valido',
            });
            //si entra al bucle y devuelve un return se frena el envío del form
            return; //ESTE RETURN VA A ACTUAR EN CONJUNTO CON EL e.preventDefault()
        }

        //Si está todo bien y no entra en ningun if ni se topa con ningun return
        //entonces el formulario se envia. Y comunicamos con un alert
        //mejora la experiencia de usuario
        Swal.fire({
            icon: 'success',
            title: 'Formulario enviado',
            text: `Gracias, ${nombre}. Te responderemos pronto.`,
        });
        
        //dejamos limpio y vacio los useState
        setNombre('');
        setMail('');
        setMensaje('');
    }
    
    return(
        //le paso al evento del form la constante que valida la info
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto'}}>
            <h2>Formulario de contacto</h2>

            <div style={{ marginBottom: '10px'}}>
                <label>Nombre:</label>
                {/* le pasamos a nombre el valor que introdusca el usuario y
                con la funcion flecha del onChange seteamos ese valor
                cuando el usuario ponga el nombre, el valor pasa a ser ese nombre,
                setNombre accede a ese valor por e.target.value y lo setea en la variable nombre */}
                <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}
                placeholder='Tu nombre' style={{ width: '100%', padding: '8px'}} />
            </div>
            <div style={{ marginBottom: '10px'}}>
                <label>Email:</label>
                {/* le pasamos a mail el valor que introdusca el usuario y
                con la funcion flecha del onChange seteamos ese valor
                cuando el usuario ponga el mail, el valor pasa a ser ese mail,
                setMail accede a ese valor por e.target.value y lo setea en la variable mail */}
                <input type="email" value={mail} onChange={(e) => setMail(e.target.value)}
                placeholder='Tu email' style={{ width: '100%', padding: '8px'}} />
            </div>
            <div style={{ marginBottom: '10px'}}>
                <label>Mensaje:</label>
                <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)}
                placeholder='Dejanos tu mensaje...' rows="4" style={{ width: '100%', padding: '8px'}}>
                </textarea>
            </div>

            <button type='submit' style={{padding: '10px 20px'}}>Enviar</button>
        
        </form>
    );
}

export default Formulario;