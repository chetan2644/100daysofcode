function submit(){
  if(document.getElementById('pwd').value === 'admin')
  alert('Log in');
  else alert('error in pwd');
  }
  function getOptions(){
   temp = document.getElementById('cars').value;
   
  if(temp ==='others'){
  document.getElementById("show").className = "show";
  document.getElementById("showText").innerHTML = 'You dont have acess';
  }
  else {
  document.getElementById("show").className = " ";
  document.getElementById("showText").innerHTML = " ";
  }
  }
  function checkPassword(){
  
  }