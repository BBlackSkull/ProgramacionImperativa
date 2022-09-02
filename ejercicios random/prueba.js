const prompt = require("prompt-sync")({ sigint: true });
function reporteDePasajeros(estacion){
    let tren = 200;
    
    for(let vuelta = 0; vuelta <= estacion; vuelta++)
    
    // if( estacion == 0){
    //     tren = tren
    // }else if(estacion == 1){
    //     tren = tren + 50 - 30;
    // }else if(estacion == 2){
    //     tren = tren + 50 - 30;
    // }else if(estacion == 3){
    //     tren = tren + 50 - 30;
    // }else if(estacion == 4){
    //     tren = tren + 50 - 30;
    // }else if(estacion == 5){
    //     tren = tren + 120 - 80;
    // }else if(estacion == 6){
    //     tren = tren + 50 - 30;
    // }
     if(estacion * 5 && estacion % 2 === 0){
         tren = tren + 120 - 80;
     }else if (!estacion * 5){
         tren = tren + 50 - 30;
     }
    console.log("en la estacion" + " " + estacion + " " + "hay "+ tren + " " + "pasajeros arriba del tren")
}
reporteDePasajeros(5);
