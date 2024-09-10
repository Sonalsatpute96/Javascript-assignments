//Block of code that perform a perticular task,can be invoked(means when function is called) whenever needed
//generally when we create a function is called "Function",and push(),shift(),splice() is called as a methods
//redendency means repeat i.e function decerese redendancy
//invoke=function call
// syntax
// function functionName()
// {
//     //Do some work
// }
// function functionName(param1,param2)
// {
//     //Do some work
// }
// calling a function
// functionName();

function myFunction() {
    console.log("Hello");
}
myFunction();

function myFunction2(msg)//msg is parameter
{
    console.log(msg);
}
myFunction2("I Love Javascript");//argument

function sum(a, b) {
    return a + b;
}

// Hello
// 7_Function1.js:25 I Love Javascript
// sum(2,3)
// 5

function sum2(a, b) {
    s = a + b;
    return s;
    // console.log(s); We can not add code after return coz it is not reachable code;
}
let sumValve = sum2(3, 3); // Here need to assign the values
console.log(sumValve);

//------------------------------------------------------------------------------

//Arrow function(using symbol => )
// compact way of writing a function 

// const functionName=(param1,param2)
// {
//     //do some work
// }

const sum3 = (a, b) => {
    return a + b;
}
let sum3F = sum3(5, 5);
console.log(sum3F);     //10

//using arrow fun

const mult = (a, b) => {
    return a * b;
}
let multArrow = mult(4, 5);
console.log(multArrow);     //20

//Arow fun to print simple msg
const print = () => {
    console.log("Hello using arrow function");
}
print();//Hello using arrow function

//Create a function using function keywords that takes the string as an argument & return the no of vowels in the string

function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }

    }
    console.log("Vowels count=", count);

}
countVowels("sonal");//Vowels count= 2

const countVowelsArrow = (str) => {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
            count++;
        }

    }
    console.log("Vowels count using arrow function=", count);

}
countVowelsArrow("sonali");  //Vowels count using arrow function= 3

//----------------------------------------------------------------------
// Foreach loop in Array (It also called as the higher order function/method=Where the function use as argument or return the fuction)
// Array.array.forEach(callbacck function );
// call back function =here it is function to execute to each element in the array 
// A callback function is a function passed as an parameter to the another function

//Syntax:
// array.forEach((val) => {
//     console.log(val);
// });
console.log("Foreach loop in Array");
let arr = [1, 2, 3, 4, 5];
arr.forEach((val) => {
    console.log(val);
});
// 1
// 7_Function1.js:128 2
// 7_Function1.js:128 3
// 7_Function1.js:128 4
// 7_Function1.js:128 5

console.log("Another way with foreach");
arr.forEach(function printValue(val) {
    console.log(val);
})

let arr1 = ["Sonal", "Swapnil", "Bendhale"];
arr1.forEach((val) => {
    console.log(val.toUpperCase());
})

// SONAL
// 7_Function1.js:145 SWAPNIL
// 7_Function1.js:145 BENDHALE

let arr2 = ["Pune", "Mumbai", "Delhi"];
arr2.forEach((val, idx, arr2) => {
    console.log(val, idx, arr2);
})

// Pune 0
// 7_Function1.js:155 Mumbai 1
// 7_Function1.js:155 Delhi 2

// Pune 0 (3) ['Pune', 'Mumbai', 'Delhi']
// 7_Function1.js:155 Mumbai 1 (3) ['Pune', 'Mumbai', 'Delhi']
// 7_Function1.js:155 Delhi 2 (3) ['Pune', 'Mumbai', 'Delhi']

let arr3 = [1, 2, 3, 4, 5];
arr3.forEach((val) => {
    console.log(val * val);
})
// 1
// 7_Function1.js:169 4
// 7_Function1.js:169 9
// 7_Function1.js:169 16
// 7_Function1.js:169 25

//Another way
console.log("Another way");

let calSquare = (val) => {
    console.log(val ** 2);
}

arr3.forEach(calSquare);        //Don't use () sign here it wll throw an error

// Another way
// 7_Function1.js:182 1
// 7_Function1.js:182 4
// 7_Function1.js:182 9
// 7_Function1.js:182 16
// 7_Function1.js:182 25

//----------------------------------------------------------------------------
//Some more array methods
//1.Map()
// create a new array with the result of some operation .The value its callback return are used to form a new array 

//syntax
// arr.map(callbackfunction(val,idx,arr))

let arr4 = [1, 2, 3];
console.log("Using a map function");
arr4.map((val) => {
    console.log(val * val);
})

// Using a map function
// 7_Function1.js:206 1
// 7_Function1.js:206 4
// 7_Function1.js:206 9

//2.filter()

// Create a new array of element that gives true for the Condition/filter 
// eg.all even elements 
console.log("using filter function");
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
arr5.filter((val) => {
    if (val % 2 == 0) {
        console.log(val);
    }
})

// using filter function
// 7_Function1.js:224 2
// 7_Function1.js:224 4
// 7_Function1.js:224 6
// 7_Function1.js:224 8
// 7_Function1.js:224 10
// 7_Function1.js:224 12
// 7_Function1.js:224 14

//3.Reduce()=
// Perform some operation and return an array to a single value.It return that single value
console.log("using reduce method");
let arr6 = [100, 200, 300, 400, 500];
let Reduce1 = arr6.reduce((previ, next) => {
    return previ + next;
});
console.log(Reduce1)

//using reduce method
// 7_Function1.js:245 1500

console.log("To print greatest no");
let GreaterVlaue = arr6.reduce((previ, next) => {
    return previ > next?previ:next;
});
console.log(GreaterVlaue);

//To print greatest no
// 7_Function1.js:233 500

//Que. From given array find out the marks grater than 90
console.log("Que. From given array find out the marks grater than 90");
let arr7=[90,87,93,60,95,97,99];
arr7.filter((val)=>
{
    if(val>=90)
    {
        console.log(val);
    }
})

// Que. From given array find out the marks grater than 90
// 7_Function1.js:245 90
// 7_Function1.js:245 93
// 7_Function1.js:245 95
// 7_Function1.js:245 97
// 7_Function1.js:245 99
console.log("Take the no as input form the user.Create array of a no form 1 to n.Use reduce method to calculate the sum of the all the nos from an array.Use reduce method to calculate product of the all nos in the array");
let n=prompt("Enter a no n;");
let arr8=[];
for(i=1;i<=n;i++)
{
    arr8[i-1]=i;
}
console.log(arr8);

let summ=arr8.reduce((prev,next)=>
{
    return prev+next;
});
console.log("Sum=",summ);

let multiplicaton=arr8.reduce((prev,next)=>
{
    return prev*next;
});
console.log("multiplicaton",multiplicaton);

// Take the no as input form the user.Create array of a no form 1 to n.Use reduce method to calculate the sum of the all the nos from an array.Use reduce method to calculate product of the all nos in the array
// 7_Function1.js:262 (5) [1, 2, 3, 4, 5]
// 7_Function1.js:268 Sum= 15
// 7_Function1.js:274 multiplicaton 120


