// 1. Escribe una función que pida al usuario un precio y un descuento, a dicho precio aplica:
// a. El descuento ingresado
// b. El IVA del 16 %

// crear la funcion y declarar los parametros 
//     2- precio(numero)
//     3- descuento (porcentaje)

// -Solitar con el prompt el precio y el descuento
// -guardar en variables el resultado de los prompt  
// -calcular el precio con el descuento
//     - precio - descuento
// -calcular el precio final
//     - precio final + iva

// const precio = Number( prompt('ingresa una cantidad') );
// const descuento = Number( prompt('Ingresa un descuento') );
const IVA = 1.16;

 const calcularPrecio = (precio, descuento) => {
    const descuentoCalculado = ( precio * descuento ) / 100;
    const precioNeto = precio - descuentoCalculado;
    const precioBruto = precioNeto * IVA;
    return precioBruto;
 };

//  alert(calcularPrecio(precio, descuento));



//  8. Un usuario cuenta con una lista de colores (array):
// [‘rojo’, ‘amarillo’, ‘azul’, ‘rojo’, ‘rojo’, ‘negro’, ‘violeta’]
// Escribe un programa que imprima la cantidad de veces que se repite un color, es decir:
// • 3 rojo
// • 1 amarillo
// • 1 azul
// • 1 negro
// • 1 violeta

//  input : [‘rojo’, ‘amarillo’]

// output : {
//     rojo: 3,
//     amarillo: 1,
//     azul : 1,
// }

// 1.crear la funcion que reciba por parametro la lista
// 2.ejecutar funcion y pasarle como argumento un arreglo de los colores
// 3.generar un objeto vacio ( es donde vamos a guardar el conteo) es decir es un diccionario
// 4.con un ciclo vamos a iterar la lista de colores
// 5.por cada color es necesario validar que exista el color en el diccionario
//  -si existe el color se le suma 1
//  -si no existe se crea un key en el diccionario con valor de 1
// 6.Retornar el diccionario

const colorList = ['rojo', 'amarillo', 'azul', 'rojo', 'rojo', 'negro', 'violeta'];

const createDictionary = (lista) => {
    
    const result = lista.reduce(( accum, item, index, array  ) => {
        if(!accum[item]) {
            accum[item] = 1;
        } else {
            accum[item]++;
        }
        return accum;
    }, {});
    console.log(result)
    return result;
};

const dictionary = createDictionary(colorList);

console.log(dictionary.rojo)


const respuestaAPI = [
    {
        cantidad: 100,
        type: 'vencido'
    },
    {
        cantidad: 100,
        type: 'por_vencer'
    },
    {
        cantidad: 100,
        type: 'vencido'
    },
    {
        cantidad: 100,
        type: 'por_vencer'
    },
    {
        cantidad: 100,
        type: 'por_vencer'
    },
]

// {
//     vencidos : [{}],
//     por_vencer: [{}]
// }

// 5. Escribir un programa para una empresa que tiene salas de juegos para todas las edades 
// y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. 

// El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. 
// Si el cliente es menor de 4 años puede entrar gratis, 
// si tiene entre 4 y 18 años debe pagar 5€ 
// y si es mayor de 18 años, 10€.

// - preguntar la edad del usuario
// - mostrar el costo en pantalla
// - Si el cliente es menor de 4 años puede entrar gratis
// - si tiene entre 4 y 18 años debe pagar 5€
// - y si es mayor de 18 años, 10€

// ? calcular costo
// declarando una funcino para calcular el costo
// esta funcion va crear las siguientes variables :
// declarar la variable para le costos
//     isFree ( si edad < 4 = 0 )
//     isMedium ( si edad > 4 y < 18)
//     isAdult ( si edad > 18)
//     price = va a almancenar el resultado de la evaluacion
// con un if vamos a evaluar la el valor de la entrada

const age = Number(prompt('Que edad tienes'));

const calcularEntradaPorEdad = (value) => {
    const isFree = value < 4;
    const isMedium = value >= 4 && value < 18;
    const isAdult = value >= 18;
    let price;

    if(isFree){
        price = 0;
    }

    if(isMedium) {
        price = 5
    }

    if(isAdult) {
        price = 10
    }
    return price
};

const resultado = `El costo de tu entrada es: ${ calcularEntradaPorEdad(age) }€`
alert(resultado);
