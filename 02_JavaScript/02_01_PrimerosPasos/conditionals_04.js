// ========== CONDICIONALES ==========

// ##### for #####

// const courses = ["HTML", "CSS", "JavaScript", "PHP", "SASS", "NodeJS"]
// let courseCosts = [20, 25,30, 35,20, 30]

const courses = [
  {
    "course": "HTML",
    "cost": 20
  },
  {
    "course": "CSS",
    "cost": 25
  },
  {
    "course": "JavaScript",
    "cost": 30
  },
  {
    "course": "PHP",
    "cost": 35
  },
  {
    "course": "SASS",
    "cost": 20
  },
  {
    "course": "NodeJS",
    "cost": 30
  },
]

let studentChoice = "JavaScript"
let budgetAvailable = 25

console.log(`\nfor LOOP => The budget available is: ${budgetAvailable}`)
for(let i = 0; i < courses.length; i++) {
  if(budgetAvailable >= courses[i].cost) {
    console.log(`You can purchase the ${courses[i].course} ($${courses[i].cost}) course...`)
  }
}

let i = 0
console.log(`\nwhile LOOP => The budget available is: ${budgetAvailable}`)
while(i < courses.length) {
  if(courses[i].cost <= budgetAvailable) {
    console.log(`You can purchase the ${courses[i].course} ($${courses[i].cost}) course...`)
  }
  i++
}