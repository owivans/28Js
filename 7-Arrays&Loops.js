const item = 'este es un item';

const list = ['string', 2, true, item, {nombre:'test'},[], function test() {}];
const newList = [
    'string',
    'string',
    'string',
    'string',
    'string',
    'string',
    'string',
    'string',
    'string',
    'string',
];
newList.push('primero elemento')
newList.push('segundo elemento')

console.log(newList)

console.log(newList[0])
console.log(newList[1])
console.log(newList[2])
console.log(newList[3])
console.log(newList[4])

const listPersona = [
    {
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
        saludar: (personaASaludar) => 'Hola amigo' + ' ' + personaASaludar,
        contactos: [
            {
                nombre: 'asd',
                telefono: '234234'
            },
            {
                nombre: 'asd',
                telefono: '234234'
            }
        ]
    },
    {
        nombre: 'Penny Wise',
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
    }
];



//for of

const invitados = [
    'freddy',
    'penny',
    'gerald',
    'arnold'
];


for(const persona of invitados ){
    console.log(persona.toUpperCase())
    console.log('----------------')
}
Crear una funcion que reciba un arreglo, esta funcion debe retornar un arreglo nuevo con los numeros mayores a 5


// -crear una funcion
// -dentro de la funcion crar una variable que almacene un arreglo
// -comparar cada elemento de la lista si es mayor a 5
// -si es mayor a 5 agregar el elemento ala variable del array nuevo
// - retornar el nuvo arreglo
const listNumber = [ 1,4,7,3,89,0,5];

const evaluarLista = (lista) => {
    const newList = [];
    for(const numero of lista){

        if(numero < 5) {
            newList.push(numero)
        }
    }
    return newList;
};
console.log(evaluarLista(listNumber))

//For

const invitados2 = [
    'freddy',
    'penny',
    'gerald',
    'arnold'
];
console.log(invitados2.reverse())
// for(let index = 0; index < invitados2.length; index++ ){
//     console.log(index +1, invitados2[index])
//     console.log('-------')
    
// };

// Reversa
for(let index = invitados2.length -1; index >= 0; index-- ){
    console.log(index +1, invitados2[index])
    console.log('-------')
};

-Crear una función que pueda contar cuantas veces aparece un elemento 
dado en los parámetros en un arreglo también dado en sus parámetros.

input: 5, [1,3,5,7,5,7,5]
output: 3

-crear un arreglo
-crear una funcion
-ejecutar y enviarle los argumentos a la funcion
-crear una constante que funcione como un contador inciandolo en 0
-iterar el arreglo del parametro
-en cada iteracion evaluar si el elemento solicitado es igual al del arreglo
-entonces si la evaluacion es verdadera se le suma +1 al contador
-retornar el contador

const numberList = [1,3,5,7,5,7,5, 5];
const invitados3 = [
    'freddy',
    'penny',
    'gerald',
    'arnold', 
    'freddy'
];

const find = (find, list) => {
    let counter = 0;
    for(let index = 0; index < list.length; index++ ) {
        if(list[index] === find){
            counter++
        }
        mostrarPErsonaje()
    }
    return counter;
};
// findNumber(5, numberList )

find('freddy', invitados3 )

const listPersona2 = [
    {
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
        saludar: (personaASaludar) => 'Hola amigo' + ' ' + personaASaludar,
        contactos: [
            {
                nombre: 'asd',
                telefono: '234234'
            },
            {
                nombre: 'asd',
                telefono: '234234'
            }
        ]
    },
    {
        nombre: 'Penny Wise',
        altura: 1.80,
        direccion: {
            calle: 'Girasoles',
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
    }
];
const listResumen = [];
for (let index = 0; index < listPersona2.length; index++) {
    const persona = listPersona2[index];
    const resumen = {
        nombre: persona.nombre,
        altura: persona.altura,
        calle: persona.direccion.calle,
    };
    listResumen.push(resumen)
}

console.log(listResumen)

1- Crear una función que recibe un arreglo de strings y un string, 
la función devuelve true si ese string se encuentra en el arreglo y false si no se encuentra

2- Crear una función que parta un arreglo por la mitad y retorne la segunda mitad del arreglo

3-Crear una función que recibe un string y regresa false si el string contiene al menos una letra mayúscula  

4-Crear una función que recibe un arreglo de números y devuelve el valor mas grande que se encuentra en el arreglo. 

5-Crear una función que reciba un arreglo de números y regrese la lista de números pares que se encuentran en el arreglo

6-Crear una función que pueda generar “n” elementos de la serie de fibonacci donde “n” esta dado por el argumento de la función
//for in
1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597
//while
const auto = {
    marca: 'asdas',
    acelerar: () => console.log('runnnn!')
}

auto['acelerar']()

const animales = ['lobo'];

const lobo = {
    patas: 4,
};
lobo.patas = 5;
lobo.raza = 'estepario';

animales = ['tigre'];

console.log(lobo)

animales.push('perro')

console.log(animales)

const infoPersona = {
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
        saludar: (personaASaludar) => 'Hola amigo' + ' ' + personaASaludar,
    };

for (const key in infoPersona) {
    console.log(infoPersona[key])
    if(key === 'telefono'){

    }
};

let counter = 0;
const CAPACITY = 30;

while(counter < CAPACITY){
    let available = CAPACITY - counter;
    const entradas = prompt('Cuantas entradas necesitas? quedan:' + available + 'boletos');
    counter += Number(entradas);
    if(counter >= CAPACITY) {
        alert('Ya no hay voletos')
    }
    console.log(counter)
};

// callbacks
// Son funciones que son pasadas como argumento a otra funcion
// sincrono
// asincrono

const

const fibonacci = (number) => {
    let number1= 0
    let number2 = 1
    let nextNumber = 0
    for(let index = 0; index < number ; index++ ) {
        console.log(number1)
        nextNumber= number1 + number2
        number1 = number2
        number2 = nextNumber
        }
        return number1
    }
console.log(fibonacci(10))

