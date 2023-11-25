var data=[10,20,30,40,50];

//console.log(data);
console.log(data[2]);

var details= {
    name:"sai",
    age : 26
};

console.log(details);
console.log(details.name + " ------ " + details.age);

console.log(Array.isArray(data));

data.map(
    function(element){
        console.log(element);
    }
);
console.log(data.length);

var output = data.map(
    function(element){
        return element+5;
    }
);
console.log(output);

var result = data.filter(
    function(cast){
        return cast > 30;
    }
);
console.log(result);