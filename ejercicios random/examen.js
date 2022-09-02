// Realizar una función llamada restarPares que reciba por parámetro dos valores numéricos. 
// Si ambos números recibidos son pares entonces se deberá retornar el resultado de restarle al primer parámetro el segundo. 
// Si alguno o los dos no son pares , se deberá retornar un string que diga “Lo siento, uno de los parámetros no es par”

function restarPares(num1, num2){
    if(num1 % 2 === 0 && num2 % 2 === 0){
        return num1 - num2;
    } else {
       return "Lo siento, uno de los dos parametros no es par"}
}

// console.log(restarPares(4,5));

// Debemos poder controlar el acceso a un recital de música para una determinada persona. Para eso, debemos realizar una función  que reciba dos parámetros
// La edad de la persona, Number
// Si tiene o no, el ticket de entrada , booleano
// La función deberá evaluar las siguientes condiciones y retornar en cada caso lo que se pida:
// Si tiene entrada y es mayor o igual de 18 años: retorna un valor booleano true.
// Si tiene entrada pero es menor de 18 años: retorna un string que diga “Sólo puedes acceder con un adulto acompañante”.
// Si no tiene entrada: retorna un booleano false.


function acceso (edad, ticket){
    
    if(edad >= 18 && ticket === true){
        
        return true
    }
    else if (edad < 18 && ticket === true){
        return "Solo puedes acceder con un adulto acompañante"
    } else if (ticket !== true){
        return false
    }
}

//console.log(acceso(20, false));

let productos = [
    {
        producto : "remera",
        tipo: "indumentaria",
        precio: 2100
    },
    {
        producto : "notebook",
        tipo: "tecnologia",
        precio: 200000
    },
    {
        producto : "celular",
        tipo: "tecnologia",
        precio: 27000
    },
    {
        producto : "protector solar",
        tipo: "cosmetica",
        precio: 2500
    },
    {
        producto : "pantalon",
        tipo: "indumentaria",
        precio: 7500
    },
    {
        producto : "tablet",
        tipo: "tecnologia",
        precio: 60000
    },
   
];

// Realizar una función que reciba un array como parámetro, y lo recorra para filtrar los productos que sean de tipo “tecnologia” y que su precio sea mayor o igual a 50000, la función deberá retornar un nuevo arreglo con los productos que cumplan con las condiciones antes mencionadas.

function filtro(array){
    
    let newArray = [];
    
    for(let i = 0; i < array.length; i++ ){
        
        if(array[i].tipo == "tecnologia" && array[i].precio >= 50000){
            newArray.push(array[i]);
        }
        
    } 
    return newArray;
}
console.log(filtro(productos));



