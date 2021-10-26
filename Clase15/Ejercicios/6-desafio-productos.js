/**
 * Completar el desafio generico obteniendo la informacion solicitada
 * 
 * A) Los nombres de los productos en un string separados por comas. Armar un string.
 * B) El precio total
 * C) El precio promedio
 * D) El producto con menor precio
 * E) El producto con mayor precio
 * F) Con los datos de los puntos 1 al 5 crear un objeto y representarlo por consola
 */
let productos = [
    { id: 1, nombre: 'Escuadra', precio: 323.45 },
    { id: 2, nombre: 'Calculadora', precio: 234.56 },
    { id: 3, nombre: 'Globo Terraqueo', precio: 45.67 },
    { id: 4, nombre: 'Paleta Pintura', precio: 456.78 },
    { id: 5, nombre: 'Reloj', precio: 67.89 },
    { id: 6, nombre: 'Agenda', precio: 78.90 },
]

const A = productos.map( (prod) => prod.nombre).join(', ')
const B = productos.reduce( (acc, prod) => acc + prod.precio, 0).toFixed(2)
const C = (productos.reduce( (acc, prod) => acc + prod.precio, 0) / productos.length).toFixed(2)
const D = productos.slice().sort((a, b) => a.precio - b.precio)[0]
const E = productos.slice().sort((a, b) => b.precio - a.precio)[0]

const F = {
    A, B, C, D, E
}

console.log(F)




// const F = {
//     A: productos.map( (prod) => prod.nombre).join(', '),
//     B: productos.reduce( (acc, prod) => acc + prod.precio, 0).toFixed(2),
//     C: (productos.reduce( (acc, prod) => acc + prod.precio, 0) / productos.length).toFixed(2),
//     D: productos.slice().sort((a, b) => a.precio - b.precio)[0],
//     E: productos.slice().sort((a, b) => b.precio - a.precio)[0],
// }