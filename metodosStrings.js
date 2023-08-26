console.log('Hola Mundo'.length)
const string = 'Hola';
const isValid = true;
console.log(isValid.length)

string.length

const test = {
    length: 4,
}

test.length

console.log(console)

const ultimaLetra = cadena1.length -1;
console.log(cadena1[ultimaLetra])
string[46]

let cadena1 = "La mañana";
console.log(cadena1.slice(3, -2))

let cadena2 = cadena1.slice(3, -2);
console.log(cadena2);

let listaPersonas = 'freddy jason,penny'
let frase = 'Amistad es amigo, si no, no es amigo'
// let listaSeparada = listaPersonas.split(',');
// console.log(listaSeparada);
// console.log(frase.split(' ', 2));


//includes
// console.log(frase.includes('amigo'))

// replace 
const name = 'Freddy Krueger';
const terminos ="Confirmo yo ${{nombrePersona}} que he leído y acepto los términos y condiciones establecidos."

//console.log(terminos.replace('${{nombrePersona}}', name))
// console.log(frase.replaceAll('amigo', 'amig@'))

console.log(name.toUpperCase())
console.log(name.toLowerCase())

console.log(name.concat(terminos, 'XXXXXX'));

const password = ' cacahuate  ';
const email = ' owivan_91@gmail.com   '
console.log(password.length, 'antes')
console.log(password.trim().length)
const resultado = email.trim().concat('.mx').toUpperCase()
console.log(resultado)

const signo = '1';
console.log(signo.padStart(4, ' '))
console.log(signo.padStart(4, ' ').length);

console.log(signo.padEnd(7, '1'))


Crear una funcion que reciba dos parametros, el primero sera un caracter que se busque en el parametro 2 y lo reemplaze con una X, retorna el resultado del string 

Tniendo un numero de tarjeta 2345 0967 0938 8943 debemos mostrarle los ultimos 4 digitos al usuario, utiliza los metodos de string para resolverlo
'2345 0967 0938 8943'
'************8943'

Crear una funcion que convierta un string en 2 al partir por la mitad el string originial retorna el resultado, usando los metodos de string

function replacement (aBuscar, textoParaBuscar) {
    let remplazo = textoParaBuscar.replace(aBuscar,"x")
    return remplazo
}
console.log(replacement("amigos", "Hola amigos"))



function test(palabra, texto) {
    return texto.replaceAll(palabra,'x')
}
console.log(test('a', "Hola amigos asdasd asdas asd"))