



// for 

//   paso 0      paso 1      paso 3
// for (let i = 0; i < 10; i++) {
//     // paso 2
//     // iteracion

//     console.log(i)    
 
//     if (i === 5) {
//         console.log("Mi número favorito!")
//     }

// }


// tabla de multiplicar

// const tabla = parseInt(prompt('Ingrese la tabla que quiere conocer'))

// for (let i = 1; i <= 10; i++) {
//     console.log(i * tabla)
// }

// console.log("Fin de la iteración")




// while 

// let i = 1

// while (i <= 10) {
    
//     console.log(i * tabla)
//     i++
// }


// let pass = parseInt( prompt('Ingrese la contraseña') )

// while (pass != 1234) {

//     alert('Contraseña inválida. Pruebe nuevamente')

//     pass = parseInt(prompt('Ingrese la contraseña'))
// }

// do while 


let pass

do {
    pass = parseInt( prompt('Ingrese la contraseña') )
    
} while (pass != 1234)

alert('Bienvenido!')