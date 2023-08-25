const primerNumero = 4;
const segundoNumero = 8;


// Los argumentos es la información que le pasas a una función al ejecutarla 
// y los parámetros es la información que recibe la función al declararla

function sumar (n1, n2) {
    const resultado = n1 + n2;
    return resultado;
};

const sumatoria = sumar(primerNumero ,segundoNumero);



function operationByType (n1 = 1, n2 = 1, type = 'suma') {
    console.log(type)

    const isCero = n1 === 0 || n2 ===0;

    if(isCero && type === 'division'){
        console.log('no se puede');
        return 'no se puede';
    };

    let result = 0;
    switch (type) {
        case 'suma':
        result = n1 + n2
            break; 
        case 'resta':
        result = n1 - n2
            break;
        case 'division':
        result = n1 / n2;
            break;
        default:
        console.log('operacion no permitida')
    }
    return result;
};

console.log(operationByType());


**Ejercicio 3: Números pares**
Crea una función llamada **`esNumeroPar`** que tome un número como argumento y devuelva **`true`** si el número es par, y **`false`** si no lo es.

input: 9
output: false

crear una funcion que se llame esNumeroPar
agregar el parametro que va a recibir a mi funcion
evaluar el parametro si es par o es impar
guardar en una variable el resultado de la evaluacion
retornar el resultado de la evaluacion
ejecutar la funcion de esNumeroPar y le mandamos los argumentos


function esNumeroPar (numero) {
    if(numero === 0) {
        return
    }

    if(numero % 2 === 0){
        return true;
    } else {
        return false;
    }
    
};

console.log(esNumeroPar(0))


Ejercicio 10: Calculadora de edad en años y días
Crea una función llamada calcularEdadEnAniosDias que tome tu edad como argumento y devuelva un objeto con dos propiedades: anios y dias, que representen tu edad en años y días respectivamente (considerando años de 365 días).



crear funcion calcularEdadEnAniosDias
declarar el argumento de mi funcion
crear una constante con valor de 365 dias
multiplicar mi argument x 365
guardar el resultado en una variable
retornar el valor


const YEAR_DAYS = 365;

function calcularEdadEnAniosDias (year) {
    return year * YEAR_DAYS;
};

console.log(calcularEdadEnAniosDias(8))

