console.log("hi")
let element=document.querySelector('.child');
element.innerHTML="<b>Hey i m here</b>"

let child = document.querySelector('div.container');

console.log(child.childElementCount);
console.log(child.firstChild);
console.log(child.firstElementChild);
console.log(child.firstElementChild.nextElementSibling);
let nodal= child.childNodes[1].nodeName;
console.log(child.childNodes);

console.log(nodal);