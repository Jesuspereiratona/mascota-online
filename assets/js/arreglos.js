const meses = [
    "Enero", "Febrero", "Marzo", "Abril",
    "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"
]

function obtenerEstacion(mes) {
    if (mes >= 3 && mes <= 5) {
        return "Otoño ricooo"
    } else if (mes >= 6 && mes <= 8) {
        return "Invierno feoo"
    } else if (mes >= 9 && mes <= 11) {
        return "Primavera media fea"
    } else {
        return "Verano ricooo"
    }
}
const mesSeleccionado = prompt("En que mes nacisteee? Pon un numero del 1 al 12")
const mesSeleccionadoNumber = Number(mesSeleccionado)

const nombreMes = meses[mesSeleccionadoNumber - 1] // para que no de un mes erroneo 
const estacion = obtenerEstacion(mesSeleccionadoNumber)
document.write("Naciste en " + nombreMes + ", temporada " + estacion)