// const persona =
// {
//     // clave : valor
//     "nombre":"Nicolas",
//     "apellido":"Perez",
//     "Localidad":"Cordoba",
//     "Estudiante":false,
// }

// console.log(persona);

const persona=
{
    nombre:"Nicolas",
    edad:17,
    ciudad:"Cordoba",

    //función
    saludar(){
        return `Hola, soy ${this.nombre}`;
    }    
}

console.log(persona.saludar());