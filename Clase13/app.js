

// $(document).ready( () =>{
//     $('#bienvenidos').fadeOut(3000)
// })

// const titilar = () => {

//     $('h1').fadeOut(500, () => {
//         $('h1').fadeIn(500, () => {
//             titilar()
//         })
//     })
// }

// titilar()

// setInterval(() => {
//     $('h1').fadeOut(500, () => {
//         $('h1').fadeIn(500)
//     })
// }, 1200);


$('#show').click( () => {
    $('h2').show()
})

$('#hide').click( () => {
    $('h2').hide()
})

$('#fadein').click( () => {
    $('h2').fadeIn(2000)
})

$('#fadeout').click( () => {
    $('h2').fadeOut(4000)
})

// $('h2').on('mouseover', () => {
//     $('h2').fadeOut()
// })



