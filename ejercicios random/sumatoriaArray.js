//?desarrollar una funcion que reciba un parametro
// ?el array calcule el promedio
// *si promedio >= return true
// *caso contrario return false
let numeros = [1, 2, 3, 4, 5];
function promedio (arrayNumeros){
    let sumatoria = 0;
    for (let i = 0; i < arrayNumeros.length; i++) {
        
        sumatoria = sumatoria + arrayNumeros[i]
        //sumatoria += arraynumero[i]
        
        
    }
    //console.log(sumatoria / arrayNumeros.length);
    let res= sumatoria / arrayNumeros.length
        if(res >=7){
            return true
        }else { 
            return false
        }
    //return res >= 7; //bool
    
}
console.log(promedio(numeros));

