// array numeros 

const numeros = [1, 23, 55, 88, 2, 33, 4, 52, 6, 7, -45, 92, 8, 9, 10]

numeros.push(11)
numeros.unshift(0)

numeros.pop()
numeros.shift()

// splice - modifica el array original
// (indice inicial, cantidad de elementos a eliminar, +elementos añadir)

// numeros.splice(5, 1, 99, 1089)


// indexOf()

// console.log( numeros.indexOf(9123) )


function eliminarNumero(num) {

    const index = numeros.indexOf(num)
    
    if (index !== -1) {
        numeros.splice(index, 1)
    } else {
        alert('No existe ese número en el array')
    }
}

// eliminarNumero(8)
// eliminarNumero(3)
// eliminarNumero(888)

// SORT 

// numeros.sort( (a, b) => a - b )
numeros.sort( (a, b) => b - a )

// console.log(numeros)



// recorrer arrays
// for of -- forEach

// for (let i = 0; i < numeros.length; i++) {
//         console.log(numeros[i])
// }

// for (let num of numeros) {
//     // bloque de codigo
//     console.log( num * 2)
// }


// FOR EACH

// numeros.forEach( (elemento, index) => {
//     console.log(index + 1, elemento)
// } )


// let acumulador = 0

// numeros.forEach( (num) => {
//     acumulador += num
// })

// console.log(acumulador)


class Mascota {
    constructor(nombre, tipo, edad) {
        this.nombre = nombre
        this.tipo = tipo
        this.edad = edad
    }

    cumplirAnios() {
        this.edad += 1
    }
}

const mascotas = []

mascotas.push( new Mascota('Flufy', 'perro', 6) )
mascotas.push( new Mascota('Dory', 'pez', 3) )
mascotas.push( new Mascota('Ricardo', 'gato', 11) )
mascotas.push( new Mascota('Jorge', 'gato', 14) )


// recorrer arrays -- (ejecutar metodo) -- forEach

// mascotas.forEach( (mascota) => {
//     mascota.cumplirAnios()

//     console.log(mascota)
// })



// FIND mascota

// const mascotaBusqueda = mascotas.find( (mascota) => mascota.nombre === "Ricardo")
const mascotaBusqueda = mascotas.find( (mascota) => mascota.tipo === "gato")

// console.log(mascotaBusqueda)



// filter - map - reduce - find

const arrayProductos = [
    {nombre: "Remera", precio: 1000},
    {nombre: "Remera", precio: 2000},
    {nombre: "Pantalon", precio: 1500},
    {nombre: "Pantalon", precio: 1700},
    {nombre: "Pantalon", precio: 5000},
    {nombre: "Pantalon", precio: 3000},
    {nombre: "Calzado", precio: 7000},
    {nombre: "Calzado", precio: 8000},
    {nombre: "Calzado", precio: 13000},
    {nombre: "Buzo", precio: 6000},
    {nombre: "Buzo", precio: 19000},
    {nombre: "Buzo", precio: 800},
]


// filter

// const filtrado = arrayProductos.filter( (producto) => producto.precio <= 6000)
// const filtrado = arrayProductos.filter( (producto) => producto.nombre === "Buzo")

// casos de error filter - find
// const filtrado = arrayProductos.filter( (producto) => producto.nombre === "asdfasdfBuzo")
// const busqueda = arrayProductos.find( (producto) => producto.nombre === "Zapato")

// const filtrado = arrayProductos.filter( (producto) => producto.precio === 800)
// const busqueda = arrayProductos.find( (producto) => producto.precio === 800)

// console.log(filtrado[0].nombre)

// map

// const arrayMapeado = arrayProductos.map( (producto) => {
//     return producto.nombre
// })

const arrayMapeado = arrayProductos.map( (producto, index) => {

    let stock = 100

    if (producto.nombre == "Calzado") {
        stock = 20
    }

    return {
        id: index +1,
        nombre: producto.nombre,
        precio: producto.precio,
        stock: stock
    }
})

// console.log(arrayProductos)
console.log(arrayMapeado)

// reduce

// let total = 0
// arrayMapeado.forEach( (prod) => {
//     total += prod.precio
// })
// console.log(total)

// let total = arrayMapeado.reduce( (acumulador, producto) => acumulador + producto.nombre, "" )
// let total = arrayMapeado.reduce( (acumulador, producto) => acumulador + producto.precio * producto.stock, 0 )
// let total = arrayMapeado.filter( el => el.nombre == "Calzado").reduce( (acumulador, producto) => acumulador + producto.precio, 0 )
let total = arrayMapeado.reduce( (acumulador, producto) => acumulador + producto.precio, 0 )

console.log(total)