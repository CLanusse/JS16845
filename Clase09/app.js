// EVENTOS 


const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')

// function saludar() {
//     console.log('Hola Mundo!')
// }

// btn1.addEventListener('click', saludar)

// primer forma
btn1.addEventListener('click', (e) => {
  
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
const modal = document.getElementsByClassName('modal')[0]

modalAbrir.addEventListener('click', () => {
    // modalContainer.classList.add('modal-active')
    modalContainer.classList.toggle('modal-active')
})

modalCerrar.addEventListener('click', () => {
    // modalContainer.classList.remove('modal-active')
    modalContainer.classList.toggle('modal-active')
})

modalContainer.addEventListener('click', () => {
    modalContainer.classList.toggle('modal-active')
})

modal.addEventListener('click', (e) => {
    e.stopPropagation()
})
// ==== random background ===

const randomColor = () => {
    const a = Math.round(Math.random() * 255)
    const b = Math.round(Math.random() * 255)
    const c = Math.round(Math.random() * 255)

    return `rgb(${a}, ${b}, ${c})`
}

document.body.addEventListener('click', (event) => {
    // console.log("X:", event.x)
    // console.log("Y:", event.y)

    // console.log(event.target)

    // event.target.remove()
    // document.body.style.backgroundColor = randomColor()
})

// ============

const inputNombre = document.getElementById('input1')
const inputApellido = document.getElementById('input2')
const inputDestino = document.getElementById('destino')

const errorNombre = document.getElementById('error-nombre')
const errorApellido = document.getElementById('error-apellido')
// inputNombre.onkeydown = () => { console.log("Apretaste una tecla")}

inputNombre.addEventListener('input', (e) => {
    // console.log(e)

    let nombre = inputNombre.value

    if (nombre.length < 4) {
        inputNombre.classList.add('input-error')
        errorNombre.classList.add('error-show')
    } else {
        inputNombre.classList.remove('input-error')
        errorNombre.classList.remove('error-show')
    }
})

inputApellido.addEventListener('input', () => {
    let apellido = inputApellido.value

    if (apellido.length < 4) {
        inputApellido.classList.add('input-error')
        errorApellido.classList.add('error-show')
    } else {
        inputApellido.classList.remove('input-error')
        errorApellido.classList.remove('error-show')
    }
})


const destinos = []

const formulario = document.getElementById('formulario')

formulario.addEventListener('submit', (e) => {

    e.preventDefault()
    console.log(e)

    const nombre = inputNombre.value
    const apellido = inputApellido.value
    const destino = inputDestino.value

    if (nombre.length > 3 && apellido.length > 3) {

        destinos.push({
            nombre: nombre,
            apellido: apellido,
            destino: destino
        })

        console.log(destinos)

        alert('Destino agregado correctamente')

        formulario.reset()

        // inputNombre.value = ""
        // inputApellido.value = ""
        // inputDestino.value = "paris"

        // alert(`Felicitaciones ${nombre} ${apellido}
        // Te vas a ${destino}`)


        // formulario.submit()
    }

})

// document.getElementById('btn-submit').addEventListener('click', (e) => {
//     e.preventDefault()
// })