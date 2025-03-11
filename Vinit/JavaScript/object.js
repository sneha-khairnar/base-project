let a;
const vehicle = {
    model: "BMW M5 CS",
    engine: "4.4L V8",
    drivetrain: "AWD",
    transmission: "8 speed ZF",
    
    } 
function bmwFan(){
     a = prompt("Are you a BMW fan? ")
     if(a == "yes"){
        console.log(vehicle)
        alert(JSON.stringify(vehicle))
     }
    }
bmwFan();    

