let parrafo = document.getElementById("parrafo")
let boton1 = document.getElementById("incorrect1")
let boton2 = document.getElementById("incorrect2")
let boton3 = document.getElementById("incorrect3")
let boton4 = document.getElementById("correct")

function Correct() {
    parrafo.textContent = "✔️✔️✔️✔️"
}

function Incorrect() {
    parrafo.textContent = "❌❌❌❌"
}

boton1.addEventListener("click", color)

function color() {
    boton1.style.backgroundColor = "Red"
    boton2.style.backgroundColor = "White"
    boton3.style.backgroundColor = "White"
    boton4.style.backgroundColor = "White"
}

boton2.addEventListener("click", color2)

function color2() {
    boton2.style.backgroundColor = "Red"
    boton1.style.backgroundColor = "White"
    boton3.style.backgroundColor = "White"
    boton4.style.backgroundColor = "White"
}

boton3.addEventListener("click", color3)

function color3() {
    boton3.style.backgroundColor = "Red"
    boton1.style.backgroundColor = "White"
    boton2.style.backgroundColor = "White"
    boton4.style.backgroundColor = "White"
}

boton4.addEventListener("click", color4)

function color4() {
    boton4.style.backgroundColor = "Green"
    boton3.style.backgroundColor = "White"
    boton1.style.backgroundColor = "White"
    boton2.style.backgroundColor = "White"
}