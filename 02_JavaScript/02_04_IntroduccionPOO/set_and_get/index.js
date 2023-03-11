import { Customer } from "./modules/Customer.js"
import { Account } from "./modules/Account.js"

// const john = new Customer()
// john.name = "John"
// john.dni = "17652037"
// john.rfc = "AAAA0000000A0"

const john = new Customer("John", "17652037", "AAAA0000000A0")

// const johnsAccount = new Account()
// johnsAccount.number = "19237493649"
// johnsAccount.branch = "001"
// johnsAccount.setCustomer = john

const johnsAccount = new Account(john, "19237493649", "001")

console.log(johnsAccount)
console.log(johnsAccount.getCustomer)

// johnsAccount.setCustomer = 0
// console.log(johnsAccount)

// johnsAccount.setCustomer = "A"
// console.log(johnsAccount)

console.log(`Cantidad de cuentas creadas hasta el momento: ${Account.accountNumbers}`)

new Account(john, "19237493649", "001")
new Account(john, "19237493649", "001")
new Account(john, "19237493649", "001")
new Account(john, "19237493649", "001")
new Account(john, "19237493649", "001")

console.log(`Cantidad de cuentas creadas hasta el momento: ${Account.accountNumbers}`)