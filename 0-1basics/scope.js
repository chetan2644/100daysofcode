// // difference between let and var
// let iamGlobal = 'someValue' ;
// if(true){
//     let iamLocal = 'someMoreValue' ;
//     console.log(iamGlobal) ;
//     console.log(iamLocal) ;
// }
// // console.log(iamLocal) ;
// console.log(iamGlobal) ;

// Kings problem
let king = 'John' ;
if(true){
    let king = 'Sam' ;
    console.log(king);
    if(true){
        let king = 'Ram' ;
        console.log(king);
    }
}
if(true){
    console.log(king) ;
}
