// Ejercicio 1:  
// Declarar tres variables y asignarles un número entero a las tres.
// Crear una función que reciba tres parámetros, que pregunte:
// Si el primero es mayor que el segundo, debe devolver la multiplicación del segundo por el tercero.
// Si el segundo es par, que devuelva un texto que concatene al segundo número con un texto que diga ‘es par’.
// Si la suma de los tres es múltiplo de 3, debe devolver un texto que diga: la suma de estos tres números es múltiplo de 3.
// Invocar a la función pasándole por parámetros las tres variables declaradas en el punto 1 

let var1 = 20;
let var2 = 10;
let var3 = 30;
function tresVariables(var1,var2,var3){
    
    if(var1 > var2){
        console.log( var2 * var3);  
    }else if(var2 % 2 === 0){
      "es par"
    }
    
}
let resultado = tresVariables(var1,var2,var3);
console.log(resultado)

// Ejercicio 2:
// Crear un objeto literal que contenga las siguientes propiedades y asignarles un valor: 
// nombre 
// apellido
// edad
// estaEmpleado (bool)
// Declarar un función que:
// Si la edad es mayor a 18 años y está empleado, devolverá una frase que diga: [nombre] [apellido] está empleado y es mayor de edad.
// Si es mayor de edad pero no está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y es mayor de edad.
// Si no es mayor ni está empleado, devolverá una frase que diga: [nombre] [apellido] NO está empleado y NO es mayor de edad.

// Dado el siguiente array de objetos:
 
let autos = [{
    marca: 'Toyota',
    anio: 2022,
    color: 'rojo'
},
{
    marca: 'Renault',
    anio: 2020,
    color: 'gris'
},
{
    marca: 'Peugeot',
    anio: 2021,
    color: 'rojo'
},
{
    marca: 'Fiat',
    
    anio: 2019,
    color: 'negro'
}]
 
 

// Eliminar el último elemento del arreglo usando un método de arrays.
// Recorrer el array y si el año del auto es mayor a 2019, agregar cada objeto a un nuevo arreglo llamado autosNuevos.
