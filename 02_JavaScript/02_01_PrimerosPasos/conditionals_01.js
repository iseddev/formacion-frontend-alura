// ========== Condicionales "anidados" ==========

// ##### if - if / else #####
let studentChoice = "JavaScript"
let studentAge = 18
let isGraduated = true
const courses = ["HTML", "CSS", "JavaScript", "PHP", "SASS", "NodeJS"]

if(studentAge >= 18 && isGraduated) {
  if(courses.indexOf(studentChoice) >= 0) {
    console.log(`Good, ${studentChoice} is available for registration.`)
  } else {
    console.log(`Sorry, ${studentChoice} is not available for registration.`)
  }
} else {
  console.log(`Student does not comply with registration rules`)
}

studentChoice = "Python"
studentAge = 18
isGraduated = true
if(studentAge >= 18 && isGraduated) {
  if(courses.indexOf(studentChoice) >= 0) {
    console.log(`Good, ${studentChoice} is available for registration.`)
  } else {
    console.log(`Sorry, ${studentChoice} is not available for registration.`)
  }
} else {
  console.log(`Student does not comply with registration rules`)
}

studentChoice = "PHP"
studentAge = 17
isGraduated = true
if(studentAge >= 18 && isGraduated) {
  if(courses.indexOf(studentChoice) >= 0) {
    console.log(`Good, ${studentChoice} is available for registration.`)
  } else {
    console.log(`Sorry, ${studentChoice} is not available for registration.`)
  }
} else {
  console.log(`Student does not comply with registration rules`)
}

studentChoice = "NodeJS"
studentAge = 10
isGraduated = false
if(studentAge >= 18 && isGraduated) {
  if(courses.indexOf(studentChoice) >= 0) {
    console.log(`Good, ${studentChoice} is available for registration.`)
  } else {
    console.log(`Sorry, ${studentChoice} is not available for registration.`)
  }
} else {
  console.log(`Student does not comply with registration rules`)
}