// === DOM === 


const tituloPrincipal = document.getElementsByTagName('h1')[0]

// tituloPrincipal.textContent = "Hola Cristian!"


const titulo = document.getElementById('titulo')


// titulo.textContent = prompt('Ingrese su nombre')
// const titulo = document.getElementsByClassName('titulo')

const listItems = document.getElementsByTagName('li')

// console.log( titulo )
// console.log(listItems)

for (const li of listItems) {
    // console.log(li)
}


// const color = prompt('verde o rojo?')

const contenedor = document.getElementById('contenedor')

// contenedor.innerHTML = "<p>Hola <strong>mundo!</strong> Cómo va? </p>"
// contenedor.innerHTML += "<p> Chau mundo <strong>fue un placer!</strong></p>"

// if (color === "rojo") {
//     contenedor.className = "rojo"
// } else if (color=== "verde") {
//     contenedor.className = "verde"
// }

// contenedor.classList.add('grande')
// contenedor.classList.remove('grande')



// const contenido = "Hola mundo"

const contenido = {
    titulo: "Hola mundo",
    texto: "Este es el texto del artículo"
}

const articulo = document.createElement('article')
articulo.innerHTML = `
                    <h3>${contenido.titulo}</h3>
                    <p>${contenido.texto}</p>
                `
articulo.classList.add('rojo')     

const articulo2 = document.createElement('article')
articulo2.innerHTML = `
                    <h3>${contenido.titulo}</h3>
                    <p>${contenido.texto}</p>
                `
articulo2.classList.add('rojo')     


contenedor.appendChild(articulo)
contenedor.appendChild(articulo2)


contenedor.remove()
document.body.appendChild(contenedor)

// console.log( articulo.firstElementChild)


const input = document.getElementById('input')
// console.log(input.value)

const pokemones = ["pikachu", "charmander", "bulbasaur", "squirtle", "charizard", "evee", "raichu", "snorlax"]

const select = document.getElementById('pokemon')

pokemones.forEach( (pokemon) => {
    const option = document.createElement('option')
    option.value = pokemon
    option.innerHTML = pokemon

    select.appendChild(option)
})

// ================

const arrayProductos = [
    {img: 'https://via.placeholder.com/200', nombre: "Remera", precio: 1000},
    {img: 'https://via.placeholder.com/200', nombre: "Remera", precio: 2000},
    {img: 'https://via.placeholder.com/200', nombre: "Pantalon", precio: 1500},
    {img: 'https://via.placeholder.com/200', nombre: "Pantalon", precio: 1700},
    {img: 'https://via.placeholder.com/200', nombre: "Pantalon", precio: 5000},
    {img: 'https://via.placeholder.com/200', nombre: "Pantalon", precio: 3000},
    {img: 'https://via.placeholder.com/200', nombre: "Calzado", precio: 7000},
    {img: 'https://via.placeholder.com/200', nombre: "Calzado", precio: 8000},
    {img: 'https://via.placeholder.com/200', nombre: "Calzado", precio: 13000},
    {img: 'https://via.placeholder.com/200', nombre: "Buzo", precio: 6000},
    {img: 'https://via.placeholder.com/200', nombre: "Buzo", precio: 19000},
    {img: 'https://via.placeholder.com/200', nombre: "Buzo", precio: 800},
]

const contenedorProductos = document.getElementById('productos')


arrayProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.className = "card-img-top"
    div.style = "width: 18rem"
    
    div.innerHTML = `
                    <img src=${producto.img} class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title grande">${producto.nombre}</h5>
                        <p class="card-text rojo">Precio: $${producto.precio}</p>
                        <a href="#" class="btn btn-success">Go somewhere</a>
                    </div>
                `
    
    contenedorProductos.appendChild(div)
})

