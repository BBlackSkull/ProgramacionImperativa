// let array = [1,2,3]
// let array2 = [1, 3, 6, 4, 1, 2]
// const numeroFaltante = (array)=>{
//     let contador =  array[0]
//     for(let j = 0 ; j < array.length ; j++){
//         if(array[j] != contador && contador > 0){
//           return contador
//         }
//           contador++
//       }
//     return contador
//   }
//   console.log(numeroFaltante(array2));



const numerosA= [1,4,2,6,7,5] // 3
const numerosB= [3,4,8,9,7,5] // 6
const numerosC= [1,2,6,7,5,3] // 4
const numerosD= [-1, -2] // 1



const swap = (array, indice) => {
  let temp = array[indice]
  array[indice] = array[indice+1]
  array[indice+1] = temp
}

const yamall = (array) => {
  let minimo
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length-1; j++){
      if(array[j] > array[j+1]){
        swap(array,j)
      }
    }
  }
  for(let k = 0; k < array.length-1; k++){
    let aux = array[k]
      //console.log(aux)
    if(aux+1 != array[k+1]){
      minimo = aux+1
      return minimo
    }
  }
    return 1

}

yamall(numerosA)
console.log(numerosA)
console.log(yamall(numerosA))
yamall(numerosB)
console.log(numerosB)
console.log(yamall(numerosB))
yamall(numerosC)
console.log(numerosC)
console.log(yamall(numerosC))
yamall(numerosD)
console.log(numerosD)
console.log(yamall(numerosD))
