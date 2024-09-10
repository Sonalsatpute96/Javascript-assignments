//Array-collection of items=linear position and index starts with 0 to n
let family=["Sonal","Swapnil","Arjun"];
console.log(family);

let numbers=[1,2,3,4,5];
console.log(numbers);

let mixArray=["sonal","90.73","Bacholor of engineering"];
console.log(mixArray);
console.log(mixArray.length);//here length is the property and property always return a value;
console.log(typeof mixArray);

//Array indices is access by arr[0],arr[1],arr[2]....(Array is mutable)
console.log("0 th index",mixArray[0]);
console.log("1st index",mixArray[1]);

//But as  string is immutable we cannot acces the string like str[0],str[1],str[2],....

//Looping over an array=Print all element of an array
//loops are iterable (string ,Object ,Array)

for(let i=0;i<mixArray.length;i++)
{
    console.log(`${i} th index=`,mixArray[i]);
}

//for of
for(mixA of mixArray)
{
    console.log("Using for of loop",mixA);
}
//for of example

for(num of numbers)
{
    console.log("for of",num);
}
//for of with uppercase fun
console.log("Using uppercase function=")
for(let fam of family)
{
    console.log(fam.toUpperCase())  //Inbuilt fun is used to perform a perticular task
}

// (3) ['Sonal', 'Swapnil', 'Arjun']
// 6_Array1.js:6 (5) [1, 2, 3, 4, 5]
// 6_Array1.js:9 (3) ['sonal', '90.73', 'Bacholor of engineering']
// 6_Array1.js:10 3
// 6_Array1.js:11 object
// 6_Array1.js:14 0 th index sonal
// 6_Array1.js:15 1st index 90.73
// 6_Array1.js:24 0 th index= sonal
// 6_Array1.js:24 1 th index= 90.73
// 6_Array1.js:24 2 th index= Bacholor of engineering
// 6_Array1.js:30 Using for of loop sonal
// 6_Array1.js:30 Using for of loop 90.73
// 6_Array1.js:30 Using for of loop Bacholor of engineering
// 6_Array1.js:36 for of 1
// 6_Array1.js:36 for of 2
// 6_Array1.js:36 for of 3
// 6_Array1.js:36 for of 4
// 6_Array1.js:36 for of 5
// 6_Array1.js:39 Using uppercase function=
// 6_Array1.js:42 SONAL
// 6_Array1.js:42 SWAPNIL
// 6_Array1.js:42 ARJUN

let marks=[98,99,97,95,96];
let sum=0;
for(let i=0;i<marks.length;i++)
{
    sum=sum+marks[i];
}
console.log("Sum=",sum);
let avg=(sum/marks.length);
console.log("Average=",avg);
console.log(`Average marks= ${avg}`);

//for given array with price of 5 items=[250,645,300,900,50].All item have an offer of 10%
//off on them.Change the array to store final price of after an offer

let items=[250,645,300,900,50];
console.log("Price of the items before discount");
for(let i=0;i<items.length;i++)
{
    console.log(items[i]);
}

console.log("Price of the items after discount");
for(let i=0;i<items.length;i++)
    {
        offer=items[i]/10;
        items[i]=items[i]-offer;
    }
    console.log(items);

    // Sum= 485
    // 6_Array1.js:76 Average= 97
    // 6_Array1.js:77 Average marks= 97
    // 6_Array1.js:83 Price of the items before discount
    // 6_Array1.js:86 250
    // 6_Array1.js:86 645
    // 6_Array1.js:86 300
    // 6_Array1.js:86 900
    // 6_Array1.js:86 50
    // 6_Array1.js:89 Price of the items after discount
    // 6_Array1.js:95 (5) [225, 580.5, 270, 810, 45]0: 2251: 580.52: 2703: 8104: 45length: 5[[Prototype]]: Array(0)
    

//Arrays in js
//Push()=add to end
//Pop()=delete from end & return
//toString()=convert array to string
//Array can change the element /Xchange to new Array
//String always crate a new string

