let matriz = [
    [13, 21, 3, 10],
    [39, 14, 52, 12],
    [6, 72, 87, 1],
    [6, 72, 8, 11],
    [5, 67, 1, 79]
];

// function recorrer(arr){
//     for (let i=0;i<matriz[1].length;i++){
//         console.log(matriz[1][i]);}
// }

function recorrer(arr){
    for (let fila=0;fila<matriz.length;fila++){
        for(let columna=0;columna<matriz[fila].length;columna++){
        console.log(matriz[fila][columna]);}
        
        }
}
//recorrer(matriz);

let cine = [
    ['libre','ocupado','ocupado','ocupado'],
    ['ocupado','libre','libre','ocupado'],
    ['libre','ocupado','libre','ocupado'],
    ['libre','ocupado','ocupado','libre'],
];

function asientoLibre(butaca){
    let libres = false;
    
    for(let fila = 0; fila <butaca.length; fila++){
    
        libres = false;
    
        for(let col = 0; col <butaca[fila].length; col++){

        
            if(butaca[fila][col] == 'libre'){
    
                libres = true
            }
        }if(libres == true) {
            //console.log('en la fila ' + fila + ' ' +'hay butacas libres')
        }
    }
  

}


//console.log(asientoLibre(cine));

/**
 * Escriba una función que reciba dos parámetros:
 * una array y un índice. La función mostrar por consola
 * el valor del elemento en la posición dada
 * (basado en uno). Por ejemplo, dado el siguiente
 * array:
 */
/**
 * Y el siguiente indice:
 */

 let indice = 1;

 /**
  * La funcion debera mostrar por consola el numero 6.
  */
 
 // Extra: que pasa si cambias el valor de la variable indice a 10?
 // Si tu función esta bien, deberias ver el numero 17 por consola.
 
 // Escribe tu función debajo de esta linea.
 
 // Invoca tu función debajo de esta linea.
 

let array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

const swap = (array,indice)=>{
    
    let temp = array[indice];

    array[indice] = array[indice+1];

    array[indice+1] = temp;
}

const ordenar = array => {
    
    let aux
    
    for(let i = 0 ; i < array.length; i++){

        for(let j = 0; j<array.length -1; j++){

            if(array[j]> array[j+1]){
                
                swap(array,j);
            }
        }
    }
    return array
}

console.log(ordenar(array));