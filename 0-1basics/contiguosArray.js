let myArray = [9,1,13,-13,-4,-8,5,7,3,4,-19,22];
let sum = 0;
let max  = 0;
let pos1,pos2;
for(var i = 0; i < myArray.length ; i++){
    sum = 0;
    
    for(var j = i ; j< myArray.length ; j++){
     sum=sum+myArray[j];
     if( max < sum){
       max = sum; 
       pos1=i;
       pos2=j;
     }
    }
}
for(var k = pos1; k<=pos2; k++){
    console.log(myArray[k]+' ');
}