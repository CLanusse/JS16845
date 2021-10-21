
let resultadosExamen = {
  Primera: 9.8,
  Segunda: 9,
  Tercera: 7.6,
  Cuarta: 6.2,
  Quinta: 6,
  Sexta: 6,
};


let {Tercera, Quinta, Primera} = resultadosExamen

Tercera = 4
Quinta = 5
Primera = 0

console.log(Tercera)
console.log(Quinta)
console.log(Primera)

console.log(resultadosExamen)

const arreglo = [1, 2, 3, 4, 5, 6]

const copiaDeArreglo = [...arreglo] // copia de arreglo con inmutabilidad
copiaDeArreglo[0] = 123

console.log(arreglo)
console.log(copiaDeArreglo)

let [a, b] = arreglo

console.log(a, b)