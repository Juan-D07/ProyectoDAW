
const btnGener=document.getElementById("generarTabl");
const btnBorrar=document.getElementById("borrarTabl");
const inputCol=document.getElementById("inputCol");
const inputRow=document.getElementById("inputRow");
const errorCont=document.getElementById("errorContenedor");
const tablaId = document.getElementById("tabla-div");

btnBorrar.addEventListener("click", ()=>{
  errorCont.innerHTML="";
  tablaId.innerHTML="";
  inputRow.value="1";
  inputCol.value="1";

})


imagenes=[];


tablaId.addEventListener("click", (e) =>{
  if (e.target.tagName === "IMG") {
    e.target.classList.toggle("oculto")
    
  }
})

btnGener.addEventListener("click", ()=>{
  if(inputCol.value<=0 || inputRow.value<=0){
    errorCont.innerHTML="<p class='aviso'> El numero de Columnas y Filas debe ser mayor a 0<p>";
    inputRow.value="";
    inputCol.value="";
    inputCol.focus()
  } 
  else {
    errorCont.innerHTML="";
    tablaId.innerHTML="";
    for(let i=0;i<inputRow.value*inputCol.value;i++){
      imagenes.push("https://picsum.photos/100?random="+i);
    }
    count=0;
    for (let x=0;x<inputRow.value;x++){
      const rowId = tablaId.insertRow(x);
      for (let y=0;y<inputCol.value;y++){
        const colId = rowId.insertCell(y);
        imagen=document.createElement("img");
        imagen.src=imagenes[count];
        imagen.alt="Imagen "+(count+1);
        imagen.classList.toggle("oculto")
        colId.append(imagen);
        count++;
      }
    }
  }

})




