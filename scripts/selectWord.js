
const palabras = ["javascript","html","alura","programa","css"]

const elegirPalabra = () => { /* Elige un palabra al azar de la lista */
    const index = Math.floor(Math.random()*palabras.length)
    const palabraElegida = palabras[index]
    return palabraElegida.split("")
}


