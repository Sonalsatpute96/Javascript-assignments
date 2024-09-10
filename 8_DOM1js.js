//3 pillars of web development are HTML(structure),CSS(Style),Javascript(Logic)
//script tag is used to connect html with js and mention script tag before closing of the body tag
//cs connection with html using link tag in head tag

//Window-The window object represents an open window in the browser.It is the browser's object (not javascripts's) & automticaaly created by the browser.
//It is global object with lots of properties & methods.

console.log("Hello");
window.console.log("Hello2")

//What is DOM
//when a webpage is loaded,the browser craetes a Document Object Model(DOM) of the page.
//window->document->html->html divides in two parts as 1)head->meta,meta,title,link 2)body->div ,script
//again div may contain img,h1,p,div

// Hello
// 8_DOM1js.js:9 Hello2
// win
// VM22:1 Uncaught ReferenceError: win is not defined
//     at <anonymous>:1:1
// (anonymous) @ VM22:1
// window
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// window.do
// undefined
// window.document
// #document (file:///C:/Users/Swapnil/Desktop/Computer/Javascript/8_DOM1.html)
// console.dir(window.document)
/*VM190:1 #documentlocation: Location {ancestorOrigins: DOMStringList, href: 'file:///C:/Users/Swapnil/Desktop/Computer/Javascript/8_DOM1.html', origin: 'file://', protocol: 'file:', host: '', …}URL: "file:///C:/Users/Swapnil/Desktop/Computer/Javascript/8_DOM1.html"activeElement: bodyadoptedStyleSheets: Proxy(Array) {}alinkColor: ""all: HTMLAllCollection(12) [html, head, meta, meta, title, link, body, h1, h4, p, button, script, viewport: meta]anchors: HTMLCollection []applets: HTMLCollection []baseURI: "file:///C:/Users/Swapnil/Desktop/Computer/Javascript/8_DOM1.html"bgColor: ""body: bodycharacterSet: "UTF-8"charset: "UTF-8"childElementCount: 1childNodes: NodeList(2) [<!DOCTYPE html>, html]children: HTMLCollection [html]compatMode: "CSS1Compat"contentType: "text/html"cookie: ""currentScript: nulldefaultView: Window {window: Window, self: Window, document: document, name: '', location: Location, …}designMode: "off"dir: ""doctype: <!DOCTYPE html>documentElement: htmldocumentURI: "file:///C:/Users/Swapnil/Desktop/Computer/Javascript/8_DOM1.html"domain: ""embeds: HTMLCollection []featurePolicy: FeaturePolicy {}fgColor: ""firstChild: <!DOCTYPE html>firstElementChild: htmlfonts: FontFaceSet {onloading: null, onloadingdone: null, onloadingerror: null, ready: Promise, status: 'loaded', …}forms: HTMLCollection []fragmentDirective: FragmentDirective {}fullscreen: falsefullscreenElement: nullfullscreenEnabled: truehead: headhidden: falseimages: HTMLCollection []implementation: DOMImplementation {}inputEncoding: "UTF-8"isConnected: truelastChild: htmllastElementChild: htmllastModified: "08/28/2024 09:23:30"linkColor: ""links: HTMLCollection []nextSibling: nullnodeName: "#document"nodeType: 9nodeValue: nullonabort: nullonanimationend: nullonanimationiteration: nullonanimationstart: nullonauxclick: nullonbeforecopy: nullonbeforecut: nullonbeforeinput: nullonbeforematch: nullonbeforepaste: nullonbeforetoggle: nullonbeforexrselect: nullonblur: nulloncancel: nulloncanplay: nulloncanplaythrough: nullonchange: nullonclick: nullonclose: nulloncontentvisibilityautostatechange: nulloncontextlost: nulloncontextmenu: nulloncontextrestored: nulloncopy: nulloncuechange: nulloncut: nullondblclick: nullondrag: nullondragend: nullondragenter: nullondragleave: nullondragover: nullondragstart: nullondrop: nullondurationchange: nullonemptied: nullonended: nullonerror: nullonfocus: nullonformdata: nullonfreeze: nullonfullscreenchange: nullonfullscreenerror: nullongotpointercapture: nulloninput: nulloninvalid: nullonkeydown: nullonkeypress: nullonkeyup: nullonload: nullonloadeddata: nullonloadedmetadata: nullonloadstart: nullonlostpointercapture: nullonmousedown: nullonmouseenter: nullonmouseleave: nullonmousemove: nullonmouseout: nullonmouseover: nullonmouseup: nullonmousewheel: nullonpaste: nullonpause: nullonplay: nullonplaying: nullonpointercancel: nullonpointerdown: nullonpointerenter: nullonpointerleave: nullonpointerlockchange: nullonpointerlockerror: nullonpointermove: nullonpointerout: nullonpointerover: nullonpointerrawupdate: nullonpointerup: nullonprerenderingchange: nullonprogress: nullonratechange: nullonreadystatechange: nullonreset: nullonresize: nullonresume: nullonscroll: nullonscrollend: nullonsearch: nullonsecuritypolicyviolation: nullonseeked: nullonseeking: nullonselect: nullonselectionchange: nullonselectstart: nullonslotchange: nullonstalled: nullonsubmit: nullonsuspend: nullontimeupdate: nullontoggle: nullontransitioncancel: nullontransitionend: nullontransitionrun: nullontransitionstart: nullonvisibilitychange: nullonvolumechange: nullonwaiting: nullonwebkitanimationend: nullonwebkitanimationiteration: nullonwebkitanimationstart: nullonwebkitfullscreenchange: nullonwebkitfullscreenerror: nullonwebkittransitionend: nullonwheel: nullownerDocument: nullparentElement: nullparentNode: nullpictureInPictureElement: nullpictureInPictureEnabled: trueplugins: HTMLCollection []pointerLockElement: nullprerendering: falsepreviousSibling: nullreadyState: "complete"referrer: ""rootElement: nullscripts: HTMLCollection [script]scrollingElement: htmlstyleSheets: StyleSheetList {0: CSSStyleSheet, length: 1}textContent: nulltimeline: DocumentTimeline {currentTime: 366197.794, duration: null}title: "Document"visibilityState: "visible"vlinkColor: ""wasDiscarded: falsewebkitCurrentFullScreenElement: nullwebkitFullscreenElement: nullwebkitFullscreenEnabled: truewebkitHidden: falsewebkitIsFullScreen: falsewebkitVisibilityState: "visible"xmlEncoding: nullxmlStandalone: falsexmlVersion: null[[Prototype]]: HTMLDocument */

