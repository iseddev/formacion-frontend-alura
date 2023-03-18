import { Customer } from "./modules/Customer.js"
import { CheckingAccount } from "./modules/Accounts/CheckingAccount.js"
import { SavingAccount } from "./modules/Accounts/SavingAccount.js"
import { PayrollAccount } from "./modules/Accounts/PayrollAccount.js"
import { Employee } from "./modules/Employees/Employee.js"
import { Manager } from "./modules/Employees/Manager.js"
import { Director } from "./modules/Employees/Director.js"
import { Autentication } from "./modules/System/Autentication.js"

const john = new Customer("John", "17652037", "AAAA0000000A0")
console.log(john)
john.setPassword = "7364"
console.log(Autentication.checkPassword(john, "7365"))

// Creamos los objetos eployee, manager y director instanciados desde sus respectivas clases principales
const employee = new Employee("John Doe", "3284913", 500)
const manager = new Manager("Elena Doe", "2973490", 650)
const director = new Director("Frank Doe", "9120306", 850)

console.log(employee)
console.log(employee.showBonus())
employee.setPassword = "1234"
console.log(Autentication.checkPassword(employee, "1234"))

console.log(manager)
console.log(manager.showBonus())
manager.setPassword = "5678"
console.log(Autentication.checkPassword(manager, "5678"))

console.log(director)
console.log(director.showBonus())
director.setPassword = "9182"
console.log(Autentication.checkPassword(director, "09182"))
