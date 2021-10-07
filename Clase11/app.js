


const tituloNativo = document.getElementById('titulo')

const tituloJQ = $('.titulo')

const items = $('section ul li')



// console.log( $('.item:nth-child(3)') )
// console.log( $('.item:first-of-type') )



tituloJQ.text('Bienvenidos a clase!')

console.log( tituloJQ.text() )




const input = $('#input')

document.getElementById('input').addEventListener('input', () => {
    console.log( input.val() )

    if (input.val().length > 20) {

        input.val("")
    }
})


document.getElementById('btn').addEventListener('click',() => {

    console.log( $('.radio:checked').val() )
})



// console.log( $('.titulo, li, #btn') )

// $('*').remove()
// $('.titulo, li, #btn').text('desastre')


const stock = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 1000
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 1000
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 1000
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 1000
    },
]


// const producto = stock[0]

const contenedor = $('#contenedor')
contenedor.html("")

// const div = document.createElement('div')
// div.innerHTML = `
//             <h3>${producto.nombre}</h3>
//             <p>Precio: $${producto.precio}</p>
//             `

// contenedor.append(div)


stock.forEach((producto) => {

    contenedor.prepend(`
                    <div class="item-producto card">
                        <h3>${producto.nombre}</h3>
                        <p>Precio: $${producto.precio}</p>
                    </div>
                    `
    )
})


$('h2.titulo').after(`<hr>`)
