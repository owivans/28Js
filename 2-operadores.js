console.log(2 > 1 && 4 > 5 && 1 > 0)

||

or 
console.log(2 > 1 || 4 > 5 || 1 > 0)

const tengoMonedas = false;

// if( 2 > 1 && 4 > 5 ){

// };

if( tengoMonedas ) {
    console.log('voy a comprar')
}

if( !tengoMonedas ) {
    console.log('consigue monedas')
}

const estaSol = false;

if(estaSol) {
    console.log('me pongo lentes de sol')
} else {
    console.log('salgo')
}






const clima = 'sdfsdf';
let prenda = 'camisa';

if(clima === 'calor'){
    prenda = 'short'; 
} else if (clima === 'frio'){
    prenda = 'abrigo';
} else if(clima === 'lluvioso'){
    prenda = 'impermeable'
} else {
    prenda = 'pijama'
}

console.log(prenda)


if(clima === 'calor'){
    prenda = 'short'; 
} 

if (clima === 'frio'){
    prenda = 'abrigo';
}

if(clima === 'lluvioso'){
    prenda = 'impermeable'
}

prenda = 'pijama'


const password = 'cacahuate';
const authFacial = true;
let usuarioValido = false;
const email = 'email1@.com';
const userName = 'mentor91';

const isUserNameValid = email === 'emil1@.com' || userName === 'mentor91';

if(password === 'cacahuate' && authFacial && isUserNameValid ){
    usuarioValido = true;
    console.log('usuario es valido')
} else {
    console.log('usuario no valido')
}

console.log(usuarioValido)






1.Verificar si un número es positivo, negativo o cero.

-declarar 3 variables y almacenar un numero
- evaluar cada numero si es:
    positivo: numero mayor 0
    negativo: numero menor que 0
-mostramos en la terminal el resultado

const numero = -10;

if(numero === 0){
    console.log('el numero es cero')
}else if(numero > 0){
    console.log('es un numero positivo');
}else if(numero < 0){
    console.log('es un numero negativo')
}else {
    console.log('el numero que ingresaste no es valido')
}


2.Determinar si un número es par o impar.

-declarar la varible
-evaluamos si el numero de la variable es un par o impar
-aplicarle el operador de modulo a la variable
- si el resultado de la operacion es 0 es un numero par
- si el resultado de la operacion es 1 es un numero impar
-mostrarlo en la terminal

const numeroAEvaluar = 10;

if(numeroAEvaluar % 2 === 0){
    console.log('este numero es par')
} else{
    console.log('este numero es impar')
}


console.log(1 != '1')
console.log(1 !==)


3.Calificar un examen en base a la puntuación.
ejemplo:
si es mayor o igual a 90 es 'A'
si es mayor o igual a 80 es 'B'
si es mayor o igual a 70 es 'C'
si es mayor o igual a 60 es 'D'


switch (key) {
    case value:
        
        break;
    case value:
    
        break;

    case value:

        break;

    default:
        break;
}

if(condicion){

}

if(condicion){

}

if(condicion){

}

if(condicion){

}


const score = 50;
let result = '';

switch (score) {
    case 50:
        result = 'F'
        break
    case 50:
        result = 'D'
        break
    default:
        result ='N/A'
}

console.log(result)

const pais = 'usd';
const tipoCambio = 0;

switch(pais){
    case 'usd':
        tipoCambio = 10;
        break
    case 'euro':
        tipoCambio = 20;
}


switch(embarque){
    case 'maritimo':
        asda
        break
    case 'aereo':
        tipoCambio = 20;
}
