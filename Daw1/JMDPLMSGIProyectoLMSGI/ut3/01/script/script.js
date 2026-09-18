

const btnAplicar=document.getElementById("btnCambiar");
const btnRestaurar=document.getElementById("btnRestaurar");
const t=document.getElementById("titulo");
const parrafos=document.getElementsByClassName("parrafo");





btnAplicar.addEventListener("click",function(){

    btnAplicar.disable=true;
    btnAplicar.enable=true;

    document.body.classList.add("body-estilo");
    t.textContent="Titulo Modificado";
    t.classList.add("titulo-estilo");
    parrafos[0].textContent="El primer parrafo modificado"
    parrafos[0].classList.add("parrafo-base","parrafo-1")
    parrafos[1].textContent="El segundo parrafo modificado"
    parrafos[1].classList.add("parrafo-base","parrafo-2")
    parrafos[2].textContent="El tercer parrafo modificado"
    parrafos[2].classList.add("parrafo-base","parrafo-3")
    
})




function restaurarEstilos(){

    btnAplicar.disable=false;
    btnAplicar.enable=false;

    document.body.classList.remove("body-estilo")
    t.textContent="Titulo Original";
    t.classList.remove("titulo-estilo");

    for (let i=0;i<parrafos.length;i++){
        parrafos[i].textContent="Parrafo orignal "+ (i+1);
        parrafos[i].classList.remove("parrafo-base","parrafo-"+(1+i));
    }

}
btnRestaurar.addEventListener("click",restaurarEstilos)