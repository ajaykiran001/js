//-----------------Frirst Passwordbox--------------------------------------------------------------------------------
let checkbox1 = document.getElementById('checkbox1');
function checkboxFunction(){
   
   if(checkbox1.checked == true){
      document.getElementById('passwordValue1').setAttribute("type","text")
   }
   else{
      document.getElementById('passwordValue1').setAttribute("type","password")
   }
}


//-----------------Second passwordbox--------------------------------------------------------------------------------


let password2 = document.getElementById('inputPassword2').value;
let passwordDiv = document.getElementById('passwordDiv');
let pswdCptlLtr = /[A-Z]/

function passwordValidation(){
   if(password2.length < 8){
      console.log(password2)
      document.getElementById('passwordHelp').innerHTML = "Be at least 8 characters"
      document.getElementById('passwordHelp').style.color = 'red'
   }
   if(pswdCptlLtr.test(password2)){
      document.getElementById('passwordHelp').innerHTML = document.getElementById('passwordHelp').innerHTML + "Include at least one uppercase letter"
      document.getElementById('passwordHelp').style.color = 'red'
   }

}
// Include at least one number Include at least one symbol 
//------------------Fruits Execise-----------------------------------------------------------------------------------
let fruitsArray = ['Banana','Mango','Papaya','Pineapple','Guava','Apple'];

function addNewFruit(){

   let fruitsUlId = document.getElementById('fruitsUl')
   let newFruitLi = document.createElement('li')
   newFruitLi.innerHTML = document.getElementById('fruitsInput').value
   newFruitLi.className = "list-group-item"
   fruitsUlId.appendChild(newFruitLi)
   fruitsArray.push(document.getElementById('fruitsInput').value)
   console.log(fruitsArray)
   document.getElementById('fruitsInput').value = ''
}
