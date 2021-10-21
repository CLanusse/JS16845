// pokeapi

let id = 1

// fetch
const llamarPokemon = (query) => {
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`)
        .then( (response) => response.json()) // paso 1
        .then( (data) => {          // paso 2
            console.log(data) 

            const name = data.name
            const img = data.sprites.front_default
            id = data.id

            $('#pokemon').html('')

            $('#pokemon').append(`
                <h2>${name}</h2>
                <img src=${img} alt=${name}/>
            `)
        })
        .catch((err) => {
            alert('No hay resultados para esa búsqueda')
        })

}

llamarPokemon(id)

$('#siguiente').click( () => {
    id++
    llamarPokemon(id)
}) 

$('#anterior').click( () => {
    if (id > 1) { 
        id-- 
        llamarPokemon(id)
    }
})

$('#search').submit( (e) => {
    e.preventDefault()
    const search = $('input').val().trim()

    llamarPokemon(search)
})


// jQuery - get

// const llamarPokemon = (query) => {
//     $.get(`https://pokeapi.co/api/v2/pokemon/${query}`, (res) => {

//         console.log(res)
        // const name = res.name
        // const img = res.sprites.front_default
        // id = res.id

        // $('#pokemon').html('')

        // $('#pokemon').append(`
        //     <h2>${name}</h2>
        //     <img src=${img} alt=${name}/>
        // `)
    
//     })
// }