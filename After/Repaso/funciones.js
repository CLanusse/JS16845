// FUNCIONES 


let saludo = "Hola Mundo!"

// declaracion

function saludar() {

    console.log(saludo)

}

// llamado

saludar()


// ============ 

let resultado

function incrementarValor() {
    let value = 2
    value = value * value
    return value
}


function incrementarValorDos() {
    let value = incrementarValor() * incrementarValor()
    return value
}


resultado = incrementarValorDos()

// console.log(resultado)


// ========= 




function sumar(a, b) {
    return a + b
}

function restar(a, b) {
    return a - b
}

function iva(x) {
    return x * 1.21
}

function calcularPresupuesto(ahorro, sueldo, impuestos) {

    let resultado = sumar(ahorro, sueldo)
    resultado = restar(resultado, impuestos)
    resultado = iva(resultado)

    return resultado
}

// const presupuestoUno = calcularPresupuesto(50000, 80000, 20000)
const presupuestoUno = calcularPresupuesto(75000, 20000, 45600)

console.log(presupuestoUno)

// console.log( sumar(4, 5) )
// console.log( sumar(15, 50) )