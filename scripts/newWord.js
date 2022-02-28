const añadir = document.querySelector("#añadir")
añadir.addEventListener("click",e=>añadirPalabra(e))

const añadirPalabra = () => { /* Añade nuevas palabras a la lista */
    let nueva = true
    const palabraNueva = document.getElementById("palabranueva").value.toLowerCase()
    if (palabraNueva) {
        for (const palabra in palabras) { /* Evalua que la palabra no este repetida */
            if (palabraNueva === palabras[palabra]) {
                nueva = false
                alert("La palabra ya esta registrada")
            } 
        }
        if (nueva) {
            palabras.push(palabraNueva)
            alert("palabra añadida correctamente")
        }
    } else {
        alert("No puede dejar el campo vacio")
    }
}