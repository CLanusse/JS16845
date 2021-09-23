// STORAGE 


let usuario

let usuarioEnLS = localStorage.getItem('usuario')

if (!usuarioEnLS) {
    usuario = prompt('Ingrese su nombre de usuario')

    localStorage.setItem('usuario', usuario)
} else {
    usuario = usuarioEnLS
}

alert('Bienvenido ' + usuario)


localStorage.tutor = 'Soledad'
sessionStorage.tutor = 'Cristian'


localStorage.setItem('numero', 213345)

console.log( typeof localStorage.getItem('numero') )
console.log( localStorage.getItem('numero') )

// localStorage.setItem('array', [{nombre: 'cristian'}, {nombre: 'soledad'}])

// console.log( typeof localStorage.getItem('array') )
// console.log( localStorage.getItem('array') )




// ==== JSON ==== 

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


// const productosToString = JSON.stringify(productos)
// localStorage.setItem('productos', productosToString)

localStorage.setItem('productos', JSON.stringify(productos))

console.log(productos)
// console.log(productosToString)



// === EJEMPLO === 



let carrito = []

let carritoLS = JSON.parse( localStorage.getItem('carrito') )

if (carritoLS) {
    carrito = carritoLS
}

// carrito.push( productos[0] )
// carrito.push( productos[0] )
// carrito.push( productos[0] )
// carrito.push( productos[0] )

// localStorage.setItem('carrito', JSON.stringify(carrito))

console.log(carrito)



// REPASO ARROW FUNCTIONS

// function sumar(a, b) {
//     return a + b
// }


// const sumar = function (a, b) {
//     return a + b
// }

// ARROW

// const sumar = (a, b) => {
//     return a + b
// }

// const sumar = (a, b) => a + b

// console.log( sumar(10, 20) )

// productos.find( (el) => el.id == id )

