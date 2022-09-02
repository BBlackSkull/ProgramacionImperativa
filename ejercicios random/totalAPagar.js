const prompt = require("prompt-sync")({ sigint: true });

function totalAPagar(vehiculo, litrosConsumidos){
    if(vehiculo === "coche"){
        litrosConsumidos =  litrosConsumidos * 86;
    }else if(vehiculo === "moto"){
         litrosConsumidos = litrosConsumidos * 70;
    }else if(vehiculo === "autobus"){
        litrosConsumidos = litrosConsumidos * 55;
    }
    if(litrosConsumidos >= 0 && litrosConsumidos <= 25){
       litrosConsumidos = litrosConsumidos + 50; 
    }else if(litrosConsumidos > 25){
        litrosConsumidos = litrosConsumidos + 25
    }
    
    console.log('El costo es: $' + litrosConsumidos + '.');
}
totalAPagar("coche", 10);