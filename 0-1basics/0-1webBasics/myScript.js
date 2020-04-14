console.log(document.title) ;
document.title = 'I got changed' ;

const myPElements = document.querySelectorAll('p' ) ;
myPElements.textContent = 'I am being changed using js' ;
myPElements.forEach(function(p){
    p.textContent = 'I am changed using loop in js';
}
)
const myNewPara = document.createElement('p') ;
myNewPara.textContent = 'I was added via JS' ;

document.querySelector('body').appendChild(myNewPara) ;
document.querySelector('button').addEventListener('click',(event)=>{
    event.target.textContent = 'I was clicked' ;
})

//track input form

document.querySelector('#myform').addEventListener('change',()=>{
    console.log(event.target.value) ;
}) ;