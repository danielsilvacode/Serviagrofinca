const nombre = document.getElementById("name")
const email = document.getElementById("email")
const tel = document.getElementById("tel")
const asunt = document.getElementById("asunt")
const masage = document.getElementById("masage")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")

form.addEventListener("submit", e => {
    e.preventDefault()

    if (nombre.value.length < 6) {
        alert("Nombre no valido debe tener mas de 6 caracteres")

    }
})























