let username = 'chetan@gmail.com' ;
let password  = 'pass@123' ;
 
let userChecker = function(myString){
    if((myString.includes('gmail')) &&(myString.length>4) ){
        return true ;
    }
    else {
        return false ;
    }
}
let passChecker = function(pass){
    if(pass.includes('123')){
        return true ;
    }
    else {
        return false;
    }
}
var temp  = userChecker('gmail.com') ;
console.log(temp) ;
var temp1 = passChecker('temp@123');
console.log(temp1) ;

