// totalAPagar()
// Declará una función llamada totalAPagar() 
// que reciba como parámetros: vehiculo y
// litrosConsumidos.
// A continuación, definí y realizá los cálculos 
// para obtener el total a pagar, teniendo en
// cuenta las siguientes consideraciones:
// ● Si el vehículo es “coche”, 
// el precio por litro es de $86.
// ● Si es “moto”, ha de ser $70.
// ● Si es “autobús”, ha de ser $55.
// ● Si los litros consumidos están 
// entre 0 y 25, se ha de añadir $50 al total a pagar.
// ● Si los litros consumidos 
// son mayor a 25, se ha de añadir $25 al total a pagar.

function totalAPagar(vehiculo, litrosConsumidos){
    if (vehiculo == "coche" && litrosConsumidos > 0 && litrosConsumidos <= 25){
        return 86 * litrosConsumidos + 50;
         
    }else if (vehiculo == "coche" && litrosConsumidos > 25){
        return 86 * litrosConsumidos + 25;  
    }else if (vehiculo == "moto" && litrosConsumidos > 0 && litrosConsumidos <= 25){
        return 70 * litrosConsumidos + 50;
         
    }else if (vehiculo == "moto" && litrosConsumidos > 25){
        return 70 * litrosConsumidos + 25;  
    
    }else if (vehiculo == "autobus" && litrosConsumidos > 0 && litrosConsumidos <= 25){
        return 55 * litrosConsumidos + 50;
         
    }else if (vehiculo == "autobus" && litrosConsumidos > 25){
        return 55 * litrosConsumidos + 25;  
    
    }
         
    
}

console.log(totalAPagar("moto", 30));

