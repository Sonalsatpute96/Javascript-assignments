/* Classes in javascript
class is program code template for creating an objects.
thos eobjects will have some static variables & some behaviour (funcions)inside it.
 syntax=

 class Class_name{
    constructor(){
    
    }
    myMethod(){
    }
 }

 let objName=new Class_name();
 
 Constructor in js
 cunstructer() is the method
 1.automatically invoked by new
 2.initialized object
 */

 class ToyotaCar
 {
    constructor(brand,milege)
    {
        console.log("Creating a new object");
        this.brand=brand;
        this.milege=milege;
    }
    start()
    {
        console.log("car started!");
    }

    stop()
    {
        console.log("Car stopped");
    }
 }

 let car1=new ToyotaCar("Fortuner","10");
 let car2=new ToyotaCar("lexus","12");


 /* Inheritance in js
 Inheritance is passing down properties & methods from parent class to child(derived) class.

 class Parent{
 
 }

 class child extends Parent{
 
 }

 if child & parent have the same method,child's method will be used.(Method overriding)
 */

 class Person{
    constructor()
    {
        this.species="Homo sapiens";
    }
    eat()
    {
        console.log("Eat");
    }

    sleep()
    {
        console.log("Sleep");
    }
 }

 class Engineer extends Person{
    work()
    {
        console.log("Problem solving,build solution");
    }
 }

 class Doctor extends Person{
    work()
    {
        console.log("Treat patient");
    }
 }

 let p1=new Person();

 let e1=new Engineer();



// undefined
// p1
// Person {species: 'Homo sapiens'}species: "Homo sapiens"[[Prototype]]: Objectconstructor: class Personeat: ƒ eat()sleep: ƒ sleep()[[Prototype]]: Object

/* super keyword
The super keyword is used to call the constructor of its parent class to access the parent's
properties and methods

super(args)//to call parents constructor
super.parentMethod(args)
*/
