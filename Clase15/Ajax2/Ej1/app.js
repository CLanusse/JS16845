const lista = document.getElementById('lista')
const form = document.getElementById('form')
const input = document.getElementById('input-busqueda')
const loader = document.getElementById('loader')

const API_KEY = "F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9"

// async function llamarAPI () { ... }

const llamarAPI = async (search) => {

    loader.style.display ="block"

    const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=20`)
    const data = await response.json()

    const imgs = data.data

    lista.innerHTML = ""

    imgs.forEach( (img) => {
        const src = img.images.downsized_medium.url
        lista.innerHTML += `
            <li class="card col-3">
                <img src=${src} />
            </li>
        `
    })
    
    loader.style.display = "none"

}

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const busqueda = input.value.trim()

    llamarAPI(busqueda)
})


// fetch then/catch
// fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${search}&limit=20`)
//     .then( (response) => response.json() )
//     .then( (data) => {
//         loader.style.display ="none"

    // const imgs = data.data
    // lista.innerHTML = ""

    // imgs.forEach( (img) => {
    //     const src = img.images.downsized_medium.url

    //     lista.innerHTML += `
    //         <li class="card col-3">
    //             <img src=${src} />
    //         </li>
    //     `
    // })
    // })
//     .catch( (error) => console.log(error))


























// const KEY = 'F8OpHcQX4zWWiea6boAd6QRvTtj1ZUc9'

// const lista = document.getElementById('lista')
// const input = document.getElementById('input-busqueda')
// const form = document.getElementById('form')


// const llamarAPI = (busqueda, limit) => {

//     fetch(`https://api.giphy.com/v1/gifs/search?limit=${limit}&api_key=${KEY}&q=${busqueda}`)
//         .then( (res) => res.json())
//         .then( (data) => {

//             const images = data.data
//             lista.innerHTML = ''   
//             images.forEach( (img) => {
    
//                 lista.innerHTML += `
//                     <li class="card col-3">
//                         <img src=${img.images.downsized_medium.url} alt="" />
//                     </li>
//                 `
//             })
//         })
// }

// form.addEventListener('submit', (e) => {
//     e.preventDefault()
    
//     const limit = $('.radio:checked').val()

//     llamarAPI(input.value, limit)
// })


