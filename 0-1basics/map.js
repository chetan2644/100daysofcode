var map1 = new Map([[1 , 2], [2 ,3 ] ,[4, 5]]); 
  
// console.log("Map1"); 
// console.log(map1); 
// console.log(map1.get(2)) ;
var john = {
    name: 'I am John' ,
    age: 24 , 
    isActive: true 
}
// console.log(john) ;
var mary = {
    name: 'I am marry' ,
    age:23 ,
    isActive: false 
}
var sam = {
    name: 'I am sam' ,
    age: 29 ,
    isActive: false
}
// console.log(mary + john +sam) ;
let users = new Map();
// console.log(typeof users) ;
users.set('john',john);
users.set('mary',mary);
users.set('sam',sam);
// console.log(users.get('john')) ;
// console.log(users.get('mary')) ;
// console.log(users.get('sam')) ;
// console.log(users) ;
// console.log(users.size);
// console.log(users.keys()) ;
// console.log(users.values()) ;
//for of loop for maps

for(const key of users.keys()){
    console.log(key) ;
    
}
for(const val of users.values())
{
    console.log(val) ;
}
for(const [key,value] of users.entries()){
    console.log(key+' = '+ value.name ) ;
 }
console.log('Example of forEach loop' ) ;
 users.forEach((value,key) => console.log(key +' = '+value.name)) ;

 var arrofArr = [['one', 1], ['two' , 2]] ;
 var newMap = new Map(arrofArr) ;
 console.log(newMap) ;