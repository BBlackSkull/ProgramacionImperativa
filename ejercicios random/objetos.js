const arrayCuentas =
[
{
titular: "Arlene Barr",
estaHabilitada: false,
saldo: 3253.40,
edadTitular: 33,
tipoCuenta: "sueldo"
},
{
titular: "Roslyn Torres",
estaHabilitada: false,
saldo: 3229.45,
edadTitular: 27,
tipoCuenta: "sueldo"
},
{
titular: "Cleo Lopez",
estaHabilitada: true,
saldo: 1360.19,
edadTitular: 34,
tipoCuenta: "corriente"
},
{
titular: "Daniel Malone",
estaHabilitada: true,
saldo: 3627.12,
edadTitular: 30,
tipoCuenta: "sueldo"
},
{titular: "Ethel Leon",
estaHabilitada: true,
saldo: 1616.52,
edadTitular: 34,
tipoCuenta: "sueldo"
},
{
titular: "Harding Mitchell",
estaHabilitada: true,
saldo: 1408.68,
edadTitular: 25,
tipoCuenta: "corriente"
}
];

// a. Obtener un nuevo array de cuentas cuyas edades sean menores a 30.

function arrayMenor(arrayCuentas){
    let nuevoArray = [];
    for(let i = 0; i < arrayCuentas.length; i++){
        if(arrayCuentas[i].edadTitular < 30){
            nuevoArray.push(arrayCuentas[i]);
        }
        
    }
    return nuevoArray;
    
}


// b. Obtener un nuevo array de cuentas cuyas edades sean mayor o igual a
// 30.
function arrayMayorOIgual(arrayCuentas){
    let nuevoArray = [];
    for (let i = 0; i < arrayCuentas.length; i++ ){
        if(arrayCuentas[i].edadTitular >= 30){
            nuevoArray.push(arrayCuentas[i]);
        }
    }
    return nuevoArray;
}
// c. Obtener un nuevo array de cuentas cuyas edades sean menores o igual a
// 30.

function menorOIgual(arrayCuentas){
    let nuevoArray = [];
    for (let i = 0; i < arrayCuentas.length ; i++ ){
        if(arrayCuentas[i].edadTitular <= 30){
            nuevoArray.push(arrayCuentas[i]);
        }
    }
    return nuevoArray;
}
// d. Obtener la cuenta con el titular de la misma más joven.

function masJoven(arrayCuentas){
    let menor = arrayCuentas[0]
    for(let i = 1; i < arrayCuentas.length; i++){
        if(arrayCuentas[i].edadTitular < menor.edadTitular){
            menor = arrayCuentas[i];
        }
    }
    return menor;
}
// e. Obtener un array con las cuentas habilitadas.

function cuentaHabilitada(arrayCuentas){
    let array = [];
    for( let i = 0; i < arrayCuentas.length; i++ ){
        if(arrayCuentas[i].estaHabilitada === true){
            array.push(arrayCuentas[i]);
        }
    }
    return array;
}
// f. Obtener un array con las cuentas deshabilitadas.

function cuentaDeshabilitada(arrayCuentas){
    let array= [];
    for( let i = 0; i < arrayCuentas.length; i++){
        if(arrayCuentas[i].estaHabilitada === false){
            array.push(arrayCuentas[i]);
        }
    }
    return array;
}

// g. Obtener la cuenta con el menor saldo.

function cuentaMenor (arrayCuentas){
    let menor = arrayCuentas[0];
    for(let i = 1; i < arrayCuentas.length; i++) {
        if(arrayCuentas[i].saldo < menor.saldo){
            menor = arrayCuentas[i];
        }
    } 
    return menor;
}


// h. Obtener la cuenta con el mayor saldo.
function cuentaMayor(arrayCuentas){
    let mayor = arrayCuentas[0];
    for(let i = 1; i < arrayCuentas.length; i ++){
        if(arrayCuentas[i].saldo > mayor.saldo){
            mayor = arrayCuentas[i];
        }
    }
    return mayor;
}


//     Extras:
// a. Reutilizando la función buscarPorId


// 1. Desarrollar una función llamada generarID que reciba como 
//parámetro el array
// de cuentas y agregue a cada elemento 
//(objeto literal) una propiedad llamada id
// con un valor Numérico

function generarID(arrayCuentas){
    let acc = 1;
    for (let i = 0; i < arrayCuentas.length; i++ ){
        arrayCuentas[i].id = acc, acc ++;
        
        
    }
    return arrayCuentas;
    
}

function generarID2(arrayCuentas){
    for( i = 0; i < arrayCuentas.length; i++ ){
        arrayCuentas[i].id = i + 1;
    }
    
}
generarID2(arrayCuentas);
    



// 2. Desarrollar una función llamada buscarPorId que reciba como parámetro el
// array de cuentas y un id, en caso de encontrar retornar la cuenta (él objeto
// literal completo), caso contrario retornar null

function buscarPorId(arrayCuentas, id){
    for( let i = 0; i < arrayCuentas.length; i++ ){
        if (arrayCuentas[i].id === id){
            return arrayCuentas[i]
        }
    } 
    return null
}

// 3. Desarrollar una función llamada filtrarPorSaldos que reciba como parámetro el
// array de cuentas y un saldo (Number), deberá retornar un array que se cuyas
// cuentas se encuentren por debajo del saldo enviado por parámetro

function filtrarPorSaldos(arrayCuentas, saldo){
    let array = [];
    for (let i = 0; i < arrayCuentas.length; i++){
        if(arrayCuentas[i].saldo < saldo){
            array.push(arrayCuentas[i]);
        }
    }
    return array
}
// 4. Desarrollar una función llamada incrementarSaldo que reciba como parámetro
// el array de cuentas, un id y un saldo, deberá incrementar él saldo de la cuenta,
// en caso de encontrar, caso contrario retornar undefined

function incrementarSaldo(arrayCuentas, id, saldo){
    let newSaldo = 0;
    for( let i = 0; i < arrayCuentas.length; i++ ){
    if (arrayCuentas[i].id == id){
       newSaldo = arrayCuentas[i].saldo + saldo;
       arrayCuentas[i].saldo = newSaldo    
       //    console.log(newSaldo)
    } 
}   //return undefined
}
incrementarSaldo(arrayCuentas, 5, 20000);
console.log(arrayCuentas)

//a. Reutilizando la función buscarPorId
