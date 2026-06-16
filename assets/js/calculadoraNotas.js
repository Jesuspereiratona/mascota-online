const notasAlumno = [6.5, 3.4, 7, 5.1, 1.0]
const notasAlumno2 = [3.3, 4.0, 5.1, 6, 1]

function calcularPromedio(notas) {
    let suma = 0
    for (let i = 0; i < notas.length; i++) {
        suma = suma + notas[i]
    }
    return suma / notas.length
}

function evaluarEstado(promedio) {
    if (promedio >= 4) {
        return "Aprobado"
    } else {
        return "Reprobado"
    }
}
//* espero no desaparezca
function evaluarAlumno(notas) {
    const promedio = calcularPromedio(notas)
    const estado = evaluarEstado(promedio)

    document.write("Promedio: " + promedio + " Estado: " + estado + "<br>")
}

evaluarAlumno(notasAlumno)
evaluarAlumno(notasAlumno2)

