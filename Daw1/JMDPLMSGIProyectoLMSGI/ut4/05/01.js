//obtener el elemento listaLibros
const lista = document.getElementById("listaLibros");
// fetch devuelve una promesa, por lo que se pueden encadenar .then() para manejar la respuesta
// cada .then() recibe el resultado de la promesa anterior, y se puede transformar o procesar antes de pasar al siguiente .then()
fetch('01.xml')
    .then(response => response.text())      //la promesa se resuelve con un objeto Response, q con el archivo en texto plano
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml")) // Parsear a XML, convertir texto a XML
    .then(data => {
        // Obtener todos los nodos <libro>
        const libros = data.getElementsByTagName('libro');
        console.log(libros);
        // Recorrer cada libro y mostrar su información
        for (let i = 0; i < libros.length; i++) {
            const titulo = libros[i].getElementsByTagName('titulo')[0].textContent;
            //acceder al atributo id
            const id = libros[i].getAttribute('idLibro');
            // acceder al genero del libro
            const genero = libros[i].getAttribute('genero');    
            const autor = libros[i].getElementsByTagName('autor')[0].textContent;

            // Crear un LI para mostrar la información
            const li = document.createElement('li');
            li.textContent = `${titulo} - id: ${id} - ${genero} -Primer Autor: ${autor}`;
            lista.appendChild(li);
        }
    })
    // se ejecuta si alguna promesa falla, por ejemplo si el archivo no se encuentra o hay un error de red
    .catch(error => console.error('Error cargando el XML:', error));