const listilla= document.querySelectorAll("li");
const btnAdd=document.getElementById("btnAdd");
const btnAddPpio =document.getElementById("btnAddPpio");
const btnDel=document.getElementById("btnDel");
const btnDelLis=document.getElementById("btnDelLis");
const inputEle=document.getElementById("inputEle");
const lista =document.querySelector("ul");

btnAdd.addEventListener("click", ()=>{
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent=inputEle.value;
    nuevoLi.classList.add("item");
    lista.appendChild(nuevoLi);
    inputEle.value="";
    inputEle.focus();
})

btnAddPpio.addEventListener("click", ()=>{
    const nuevoLi = document.createElement("li");
    nuevoLi.textContent=inputEle.value;
    nuevoLi.classList.add("item");
    lista.prepend(nuevoLi);
    inputEle.value="";
    inputEle.focus();
})

btnDel.addEventListener("click", ()=>{
    const ultimo = lista.lastElementChild;
    if (ultimo){    
        lista.removeChild(ultimo);
    }
})

btnDelLis.addEventListener("click", ()=>{

    lista.innerHTML="";

    // lista.querySelectorAll("li").forEach(li=>li.remove());

})
