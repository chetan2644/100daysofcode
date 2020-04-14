const convertToRs = (dollar)=>{
 if(typeof dollar === 'number'){
   return  dollar * 64 ;

} 
else {
    throw Error('Amount needs to be in number') ;
}
}
try{
    console.log(convertToRs('ten')) ;
} catch(error){
console.log(error) ;
}

console.log('i will not run if the program freezes') ;
