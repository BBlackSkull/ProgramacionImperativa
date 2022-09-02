// Obtener en un nuevo array las edades menores a 18.
// Obtener en un nuevo array las edades mayor o igual a 18.
// Obtener en un nuevo array las edades igual a 18.


// function nuevoArray (array) {
    //     let arrayMenore = [];
    //     let arrayMayore = [];
    //     let arrayIguale = [];
    //     for(let i = 0; i < array.length; i++){
        //         if( array[i] < 18){
            //             arrayMenore.push(array[i]);
            
            //         }else if( array[i] > 18){
                //             arrayMayore.push(array[i]);
                //         }else if( array[i] = 18){
                    //             arrayIguale.push(array[i]);
                    //         }
                    //     }
                    //     return {arrayEdadesMenore: arrayMenore, arrayEdadesMayore: arrayMayore,
                    //         arrayEdadesIguale: arrayIguale};
                    
                    //     }
                    //console.log(nuevoArray(edades));
                    
                    // Obtener el menor.
                    // Obtener el mayor. 
                    
                    // function mayorYMenor (a){
                        //     let menor = a[0];
                        //     let mayor = a[0];
                        //     for(let i = 0 ; i < a.length; i++){
                            //         if(a[i] < menor){
                                //             menor = a[i];
                                //         }
                                //         if(a[i]> mayor){
                                    //             mayor = a[i];
                                    //         }
                                    //     }return {mayor, menor}
                                    
                                    
                                    // }
                                    //console.log(mayorYMenor(edades));
    
    
    
    // Obtener el promedio de edades.
    // Incrementar en 1 todas las edades.
    // function promedio(array){
        //     let acc = 0;
        //console.log(array)
        //     for(let i = 1; i < array.length; i++){
            //         acc += array[i] / array.length;
            
            //     } 
            //     return acc;
            // }
            
//const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];
    //         function incrementar (num) {
    //             for (let i = 0 ; i < num.length; i++){
    //                 console.log(num[i] + 1);
    //             }
                
    //         }
    
    // console.log(incrementar(edades));

    // Funcion que reciba un array de edades y retorne true si encuentra algun elemento repetido o false caso contrario
const edades = [10, 9, 8, 22, 55, 80, 5, 63, 29,9 ];
const edades1 = [5, 9, 8];
const edades2 = [50, 80, 90, 60, 22, 15];

 function edadesRepetidas (edades){
     
    let acc = [];
      
     for( let i = 0; i < edades.length; i++ ){
         
         acc.push(edades[i]);
         if(acc.includes(edades[i])){ 
             
            
            return true
            
         } 
     } return false
 } 


 console.log(edadesRepetidas(edades));
 //console.log(edadesRepetidas(edades1));


 //  const repetido = arrayEdades => {
 //      let edadRepetida = []
 
 //      for (let i = 0; i < arrayEdades.length; i++) {
 //      const edad = arrayEdades[i];
 //      if (edadRepetida.includes(edad)) return true
 //      edadRepetida.push(edad)
 //      }
 
 //      return false
 //  }





