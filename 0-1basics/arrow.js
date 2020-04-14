// Arrow functions tutorial
const sayHello = function(name){
    return "hey there , "+ name + "!" ;
}
console.log(sayHello("sammy") );

const sayBye = (name) =>{
    return `Bye, ${name}` ;
}
console.log(sayBye('Chetan')) ;

const whatSupp = (name)=>  `hey ${name}, Whatsup!!` ;
console.log(whatSupp('Lucky')) ;

const cameras  = {
    price: 500 ,
    weight: 2000 , 
    myDes: ()=> 'this is canon camera is of '+ this.price + ' $'
    ,
}
console.log(cameras.myDes()) ;
