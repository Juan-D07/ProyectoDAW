const btnCrear = document.getElementById("enviar");
const body = document.getElementById("b");
const btnTema = document.getElementById("tema");
const btnBorrar = document.getElementById("borrar");
const inputTitulo = document.getElementById("titulo");
const inputDescr = document.getElementById("descr");
const divTarjetas = document.getElementById("tarjetas-display");
const errorDiv = document.getElementById("errorDiv");

btnCrear.addEventListener("click", ()=>{
    console.log("xd")
    if(inputTitulo.value.localeCompare("")==0 || inputDescr.value.localeCompare("")==0 ){
        errorDiv.innerHTML="<p class='aviso'> El titulo y las descipcion deben ser escritos antes de crear la tarjeta<p>";
        inputTitulo.value="";
        inputDescr.value="";
        inputTitulo.focus()
    } 
    else{
        errorDiv.innerHTML="";
        divTar=document.createElement("div");
        divTar.classList.add("divTar");
        upperTar=document.createElement("div");
        upperTar.classList.add("upperTar");
        lowerTar=document.createElement("div");
        lowerTar.classList.add("lowerTar");
        upperTar.innerHTML=`<img class="imagen" src="https://picsum.photos/200/100?random=${Math.floor(Math.random()*1000)}" alt="Imagen random"> <h4>${inputTitulo.value}</h4> <p class="subtitulo">${inputDescr.value}</p>`

        lowerTar.innerHTML=`<button class="boton1">Ocultar Imagen</button> <button class="boton2">Cambiar estilo</button> <button class="boton3">Borrar Tarjeta</button>`
        divTar.appendChild(upperTar);
        divTar.appendChild(lowerTar);
        divTarjetas.appendChild(divTar);
        
        inputTitulo.value="";
        inputDescr.value="";
    }
})

btnTema.addEventListener("click", ()=>{
    b.classList.toggle("dark");
});


btnBorrar.addEventListener("click", ()=>{
    divTarjetas.innerHTML=""
});


document.addEventListener("click", function (e) {
    console.log("zxczxcxd");
    if (e.target.classList.contains("boton3")) {
      e.target.parentElement.parentElement.remove();
    }
    if (e.target.classList.contains("boton1")) {
      divTar=e.target.closest(".divTar");
      divTar.querySelector("img").classList.toggle("hidden");
    }

    if (e.target.classList.contains("boton2")) {
      divTar=e.target.closest(".divTar");
      divTar.classList.toggle("dark");
    }
    
});
