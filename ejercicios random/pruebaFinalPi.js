/* Crear un arreglo de objetos donde cada objeto representa un tweet. Cada tweet debe tener las siguientes propiedades:
Id (number)
Texto (string)
Cantidad de likes (number)
Cantidad de retweets  (number)
Es privado (bool)
Tu arreglo debe tener, al menos, 6 tweets.
Implementa una función que reciba por parámetro él array creado y un id. la misma deberá retornar un booleano indicando si ese tweet es privado o no.
*/

let obj = [
    {
        id: 0,
        texto : 'texto1',
        likes : 11,
        retweets : 10,
        privado : true,
    },
    {
        id: 1,
        texto : 'texto2',
        likes: 12,
        retweets: 5,
        privado: false,
    },
    {
        id: 2,
        texto: 'texto3',
        likes: 2,
        retweets: 4,
        privado: true,
    },
    {
        id: 3,
        texto: 'texto4',
        likes: 5,
        retweets: 10,
        privado: false,
    },
    {
        id: 4 ,
        texto: 'texto5',
        likes: 4,
        retweets: 6,
        privado: true,
    },
    {
        id: 5,
        texto: 'texto6',
        likes: 8,
        retweets: 4,
        privado: false,
    },
]
function tweetPrivado(array, id) {

    for (let i = 0; i < array.length; i++) {

        if (array[id].privado === false) {

            return false

        } else{  return true
        }

    }
}




//console.log(tweetPrivado(obj,2));

// function retorno(obj,id){
//     for(let i = 0; i<array.length; i++){
//        if(id );
        
// } return array
// }


const autos = [{
    marca: 'Toyota',
    anio: 2014,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2015,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2017,
    color: 'rojo'
},
{
    marca: 'Fiat',
    anio: 2019,
    color: 'negro'
}]

function ordenar(array) {
    for(let i = 0; i < array.length; i++){
      for(let j = 0; j < array.length-1; j++){
        if(array[j].anio > array[j+1].anio){
          let temp = array[indice]
          array[j] = array[j+1]
          array[j+1] = temp
        }
      }
    }
}
// ordenar(autos)
// console.log(autos);


let matriz = [
    [13, 21, 3, 10],
    [39, 14, 52, 12],
    [6, 72, 87, 1],
    [6, 72, 8, 11],
    [5, 67, 1, 79]
];

function segundaFila (matriz){
    let acc =1;

    for( let i = 0; i < matriz[1].length; i++){

        acc = acc * matriz[1][i]
        
    }
    return acc

}

// segundaFila(matriz,1)
// console.log(segundaFila(matriz,1))

/*Crear una función que reciba a la matriz por parámetro y devuelva un nuevo array con todos los valores de la matriz que sean pares y mayores a 6.*/

function matrix(matrix){

    let newMatrix = []

    for(let i = 0; i < matrix.length; i++){

        for(let j = 0;j < matrix.length -1; j++){

            if(matrix[i][j]> 6 && matrix[i][j] % 2 === 0){

                newMatrix.push(matrix[i][j])
            }
        }
    }
    return newMatrix
}
console.log(matrix(matriz));