// EVENTOS 


const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

// function saludar() {
//     console.log('Hola Mundo!')
// }

// btn1.addEventListener('click', saludar)

// primer forma
btn1.addEventListener('click', () => {

    console.log('Clickeaste el BOTON 1')

})

const titulo = document.getElementById('titulo')

titulo.addEventListener('click', () => {
    titulo.classList.toggle('agrandar')
})

// segunda forma

// btn2.onclick = () => {
//     alert("Clickeaste el boton 2")
// }

btn2.onmouseover = () => {
    btn2.classList.toggle('agrandar')
}

// tercera forma

// ======== MODAL =====


const modalAbrir = document.getElementById('modal-abrir')
const modalCerrar = document.getElementById('modal-cerrar')
const modalContainer = document.getElementsByClassName('modal-container')[0]

modalAbrir.addEventListener('click', () => {
    // modalContainer.classList.add('modal-active')
    modalContainer.classList.toggle('modal-active')
})

modalCerrar.addEventListener('click', () => {
    // modalContainer.classList.remove('modal-active')
    modalContainer.classList.toggle('modal-active')
})

// ==== random background ===

const randomColor = () => {
    const a = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)
    const c = Math.round(Math.random() * 255)

    return `rgb(${a}, ${b}, ${c})`
}

document.body.addEventListener('click', () => {
    document.body.style.backgroundColor = randomColor()
})

