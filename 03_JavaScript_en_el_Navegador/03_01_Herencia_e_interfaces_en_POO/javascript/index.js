import { Customer } from "./modules/Customer.js"
import { CommonAccount } from "./modules/CommonAccount.js"
import { CheckingAccount } from "./modules/CheckingAccount.js"
import { SavingAccount } from "./modules/SavingAccount.js"

const john = new Customer("John", "17652037", "AAAA0000000A0")
const johnsCheckingAccount = new CheckingAccount(john, "19237493649", "001")
console.log(johnsCheckingAccount)
const johnsSavingAccount = new SavingAccount(john, 0, "23434957301", "001")
console.log(johnsSavingAccount)
const johnsCommonAccount = new CommonAccount(john, 0, "93845729483", "001")
console.log(johnsCommonAccount)