console.log('5' - 5) ;//prints 0 as a matter of coercion
const adder = true + 5 ;
console.log(adder) ;//prints 6 as a matter of coercion

const loginDetails = []
// logic for getting details from DB
const loginId = loginDetails[0] ;
if(loginId !== undefined){
    console.log('Allow to login') ;
}
else{
    console.log('Restrict access') ;
}