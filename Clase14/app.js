
const url = "https://jsonplaceholder.typicode.com/posts"

let data = []

//         url ,                                    funcion de callback
$.get("https://jsonplaceholder.typicode.com/posts", (response, state) => {

    data = response
    console.log(data)

    data.forEach( (post) => {
        $('#posts').append(`
            <li>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </li>
        `)
    })

})

console.log(data)

// ========= JSON ============

$.get('./tutores.json', (res) => {
    console.log(res)

    res.forEach((tutor) => {

        $('#tutores').append(`
            <li>
                <h3>Nombre: ${tutor.nombre}</h3>
                <h3>Apellido: ${tutor.apellido}</h3>
            </li>
        
        `)
    })
})

console.log("Hola mundo")

