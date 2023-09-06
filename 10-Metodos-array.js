const list = [3,0,2,6];



const sorted = list.sort((a, b) => a - b);
console.log(sorted)


//  agregar  un elementpo al inicio del arreglo
console.log(list.unshift(100))
console.log(list)
// elimina el ultimo elemento del arreglo
console.log(list.pop());
console.log(list)

list.shift();
console.log(list)

list.reverse();
console.log(list)

// La posicion final no la incluye en la extraccion de elementos
const listNames = ['Freddy', 'Penny', 'Gerald', 'Gelga', 'Arnold'];
// console.log(listNames.join('-'));

// console.log(listNames.slice(0,5 ))


console.log(listNames.splice(1, 2, 'x', 'y','z'))
console.log(listNames)

[
    'tarea 1',
    'tarea 2',
    'tarea 2-a',
    'tarea 2-b',
    'tarea 2-c',
    'tarea 3',
    'tarea 4',
]


1-Crear una funcion que determine si una palabra que reciba por parametro es un palindromo
input : civic
output: true


2-Crear una función que dado un numero y una lista como argumentos retorne una nueva lista con los múltiplos del numero.
input: 5, [1,2,4,5,10,3]
output: [5,10]

3-Obtener la intersección de dos arreglos
input: [1,2,3], [2,3,4]
output: [2,3]

4-Ordenar una lista numerica
input: [1,4,22,2,11]
output: [1,2,4,11,22]


const buscarCoincidencias = (list, otherList) => {
    const coincidencias = [];

    for (const xxxx of list) {
        if(otherList.includes(xxxx)){
            coincidencias.push(xxxx)
        }
    }
    console.log(coincidencias)

};
buscarCoincidencias([1,2,3], [2,3,4] )

2-Crear una función que dado un numero y una lista como argumentos retorne una nueva lista con los múltiplos del numero.
input: 5, [1,2,4,5,10,3]
output: [5,10]

-crear una funcion que reciba dos argumentos
    - un numero 
    - un arreglo
-crear un nuevo arreglo para guardar los multiplos
-iterar el arreglo para deducir si el elemento es un multipo de 5
    -si es multiplo guardamos el elemento en la lista nueva
-desplegar en la terminal los multiplos
- retornar la lista de los multiplos

const buscarMultiplos = (numero, array) => {
    const multiplos = [];
    array.forEach((item) => {
        if(item % numero === 0){
            multiplos.push(item)
        }
    });
    return multiplos
};

buscarMultiplos(5, [1,2,4,5,10,3]);

20000

Basado en el siguiente arreglo vamos a analizar los likes de cada cancion y si son mayores a 20K se agregara un atributo de recomendado true si el valor sera false

let songsData = [
    {
      name: "Kashmir",
      band: "Led Zeppelin",
      releaseYear: "1980",
      statistics: {
        likes: 20000,
        reproductions: 8000,
      },
    },
    {
      name: "Smells Like Teen Spirit",
      band: "Nirvana",
      releaseYear: "1989",
      statistics: {
        likes: 25000,
        reproductions: 100000,
      },
    },
    {
      name: "So What",
      band: "Metallica",
      releaseYear: "1990",
      statistics: {
        likes: 12000,
        reproductions: 95000,
      },
    },
    {
      name: "Nothing Else Matters",
      band: "Metallica",
      releaseYear: "1992",
      statistics: {
        likes: 128000,
        reproductions: 915000,
      },
    },
    {
      name: "Daze",
      band: "Poets_of_the_Fall",
      releaseYear: "2014",
      statistics: {
        likes: 3548413,
        reproductions: 87095138,
      },
    },
    {
      name: "The Sweet Scape",
      band: "Poets_of_the_fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      },
    },
  ];

const recomendarSong = (songs) => {
    songs.forEach((item) => {
        console.log(item.statistics.likes)
        const likes = item.statistics.likes;
        // if(likes >= 20000){
        //   item.recomendado = true; 
        // }   
        item.recomendado = likes >= 20000;
    });
    console.log(songs);
};

recomendarSong(songsData);



const recomendarSong = (songs) => {
    songs.forEach((item) => {
        console.log(item.statistics.likes)
        const likes = item.statistics.likes;
        // if(likes >= 20000){
        //   item.recomendado = true; 
        // }   
        item.recomendado = likes >= 20000;
    });
    console.log(songs);
};




- Crear una funcion que calcule y retorno el promedio del valor de los elementos en el array

input : [10, 20, 30, 40, 50]
output : 30



const mentorsArray = [
    {
      name: "Ivan Diaz",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 8
        },
        {
          signature: "ReactJS",
          score: 8
        }
      ]
    },
    {
      name: "Alan Medina",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 7
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
    {
      name: "Elvira Camarillo",
      scores: [
        {
          signature: "HTML",
          score: 9
        },
        {
          signature: "CSS",
          score: 9
        },
        {
          signature: "JS",
          score: 10
        },
        {
          signature: "ReactJS",
          score: 9
        }
      ]
    },
    {
      name: "Alejandra Paez",
      scores: [
        {
          signature: "HTML",
          score: 8
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 9
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    },
    {
      name: "Alejandra Paez",
      scores: [
        {
          signature: "HTML",
          score: 10
        },
        {
          signature: "CSS",
          score: 10
        },
        {
          signature: "JS",
          score: 9
        },
        {
          signature: "ReactJS",
          score: 10
        }
      ]
    }
  ];

  - Generar un array nuevo mostrando el promedio de por mentor
[
    {
        name: 'Ivan Diaz',
        average: 7.0, // se calcula con las calificaiones de las materias del mentor
    }, 
    {
        name: 'Mentor 2',
        average: 8.0,
    }
]
  - Generar el promedio de las calificaciones de todos los mentores