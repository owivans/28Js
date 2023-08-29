const servicioLuz = true;
const YEAR_DAYS = 365;

function isValidUser () {
    return true;
};

const isValid = isValidUser();


function sala () {
    console.log(isValid, 'usuario')
    const servicioLuz = false;
    const sofa = true;
    const cuadro = true;
};
sala()

function cocina () {
    const refrigerador = true;
    const microondas = true;
    console.log(servicioLuz)

    function encenderMicroondas () {
        const comida = true;
        console.log('calentando comida')
    }


};
//cocina()

function micuarto () {
    const micomputadora = true;
    const videjuegos = true;

    encenderMicroondas()
};
micuarto()
const nombre = 10;
const apellido = 20;

function crearUsuario (nombre, apellido) {
    console.log(n1)
    return 'ivan diaz'
};

const userCreated = crearUsuario('ivan', 'diaz');
const test = 'test';



function calcularCarrito() {
    console.log('es $19')
}
calcularCarrito();

anonima()


const anonima = function (parametro) {
    console.log('anonima')
    return value
};

anonima();




// arrow function
function sumar (n1, n2) {
    const resultado = n1 + n2;
    return resultado;
};

const sumaArrow = (n1, n2) => {
    return n1 + n2;
};

const sumaInLine = (n1, n2) => n1 + n2;

const concat = (nombre) => 'hola' + nombre

console.log(sumaInLine(5,5))
console.log(concat('freddy'))