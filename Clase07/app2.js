
const usuario = localStorage.getItem('usuario')

alert('Hola ' + usuario)



const tutorLS = localStorage.tutor 
const tutorSS = sessionStorage.tutor

console.log("LS", tutorLS)
console.log("SS", tutorSS)

// === 


const productosEnLS = localStorage.getItem('productos')

const productos = JSON.parse(productosEnLS)

console.log(productos)

for (let i = 0; i < productos.length; i++) {
    console.log(productos[i])
}



// ===

// sessionStorage.removeItem('tutor')
// localStorage.clear()