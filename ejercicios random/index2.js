const prompt = require("prompt-sync")({ sigint: true });
// Local de sándwiches
// Necesitamos armar el sistema para un local de venta de sándwiches. 
// Los clientes eligen el sándwich base que tiene un precio y, 
// por cada selección siguiente, se le suma el valor 
// de su selección al precio. Por ejemplo, partiendo de un sándwich base
// vegetariano con un precio x, después se selecciona pan negro con un 
// precio y, por lo
// que el total a pagar sería x+y, y así sucesivamente con 
// el resto de los ingredientes.
// Como es un local que ya tenía un sistema previo, 
// ellos ya tienen toda la interfaz
// donde el usuario elige cada ingrediente, 
// lo que nos facilita el trabajo, ya que nosotros
// recibiremos los datos de la siguiente manera.
// Nos llega un string indicando el tipo de sándwich base. 
// Estos tienen un valor base
// diferente por cada selección:
// ● Pollo = $150 (“pollo”)
// ● Carne = $200 (“carne”)
// ● Vegetariano (verduras asadas) = $100 (“veggie”)
// Luego, el sistema pregunta al cliente qué tipo de pan quiere. 
// Tienen para elegir entre
// otras tres opciones, por lo que recibiremos también otro string con el 
// tipo de pan
// deseado:
// ● Blanco c/orégano y parmesano = $50 (“blanco”)
// ● Negro c/avena = $60 (“negro”)
// ● Sin gluten = $75 (“s/gluten”)
// Para finalizar, el sistema avanza preguntando al cliente si 
// quiere los siguientes
// adicionales:
// ● Queso = $20
// ● Tomate = $15
// ● Lechuga = $10
// ● Cebolla = $15
// ● Mayonesa = $5
// ● Mostaza = $5
// Cada uno de estos adicionales están representados por booleanos 
// —es decir, true o false—, 
// dependiendo de si aceptan o no cada uno de los adicionales 
// —nos llegan un
// total de seis valores booleanos, uno por cada adicional—.
// Nuestro trabajo es crear una función que reciba estos ocho parámetros
//  —un string
// para el sándwich base, uno para el pan y los seis booleanos de los adicionales
//—La función deberá consultar primero qué tipo de sándwich 
//  base se seleccionó, 
// luego el tipo de pan, y por último deberá verificar qué 
// adicionales se seleccionaron.
// Finalmente, deberá retornar el valor numérico del 
// total a pagar del cliente.

function tipoSandwiche() {
    let sandwich = prompt("Ingrese el tipo de sandwich (pollo -carne - veggie)");
    let pan = prompt("Ingrese el tipo de pan (blanco - negro -sin gluten)");
    let queso = prompt("Desea queso? (s/n)");
    let tomate = prompt("Desea tomate? (s/n)");
    let lechuga = prompt("Desea lechuga? (s/n)")
    let cebolla = prompt("Desea cebolla? (s/n)");
    let mayonesa = prompt("Desea mayonesa?(s/n)");
    let mostaza = prompt("Desea mostaza (s/n)");

    let precio = 0;
    
    if(sandwich == "pollo"){
        precio = 150;

    }else if (sandwich == "carne"){
        precio = 200;
    }else if (sandwich == "veggie"){
        precio = 100;
    }

    if (pan == "blanco"){
        precio = precio + 50;
    }else if (pan == "negro"){
        precio = precio + 60;
    }else if (pan == "sin gluten"){
        precio = precio + 75;
    }

    if(queso == "s"){
        precio = precio + 20;
    }else{
        precio = precio;
    }

    if (tomate == "s"){
        precio = precio + 15;
    }else{
        precio = precio;
    }

    if(lechuga == "s"){
        precio = precio + 10;
    }else{
        precio = precio;
    }

    if(cebolla == "s"){
        precio = precio + 15;
    }else{
        precio = precio;
    }

    if(mayonesa == "s"){
        precio = precio + 5;
    }else{
        precio = precio;
    }

    if(mostaza == "s"){
        precio = precio + 5;
    }else{
        precio = precio;
    }
    
    console.log("Te cuesta $" + precio);
}
tipoSandwiche();









// function tipoSandwiche(pollo, carne, veggie){
//     let acc = 0;
//     if (pollo === "pollo"){
//         return acc + 150;
//     }else if (carne === "carne"){
//         return acc + 200;
//     }else if (veggie === "veggie"){
//         return acc + 100;
//     }
//     tipoDePan = function(blanco, negro, sinGluten){
        
//         if (blanco === "blanco"){
//             return acc + 50;
//         }else if (negro === "negro") {
//             return acc + 60;
//         }else if (sinGluten === "SinGluten"){
//             return acc + 75
//         }
//     }
    
// }
// function tipoDePan(blanco, negro, sinGluten){
//     let acc = 0
//     if (blanco === "blanco"){
//         return acc + 50;
//     }else if (negro === "negro") {
//         return acc + 60;
//     }else if (sinGluten === "SinGluten"){
//         return acc + 75
//     }
// }
// tipoSandwiche("veggie")
// tipoDePan("negro")

// console.log(tipoSandwiche);


