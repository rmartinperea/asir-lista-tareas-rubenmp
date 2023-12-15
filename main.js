{
    
    let tarea = document.getElementById("tarea")
    let boton = document.getElementById("botonAdd") 

    boton.addEventListener("click", anadir)

    function anadir() {
        alert(tarea.value) //es como un console.log
    }

  
}

