let incorrecto = document.getElementsByClassName("incorrect")
let correcto = document.getElementsByClassName("correct")
let parrafo = document.getElementById("parrafo")




function Correct() {
    parrafo.textContent = "¡Respuesta Correcta!🎉🎉🎉"
    parrafo.style.color = "Green"
}

function Incorrect() {
    parrafo.textContent = "Respuesta incorrecta, ¡intentalo de nuevo!"
    parrafo.style.color = "Red"
}