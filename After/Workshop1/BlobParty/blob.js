
let {height, width} = document.body.getBoundingClientRect()

console.log( document.body.getBoundingClientRect() )

window.addEventListener('resize', ()=>{
    height = document.body.getBoundingClientRect().height
    width = document.body.getBoundingClientRect().width
})

window.addEventListener('click', ({x, y})=> {
   
   addBlob(x, y)
})

function addBlob(posX, posY) {

    const blob = document.createElement('img')
    blob.src = "blob.gif"
    blob.style = `
                position: fixed;
                height: 50px;
                width: 50px;
                top: ${posY}px;
                left: ${posX}px;
                transition: all 3s ease-in-out;`

    document.body.appendChild(blob)

    blob.addEventListener('transitionend', ()=>{
        blob.style.top = Math.round( Math.random() * (height- 50) ) + 'px'
        blob.style.left = Math.round( Math.random() * (width - 50) ) + 'px'
    })

    setTimeout(()=>{
        blob.style.top = Math.round( Math.random() * (height - 50) ) + 'px'
        blob.style.left = Math.round( Math.random() * (width - 50) ) + 'px'
    }, 100)
    
}

// == background body ==

// const party = document.body

// party.addEventListener('transitionend', ()=>{
//     party.style.backgroundColor = randomColor()
// })

// party.style.backgroundColor = randomColor()


// function randomColor() {
//     return `rgb(${Math.round( Math.random() *255)}, ${Math.round( Math.random() *255)}, ${Math.round( Math.random() *255)})`
// }