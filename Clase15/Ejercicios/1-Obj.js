///1 - Encontrar la temperatura más baja de los tres días

const temperaturasLunes = [16, 20, 5];
const temperaturasMartes = [9, 15, 10];
const temperaturasMiercoles = [14, 20, 8];


// spread - min/max




///2 - Agregar un atributo "peso" al objeto tomas

let tomas = {
  nombre: "Tomás",
  especie: "Perro",
  raza: "caniche",
  edad: 14,
};


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


