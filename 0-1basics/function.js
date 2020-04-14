console.log('John') ;

let sayHello = function(){
   
    console.log('Hey Johny') ;
}
sayHello();

let myFunction = function(name){
    console.log(`Greeting message for ${name}`) ;
    console.log(`Hey ${name}`) ;
}
myFunction('Chetan') ;

let firstName = 'chetan' ;
let lastName = 'gupta' ;

let fullName = function(firstName, lastName){
    console.log(`Hey ${firstName} ${lastName}`) ;
 }
 fullName(firstName, lastName);

 let myAdder = function(num1, num2){
     let added = num1 + num2 ;
     return added;
 }

 let sum  = myAdder(5,6);
 console.log(sum) ;

 let myMultiplier = function(num1, num2){
     return num1 * num2 ;
 }
 console.log(myMultiplier(3, 4)) ;
 let defFunction = function( name = 'chetan' , course = 0){
     console.log('Hey '+ name+'. '+'Your course count is:'+' '+course);

 }
 defFunction();
 defFunction('kartikay', 24) ;
