
const boton=document.getElementById("boton");
const imagen=document.getElementById("imagen");

boton.addEventListener("click",function(){
    imagen.classList.toggle("oculto");
    if(imagen.classList.contains("oculto")){
        boton.textContent="Mostrar";
    }
    else{
        boton.textContent="Ocultar";
    }
});


//display:none