//console.log=>print the msg
//console.dir which gives the document in which there are the various methods and properties are there

console.dir(document);
console.log(document.body);

// #document
// 8_DOM1js.js:35 <body>​<h1>​DOM Demo​</h1>​<h4>​Topic1:Starter code​</h4>​<p>​Lets learn the dom concept in detail​</p>​<button>​Click me!​</button>​<script src=​"8_DOM1js.js">​</script>​</body>​

console.dir(document.body);
// body
// aLink
// : 
// ""
// accessKey
// : 
// ""
// ariaAtomic
// : 
// null
// ariaAutoComplete
// : 
// null
// ariaBrailleLabel
// : 
// null
// ariaBrailleRoleDescription
// : 
// null
// ariaBusy
// : 

console.log(document.body.childNodes);
// NodeList(10) [text, h1, text, h4, text, p, text, button, text, script]

console.log(document.body.childNodes[1]);       //Square brackets are must.
/* <h1>DOM Demo</h1> */

document.body.style.backgroundColor="Yellow";
//Background color changed to green for output

document.body.childNodes[3].innerText="HELLO";
//the text replaced with "HELLO"

//DOM manipulation
/* Selecting with id
document.getElementById("Id_Name");
Selecting with class
document.getElementsByClassName("ClassName");
selecting with tag
document.getElementByTagName("p");*/

let id11=document.getElementById("id1");
console.log(id11);
console.dir(id11);
/* <h1 id="id1">DOM Demo</h1> */
// h1#id1=>
// accessKey
// : 
// ""
// align
// : 
// ""
// ariaAtomic
// : 
// null
// ariaAutoComplete
// : 
// null
// ariaBrailleLabel
// : 
// null
// ariaBrailleRoleDescription
// : 
// null
// ariaBusy
// : 
// null
// ariaChecked
// : 
// null
// ariaColCount
// : 
// null


let class11=document.getElementsByClassName("class1");
console.log(class11);
// HTMLCollection(2) [h4.class1, p.class1]
console.dir(class11);
console.log(class11);

 
let button11=document.getElementsByTagName("button");
console.log(button11);
// HTMLCollection [button]
console.dir(button11);

/*Dom manipulation
Querry selector
document.querySelector("id | class | tag");
//return first element

document.querySelectorAll("id | class | tag")
//return all node list */
let p1=document.querySelector("p");//First Elemet
console.log(p1);

let p2=document.querySelectorAll("p");//all elements
console.log(p2);

/* DOM manipulation properties
1.tagName:Return tag for element node
2.innerText:return text content of the element and all its children
3.innerHTML:return the plain text or HTML content in the elements
4.textContent:return texual content even for the hidden elements.*/

//know the concept of the parent node child node and the sibling for the HTML tags
//even first child,last child,div.children

//DOM tree consist ->tree nodes,comment,Elements
//we are focussing on elemets
let div1=document.querySelector("div");//IMP *** To perform any operation u need to first access that element by using querySelector fun and then operations.
console.log(div1.innerText);
console.log(div1.innerHTML);

// NodeList(2) [p.class1, p]
// 8_DOM1js.js:154 Fruits
// Mango
// Orange
// Lichi
// 8_DOM1js.js:155 
//         <ul>
//             <h3>Fruits</h3>
//             <li>Mango</li>
//             <li>Orange</li>
//             <li>Lichi</li>
//         </ul>

//div1.innerText="Vegetables";      ****imp it will update 

let hello1=document.querySelector("h2");
//console.dir(hello1.innerText);
hello1.innerText=hello1.innerText+"Hello everyone";

// let divs=document.querySelectorAll(".box");
// divs[0].innerText="Hello";  //doubt not able to resolve it

//DOM Manipulation
/* Attributes
getAttribute(attr)->To get the attribute value 
setAttribute(attr,value)->To set the attribute value

style
node.style*/

let para=document.querySelector("p");
console.log(para.getAttribute("class"));
//class1 output for the first para
console.log(para.setAttribute("class","newClass"));

console.log(para.style);
// CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}
para.style.backgroundColor="pink";
para.style.fontSize="25px";
para.innerText="Lets learn DOM concept more deeper";
para.style.visibility="hidden";

//on console
/* <p class="newClass">Lets learn the dom concept in detail</p> */








