const customerName = "Israel"
const customerId = "17652037"
const custonerAccount = "19237493649"
const customerBalance = 1000
const customerRfc = "AAAA0000000A0"

console.log(customerName)

// Aplicando POO - Clases
class Customer {
  name
  dni
  rfc

  constructor() {
    this.name = ""
    this.dni = ""
    this.rfc = ""
  }
}

class Account {
  number
  #balance // Definimos que balance es un atributo privado
  branch

  constructor() {
    this.number = ""
    this.#balance = 0
    this.branch = ""
  }

  withdrawal(amount) {
    console.log(`Withdrawing ${amount} from bank account`)
    this.#balance >= amount
      ? this.#balance -= amount
      : console.error(`ERROR!!! El saldo disponible (${this.#balance}) supera el monto de retiro (${amount})`)
    return this.#balance
  }

  deposit(amount) {
    console.log(`Depositing ${amount} to bank account`)
    amount > 0
      ? this.#balance += amount
      : console.error(`ERROR!!! ${amount} NO es válido, ingresa un importe válido`)
    return this.#balance
  }

  showBalance() {
    return this.#balance
  }
}

// Instanciar (referenciar a) a la clase `Customer`
const customerOne = new Customer()
// Definiendo los valores para cada una de las propiedades del objeto
customerOne.name = "John"
customerOne.dni = "17652037"
customerOne.rfc = "AAAA0000000A0"
console.log(customerOne)

const customerTwo = new Customer()
customerTwo.name = "Doe"
customerTwo.dni = "92864128"
customerTwo.rfc = "BBBB0000000B0"
console.log(customerTwo)

const accountOne = new Account()
accountOne.number = "19237493649"
// accountOne.#balance = 1000 // Ya no es posible acceder a este atributo
accountOne.deposit(1000)
accountOne.branch = "CDMX"
console.log(accountOne)

const accountTwo = new Account()
accountTwo.number = "81741092537"
// accountTwo.#balance = 8000 // Ya no es posible acceder a este atributo
accountTwo.deposit(8000)
accountTwo.branch = "Guadalajara"
console.log(accountTwo)

// console.log(accountOne.#balance) // Ya no es posible acceder a este atributo
accountOne.deposit(750)
// console.log(accountOne.#balance) // Ya no es posible acceder a este atributo

// console.log(accountTwo.#balance) // Ya no es posible acceder a este atributo
accountTwo.withdrawal(1200)
// console.log(accountTwo.#balance) // Ya no es posible acceder a este atributo

// console.log(accountOne.#balance) // Ya no es posible acceder a este atributo
accountOne.withdrawal(5000)
// console.log(accountOne.#balance) // Ya no es posible acceder a este atributo

// console.log(accountTwo.#balance) // Ya no es posible acceder a este atributo
accountTwo.deposit(-500)
// console.log(accountTwo.#balance) // Ya no es posible acceder a este atributo

let balance = accountOne.showBalance()
console.log(`El saldo actual de accountOne es: ${balance}`)
balance = accountOne.deposit(750)
console.log(`El saldo actual de accountOne es: ${balance}`)

balance = accountTwo.showBalance()
console.log(`El saldo actual de accountTwo es: ${balance}`)
balance = accountTwo.withdrawal(1200)
console.log(`El saldo actual de accountTwo es: ${balance}`)