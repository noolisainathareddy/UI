import {loop} from "./loop"; 

function call(num1, num2) {
    console.log(num1+num2);
    loop();
    console.log("called funtions");
    

}

console.log("Going to call funtions");
call(4,5);
console.log("pgm ended");