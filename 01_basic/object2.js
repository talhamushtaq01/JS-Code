//const tinderuser = new Object(); // singleton

//console.log(tinderuser);

const tinderuser ={};
tinderuser.name = "Talha"
tinderuser.email= "talha@gmail.com"
tinderuser.logedin= true

//console.log(tinderuser);

const regularUser ={
    email: "talha#gmail.com",
    FullName:{
        userName : {
            fisrtName : "Talha",
            lastName : "Mushtaq"
        }
    }
}
//console.log(regularUser.FullName.userName);


const target = {1 : "a", 2 : "b", 3 : "c"}
const source = {4 : "d", 5 : "e", 6 : "f"}
//const maintarget = Object.assign({},target,source)

const maintarget = {...target, ...source}
//console.log(maintarget);


// console.log(tinderuser);
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));



const courses ={
    courseName : "Javascript",
    coursePrice : 2900,
    courseInstructor : "Talha"
}
//console.log(courses.courseInstructor);

const {courseInstructor: Instructor,coursePrice:price, courseName:name} =courses
console.log(Instructor,price,name);