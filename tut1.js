console.log("welcome to tutorila.14");
let element = document.getElementById('first');
//element.style.color= 'red';
//element.innerText= 'harry is a goodboy'
let sel=document.querySelector('div');
let elem=document.getElementsByClassName('child')

console.log(elem[0])
console.log(elem[1])
let elemes= document.getElementsByClassName('container')
console.log(elemes[0].getElementsByClassName('child'))
let e = document.getElementsByTagName('div')
Array.from(e).forEach(element=>{
    console.log(element);
    element.style.color='blue';
})
    

