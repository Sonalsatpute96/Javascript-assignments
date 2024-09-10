// Arithmatic Operator

let a=5;
let b=2;
console.log("a=5 ,b=2");
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);

// a=5 ,b=2
// 2_Operator.js:6 a+b= 7
// 2_Operator.js:7 a-b= 3
// 2_Operator.js:8 a*b= 10
// 2_Operator.js:9 a/b= 2.5
// 2_Operator.js:10 a%b= 1
// 2_Operator.js:11 a**b= 25
// 2_Operator.html:38 Live reload enabled.

// unary operator

console.log("a++=",a++);
console.log("a=",a);
console.log("b--=",b--);
console.log("b=",b);

let c=3;
let d=5;
console.log("c=3,d=5");
console.log("++c=",++c);
console.log("c=",c);
console.log("--d=",--d);
console.log("d=",d);

// comparision operator=
console.log("c==d",c==d);
console.log("c!=d",c!=d);

let e="4";
console.log("c==e",c==e); //here e string is converted to number and then compare..when we want to compare type to then use ===
console.log("c===e",c===e);
console.log("c!==e",c!==e);//true

// a++= 5
// 2_Operator.js:25 a= 6
// 2_Operator.js:26 b--= 2
// 2_Operator.js:27 b= 1
// 2_Operator.js:31 c=3,d=5
// 2_Operator.js:32 ++c= 4
// 2_Operator.js:33 c= 4
// 2_Operator.js:34 --d= 4
// 2_Operator.js:35 d= 4
// 2_Operator.js:38 c==d true
// 2_Operator.js:39 c!=d false
// 2_Operator.js:42 c==e true
// 2_Operator.js:43 c===e false

console.log("c>d",c>d);
console.log("c>=d",c>=d);
console.log("c<d",c<d);
console.log("c<=d",c<=d);

// c>d false
// 2_Operator.js:60 c>=d true
// 2_Operator.js:61 c<d false
// 2_Operator.js:62 c<=d true

// logical operator
console.log("6>5 && 4<10",6>5 && 4<10);
console.log("5==4 ||10>5",5==4 ||10>5);
console.log("!(5==5)",!(5==5));

// 6>5 && 4<10 true
// 2_Operator.js:72 5==4 ||10>5 true
// 2_Operator.js:73 !(5==5) false
