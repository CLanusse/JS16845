const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
contenedorModal.addEventListener('click', ()=>{
    botonCerrar.click()
})
modalCarrito.addEventListener('click', (event)=>{
    event.stopPropagation()
})


// contenedorModal.addEventListener('transitionend', ()=>{
//     console.log('termino la transicion del modal')
// })




















// const carritoAbrir = document.getElementById('boton-carrito');
// const carritoCerrar = document.getElementById('carritoCerrar');

// const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
// const modalCarrito = document.getElementsByClassName('modal-carrito')[0]

// carritoAbrir.addEventListener('click', ()=> {
//     contenedorModal.classList.toggle('modal-active')
// })
// carritoCerrar.addEventListener('click', ()=> {
//     contenedorModal.classList.toggle('modal-active')
// })
// modalCarrito.addEventListener('click',(e)=>{
//     e.stopPropagation()
// })
// contenedorModal.addEventListener('click', ()=>{
//     carritoCerrar.click()
// })