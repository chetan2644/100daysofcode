// //  Datatype: arrays basics:

// const mySuperHeroes = [ 'Iron Man' , 'Hulk ', 'Thor', 'Captain America'] ;
// console.log(mySuperHeroes) ;
// console.log(mySuperHeroes[2]) ; 
// console.log(mySuperHeroes.length) ;
// console.log(mySuperHeroes[mySuperHeroes.length-1]);
// console.log('We have '+ mySuperHeroes.length + ' superheroes') ;
// console.log(`We are showing ${5*6} as an template example`) ;


let myArray = ['One' , 'Two' , 'Three'] ;
myArray[1] = 'something' ;
console.log(myArray) ;
myArray.shift();
console.log(myArray) ;
myArray.unshift('one');
console.log(myArray) ;
myArray.unshift('two') ;
console.log(myArray) ;
myArray.pop();
console.log(myArray) ;
myArray.push('four') ;
console.log(myArray) ;