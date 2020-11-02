/* Add your JavaScript to this file */
window.onload=function(){
const btn =document.getElementsByTagName("button")[0];
const email= document.getElementById("email");
var form = document.getElementsByClassName("form-group");


btn.addEventListener("click",clicking);
btn.preventDefault()



function clicking(){
   let messages=document.getElementsByTagName("message")[0];
   if(email.value==null){

    messages.innerHTML=("Please enter a valid email address")
   }
   else{
       messages.innerHTML=("Thank you! Your email address ${name} has been added to our mailings list")
   }

    clicking.preventDefault()

    
}
}
