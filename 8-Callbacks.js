const callback = () => {
    console.log('se ejecuto el callback')
};

const ejecutora = (call) => {
    console.log(call)
    console.log('ejecutora')
    if(4 > 3) {
        call();
    }
};

ejecutora(callback);


const articulo ={
    name: 'Laptop',
    peso: 81,
    precio: 2000,
};

// Callback
const calcularEnvio = (pais, peso) => {
    let costoEnvio = 0;
    if(pais === 'mexico' && peso > 80){
        costoEnvio = 100;
    }
    return costoEnvio;
};

// Funcion de orden superior
const costoTotal = (cbEnvio, articulo ) => {
    const costoEnvio = cbEnvio('mexico', articulo.peso );
    const total = costoEnvio + articulo.precio;
    return total;
};

console.log(costoTotal(calcularEnvio, articulo));



const saludo = (nombre, saludo) => {
    return saludo + ' ' + nombre;
};


const saludar = (cb) => {
    return cb('Jason', 'Que onda')
};

saludar(saludo);

const primerFuncion = () => {
    console.log(1)
};
const segundaFuncion = () => {
    console.log(2)
};
const tercerFuncion = () => {
    console.log(3)
}

const principal = (cb1, cb2, cb3) => {

    setTimeout(() => {
        console.log(4)
    }, 2000);

    cb3();
    cb2();
    cb1();
 
};

principal(primerFuncion, segundaFuncion, tercerFuncion );

// callbacks
// Son funciones que son pasadas como argumento a otra funcion
// sincrono
// asincrono

setTimeout(() => {
    console.log('se ejecuto el callback2')
}, 2000);

setInterval(() => {
    console.log('setInterval')
}, 2000);


input: "a very large string"
output: "A VeRy lArGe sTrInG" 
input: "abcdefg"
output: "AbCdEfG"
-----------------------
input: "kodemia"
output: "aimedok"
-----------------------
input: 'muercielago'
output: true
input: 'perro'
output: false


1.crea una funcion llamada sayHi que recibe como parametro un nombre y te salude

2.Crea una funcion llamada executor que reciba como primer parametro una funcion y como segundo parametro un string y que en su cuerpo ejecute la funcion recibida y pase como parametro el segundo parametro recibido en esta funcion

3.Ejecuta la funcion executor anterior pasando como primer parametro la funcion sayHi y como segundo parametro un string con tu nombre


