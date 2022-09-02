const prompt = require("prompt-sync")({ sigint: true });

// Desarrollar una función que reciba 4 numeros y calcular la suma de total
//      si el el resultado es mayor o igual a 7, retornar 'Aprobado', 
//      caso contrario retornar 'otra chance '.
// function cuatroNumeros(a,b,c,d){
//    let suma = a + b + c + d;
//     if(suma >= 7){
//         return 'aprobado';
//     }else {
//         return 'otra chance'
//     }
// }
// console.log(cuatroNumeros(1,1,1,1));

// Desarrollar una función que reciba 4 numeros y calcular la suma de total
//      si el el resultado es par, retornar la mitad del total,  
//      caso contrario retornar el doble del total.

function cuatroNumeros(a, b, c, d){
    let suma = a + b + c + d;
    if(suma % 2 === 0){
        return suma / 2;
    }else if(suma % 2 === 1 ){
        return suma * 2;
    }
}
console.log(cuatroNumeros(2,2,2,2));