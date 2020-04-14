let myArray =[1,2,3,4,5,6];
let number = 6;
for(var i = 0 ; i < myArray.length-1 ; i++){
    for(var j = 1 ; j < myArray.length ; j++){
        if(number == myArray[i] + myArray[j]){
            console.log(myArray[i] + ' ' + myArray[j]) ;
        }
    }
}