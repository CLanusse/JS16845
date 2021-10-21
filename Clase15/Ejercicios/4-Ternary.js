///Consologuear si Juan puede ver Max Max

const persona = {
  nombre: "Juan",
  edad: 19,
};

const pelicula = {
  titulo: "Mad Max",
  edadMinima: 16,
};

let permiso

// ternario

// if (persona.edad >= pelicula.edadMinima) {
//   permiso = true
// } else {
//   permiso = false
// }

// condicion ? verdadera : falsa

persona.edad >= pelicula.edadMinima ? permiso = true : permiso = false

// permiso ? console.log("Puede pasar") : console.log("No puede pasar")
permiso 
  ? console.log("Puede pasar") 
  : console.log("No puede pasar")


permiso && console.log("AÑSLKJAFL")
