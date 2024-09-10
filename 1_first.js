console.log("Hello ,Sonal here!")
console.log("Welcome")

let name="Sonal Bendhale";
let age=28;
let percentage=90.73;
let value1=null;
let value2=undefined;
let isfollow=true;
let x=BigInt(123);
var a=5;
// var is the datatype used before 2015 but now we use let as var is having global space 
const pi=3.14;

console.log(name);
console.log(typeof name);

console.log(age);
console.log(typeof age);

console.log(percentage);
console.log(typeof percentage);

console.log(value1);
console.log(typeof value1);

console.log(value2);
console.log(typeof value2);

console.log(isfollow);
console.log(typeof isfollow);

console.log(x);
console.log(typeof x);

console.log(a);
console.log(typeof a);

console.log(pi);
console.log(typeof pi);
 
const student={
    fullName:"Sonal Bendhale",
    percentage:90.73,
    Education:"B.E Computer",
    isPass:true,
};

console.log(student);
console.log(typeof student);

// Two ways to print key from the object 
console.log(student.fullName);
console.log(student["fullName"]);

// To update the value of key in object 
student["fullName"]="Sonal Swapnil Bendhale";       //student["fullName"] here two quotes are must
console.log(student["fullName"]);

student["percentage"]=student["percentage"]+1;
console.log(student["percentage"]);

const product={
    title:"Ball pen",
    rating:4.5,
    price:270,
    offer:5
};

console.log(typeof product["rating"]);

// Hello ,Sonal here!
// 1_first.js:2 Welcome
// 1_first.js:15 Sonal Bendhale
// 1_first.js:16 string
// 1_first.js:18 28
// 1_first.js:19 number
// 1_first.js:21 90.73
// 1_first.js:22 number
// 1_first.js:24 null
// 1_first.js:25 object
// 1_first.js:27 undefined
// 1_first.js:28 undefined
// 1_first.js:30 true
// 1_first.js:31 boolean
// 1_first.js:33 123n
// 1_first.js:34 bigint
// 1_first.js:36 5
// 1_first.js:37 number
// 1_first.js:39 3.14
// 1_first.js:40 number
// 1_first.js:49 {fullName: 'Sonal Bendhale', percentage: 90.73, Education: 'B.E Computer', isPass: true}
// 1_first.js:50 object
// 1_first.js:53 Sonal Bendhale
// 1_first.js:54 Sonal Bendhale
// 1_first.js:58 Sonal Swapnil Bendhale
// 1_first.js:61 91.73
// 1_first.js:70 number
