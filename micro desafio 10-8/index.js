

function test(x, y) {
    return y - x
}

console.log(test(10, 40));

// pulgadas a centimetros

function pulgadas (num){
    return num / 2.5;
}
console.log(pulgadas(20));

// funcion que reciba string y convierta en url
function string (txt){
    return 'www.' + txt + '.com'
}
console.log(string('pedo'));

// funcion que pase palabra como valor y la devuelva 
// con admiracion

function palabra (admirable){
    return '¡' + admirable + '!'

}
console.log(palabra('funciona'))

// funcion que calcule edad de perros, considerando
// que un año nuestro son 7 de ellos

function edadPerro(edad){
    return edad * 7;
}
console.log(edadPerro(5)); 

// crea una funcion que calcule el valor de tu hora de trabajo
// introduciendo suelo mensual como parametro
// pd: considere que tu mes de trabajo tiene 40 hs.

function horasTrabajo(trabajo){
    return trabajo / 40;
}

console.log(horasTrabajo(50000));

// funcion que calcule el indice de masa corporal

function imc(p, a){
    return p / (a * a);
}

console.log(imc(80, 1.84));

//funcion que recibe minuscula y las convierte en mayusculas

function mayusculas(texto){
    return texto
}
console.log('soy un texto en minuscula'.toUpperCase);

