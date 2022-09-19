/* encuentra el menor entero faltante del array*/ 
const numerosA= [1,4,2,6,7,5] // 3
const numerosB= [3,4,8,9,7,5] // 6
const numerosC= [1,2,6,7,5,3] // 4
const numerosD= [-1, -2] // 1

function swap(array, indice){
    let temp = array[indice];
    array[indice] = array[indice+1];
    array[indice+1] = temp
}
function ordenar(array){
    let min = 0 ;
    for(let i = 0; i< array.length; i++){
        for(let j =0; j< array.length-1; j++){
            if(array[j]> array[j+1]){
                swap(array,j)
            }
        }
    }
    for(let k =0; k < array.length-1;k++){
        let aux = array[k]
        if(aux+1 != array[k+1]){
            let minimo = aux+1
            return minimo
        }
    }
    return 1
}


ordenar(numerosA)
console.log(numerosA)
console.log(ordenar(numerosA))
ordenar(numerosB)
console.log(numerosB)
console.log(ordenar(numerosB))
ordenar(numerosC)
console.log(numerosC)
console.log(ordenar(numerosC))
ordenar(numerosD)
console.log(numerosD)
console.log(ordenar(numerosD))