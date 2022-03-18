const contenedorLetras = document.querySelector(".contenedor3");
const contenedorErrores = document.querySelector (".errores");
const inputLetras = document.querySelector(".input-letras");
const nuevoJuego = document.querySelector("#nuevo");
const desistir = document.querySelector("#desistir")

var letrasErradas = [];
var letrasUsadas = [];
var palabra = elegirPalabra();
var acertada = 0;

const iniciarJuego = () =>{ /* Crea las lineas de las letras */
    for (const p in palabra) {
        const letra = document.createElement("div");
        letra.classList.add("letras");
        letra.setAttribute("id", `letra${p}`);
        contenedorLetras.appendChild(letra);
    }
}

iniciarJuego()

const letraRepetida = (e) => { /* Evalua que las letras no esten repetidas */
    let letraIngresada = inputLetras.value.toLowerCase();
    if (letrasUsadas.indexOf(letraIngresada) == -1) {
        letrasUsadas.push(letraIngresada);
        añadirLetra(letraIngresada);
    }
}

const añadirLetra = (letra) =>{ /* Evalua las letras son correctas o no y las muestra en pantalla */
    let errada = true
    if (letra != " ") { /* Letra no puede ser un espacio */
        for (let i = 0; i < palabra.length; i++) { 
        if (palabra[i] == letra) { /* Si es correcta la muestra sobre las lienas */
                document.getElementById(`letra${i}`).textContent = letra;
                errada = false;
                acertada++;
            }}
            if (errada){ /* Si es errada la muestra en la caja de letras erradas */
                let repetida = letrasErradas.indexOf(letra);
                if(repetida == -1){
                    letrasErradas.push(letra);
                    const letraErrada = document.createElement("li");
                    letraErrada.classList.add("error");
                    letraErrada.textContent = letra;
                    contenedorErrores.appendChild(letraErrada);
                    dibujoAhorcado();
                }
            }   
    }
    inputLetras.value="";
    finDelJuego(acertada, palabra);
}

const finDelJuego = (acertada, palabra) =>{ /* Genera el mensaje final del juego */
    if (fallos == 6){
        dibujoAhorcado();
        for (let i = 0; i < palabra.length; i++) {
            document.getElementById(`letra${i}`).textContent = palabra[i];
        }
        alert("Has Perdido, intenta de nuevo");
    }
    if (acertada == palabra.length){
        alert("Has ganado, Felicitaciones");
    }
}

const rendirse = (e) => {
    e.preventDefault();
    fallos = 6;
    finDelJuego(acertada,palabra);
}

inputLetras.addEventListener("change",(e)=>letraRepetida(e));
desistir.addEventListener("click", (e)=>rendirse(e));
nuevoJuego.addEventListener("click", ()=>location.reload());
