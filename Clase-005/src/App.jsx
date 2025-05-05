import { useEffect, useState } from 'react'
// import './App.css'
import { Card, Col, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  //creamos dos constantes
  //una con el hook para menejar personajes:
  const [personajes, setPersonaje] = useState([]); //lo iniciamos como un array vacio
  //uno con hook para manejar las demoras en las cargas que pueden haber
  const [loading, setLoading] = useState(true); //esto va a estar funcionando mientras no haya datos

  //hook que se va a encargar de hacer la peticion de manera asincronica //// se puede haceer de otra forma con una funcion async, que es parecido a una promesa, espera que otra cosa suceda para poder continuar con su ejecucion
  useEffect(()=>{ //Adentro tiene una funcion flecha
    // a travez de un hook useEffect hacer el pedido de la api
    fetch('https://dragonball-api.com/api/characters') //hace la peticion y devuelve una promesa (y recibo los then) que tengo que hacer pasos
    //si se cumple la promesa entonces me devuelve una respuesta (res) que la recibe el primer then
    //en formato JSON que tengo que convertir a un formato legible
    .then( res => res.json()) //'res' es la respuesta que a travez de la funcion flecha le digo que viene convertida en json
    //y si se cumple esa entonces:
    .then(data => { //'data' , esta info que me devuelve el json lo convierta en una array de objetos (en un formato que pueda entenderlo)
      setPersonaje(data.items); //y el array de objetos se lo  pasamos al useStates de setPersonajes a traves de data.items = me lo convierte en un array de objetos y se lo pasa al hook // despues el setPersonaje lo guarda en la variable que le vamos a pasar por parametro al componente que lo va a usar
      setLoading(false); //ahora que tiene los datos no es necesario por eso lo seteamos en false
    })
    //si no se cumple y ocurre una excepcion en algun momento del fetch la manejamos con el catch, que atrapa la exepcion y devuelve lo que le pasemos--> mejora experiencia de ususario
    .catch(err => { //err para el error
      console.error("Error de carga de API", err) //tiramos el error por consola con el mensaje y el 'err' que nos va a mostrar el código del error
      setLoading(true); // seteamos el set loading en true porque hay un error
    });
  }, []); // el useEffect es un array de objetos entonces se lo indico a la función con lo corchetes, porque el asi lo indica el useStates de personajes, sino el useStates ni sabe que le estamos mandando un array de objetos
  
  return (
      <Container className='mt-4'>
        <h1>Personajes DragonBallZ</h1>
        <Row>
          {/*Empezamos con codigo react -- traigo la variable personajes y la recorro con un map.
          Dentro del map hacemos todo y accedemos a la info de un personaje a la vez
          'char' tiene guardado un objeto (personaje) a la vez */}
          {personajes.map (char=> (
            <Col key={char.id} md={4}>
              {/*vamos a sacar la info del onjeto char y accedemos mediante el .<propiedad> */}
                {/*Esta card es una, como esta dentro de un map deberia replicarse por la cantidad de obj que tiene el array*/}
                <Card className='m-2'>
                  <Card.Img src={char.image}/>
                    <Card.Body>
                      <Card.Title>{char.name}</Card.Title>
                      {/*{char.race || 'N/A'} es un operador como un or, que si el dato no esta me muestra el mensaje pasado entre '' */}
                      <Card.Text><strong>Raza: </strong>{char.race || 'No tiene'}</Card.Text>
                    </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
        
      </Container>
  );
}

export default App;
