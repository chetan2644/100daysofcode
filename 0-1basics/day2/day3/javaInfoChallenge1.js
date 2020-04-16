function toShowAlert(){
  alert('Hi this is comleted');
}
function toAddAdmin(){
  let name = 'John';
  let admin = name;
  alert(admin);
}
function nameThePlanet(){
  let earth = 'This is our planet';
}
function toReadName(){
  let name = window.prompt('Enter your name');
  console.log(name);
}
function getJsName(){
  let name = 'Ecmascript';
  if(name ==='Ecmascript'){
    console.log('Right');
  }
  else{
    console.log('You don\'t know it. Ecmascript!');
  }
}
function convertIntoTernary(){
  let a = 4 ,b = 6;
  let result = a + b < 12 ? 'Yes' : 'No';
}
function convertTernary(){
  let message;
  let login = '';
  message = login === 'Employee' ? 'Hello!': login === 'Director' ? 'Greetings!' : '';
  console.log(message);
}
function checkAge(){
  let age;
  if(age <= 90 && age >= 14){
    console.log('in the correct age group');
  }
  else{
    console.log('Error');
  }
}