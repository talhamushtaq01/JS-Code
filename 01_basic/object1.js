const mysmb = Symbol("key1");
let user ={
    name : "Talha",
    email : "talha@gmail.com",
    [mysmb] :"key1",
    location: "Lahore",
    isLoggedin: false

}

console.log(user.name);
console.log(user['email'])

user.email="ali@gmail.com";
Object.freeze(user);

console.log(user[mysmb]);
console.log(typeof(user[mysmb]));

console.log(user)
