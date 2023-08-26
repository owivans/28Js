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
persona.saludar()
saludar()
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




    {
        results: [
          {
            id: 1,
            name: "Rick Sanchez",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
              name: "Earth (C-137)",
              url: "https://rickandmortyapi.com/api/location/1"
            },
            location: {
              name: "Citadel of Ricks",
              url: "https://rickandmortyapi.com/api/location/3"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            episode: [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              "https://rickandmortyapi.com/api/episode/3",
              "https://rickandmortyapi.com/api/episode/4",
              "https://rickandmortyapi.com/api/episode/5",
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/13",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/17",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/24",
              "https://rickandmortyapi.com/api/episode/25",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/27",
              "https://rickandmortyapi.com/api/episode/28",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/34",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/37",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41",
              "https://rickandmortyapi.com/api/episode/42",
              "https://rickandmortyapi.com/api/episode/43",
              "https://rickandmortyapi.com/api/episode/44",
              "https://rickandmortyapi.com/api/episode/45",
              "https://rickandmortyapi.com/api/episode/46",
              "https://rickandmortyapi.com/api/episode/47",
              "https://rickandmortyapi.com/api/episode/48",
              "https://rickandmortyapi.com/api/episode/49",
              "https://rickandmortyapi.com/api/episode/50",
              "https://rickandmortyapi.com/api/episode/51"
            ],
            url: "https://rickandmortyapi.com/api/character/1",
            created: "2017-11-04T18:48:46.250Z"
          },
          {
            id: 2,
            name: "Morty Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Male",
            origin: {
              name: "unknown",
              url: ""
            },
            location: {
              name: "Citadel of Ricks",
              url: "https://rickandmortyapi.com/api/location/3"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            episode: [
              "https://rickandmortyapi.com/api/episode/1",
              "https://rickandmortyapi.com/api/episode/2",
              "https://rickandmortyapi.com/api/episode/3",
              "https://rickandmortyapi.com/api/episode/4",
              "https://rickandmortyapi.com/api/episode/5",
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/13",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/17",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/24",
              "https://rickandmortyapi.com/api/episode/25",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/27",
              "https://rickandmortyapi.com/api/episode/28",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/34",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/37",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41",
              "https://rickandmortyapi.com/api/episode/42",
              "https://rickandmortyapi.com/api/episode/43",
              "https://rickandmortyapi.com/api/episode/44",
              "https://rickandmortyapi.com/api/episode/45",
              "https://rickandmortyapi.com/api/episode/46",
              "https://rickandmortyapi.com/api/episode/47",
              "https://rickandmortyapi.com/api/episode/48",
              "https://rickandmortyapi.com/api/episode/49",
              "https://rickandmortyapi.com/api/episode/50",
              "https://rickandmortyapi.com/api/episode/51"
            ],
            url: "https://rickandmortyapi.com/api/character/2",
            created: "2017-11-04T18:50:21.651Z"
          },
          {
            id: 3,
            name: "Summer Smith",
            status: "Alive",
            species: "Human",
            type: "",
            gender: "Female",
            origin: {
              name: "Earth (Replacement Dimension)",
              url: "https://rickandmortyapi.com/api/location/20"
            },
            location: {
              name: "Earth (Replacement Dimension)",
              url: "https://rickandmortyapi.com/api/location/20"
            },
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            episode: [
              "https://rickandmortyapi.com/api/episode/6",
              "https://rickandmortyapi.com/api/episode/7",
              "https://rickandmortyapi.com/api/episode/8",
              "https://rickandmortyapi.com/api/episode/9",
              "https://rickandmortyapi.com/api/episode/10",
              "https://rickandmortyapi.com/api/episode/11",
              "https://rickandmortyapi.com/api/episode/12",
              "https://rickandmortyapi.com/api/episode/14",
              "https://rickandmortyapi.com/api/episode/15",
              "https://rickandmortyapi.com/api/episode/16",
              "https://rickandmortyapi.com/api/episode/17",
              "https://rickandmortyapi.com/api/episode/18",
              "https://rickandmortyapi.com/api/episode/19",
              "https://rickandmortyapi.com/api/episode/20",
              "https://rickandmortyapi.com/api/episode/21",
              "https://rickandmortyapi.com/api/episode/22",
              "https://rickandmortyapi.com/api/episode/23",
              "https://rickandmortyapi.com/api/episode/24",
              "https://rickandmortyapi.com/api/episode/25",
              "https://rickandmortyapi.com/api/episode/26",
              "https://rickandmortyapi.com/api/episode/27",
              "https://rickandmortyapi.com/api/episode/29",
              "https://rickandmortyapi.com/api/episode/30",
              "https://rickandmortyapi.com/api/episode/31",
              "https://rickandmortyapi.com/api/episode/32",
              "https://rickandmortyapi.com/api/episode/33",
              "https://rickandmortyapi.com/api/episode/34",
              "https://rickandmortyapi.com/api/episode/35",
              "https://rickandmortyapi.com/api/episode/36",
              "https://rickandmortyapi.com/api/episode/38",
              "https://rickandmortyapi.com/api/episode/39",
              "https://rickandmortyapi.com/api/episode/40",
              "https://rickandmortyapi.com/api/episode/41",
              "https://rickandmortyapi.com/api/episode/42",
              "https://rickandmortyapi.com/api/episode/43",
              "https://rickandmortyapi.com/api/episode/44",
              "https://rickandmortyapi.com/api/episode/45",
              "https://rickandmortyapi.com/api/episode/46",
              "https://rickandmortyapi.com/api/episode/47",
              "https://rickandmortyapi.com/api/episode/48",
              "https://rickandmortyapi.com/api/episode/49",
              "https://rickandmortyapi.com/api/episode/51"
            ],
            url: "https://rickandmortyapi.com/api/character/3",
            created: "2017-11-04T19:09:56.428Z"
          }
        ]
      }

      const personaje = {
        id: 1,
        name: "Rick Sanchez",
        status: "Alive",
        species: "Human",
        type: "",
        gender: "Male",
        origin: {
          name: "Earth (C-137)",
          url: "https://rickandmortyapi.com/api/location/1"
        },
        location: {
          name: "Citadel of Ricks",
          url: "https://rickandmortyapi.com/api/location/3"
        },
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [
          "https://rickandmortyapi.com/api/episode/1",
          "https://rickandmortyapi.com/api/episode/2",
          "https://rickandmortyapi.com/api/episode/3",
          "https://rickandmortyapi.com/api/episode/4",
          "https://rickandmortyapi.com/api/episode/5",
          "https://rickandmortyapi.com/api/episode/6",
          "https://rickandmortyapi.com/api/episode/7",
          "https://rickandmortyapi.com/api/episode/8",
          "https://rickandmortyapi.com/api/episode/9",
          "https://rickandmortyapi.com/api/episode/10",
          "https://rickandmortyapi.com/api/episode/11",
          "https://rickandmortyapi.com/api/episode/12",
          "https://rickandmortyapi.com/api/episode/13",
          "https://rickandmortyapi.com/api/episode/14",
          "https://rickandmortyapi.com/api/episode/15",
          "https://rickandmortyapi.com/api/episode/16",
          "https://rickandmortyapi.com/api/episode/17",
          "https://rickandmortyapi.com/api/episode/18",
          "https://rickandmortyapi.com/api/episode/19",
          "https://rickandmortyapi.com/api/episode/20",
          "https://rickandmortyapi.com/api/episode/21",
          "https://rickandmortyapi.com/api/episode/22",
          "https://rickandmortyapi.com/api/episode/23",
          "https://rickandmortyapi.com/api/episode/24",
          "https://rickandmortyapi.com/api/episode/25",
          "https://rickandmortyapi.com/api/episode/26",
          "https://rickandmortyapi.com/api/episode/27",
          "https://rickandmortyapi.com/api/episode/28",
          "https://rickandmortyapi.com/api/episode/29",
          "https://rickandmortyapi.com/api/episode/30",
          "https://rickandmortyapi.com/api/episode/31",
          "https://rickandmortyapi.com/api/episode/32",
          "https://rickandmortyapi.com/api/episode/33",
          "https://rickandmortyapi.com/api/episode/34",
          "https://rickandmortyapi.com/api/episode/35",
          "https://rickandmortyapi.com/api/episode/36",
          "https://rickandmortyapi.com/api/episode/37",
          "https://rickandmortyapi.com/api/episode/38",
          "https://rickandmortyapi.com/api/episode/39",
          "https://rickandmortyapi.com/api/episode/40",
          "https://rickandmortyapi.com/api/episode/41",
          "https://rickandmortyapi.com/api/episode/42",
          "https://rickandmortyapi.com/api/episode/43",
          "https://rickandmortyapi.com/api/episode/44",
          "https://rickandmortyapi.com/api/episode/45",
          "https://rickandmortyapi.com/api/episode/46",
          "https://rickandmortyapi.com/api/episode/47",
          "https://rickandmortyapi.com/api/episode/48",
          "https://rickandmortyapi.com/api/episode/49",
          "https://rickandmortyapi.com/api/episode/50",
          "https://rickandmortyapi.com/api/episode/51"
        ],
        url: "https://rickandmortyapi.com/api/character/1",
        created: "2017-11-04T18:48:46.250Z"
      };
      console.log(personaje.location.name);


      const serviceType = {
        maritime: () => {console.log('la cantidad a pagar es 19')},
        aerial: () => {console.log('la cantidad a pagar es 19')},
        ground: () => {console.log('la cantidad a pagar es 19')},
      };
      const service = 'aerial';

      serviceType[service]

