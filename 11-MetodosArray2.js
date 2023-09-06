const listNames = ['Freddy', 'Penny', 'Gerald', 'Gelga', 'Arnold'];

const nuevaLista =[];

listNames.forEach(( item ) => {
    if(item[0] === 'G'){
        nuevaLista.push(item);
    }
});
console.log(nuevaLista)

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

  const test  = [
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
  ];


const average = (list) => {
    let total = 0;
    list.forEach((signature) => {
        total += signature.score;
    });
    const average = total / list.length;
    return average;
};
average(test)



const mentorsAverage = (mentors) => {
    const result = [];
    mentors.forEach((item) => {

        const mentorInfo = {
            name:item.name,
            score: average(item.scores),
        };
        result.push(mentorInfo);
    });
    return result;
};

const mentorsResults = mentorsAverage(mentorsArray);
console.log(average(mentorsResults))

  

  - Generar un array nuevo mostrando el promedio de por mentor
  -el promedio del mentor se calcula sumando todas las calificaciones y se divide por el numero de materias
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

  const playlist = [
    {
        name: 'test',
        fecha: 'as',
        songs: [
            {
                name
            }
        ]
    }

  ]

  const listNames2 = ['Freddy', 'Penny', 'Gerald', 'Gelga', 'Arnold'];

  const upper = listNames2.map((item) => {
    // console.log()
    return item.toUpperCase();
  });

    console.log(upper)

  const listPersonas = [
    {
        name: 'Ivan Diaz',
        average: 7.0, // se calcula con las calificaiones de las materias del mentor
    }, 
    {
        name: 'Mentor 2',
        average: 8.0,
    }
];
const mentorsResults2 = listPersonas.filter((item) => item.average > 7);
  const resultado = listNames2.filter((item) => item[0] === 'G');
  const finder = listPersonas.every((item) => item.average > 7);
console.log(finder)
  
//   listNames.forEach(( item ) => {
//       if(item[0] === 'G'){
//           nuevaLista.push(item);
//       }
//   });
//   console.log(nuevaLista)

let dataArray = [
  ["Elda ", "Corona"],
  ["Manuel", "Mendoza",],
  ["Rafael", "Quintero"],
  ["Elvira", "Camarillo"],
  ["Ivan", "Diaz"],
  ["Alan", "Medina"],
];

const personasParsed = dataArray.reduce((accum, item) => {
    const persona = {
        name: item[0],
        lastName: item[1],
    };
    const result = [...accum, persona];
    return result;
}, []);

console.log(personasParsed);





const dataParsed = dataArray.map((item) => {
    const persona = {
        name: item[0],
        lastName: item[1],
    };
    return persona;
});
console.log(dataParsed)

const output = [
  {
    name: 'Elda',
    apellido: 'Corona'
  },
  {
    name: 'Manuel',
    apellido: 'Mendoza'
  },
  {
    name: 'Rafael',
    apellido: 'Quintero'
  }
];

const listNumber = [2,6,7,9,0,7,23,87];









const result = listNumber.reduce((accum, item, index, array) => {
    accum += item
    return accum / array.length
}, 0);

console.log(result)

















-Crea una funcion que retorne las personas vacunadas 
let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
  ];
-Agrupar las canciones por banda
- Mostrar la cancion mas antigua de la lista

-Agrupar las canciones por banda


  output:
{
  Metallica: ['cancion1'],
  Poets_of_the_fall: ['cancion1', 'cancion2'],
  Nirvana:['Smells Like Teen Spirit', 'Smells Like Teen Spirit'],
}

output: [
    'La cancion de Kashmir es de Led Zeppelin',
    'La cancion de Smells Like Teen Spirit es de Led Nirvana'
]



//   const result = songsData.map((song) => {
//     const enunciado = 'La cancion de ' + song.name + ' es de ' + song.band;
//     return enunciado
//   });

const result = songsData.map((song) => 'La cancion de ' + song.name + ' es de ' + song.band);

  console.log(result)

  let arrayPersons = [
    {
        name: "Phibee", age: 25, vaccinated: true, gender: "mujer"
    },
    {
        name: "Katrinka", age: 26, vaccinated: false, gender: "mujer"
    },
    {
        name: "Bruno", age: 48, vaccinated: false, gender: "hombre"
    },
    {
        name: "Jon", age: 22, vaccinated: true, gender: "hombre"
    },
    {
        name: "Brian", age: 20, vaccinated: false, gender: "hombre"
    },
    {
        name: "Eugene", age: 38, vaccinated: true, gender: "hombre"
    },
    {
        name: "Big Bob", age: 29, vaccinated: true, gender: "hombre"
    },
    {
        name: "Ximena", age: 40, vaccinated: false, gender: "mujer"
    },
    {
        name: "Paulet", age: 37, vaccinated: false, gender: "mujer"
    },
    {
        name: "Harold", age: 45, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gerald", age: 22, vaccinated: false, gender: "hombre"
    },
    {
        name: "Arnold", age: 35, vaccinated: true, gender: "hombre"
    },
    {
        name: "Gelga", age: 28, vaccinated: true, gender: "mujer"
    },
    {
        name: "Lila", age: 18, vaccinated: true, gender: "mujer"
    },
    {
        name: "Rhonda", age: 18, vaccinated: true, gender: "mujer"
    },
  ];

  const getVaccinated = arrayPersons.filter((person) => person.vaccinated && person.age > 22);
console.log(getVaccinated)



output:
{
  Metallica: ['cancion1'],
  Poets_of_the_fall: ['cancion1', 'cancion2'],
  Nirvana:['Smells Like Teen Spirit', 'Smells Like Teen Spirit'],
}


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
      band: "Poets_of_the_Fall",
      releaseYear: "2018",
      statistics: {
        likes: 26268856,
        reproductions: 2424568,
      },
    },
  ];
const groupByBand = (songList) => {
    const result = songList.reduce((accum, item) => {
        if(!accum[item.band]){
            accum[item.band] = [item.name]
        }else {
            accum[item.band].push(item.name)
        }
        console.log(accum)
     return accum
    }, {});
    return result;
};

groupByBand(songsData)
