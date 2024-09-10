for(let i=1;i<=5;i++)
{
    console.log("Hello");
}

//--------------------------------------------

let sum=0;
for(let i=1;i<=5;i++)
{
    sum=sum+i;
}
console.log("Sum=",sum);
console.log("Loop has ended");

//---------------------------------------------

let i=1;
while(i<=5)
{
    console.log("i=",i);
    i++;
}

//-----------------------------------------

// for-of loop
// which is used with array and String

let str1="Sonal";
for(let i of str1)  //iterator->character
{
    console.log(i);
}

//------------------------------------------

//for-of loop

let str2=" Sonal";
let size2=0;
for(let i of str2)
{
    console.log("i=",i);
    size2++;
}
console.log("Size of the string=",size2);
console.log("str2.length=",str2.length);
console.log("str2[0]=",str2[0]);
console.log("str2[4]=",str2[4]);
console.log("str2 in uppercase=",str2.toUpperCase());
console.log("str2 in lowercase=",str2.toLowerCase());
console.log("To remove whitespaces=",str2.trim());//Which remove the space at start and end of the string
console.log("slicing=");
console.log(str2.slice(1,3));
console.log(str2.slice(3,4));
console.log("concatenation in string",str1.concat(str2));
console.log("replace=",str2.replace("l","m"));
console.log("str2.charAt(2)",str2.charAt(2));
console.log("str2.charAt(3)",str2.charAt(3));
let str3="Bendhale";
let result=str2+" "+str3;
console.log("str3 with+ operator=",result);


//-------------------------------------------------

// for in loop =>which is used when there is iteration with the object "in" keyword

let student={
    Name:"Sonal Bendhale",
    marks:"90.73",
    is_pass:true,
};

for(let i in student)
{
    console.log("key=",i,"value=",student[i]);
}

//--------------------------------------------------
// Template Literal in JS
// A way to have embedded expression in strings 
// `this is a template literal`
// string interpolation
// To create strings by doing substitution of placeholder
// `string text ${expression}string text`
let specialString=`This is special literal`;
console.log(specialString);
console.log(typeof specialString);
console.log(`addition=${20+30}`);
console.log("Hello\n World");

//create a username
let fullname=prompt("Enter a fullname");

let username="@"+fullname+fullname.length;
console.log("username=",username);

// 55_loop2.js:3 Hello
// 5_loop2.js:13 Sum= 15
// 5_loop2.js:14 Loop has ended
// 5_loop2.js:21 i= 1
// 5_loop2.js:21 i= 2
// 5_loop2.js:21 i= 3
// 5_loop2.js:21 i= 4
// 5_loop2.js:21 i= 5
// 5_loop2.js:33 S
// 5_loop2.js:33 o
// 5_loop2.js:33 n
// 5_loop2.js:33 a
// 5_loop2.js:33 l
// 5_loop2.js:44 i=  
// 5_loop2.js:44 i= S
// 5_loop2.js:44 i= o
// 5_loop2.js:44 i= n
// 5_loop2.js:44 i= a
// 5_loop2.js:44 i= l
// 5_loop2.js:47 Size of the string= 6
// 5_loop2.js:48 str2.length= 6
// 5_loop2.js:49 str2[0]=  
// 5_loop2.js:50 str2[4]= a
// 5_loop2.js:51 str2 in uppercase=  SONAL
// 5_loop2.js:52 str2 in lowercase=  sonal
// 5_loop2.js:53 To remove whitespaces= Sonal
// 5_loop2.js:54 slicing=
// 5_loop2.js:55 So
// 5_loop2.js:56 n
// 5_loop2.js:57 concatenation in string Sonal Sonal
// 5_loop2.js:58 replace=  Sonam
// 5_loop2.js:59 str2.charAt(2) o
// 5_loop2.js:60 str2.charAt(3) n
// 5_loop2.js:63 str3 with+ operator=  Sonal Bendhale
// 5_loop2.js:78 key= Name value= Sonal Bendhale
// 5_loop2.js:78 key= marks value= 90.73
// 5_loop2.js:78 key= is_pass value= true
// 5_loop2.js:89 This is special literal
// 5_loop2.js:90 string
// 5_loop2.js:91 addition=50
// 5_loop2.js:92 Hello
//  World
// 5_loop2.js:98 username= @sonalBendhale13