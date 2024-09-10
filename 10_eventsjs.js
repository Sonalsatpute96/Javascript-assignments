/*The changes in the state of the object is known as event
=>Event is fired to notify "intresting changes "that may affect code execution

few evenrt eg
1.Mouse click=(click,double click etc)
2.Keyboard event=(keypress ,keyup ,keydown)
3.form event=(submit etc)
4.Print event & many more.
-------------------------------------------------------------------------------------
Event handling in js
node.event=()=>{
    //handle here    
}

-----------------------------------------------------------------------------------*/
/* There are the 3 types to handle event in js
1.inline handle i.e is in javascript
2.Js handle i.e event is handle in js file
3.Event listner*/


let button1=document.querySelector("#btn1");

button1.onclick=(evt)=>{
    console.log("Button was clicked");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
};

let div=document.querySelector("div");
div.onmouseover=()=>{
    console.log("You are inside a div");
    // div.style.fontSize="20px";
};

// You are inside a div
// 10_eventsjs.js:23 Button was clicked
// 10_eventsjs.js:24 PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}isTrusted: truealtKey: falsealtitudeAngle: 1.5707963267948966azimuthAngle: 0bubbles: truebutton: 0buttons: 0cancelBubble: falsecancelable: trueclientX: 37clientY: 8composed: truectrlKey: falsecurrentTarget: nulldefaultPrevented: falsedetail: 1eventPhase: 0fromElement: nullheight: 1isPrimary: falselayerX: 37layerY: 8metaKey: falsemovementX: 0movementY: 0offsetX: 27offsetY: -1pageX: 37pageY: 8persistentDeviceId: 0pointerId: 1pointerType: "mouse"pressure: 0relatedTarget: nullreturnValue: truescreenX: 41screenY: 80shiftKey: falsesourceCapabilities: InputDeviceCapabilities {firesTouchEvents: false}srcElement: button#btn1tangentialPressure: 0target: button#btn1tiltX: 0tiltY: 0timeStamp: 3518.900000035763toElement: nulltwist: 0type: "click"view: Window {window: Window, self: Window, document: document, name: '', location: Location, …}which: 1width: 1x: 37y: 8[[Prototype]]: PointerEvent
// 10_eventsjs.js:25 click
// 10_eventsjs.js:26 <button id=​"btn1">​Click me!​</button>​
// 510_eventsjs.js:31 You are inside a div
// // --------------------------------------------------------------------------------------
/*Event Object=
-It is special object that has details about the event
=all event handler have access to the event object's properties and methods

node.event=(evt)=>{
    //handle here
}

evt.target,evt.type,evt.clientX,evt.clientY  
mentioned the eg above */

// ----------------------------------------------------------------------------------
/* Event listners-
node.addEventListener(event,callback)
node.removeEventListener(Event,callabck)

Note=The callback reference should be same to remove
callback is fuction as parameter and also called as a "Handler".

-------------------------------------------------------------------------------------*/
let button2=document.querySelector("#btn2");

button2.addEventListener("click",()=>{
    console.log("Button clicked again by handler 1");
});

const handler2=()=>{
    console.log("Button clicked again by handler 2");
};

//to remove the event we need to define a handler i.e function seperately and then pass as a arguments
button2.addEventListener("click",handler2);

button2.addEventListener("click",()=>{
    console.log("Button clicked again by handler 3");
});

button2.addEventListener("click",()=>{
    console.log("Button clicked again by hanler 4");
});

button2.removeEventListener("click",handler2);

// Button clicked again by handler 1
// 10_eventsjs.js:77 Button clicked again by handler 3
// 10_eventsjs.js:81 Button clicked again by hanler 4


//Create a toggle button that changes the screen to dark mode when clicked to a light mode when clicked again
//toogling is light to dark then dark to light 

let modebtn=document.querySelector("#mode");
let currMode="light";
modebtn.addEventListener("click",()=>{
    if(currMode==="light")
    {
        currMode="dark";
        document.querySelector("body").style.backgroundColor="black";
    }
    else
    {
        currMode="light";
        document.querySelector("body").style.backgroundColor="white";
    }

})