let foodItems=["Apple","Banana","lichi","Potato"];
foodItems.push("Cabbage");
console.log("using Push()")
console.log(foodItems);
console.log("using pop()")
console.log(foodItems.pop());
console.log(foodItems.pop());


let deleted_items=foodItems.pop();
console.log("deleted_items",deleted_items);
console.log("foodItems.toString()=",foodItems.toString());

console.log(marks);
console.log("marks.toString()=",marks.toString());

// using Push()
// 6_Array1.js:120 (5) ['Apple', 'Banana', 'lichi', 'Potato', 'Cabbage']
// 6_Array1.js:121 using pop()
// 6_Array1.js:122 Cabbage
// 6_Array1.js:123 Potato
// 6_Array1.js:127 deleted_items lichi
// 6_Array1.js:128 foodItems.toString()= Apple,Banana
// 6_Array1.js:130 (5) [98, 99, 97, 95, 96]
// 6_Array1.js:131 marks.toString()= 98,99,97,95,96

//Arrays in js
//concat():joins multiple arrays & returns result
//unshift():add to start;
//shift():delete form start and return

let num11=[1,2,3,4,5];
let num22=[6,7,8,9,10];

console.log(num11.concat(num22));
let concat_num=num11.concat(num22,num22);
console.log("concat_num=",concat_num);
console.log("using unshift()")
num11.unshift(11);
console.log(num11);
console.log("using shift()");
num11.shift();
console.log(num11);
num11.shift();
console.log(num11);

// (5) [98, 99, 97, 95, 96]
// 6_Array1.js:131 marks.toString()= 98,99,97,95,96
// 6_Array1.js:151 (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]0: 11: 22: 33: 44: 55: 66: 77: 88: 99: 10length: 10[[Prototype]]: Array(0)
// 6_Array1.js:153 concat_num= (15) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 7, 8, 9, 10]
// 6_Array1.js:154 using unshift()
// 6_Array1.js:156 (6) [11, 1, 2, 3, 4, 5]
// 6_Array1.js:157 using shift()
// 6_Array1.js:159 (5) [1, 2, 3, 4, 5]
// 6_Array1.js:161 (4) [2, 3, 4, 5]

//Arrays in slice=
// slice()= return a peice of array
// /slice(start_idx,end_idx);

// splice()=change original array(add,remove,replace)
// splice(start_idx,deleted_count,name of the e;ement ehich u want to add)

let number_array=[1,2,3,4,5,6,7,8,9,10];
console.log(number_array);
console.log("using slice()");
console.log(number_array.slice(1,5));
console.log("using splice function");
//  to add elemnt in array
number_array.splice(1,2,401,501);//here type on console  number_array then it will print 10) [1, 401, 501, 4, 5, 6, 7, 8, 9, 10]
console.log("delete elemennt");
number_array.splice(8,1);//(9) [1, 401, 501, 4, 5, 6, 7, 8, 10]
console.log("To Replace the element");
number_array.splice(0,1,100);  //(9) [100, 401, 501, 4, 5, 6, 7, 8, 10]


//Create an array which stores the companies 
// Remove the first company from an array
// Remover uber and add ola in its place
// Add amazon at the end

let companies=["Bloomberg","Microsft","Uber","Google","IBM","Netflix"]
console.log(companies);
// (6) ['Bloomberg', 'Microsft', 'Uber', 'Google', 'IBM', 'Netflix']
companies.splice(0,1);//We can use shift() also to remove the first element from an array and pop for end delete 
// (5) ['Microsft', 'Uber', 'Google', 'IBM', 'Netflix']
companies.splice(1,1,"Ola");    //['Microsft', 'Ola', 'Google', 'IBM', 'Netflix']
// To add element at the start unshift method used and to add the element at the end push method is used
companies.push("Amazon"); //I tried with the help of splice method but not done by me






