// OBJETOS
const mascota = {
    nombre: "Michi", // Lo cambiamos para darle un toque más real
    tipo: "Gato callejero experto en siestas",
    energia: 10,
    saciedad: 10,
    estaVivo: true,
    aliases: ["Cucho", "Gordito"],
    outfit: {
        accesorio: "Collar con cascabel",
        cuerpo: "Pelaje atigrado",
        pies: "Patitas blancas"
    },
    comer: function () {
        if (!this.estaVivo) {
            console.log(`Oye oye... ${this.nombre} ya partió al otro mundo... no le puedes dar comida.`)
            return
        }

        this.energia += 60
        this.saciedad += 20

        if (this.energia > 100) {
            this.energia = 100
        }

        if (this.saciedad > 100) {
            // límite
            this.saciedad = 100
            console.log(`¡Uf! ${this.nombre} está con la guatita llena, si come más va a explotar.`) // [cite: 48]
            return
        }

        this.estado()
    },
    jugar: function () {
        this.energia -= 30
        this.saciedad -= 20

        if (!this.estaVivo) {
            this.saciedad = 0
            this.energia = 0
            console.log(`${this.nombre} no puede jugar... está en el cielo de los michis. POR TU CULPA!`)
            return // early return
        }

        if (this.saciedad < 0) {
            this.saciedad = 0
            this.morir()
            return
        }

        if (this.energia < 0) {
            this.energia = 0
            console.log(`A ${this.nombre} se le acabaron las pilas, ¡necesita una siestecita urgente!`) // [cite: 48]
        }

        this.estado()
    },
    dormir: function () { // [cite: 55]
        if (!this.estaVivo) {
            console.log(`${this.nombre} ya está descansando en paz...`)
            return
        }

        this.energia += 50
        this.saciedad -= 10
        console.log(`${this.nombre} está roncando... zzz`) // [cite: 55]

        if (this.energia > 100) {
            this.energia = 100
        }

        if (this.saciedad < 0) {
            this.saciedad = 0
            this.morir()
            return
        }

        this.estado()
    },
    morir: function () {
        this.estaVivo = false
        console.log(`${this.nombre}, acaba de cruzar el puente del arcoíris... a llorar :c`)
        const mascotaImg = document.getElementById('mascota-img')
        mascotaImg.src = "./assets/img/muerto.png" 
    },
    estado: function () {
        console.log(`${this.nombre} tiene ahora ${this.saciedad}% de guatita y ${this.energia}% de pilas`)
    }
}

// UI - User Interface _ UX User Experience
function actualizarUI() {
    const mascotaNombre = document.getElementById('mascota-nombre')
    const mascotaTipo = document.getElementById('mascota-tipo')
    const mascotaEnergia = document.getElementById('mascota-energia')
    const mascotaSaciedad = document.getElementById('mascota-saciedad')

    mascotaNombre.textContent = mascota.nombre
    mascotaTipo.textContent = mascota.tipo
    mascotaEnergia.style.width = `${mascota.energia}%`
    mascotaEnergia.textContent = `Energía: ${mascota.energia}%`
    mascotaSaciedad.style.width = `${mascota.saciedad}%`
    mascotaSaciedad.textContent = `Saciedad: ${mascota.saciedad}%`

    // Solo vuelve al estado standby si la mascota sigue viva
    if (mascota.estaVivo) {
        setTimeout(() => {
            const mascotaImg = document.getElementById('mascota-img')
            mascotaImg.src = "./assets/img/standby.png" // [cite: 44]
        }, 1500) // Subí un poco el tiempo a 1.5s para que se note la animación
    }
}

const btnComer = document.getElementById('btn-comer')
const btnJugar = document.getElementById('btn-jugar')
const btnDormir = document.getElementById('btn-dormir') // Nuevo botón

btnComer.addEventListener('click', () => {
    if (!mascota.estaVivo) return;
    const mascotaImg = document.getElementById('mascota-img')
    mascota.comer()
    mascotaImg.src = "./assets/img/comiendo.png" // [cite: 44]
    actualizarUI()
})

btnJugar.addEventListener('click', () => {
    if (!mascota.estaVivo) return;
    const mascotaImg = document.getElementById('mascota-img')
    mascota.jugar()
    mascotaImg.src = "./assets/img/jugando.png" // 
    actualizarUI()
})

btnDormir.addEventListener('click', () => {
    if (!mascota.estaVivo) return;
    const mascotaImg = document.getElementById('mascota-img')
    mascota.dormir()
    mascotaImg.src = "./assets/img/standby.png" // Asumimos que standby sirve para dormir, o puedes agregar 'durmiendo.png'
    actualizarUI()
})

// Estado inicial
const mascotaImg = document.getElementById('mascota-img')
mascotaImg.src = "./assets/img/standby.png" // [cite: 44]

actualizarUI()