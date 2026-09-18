const btnGener=document.getElementById("generarTabl");
const btnBorrar=document.getElementById("borrarTabl");
const inputCol=document.getElementById("inputCol");
const inputRow=document.getElementById("inputRow");
const errorCont=document.getElementById("errorContenedor");
const tablaId = document.getElementById("tabla-id");
const lista =document.querySelector("tabla-id");


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
    for (let x=0;x<inputRow.value;x++){
      const rowId = tablaId.insertRow(x);
      for (let y=0;y<inputCol.value;y++){
        const colId = rowId.insertCell(y);
        colId.textContent="Fila "+(x+1)+" Columna "+(y+1);
        if(x==0){
          colId.style.backgroundColor="rgb(84, 84, 84)";
        }
      }
    }
  }

})

btnBorrar.addEventListener("click", ()=>{
  errorCont.innerHTML="";
  tablaId.innerHTML="";
  inputRow.value="1";
  inputCol.value="1";

})