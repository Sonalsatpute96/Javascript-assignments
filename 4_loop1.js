let age=12;
if(age>=18) 
{
    console.log("You can vote");
}
else
{
    console.log("You cannot vote");
}

let mode;
let color;
mode=prompt("Enter mode");
if(mode=="Dark")
{
    color="Black";
}
if(mode=="Bright")
{
    color="White";
}
console.log(color);

//------------------------------------------------------------------------

let mode1="Dark";
let color1;
if(mode1=="Dark")
{
    color1="Black";
}
else{
    color1="White";
}
console.log(color1)

//-------------------------------------------------------------------------

let num=7;
if(num%7==0)
{
    console.log("No is divisible by 7");
}
else{
    console.log("No is not divisible by 7");
}

//---------------------------------------------------------------

let mode2="Bright";
let color2;
if(mode2=="Dark")
{
    color2="Black";
}else if(mode2=="Blue")
{
    color2="Blue";
}else if(mode2=="Pink")
{
    color2="Pink";
}else if(mode2=="Bright")
{
    color2="White";
}else
{
    color2="Need to check";
}

console.log(color2);

//------------------------------------------------------------
let Age=25;
let result=Age>=18 ?"Adult":"Young";
console.log(result);

//------------------------------------------------------------

let num2=25;
if(num2%5==0)
{
    console.log("No is divisible by 5");
}
else
{
    console.log("No is not divisible by 5");
 
}

//------------------------------------------------------------------
let marks=prompt("Enter your marks");
let grade;

if(marks>=90 && marks<=100)
{
    grade="A";
}else if(marks>=70 && marks<=89)
{
    grade="B";
}else if(marks>=60 && marks<=69)
{
    grade="C";
}else if(marks>=50 && marks<=59)
{
    grade="D";
}else if(marks>=0 && marks<=49)
{
    grade="Fail";
}

console.log("Your grade according to your marks is",grade);
