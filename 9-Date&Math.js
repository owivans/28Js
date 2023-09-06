const name = new String('freddy');
const number = new Number(2);
console.log(name)
console.log(number)
console.log('sdsd');

function Usuario(nombre, edad) {
        this.name = nombre;
        this.age = edad;
};
// sugar sintax
const usuario = new Usuario('jason', 32)
console.log(usuario)

const usuario2 = new Usuario('penny', 90)
console.log(usuario2)

'2022-08-15'
'2022-08-29'
const fechaInicial = new Date('2022-08-15');
const fechaFinal = new Date('2022-08-29');
const diferencia = fechaFinal.getTime() - fechaInicial.getTime();
const milisegundosEnUnDia = 24 * 60 * 60 * 1000;
const deferenciaDias = diferencia / milisegundosEnUnDia;
console.log(deferenciaDias)




console.log(fechaInicial)
console.log(fechaFinal)
console.log(fecha.toDateString())
console.log(fecha.toUTCString())
console.log(fecha.toString())



console.log(fecha.getFullYear())
console.log(fecha.getMonth())
console.log(fecha.getDate())
console.log(fecha.getDay())

console.log(Date.now() / 1000)




// Crear un reloj que este cambiando cada segundo
21:10:12
21:10:13
21:10:14
21:10:15
21:10:16
21:10:17



const convertToUpercasePar = (string) => {
    for(let i = 0; i <= string.length; i++){
        if(i%2==0){

           console.log(string.charAt(i).toUpperCase())
        //    string.charAt(i).toUppercase();
        }
    }
};
console.log(convertToUpercasePar('a very large string'))

// Redonde un numero al entero mas cercano
console.log(Math.round(3.5))

// Redondea un numero hacia arriba
console.log(Math.ceil(3.4));

// Redondea un numero hacia abajo
console.log(Math.floor(3.9));

// devulve la parte entera, sin decimales de un numero
console.log(Math.trunc(3.9123123))

// Devulve el valor de x elevado a la potencia de y
console.log(Math.pow(x, y))

console.log(Math.sin())
console.log(Math.cos())

// Te devuelve un numero aleatorio entre el 0 y el 1
console.log(Math.random())


function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const result = Math.random() * (max - min) + min;
    return Math.floor(result)
}
console.log(getRandomArbitrary(7, 20))

const list = [1,4,7,5,4,0,67,54];

console.log(Math.max(...list));
console.log(Math.max(1,4,7,5,4,0,67,54));
console.log(Math.min(1,4,7,5,4,0,67,54));






// spread operator
const listNombres = ['jon', 'chen', 'pechan'];

const otherList = [...listNombres, ...list ];
console.log(otherList);

const persona = {
    nombre: 'asdas',
    edad: 4
};

const nuevaPersona = {
    ...persona,
    direccion: 'asdasd',
    telefono:'asdas'
}
console.log(nuevaPersona);