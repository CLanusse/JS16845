
let resultadosExamen = {
  Primera: 9.8,
  Segunda: 9,
  Tercera: 7.6,
  Cuarta: 6.2,
  Quinta: 6,
  Sexta: 6,
};


let {Sexta, Segunda, Cuarta} = resultadosExamen

// Tercera = 4
// Quinta = 5
// Primera = 0


// console.log(Sexta)
// console.log(Segunda)
// console.log(Cuarta)

// const mostrarDesestructurado = ( {Primera} ) => {
//   console.log(Primera)
// }
// mostrarDesestructurado(resultadosExamen)


// fetch(url)
//   .then((res) => res.json)
//   .then(( {productos} ) => {
//       // const {productos} = data
//       console.log(productos)
//   })


const arreglo = [1, 2, 3, 4, 5, 6]

const copiaDeArreglo = [...arreglo] // copia de arreglo con inmutabilidad
copiaDeArreglo[0] = 123

// console.log(arreglo)
// console.log(copiaDeArreglo)

let [a, b] = arreglo

// console.log(a, b)