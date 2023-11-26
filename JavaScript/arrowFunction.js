const add = (num1, num2) => { console.log(num1+num2)};

add(5,6);

class User{
    constructor(msg){
            this.msg = msg;
    }
    admin(val){
        console.log(val);
        console.log(this.msg);
    }

}

let user = new User('kadapa'); 
user.admin("vempalli");

var data = [1,2,3,4,5];
for(const a of data){
    console.log(a);
}