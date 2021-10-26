///1 - Encontrar la temperatura más baja de los tres días

const temperaturasLunes = [16, 20, 5];
const temperaturasMartes = [9, 15, 10];
const temperaturasMiercoles = [14, 20, 8];

// const temperaturas = temperaturasLunes.concat(temperaturasMartes).concat(temperaturasMiercoles)
const temperaturas = [...temperaturasLunes, ...temperaturasMartes, ...temperaturasMiercoles]


// let min = Infinity

// for (const temp of temperaturas) {
//   if (temp < min) {
//     min = temp
//   }
// }
  
// let min = temperaturas.slice().sort( (a,b) => a - b)[0]
// console.log(temperaturas)
// console.log(min)

// spread - min/max

// console.log( ...temperaturas )
// console.log(16, 20, 5, 9, 15, 10, 14, 20, 8)

let min = Math.min(...temperaturas)
let max = Math.max(...temperaturas)
// console.log(min)
// console.log(max)

///2 - Agregar un atributo "peso" al objeto tomas

let tomas = {
  nombre: "Tomás",
  especie: "Perro",
  raza: "caniche",
  edad: 14,
};

let tomas2 = {
  ...tomas,
  peso: 25,
  nombre: "Ricardo"
}

// console.log(tomas2)

tomas.peso = 30

// console.log(tomas)

///3 - Crear una clase (o función constructora) que permita crear objetos tipo Mascota con
// las mismas propiedades que tomás

class Mascota {
  constructor (nombre, especie, raza, edad, peso) {
    this.nombre = nombre
    this.especie = especie
    this.raza = raza
    this.edad = edad
    this.peso = peso
  }
}

// 4 .- Usando métodos de array la clase anterior creada, agregar varios objetos de tipo Mascota
// al array mascotas. Luego recorrer el array y buscar cuál es la mascota más joven, 
// y luego cuál es la más pesada

const mascotas = []

mascotas.push( new Mascota("Flufy", "gato", "siames", 5, 20) )
mascotas.push( new Mascota("Zuri", "roedor", "cobayo", 3, 1) )
mascotas.push( new Mascota("Garrafa", "perro", "caniche", 1, 14) )

let joven = mascotas.sort( (a, b) => a.edad - b.edad)[0]
let pesada = mascotas.sort( (a, b) => b.peso - a.peso)[0]

// console.log(joven)
// console.log(pesada)

