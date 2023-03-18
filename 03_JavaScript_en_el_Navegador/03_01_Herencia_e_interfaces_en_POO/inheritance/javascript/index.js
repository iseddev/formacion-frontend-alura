import { Customer } from "./modules/Customer.js"
import { Account } from "./modules/Account.js"
import { CheckingAccount } from "./modules/CheckingAccount.js"
import { SavingAccount } from "./modules/SavingAccount.js"
import { PayrollAccount } from "./modules/PayrollAccount.js"

const john = new Customer("John", "17652037", "AAAA0000000A0")
// const johnsCheckingAccount = new CheckingAccount(john, "19237493649", "001")
// console.log(johnsCheckingAccount)
// const johnsSavingAccount = new SavingAccount(john, 0, "23434957301", "001")
// console.log(johnsSavingAccount)
// const johnsAccount = new Account(john, 0, "93845729483", "001")

// Creamos una cuenta de tipo "Checking"
const johnsCheckingAccount = new CheckingAccount(john, "93845729483", "001")
console.log(johnsCheckingAccount)
johnsCheckingAccount.deposit(1000)
console.log(johnsCheckingAccount.showBalance())
johnsCheckingAccount.withdrawal(100)
console.log(johnsCheckingAccount.showBalance())

// Creamos una cuenta de tipo "Saving"
const johnsSavingAccount = new SavingAccount(john, "93845729483", "001", 1000)
console.log(johnsSavingAccount)
console.log(johnsSavingAccount.showBalance())
johnsSavingAccount.withdrawal(200)
console.log(johnsSavingAccount.showBalance())

// const payrollAccount = new Account()
// console.assert.log(payrollAccount)

const johnsPayrollAccount = new PayrollAccount(john, "82263409519", "010", 35)
johnsPayrollAccount.deposit(45)
console.log(johnsPayrollAccount.showBalance())
johnsPayrollAccount.withdrawal(55)
console.log(johnsPayrollAccount.showBalance())
console.log(johnsPayrollAccount)