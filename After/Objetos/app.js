
// valores referenciales

// const usuario = {
//     nombre: 'Carlos',
// }

// const otroUsuario = usuario

// otroUsuario.nombre = 'Juan'

// console.log(usuario)
// console.log(otroUsuario)



// OBJETO LITERAL

const estudiante1 = {
    nombre: 'Lucas',
    edad: 24,
    curso: 'Javascript',
    completado: false
}

const estudiante2 = {
    nombre: 'Lucas',
    edad: 24,
    curso: 'Javascript',
    completado: false
}



estudiante2.nombre = 'Juan'
estudiante2.edad = 29

estudiante1.id = 001
estudiante2.id = 002


// console.log(estudiante1)
// console.log(estudiante2)

// CONSTRUCTORES 

const mascota = { /* fucnion constructora */}

mascota.nombre = "Pepe"
mascota.tipo = "perro"
mascota.edad = 10


// console.log(mascota)

// function Mascota(nombre, tipo, edad) {
//     this.nombre = nombre
//     this.tipo = tipo
//     this.edad = edad

//     this.cumplirAnios = function () {
//         this.edad++
//     }
// }

// const mascota2 = new Mascota(prompt('nombre'), prompt('tipo'), parseInt(prompt('edad')))

// const mascota1 = new Mascota('Batman', 'gato', 5)
// const mascota2 = new Mascota('Robin', 'conejo', 3)

// mascota1.cumplirAnios()
// mascota2.cumplirAnios()
// mascota2.cumplirAnios()

// console.log(mascota1)
// console.log(mascota2)


// const mascotas = []

// mascotas.push( new Mascota('Batman', 'gato', 5) )
// mascotas.push( new Mascota('Robin', 'conejo', 3) )
// mascotas.push( new Mascota('Nemo', 'pez', 4) )
// mascotas.push( new Mascota('Rambo', 'hamster', 1) )


// for (let i = 0; i < mascotas.length; i++) {
//     mascotas[i].cumplirAnios()
// }

// console.log(mascotas)

// CLASES

class Mascota {

    // constructor para las propiedades
    constructor (nombre, tipo, edad) {
        this.nombre = nombre
        this.tipo = tipo
        this.edad = edad
    }

    // metodos
    cumplirAnios() {
        this.edad++
    }

}


const mascotas = []

mascotas.push( new Mascota('Batman', 'gato', 5) )
mascotas.push( new Mascota('Robin', 'conejo', 3) )
mascotas.push( new Mascota('Nemo', 'pez', 4) )
mascotas.push( new Mascota('Rambo', 'hamster', 1) )


for (let i = 0; i < mascotas.length; i++) {
    mascotas[i].cumplirAnios()
}

for (let i = 0; i < 2; i++) {
    mascotas.push( crearMascota() )
}

console.log(mascotas)

function crearMascota() {
    let nombre = prompt('Nombre')
    let tipo = prompt('Tipo')
    let edad = Number(prompt('Edad'))

    return new Mascota(nombre, tipo, edad)
}

