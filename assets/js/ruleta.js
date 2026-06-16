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

const colores = [
    "rojo",
    "azul",
    "verde"
];

// Función genérica para obtener elemento aleatorio de cualquier arreglo
function aleatorioDesdeArreglo(arreglo) {
    if (arreglo.length === 0) return null;
    const indice = Math.floor(Math.random() * arreglo.length);
    return arreglo[indice];
}
const getRandomButton = document.querySelector("#getrandom");
const resultadoElement = document.querySelector("#resultado");

getRandomButton.addEventListener("click", () => {
    const ganador = aleatorioDesdeArreglo(participantes);
    const colorAleatorio = aleatorioDesdeArreglo(colores);
    resultadoElement.textContent = `Ganador: ${ganador} - Color: ${colorAleatorio}`;
    console.log(ganador);
})
