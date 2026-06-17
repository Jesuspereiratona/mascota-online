const taza = {
    color: "rojo",
    diseño: "Mapache saltando sobre hojas de otoño",
    peso: "100g",
    material: "Plástico",
    categoria: ["Animales", "naturaleza"],
    origen: "China",
    precio: 8000,
    tamaño: "250cc",
    personalizada: true,
    cambioColor() {
        document.write("<h2>Cambió a color negro</h2>")
    }
}

const seleccion = "diseño"

document.write("El " + seleccion + " es: " + taza[seleccion])

taza.cambioColor()

console.log(Object.assign(taza))