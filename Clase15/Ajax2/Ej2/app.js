
let stockProductos = []


// fetch('./stock.json')
//     .then( (res) => res.json() )
//     .then( (data) => {
//        stockProductos = data
//         mostrarProductos(stockProductos)
//     })
    
const cargarProductos = async () => {
    const resp = await fetch('./stock.json')
    const data = await resp.json()

    stockProductos = data
    mostrarProductos(stockProductos)
}

cargarProductos()


const contenedorProductos = document.getElementById('contenedor-productos')
const contenedorCarrito = document.getElementById('carrito-contenedor')
const selectFiltro = document.getElementById('talles')
const selectPrecios = document.getElementById('precios')

const contadorCarrito = document.getElementById('contadorCarrito')
const precioTotal = document.getElementById('precioTotal')

const carrito = []



function mostrarProductos(array) {

    contenedorProductos.innerHTML = ''

    array.forEach( (producto) => {
        const div = document.createElement('div')
        div.classList.add('producto')
        div.innerHTML = `
                    <img src=${producto.img} alt="">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.desc}</p>
                    <p>Talle: ${producto.talle}</p>
                    <p class="precioProducto">Precio: $${producto.precio}</p>
                    <button onclick=agregarAlCarrito(${producto.id}) class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
        `
        
        contenedorProductos.appendChild(div)
    } )
}

function agregarAlCarrito(itemId) {

    let itemEnCarrito = carrito.find(el => el.id == itemId)

    if (itemEnCarrito) {
        itemEnCarrito.cantidad += 1
    } else {
        let {id, nombre, precio} = stockProductos.find( el => el.id == itemId )
        carrito.push({id: id, nombre: nombre, precio: precio, cantidad: 1})
    }


    localStorage.setItem('carrito', JSON.stringify(carrito))

    console.log(carrito)

    actualizarCarrito()
}

function eliminarProducto(id) {
    let productoAEliminar = carrito.find( el => el.id == id )

    productoAEliminar.cantidad--

    if (productoAEliminar.cantidad == 0) {
        let indice = carrito.indexOf(productoAEliminar)
        carrito.splice(indice, 1)
    }

    console.log(carrito)
    actualizarCarrito()
}


function actualizarCarrito() {
    contenedorCarrito.innerHTML=''

    carrito.forEach( (producto) => {

        const div = document.createElement('div')
        div.classList.add('productoEnCarrito')
        div.innerHTML = `
                        <p>${producto.nombre}</p>
                        <p>Precio: $${producto.precio * producto.cantidad}</p>
                        <p>Cantidad: ${producto.cantidad}</p>
                        <button onclick=eliminarProducto(${producto.id}) class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
                    `

        contenedorCarrito.appendChild(div)
    })

    contadorCarrito.innerText = carrito.length
    precioTotal.innerText = carrito.reduce( (acc, el) => acc + (el.precio * el.cantidad), 0 )
}




function filtrar() {
    let valorFiltroTalles = selectFiltro.value
    let valorFiltroPrecios = selectPrecios.value
    
    let arrayFiltrado = []

    if (valorFiltroTalles == 'all') {
        arrayFiltrado = stockProductos
    } else {
        arrayFiltrado = stockProductos.filter( el => el.talle == selectFiltro.value) 
    }

    if (valorFiltroPrecios == 1) {
        arrayFiltrado = arrayFiltrado.filter( el => el.precio <= 5000)
    } else if (valorFiltroPrecios == 2) {
        arrayFiltrado = arrayFiltrado.filter( el => el.precio >= 5000)
    }

    mostrarProductos(arrayFiltrado)

}

selectFiltro.addEventListener('change', ()=>{
    filtrar()
})
selectPrecios.addEventListener('change', ()=>{
    filtrar()
})


// ========= API MERCADO PAGO =============

const finalizarCompra = async () => {

    const itemsToMP = carrito.map( (prod) => {
        return {
            title: prod.nombre,
            description: "",
            picture_url: "",
            category_id: prod.id,
            quantity: prod.cantidad,
            currency_id: "ARS",
            unit_price: prod.precio
        }
    })

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
                method: 'POST',
                headers: {
                    Authorization: "Bearer TEST-530625010370198-052019-70dec8c67253a7ded8355f1a098731e3-418556460"
                },
                body: JSON.stringify({
                    items: itemsToMP,
                    back_urls: {
                        success: window.location.href,
                        failure: window.location.href
                    }

                })
            })
    const data = await response.json()

    window.location.replace(data.init_point)

}

// fetch('https://api.mercadopago.com/checkout/preferences', {
//     method: 'POST',
//     headers: {
//         Authorization: "Bearer TEST-530625010370198-052019-70dec8c67253a7ded8355f1a098731e3-418556460"
//     },
//     body: JSON.stringify({
//         items: itemsToMP,
//         back_urls: {
//             success: window.location.href,
//             failure: window.location.href
//         }

//     })
// })
// .then( res => res.json())
// .then( data => {
    
//     window.location.replace(data.init_point)
// })
