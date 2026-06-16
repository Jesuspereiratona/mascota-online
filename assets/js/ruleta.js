const participantes = [
    "Bastián Abarca",
    "Stefany Aguilera",
    "María Cárdenas",
    "Yerica Cortés",
    "Francisca Fernández",
    "Francisco Fuentealba",
    "Kamila González",
    "Vesna Guerra",
    "Williams Jacobs",
    "Daniela Martínez",
    "Ellymar Mendoza",
    "Sebastián Ortega",
    "Jesus Pereira",
    "Diego Pinilla",
    "Alan Rodríguez",
    "Brigitte Rudas",
    "Daniel Schnettler",
    "Nadia Sepúlveda",
    "Ronald Stark",
    "Rodolfo Moreno",
    "Cristóbal Estrada",
    "Kevin Reyes",
    "Babinsky Magloire",
    "Pablo Canto",
    "Damazo Sepúlveda"
];

const participantesBackUp = [];

function lanzarRuleta(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function aleatorioDesdeArreglo(arreglo) {
    if (arreglo.length === 0) {
        renderizarResultado("¡Ya salieron todos! 🎉")
        setTimeout(() => window.location.reload(), 3000)
        return
    }

    const index = lanzarRuleta(0, arreglo.length - 1)
    const elementoArreglo = arreglo[index]

    participantes.splice(participantes.indexOf(elementoArreglo), 1)
    participantesBackUp.push(elementoArreglo)

    return elementoArreglo
}

function renderizarResultado(texto) {
    document.getElementById("resultado").textContent = texto
}

function actualizarContador() {
    document.getElementById("contador").textContent =
        `Quedan ${participantes.length} de ${participantes.length + participantesBackUp.length}`
}

function renderizarLista() {
    const lista = document.getElementById("lista-pendientes")
    lista.innerHTML = ""

    participantes.forEach(nombre => {
        const li = document.createElement("li")
        li.textContent = nombre
        lista.appendChild(li)
    })

    participantesBackUp.forEach(nombre => {
        const li = document.createElement("li")
        li.textContent = nombre
        li.className = "ya-salio"
        lista.appendChild(li)
    })
}

renderizarLista()
actualizarContador()

document.querySelector("#getRandom").addEventListener("click", () => {
    const resultado = aleatorioDesdeArreglo(participantes)
    if (resultado) {
        renderizarResultado("🎯 " + resultado)
        renderizarLista()
        actualizarContador()
    }
})