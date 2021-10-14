

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


// setTimeout( () => {
//     $('h1').fadeOut(1000)
// }, 2000)

// setInterval( () => {
//     $('h1').fadeOut(500, () => {
//         $('h1').fadeIn(500)
//     })

// }, 1200)


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


// ============

// $('section p').css("background-color", "#444444")
// $('section p').css("color", "white")
// $('section p').css("font-size", "28px")

$('section p').css({
    "background-color": "#444",
    "color": "white",
    // "font-size": "30px",
    "font-style": "italic"
})

$('section p').addClass('fontBig')

$('section p').click( () => {
    $('section p').toggleClass('fontBig')
    $('section p').toggleClass('fontSmall')
})


// ================
$('h1').css({
    "font-size": "10px",
    "opacity": 0,
    "color": "red"
})

$('h1').animate({
    "font-size": "40px",
    "opacity": 1,
    "margin-left": "50%"
}, 5000)


$('#square').css('background-color', 'yellow')
$('#square').css('width', '0')


// $('#square')
//     .animate({
//         "width": "100%",
//         "height": "100vh"
//     }, 1000)
//     .animate({
//         "width": "200px",
//         "height": "200px",
//         "border-radius": "50%"
//     }, 500)
//     .fadeOut(600)
//     .delay(1000)
//     .slideDown(1500)
//     .animate({
//         "border-radius": 0
//     }, 1000)
//     .slideUp(500)
//     .delay(2000)
//     .fadeIn(500)
//     .delay(1000)
//     .animate({
//         "width": "600px",
//         "height": "600px"
//     }, 1500)
//     .delay(3000)
//     .fadeOut(5000)


//  SWAL 


$('#swal').click( () => {
    Swal.fire({
        icon: 'success',
        title: 'Funciona!',
        text: 'Esta librería es genial'
        }
      )
})