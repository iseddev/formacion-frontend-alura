// ========== OPERADORES LÓGICOS ==========
/* 
***** Comparación *****
>, >=, <, <=, ==, ===, !=, !==
*/


// ========== CONDICIONALES ==========

// ##### if - if / else #####
let studentChoice = "JavaScript"
const courses = ["HTML", "CSS", "JavaScript", "PHP", "SASS", "NodeJS"]

// let filteredCourse = courses.filter(course => course === studentChoice)

// Si la "elección" del usuario (studentChoice) se encuentra dentro de los cursos (courses), entonces se obtendrá el índice de dicho elemento, en caso contrario se devolverá -1, por lo que, estamos verificando que por lo menos el índice encontrado sea igual o mayor a cero, debido a que el índice de todo array (con elementos), comienza siempre en cero.
if(courses.indexOf(studentChoice) >= 0) {
  console.log(`Good, ${studentChoice} is available for registration.`)
} else {
  console.log(`Sorry, ${studentChoice} is not available for registration.`)
}

// ========== OPERADORES LÓGICOS ==========
// AND => && - OR => || - NOT => != (STRICT AND => === / STRICT OR => !==)
let studentAge = 18
let isGraduated = true

// Notar el "anidamiento" de operadores lógicos
if(courses.indexOf(studentChoice) >= 0 && (studentAge >= 18 && isGraduated)) {
  console.log(`Good, ${studentChoice} is available for registration.`)
} else {
  console.log(`Sorry, ${studentChoice} is not available for registration.`)
}

// Aplicando lógica con "negación"
studentAge = 17
isGraduated = true

// Notar el "anidamiento" de operadores lógicos
if(!(courses.indexOf(studentChoice) >= 0 && (studentAge >= 18 && isGraduated))) {
  console.log(`Sorry, ${studentChoice} is not available for registration.`)
} else {
  console.log(`Good, ${studentChoice} is available for registration.`)
}

// ========== OPERADOR CONDICIONAL: switch() { ... } ==========
studentChoice = "CSS" // "HTML", "CSS", "JavaScript", "PHP", "SASS", "NodeJS"
let courseCost = 0

if(courses.indexOf(studentChoice)) {
  if(studentChoice === "HTML") {
    courseCost = 20
  } else if(studentChoice === "CSS") {
    courseCost = 25
  } else if(studentChoice === "JavaScript") {
    courseCost = 30
  } else if(studentChoice === "PHP") {
    courseCost = 35
  } else if(studentChoice === "SASS") {
    courseCost = 20
  } else if(studentChoice === "NodeJS") {
    courseCost = 30
  }
  console.log(`Good, ${studentChoice} is available for registration.`)
  console.log(`The cost of ${studentChoice} course is: $${courseCost} USD`)
} else {
  console.log(`Sorry, ${studentChoice} is not available for registration.`)
}

// Aplicando SWITCH
// "HTML", "CSS", "JavaScript", "PHP", "SASS", "NodeJS"

studentChoice = "SASS"

switch(studentChoice) {
  case "HTML":
    courseCost = 20
    break
  case "CSS":
    courseCost = 25
    break
  case "JavaScript":
    courseCost = 30
    break
  case "PHP":
    courseCost = 35
    break
  case "SASS":
    courseCost = 20
    break
  case "NodeJS":
    courseCost = 30
    break
  default:
    courseCost = 0
}

console.log(`\nswitch CONDITIONAL => The student chioce is: ${studentChoice}`)
if(courseCost > 0) console.log(`The cost of ${studentChoice} course is: $${courseCost} USD`)


// Aplicando WHILE
// courses = ["HTML", "CSS", "JavaScript", "PHP", "SASS", "NodeJS"]
let courseCosts = [20, 25,30, 35,20, 30]
let budgetAvailable = 25
let i = 0

console.log(`\nwhile LOOP => The budget available is: ${budgetAvailable}`)
while(courseCosts[i] <= budgetAvailable && courses.length > 0) {
  console.log(`You can purchase the ${courses[i]} course...`)
  i++
}

// Otra alternativa: do - while