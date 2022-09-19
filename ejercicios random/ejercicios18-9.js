let mascota = [{
    
    nombre: "jack",
    edad: 2
},
{
    nombre: "lola",
    edad: 35
},
{
    nombre: "firualais",
    edad: 4
},
{
    nombre: "mora",
    edad: 6
},
]

const ordenar = array =>{
    let aux
    for(let i = 0; i < array.length; i++){
       
        for(let j = 0; j <array.length - 1; j++ ){
           
            if(array[j] > array[j + 1]){
            
                aux = array[j];
                array[j]=array[j+1];
                array[j+1]= aux;
            }

        }
    }


}