const menuMobil = document.querySelector(".menu-mobil");
const botonMenu = document.querySelector(".menu-boton"); 
const menuMobilItem = document.querySelector(".menu-mobil_item");

var botonValue = false; 

botonMenu.addEventListener("click", ()=>
{

   if(botonValue == false) 
   {
    menuMobil.style.animationName = "menu1";
    botonValue = true;    
   }  
   else{
    menuMobil.style.animationName = "menu2";
    botonValue = false;      
   }

})

menuMobilItem.addEventListener("click", ()=>{
   
    menuMobil.style.animationName = "menu2";
    botonValue = false;  


})


