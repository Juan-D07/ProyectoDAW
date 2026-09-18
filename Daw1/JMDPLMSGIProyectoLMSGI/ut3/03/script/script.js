const lista= document.querySelectorAll("li");


// const listaC = document.getElementsByTagName("li");

const boton = document.getElementById("boton")

lista.forEach(item =>{
    item.addEventListener("click",function(){
        item.classList.toggle("seleccionado")
    })
})


boton.addEventListener("click",function(){

    lista.forEach(item =>{

        if (item.classList.contains("ocultado")){
            item.classList.toggle("ocultado")
            item.classList.toggle("seleccionado")
        }

        else if (item.classList.contains("seleccionado")){
            item.classList.toggle("ocultado")
        }
    })
})



// function ele(item){
//     item.classList.toggle("seleccionado")
// }

// for (let x=0; x<listaC.length;x++){
//     console.log(listaC[x].textContent)
// }

// Array.from(listaC).forEach(i =>{
//     console.log(i.textContent);
// })


// lista.document


