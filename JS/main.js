const menuMobil = document.querySelector(".menu-mobil");
const botonMenu = document.querySelector(".menu-boton"); 
const menuMobilItem = document.querySelector(".menu-mobil_item");
const habilidadesTools = document.querySelector(".habilidades-tools"); 

var botonValue = false; 

botonMenu.addEventListener("click", ()=>{
   if(botonValue){ 
    menuMobil.style.animationName = "menu2";
    botonValue = false;  
   }else{
      menuMobil.style.animationName = "menu1";
      botonValue = true; 
   }
})

menuMobilItem.addEventListener("click", ()=>{   
    menuMobil.style.animationName = "menu2";
    botonValue = false;  
})

addEventListener("scroll", () => {
    let altura = habilidadesTools.offsetTop - 400; 
    if(scrollY > altura)habilidadesTools.style.animationName = "tools";     
  })

var typed = new Typed('.prueba-typed', {
  strings: ["Soy el personal creativo que estas buscando."],
  typeSpeed: 30,
  loop: true,
  fadeOut: true,
});
