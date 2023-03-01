// ========== ARRAYS ==========
// https://developer.mozilla.org/es/docs/Learn/JavaScript/First_steps/Arrays

// Los arrays son tipo de dato compuesto (específicamente un "objeto de tipo lista") que nos ayuda a alamcenar de forma ordenada una lista de elementos de datos bajo un solo nombre de variable. Dentro de las propiedades y operaciones que podemos hacer con los arrays son: crear una matriz, recuperar, agregar y eliminar elementos almacenados en una matriz, y más.

// Para la declaración de un array se recomienda hacer uso de la palabra reservada "const"

// Declarar un array (forma 1)
const arrayOne = new Array("value1", "value2", "value3", 1 , 2, 3, true, null, false)
console.log(arrayOne)

// Declarar un array (forma 2)
const arrayTwo = ["value1", "value2", "value3", 1 , 2, 3, true, null, false]
console.log(arrayTwo)

// Consideraciones importantes: Los array almacenan los valores que contiene, en "índices", iniciando con el índice "cero" (0), y así sucecivamente hasta el elemento "enésimo". Por ello, para acceder a un determinado valor, se debe hacer específicamente con el índice donde se encuentra dicho valor mediante la siguiente notación: arrayName[indexValue], por ejemplo:

console.log(arrayTwo[2]) // Accedemos al elemento posicionado en el índice 2 => value3
console.log(arrayTwo[6]) // Accedemos al elemento posicionado en el índice 6 => true


// ========== MÉTODOS DE LOS ARRAYS (algunos)==========

const countries = ["México", "Colombia", "Argentina", "Brasil", "Guatemala"]
console.log(countries)

// INSERTAR un elemento al FINAL de la lista 
// .push(value)
countries.push("Uruguay")
console.log(countries)

// INSERTAR un elemento al INICIO de la lista
// .unshift(value)
countries.unshift("Ecuador")
console.log(countries)

// ELIMINAR el PRIMER elemento de una lista
// .shift()
countries.shift()
console.log(countries)

// ELIMINAR el ÚTLIMO elemento de una lista
// .pop()
countries.pop()
console.log(countries)

// ELIMINAR determinado número de elementos a partir de una posición especificada, con la posibilidad de agregar otros a partir del índice donde se comienza la eliminacipon de dichos elementos
// .splice(index, deleteCount, addElement)
countries.splice(4, 1, "guatemala")
console.log(countries)

// CONOCER el número de elementos de una lista
// .lentgh
console.log(`Elementos del array "countries" = ${countries.length}`)

// FILTRAR elementos de una lista de acuerdo a una fucnión "callback" y asignar la nueva lista a una variable
// .filter()
const filteredCountries = countries.filter(country => country.length > 6)
console.log(filteredCountries)

// TRANSFORMAR un array en una cadena de caracteres (string)
// .join(separator)
let arrToStr = countries.join(", ")
console.log(arrToStr)
arrToStr = countries.join(" - ")
console.log(arrToStr)
arrToStr = countries.join("*")
console.log(arrToStr)

// ORDENAR una lista de forma ASCENDENTE
// .sort()
 countries.sort()
 console.log(countries)

//  CONOCER el ÍNDICE de un elemento que existe dentro de un elemento
// .indexOf()
console.log(countries.indexOf("México"))
let mexicoIndex = countries.indexOf("México")
console.log(mexicoIndex)

// FUSIONAR dos listas y crear una nueva lista con estos elementos
// .concat()
const names = ["John", "Dave", "Elena", "Rouse", "Peter"]
const joined = countries.concat(names)
console.log(joined)
console.log(countries)
console.log(names)