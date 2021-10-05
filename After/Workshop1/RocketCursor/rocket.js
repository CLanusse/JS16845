const rocket = document.createElement('img')
rocket.src = "shuttle.png"
rocket.className = "rocket"
document.body.appendChild(rocket)


window.addEventListener('mousemove', ({x, y})=>{

    console.log(x, y)
    moverRocket(x, y)

})

function moverRocket(newX, newY) {

    const {x, y} = rocket.getBoundingClientRect()

    let rotate = 0
    
    if (newY >= y) {
        if (newX >= x) {
            rotate = 90
        } else {
            rotate = 180
        }
    } else if (newX <= x) {
        rotate = 270
    }

    rocket.style.transform = `rotate(${rotate}deg)`
    rocket.style.top = (newY) + 'px'
    rocket.style.left = (newX) + 'px'
}