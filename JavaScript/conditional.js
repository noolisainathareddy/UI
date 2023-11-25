// three types
// 1 - if 
// 2 - if else
// 3 - if esle if else if else

var num = 10; 

if(num < 20){
    console.log( num + " is less than 20");
}

if(num < 5){
    console.log(num + " is less than 5");
}else{
    console.log(num + " is greater than 5");
}

if(num < 5){
    console.log(num + " is less than 5");
}else if(num < 1){
    console.log(num + " is less than 1");
}else{
    console.log(num + " is greater than 1 and 5");
}
