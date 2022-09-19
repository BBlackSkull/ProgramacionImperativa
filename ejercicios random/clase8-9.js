let numeros = [
	[10, 3, 2, 1, 4, 7], //0
	[5, 5, 10, 100, 4], //1
	[5, 125, 10, 1020, 4], //2
	[5, 5, 5097, 100, 4] //3
];

/**
 * Suma los valores que sean mayores
 * o iguales a 10, pero menor a 1000.
 */

function sumar(array){
    let acc = 0;
    
    for (let i = 0; i < array.length; i++){
        
        for(let j = 0; j< array[i].length; j++){
                
            if ( array[i][j] >= 10 && array[i][j] < 1000){
                
                acc += array[i][j];
        }

        }
        
    } return acc;
}
console.log(sumar(numeros)); 

