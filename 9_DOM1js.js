/* DOM Manipulation
insert element
1.let el=document.createElement("div");
2.node.append(el)=adds at the end of the node(inside)
3.node.prepend(el)=adds at the start of the node(inside)
4.node.before(el)=adds before the node(outside)
5.node.after(el)=adds after the node(outside)

Delete the element=
node.remove()=Remove the node */
let newBtn=document.createElement("button");
console.log(newBtn);
newBtn.innerText="Click me!";

let div=document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
div.after(newBtn);
//even yo can put the butoton after para too
let p=document.querySelector("p");
p.after(newBtn);

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i>Hi! This is the new heading</i>";

document.querySelector("body").prepend(newHeading);

// let para=document.querySelector("p");
// para.remove();      //removed para

let newBtn2=document.createElement("button");
newBtn2.innerText="Move";
console.log(newBtn2);
newBtn2.style.backgroundColor="red";
newBtn2.style.color="white";
let h1=document.querySelector("h1");
h1.before(newBtn2);



