//CUMPLEAÑOS

let miEdad = 20;
// escribir una función que aumente miEdad en 1

// function cumplirAnios() {
//     // miEdad = miEdad + 1
//     // miEdad++
//     miEdad += 1
// }

const cumplirAnios = () => {
    miEdad++
}

cumplirAnios()

// console.log(miEdad)

// // VIDA

let vida = 100;

// escribir una función recibirGolpe(), que reciba un parámetro tipo number
// y se reste al total vida

const recibirGolpe = (danio) => {
    // vida = vida - danio 
    vida -= danio

    if (vida < 0) {
        vida = 0
    }
}

// recibirGolpe(40)
// recibirGolpe(40)
// recibirGolpe(40)

recibirGolpe(70)

// escribir una función curar() que regenere la vida en 50, hasta un máx de 100

const curar = () => {
    vida += 50

    if (vida > 100) {
        vida = 100
    }
}

curar()
curar()


// escribir un condicional (if) que evalúe si el jugador sigue vivo o no

recibirGolpe(120)

console.log(vida)

if (vida > 0) {
    console.log("El jugador vive")
} else {
    console.log("Estás muerto")
}