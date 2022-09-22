// Ejercicio 1

// Dado un array con los datos de una encuesta realizada sobre los temas musicales
// más populares —lo que se tiene en el array son objetos definidos con el nombre de
// un tema musical y cantidad de votos que obtuvo— crear el array con los datos de 5
// temas, crear los objetos con los temas que prefieran, y una cantidad de votos para
// cada uno.
// Los votos obtenidos están desordenados.


let temas =
[
    {
        nombre: 'Your Fault',
        cantVotos: 2
    },
    {
        nombre: 'I spy',
        cantVotos: 3124
    },
    {
        nombre: 'Smoke Criminal',
        cantVotos: 33
    },
    {
        nombre: 'circle of life',
        cantVotos: 992
    },
    {
        nombre: 'Tu sin mi',
        cantVotos: 42
    },
]

function ordenar(array){
    let temp
    for(let i=0;i<array.length;i++){
        for(let j=0;j<array.length-1;j++){
            if(array[j].cantVotos > array[j+1].cantVotos){
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
}

console.table(temas)
ordenar(temas)
console.table(temas)

// Escribir un algoritmo que, dado un tema, me informe cuántos votos obtuvo.
// a) Resolverlo aplicando búsqueda lineal.

function busquedaLineal(array , tema){
    for(let i=0;i<array.length;i++){
        if(array[i].nombre == tema){
            return array[i].cantVotos
        } 
    }
}

console.log(busquedaLineal(temas, 'I spy'))

// b) Resolverlo aplicando búsqueda binaria.

function binarySearch(array, item){
    
    let limiteBajo = 0
    let limiteAlto = array.length-1

    while(limiteBajo <= limiteAlto){
        const medio = Math.floor((limiteBajo + limiteAlto) / 2)

        const guess = array[medio].nombre

        if(guess == item) return medio

        if(guess > item) limiteAlto = medio - 1
        else limiteBajo = medio + 1
    }

    return null
}

console.log(binarySearch(temas, 'I spy'))






