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

// Notacion de corchetes
const propiedad = 'altura';

// console.log( persona[propiedad] )

// console.log( persona['direccion'] )

console.log(typeof persona.saludar)

// const getDataByKey = (key) => {
//     if(typeof persona[key] === 'function') {
//         console.log(persona[key]())
//         return persona[key]()
//     }else {
//         persona[key]
//         console.log(persona[key])
//         return persona[key]
//     }
// };

const getDataByKey = (keyPrincipal, keySecondary) => {
    if(keySecondary && persona[keyPrincipal]){
        console.log(persona[keyPrincipal][keySecondary])
    }else{
        console.log(persona[keyPrincipal])
    }
};

getDataByKey('direccion', 'colonia');
getDataByKey( 'saludar');
getDataByKey( 'telefono', 'trabajo');





// Notacion de punto .
const coloniaPersona = persona.direccion.colonia;
// console.log(persona.saludar('Jason Vorhees'))
// console.log(persona)
// console.log(persona.direccion.colonia)
// console.log(persona.direccion.numero.ext)

- Crear objetos javascript que representen los siguientes objetos de la vida real (con todo y métodos)
    - Un automóvil
    - Una casa
    - Una persona
    - Un mentor
    - Un koder
    - Una computadora
    - Un edificio
    - Un teléfono móvil
    - Un menu de restaurante



    Crear una función que reciba un objeto persona como único parámetro y use su atributo nombre para mostrar un saludo

    - Dado este objeto
    
    ```jsx
    let automovil = {
    	marca: "FIAT",
    	modelo: "500",
    	acelerar: () => console.log("ruuuun!")
    }
    ```
    
    Escribe el código necesario para ejecutar su función acelerar