import { Customer } from "./modules/Customer.js"
import { Account } from "./modules/Account.js"

const john = new Customer()
john.name = "John"
john.dni = "17652037"
john.rfc = "AAAA0000000A0"

const johnsAccount = new Account()
johnsAccount.number = "19237493649"
johnsAccount.branch = "001"
johnsAccount.customer = john

console.log(johnsAccount)
johnsAccount.deposit(1000)

// ###################

const doe = new Customer()
doe.name = "Doe"
doe.dni = "49237105"
doe.rfc = "BBBB0000000B0"

const doesAccount = new Account()
doesAccount.number = "93843845023"
doesAccount.branch = "007"
doesAccount.customer = doe

console.log(doesAccount)
doesAccount.deposit(200)

// ###################

console.log(johnsAccount.showBalance())
console.log(doesAccount.showBalance())
johnsAccount.transferFunds(1500, doesAccount)
console.log(johnsAccount.showBalance())
console.log(doesAccount.showBalance())

// ###################

console.log(johnsAccount.showBalance())
console.log(doesAccount.showBalance())
johnsAccount.transferFunds(400, doesAccount)
console.log(johnsAccount.showBalance())
console.log(doesAccount.showBalance())