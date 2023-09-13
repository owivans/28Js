const persona = {
    nombre: 'Freddy Krueger',
    altura: 1.80,
    direccion: {
        calle: 'calle 13',
        colonia: 'Valley',
        numero: {
            int: 89,
            ext: 700
        }
    },
    telefono: {
        casa: 097809890,
        trabajo: 90790798,
    },
    saludar: (personaASaludar) => 'Hola amigo' + ' ' + personaASaludar
};
'Hola soy X y mido x de altura'
'Hola soy' + persona.nombre + 'y mido' + persona.altura
// template strings / literal string
`Hola soy ${persona.nombre} y mido ${persona.altura}`
// console.log(persona.altura)
// console.log(persona['edad'])
// if( !persona['edad'] ){
//     persona.edad = 50;
// }
// console.log(persona)


//-crear una funcion que agregue una propieda nueva a un objeto
const run = () => {
    console.log('corriendo...')
};

const addProp = (object, key, value ) => {

    if(!object[key]){
        object[key] = value;
    }
    console.log(object)

};

addProp(persona, 'edad', 80);
addProp(persona, 'correr', run);
addProp(persona, 'test', 'esto es una prueba');

persona.direccion.numero
persona[direccion][numero]

let prop = 'telefono';
// console.log(persona['telefono']['casa'])
persona.telefono.casa
// for (const key in persona) {
//     persona[key]
// }

  let counter = 0;

  const incremento = () => {
    counter++
    const message = 'dentro de la funcion';
    console.log(message)
  };

  incremento()
  incremento()
  incremento()
  incremento()
  console.log(counter)




