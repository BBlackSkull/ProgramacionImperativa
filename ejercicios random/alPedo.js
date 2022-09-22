let arreglo = [
    {
        id: 0,
        texto : 'rojo',
        likes : 11,
        retweets : 10,
        privado : true,
    },
    {
        id: 1,
        texto : 'azul',
        likes: 12,
        retweets: 5,
        privado: false,
    },
    {
        id: 2,
        texto: 'verde',
        likes: 2,
        retweets: 4,
        privado: true,
    },
    {
        id: 3,
        texto: 'amarillo',
        likes: 5,
        retweets: 10,
        privado: false,
    },
    {
        id: 4 ,
        texto: 'gris',
        likes: 4,
        retweets: 6,
        privado: true,
    },
    {
        id: 5,
        texto: 'celeste',
        likes: 8,
        retweets: 4,
        privado: false,
    },
]

     function tweetPrivado(array, id) {

        for (let i = 0; i < array.length; i++) {
    
            if (array[id].privado == true) {
    
                return true 
    
            } else return false
    
        }
    }
    
    console.log(tweetPrivado(arreglo, 4));
    console.log(tweetPrivado(arreglo, 3));