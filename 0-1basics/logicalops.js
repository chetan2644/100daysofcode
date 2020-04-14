// &&
// ||

let isVerified = true ;
let isLogin = true ;
let hasPaymentOption  = true ;
let isGuestUser = true ;

if(isVerified && isLogin && hasPaymentOption){
    console.log('Greeting to the user. Hey we were expecting you!!!')
    console.log('Allow access to the course') ;

}
else if(isGuestUser){
    console.log('Allow free preveiws!');
    console.log('You neeed to be logged in order to access the full course') ;
}