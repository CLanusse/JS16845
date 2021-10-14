
// $(document).ready( () => {
//         setTimeout( () =>{
//             alert('Quieres suscribirte a nuestro servicio?')
//         }, 2000 )
// })    

// $( () => {
//     setTimeout( () =>{
//         alert('Quieres suscribirte a nuestro servicio?')
//     }, 2000 )
// })

// jQuery( () => {
//     setTimeout( () =>{
//         alert('Quieres suscribirte a nuestro servicio?')
//     }, 2000 )
// })

// ================= 

// $(document).ready( () => {

//     setTimeout( () => {
//         $('.loader').css({
//             opacity: 0,
//             visibility: "hidden"
//         })
//     }, 1000)
// })

// ====================

$('#boton').on('click', () => {

    console.log('Boton clickeado')

})

// === ejemplo aplicado ====

const carrito = []

const productos = [
    {
        nombre: "Producto 1",
        id: 1,
        precio: 2000
    },
    {
        nombre: "Producto 2",
        id: 2,
        precio: 2000
    },
    {
        nombre: "Producto 3",
        id: 3,
        precio: 2000
    },
    {
        nombre: "Producto 4",
        id: 4,
        precio: 2000
    },
]

const agregarAlCarrito = (prodId) => {
    const producto = productos.find( el => el.id === prodId)
    carrito.push(producto)

    console.log(carrito)
}


productos.forEach( (prod) => {

    $('#contenedor').append(`
            <h2>${prod.nombre}</h2>
            <p>Precio: $${prod.precio}</p>
            <small>Código: ${prod.id}</small> <br>
            <button id="agregar${prod.id}" class="btn btn-primary my-2">Agregar al carrito</button>
            <hr>
    `)

    $(`#agregar${prod.id}`).on('click', () => {
        agregarAlCarrito(prod.id)
    })
})

