// ==== ARRAYS ====

const numeros = [1, 2, 3, 23, 4, 55, 19]

// const noHaganEsto = [1, 33, "Algún String", false, "Hola mundo", true, 98, {error: 'No hagan esto'}]

// const profe = {nombre: 'Conrado Lanusse'}
// const equipo = ["Soledad", "Cristian", "Gonzalo", profe]

// equipo[3].nombre = "otra cosa"
// console.log(equipo)
// // console.log(equipo[3])
// console.log(profe)


const profes = ['Conrado Lanusse', "Harold F"]
const tutores = ["Soledad", "Cristian", "Gonzalo", "Diego", "Rodrigo", "Juan"]

const equipo = profes.concat(tutores)


// equipo.push('Gianluca')
// equipo.unshift('Laura')

// console.log(equipo)

// equipo.pop()

// splice:   (indice, cantidadElementoABorrer, N parámetros de elementos a agregar)
equipo.splice(4, 0, "Carlos", "Jorge")

// console.log( equipo )

// for (let i = 0; i < equipo.length; i++) {
//     console.log(equipo[i])
// }

// const unString = "Hola Mundo Coder!"

// for (let i = 0; i < unString.length; i++) {
//     console.log(unString[i])
// }

const equipoComoString = equipo.join(', ')

// console.log( equipoComoString )

// alert( equipo.join(', ') )

// slice :               inclusivo, excluyente
// console.log( equipo.slice(0, 5) )
// console.log( 'Hola Mundo!'.slice(5) )


// === ARRAYS OBJETOS ====

// const mascota1 = {
//     nombre: 'Flufy',
//     tipo: 'perro',
//     edad: 5,
//     origen: {
//         ciudad: 'Cordoba',
//         pais: 'Argentina'
//     }
// }

// const mascota2 = {
//     nombre: 'Nemo',
//     tipo: 'pez',
//     edad: 2,
//     origen: {
//         ciudad: 'Cordoba',
//         pais: 'Argentina'
//     }
// }

// const mascotas = [mascota1, mascota2]

// console.log(mascotas)

// for (let i = 0; i < mascotas.length; i++) {
//     console.log( mascotas[i].nombre )
//     console.log( mascotas[i].tipo )
//     console.log( mascotas[i].origen.ciudad )
// }


// ================

// const productos = [
//     {
//         nombre: 'Remera 1',
//         precio: 1200,
//         talle: 'L'
//     },
//     {
//         nombre: 'Remera 2',
//         precio: 1400,
//         talle: 'XL'
//     },
//     {
//         nombre: 'Buzo 1',
//         precio: 3200,
//         talle: 'S'
//     }
// ]

// productos.push({
//     nombre: 'Buzo 2',
//     precio: 2500,
//     talle: 'M'
// })

function Producto(nombre, precio, talle) {
    this.nombre = nombre
    this.precio = precio
    this.talle = talle
}

const productos = [
    new Producto('Remera 1', 1200, 'L'),
    new Producto('Remera 2', 2200, 'XL'),
    new Producto('Buzo 1', 3000, 'S'),
]


productos.push(new Producto('Buzo 2', 3200, 'M'))

console.log(productos)

let total = 0

for (let i = 0; i < productos.length; i++) {
    total += productos[i].precio
}

console.log(total)


// ==== ARRAYS - MÉTODOS ====