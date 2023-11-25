// function user(){
//     console.log("called user method");
// }

// user();

function user(num1){
    console.log(num1);
}

user(10); 


function user(num1, num2){
    return num1+num2;
}

var result = user(10,20);
console.log(result);