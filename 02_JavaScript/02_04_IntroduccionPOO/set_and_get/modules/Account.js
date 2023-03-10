import { Customer } from "./Customer.js"

export class Account {
  #customer
  number
  #balance // Definimos que balance es un atributo privado
  branch

  set setCustomer(obj) {
    if(obj instanceof Customer) {
      this.#customer = obj
    } else {
      console.error("El valor asignado no es válido, revisa los datos ingresados...")
    }
  }

  get getCustomer () {
    return this.#customer
  }

  constructor() {
    this.#customer = null
    this.number = ""
    this.#balance = 0
    this.branch = ""
  }

  withdrawal(amount) {
    console.log(`Retiro de $${amount} desde la cuenta de ${this.#customer.name}`)
    if(this.#balance >= amount) {
      this.#balance -= amount
      return this.#balance
    } else {
      console.error(`ERROR!!! El saldo disponible (${this.#balance}) supera el monto de retiro (${amount})`)
      return false
    }
  }

  deposit(amount) {
    console.log(`Deposito de $${amount} a la cuenta de ${this.#customer.name}`)
    amount > 0
      ? this.#balance += amount
      : console.error(`ERROR!!! ${amount} NO es válido, ingresa un importe válido`)
    return this.#balance
  }

  showBalance() {
    return `El balance actual en la cuenta de ${this.#customer.name} es: $${this.#balance}`
  }

  transferFunds(amount, destination) {
    const isValidTransfer = this.withdrawal(amount)
    if(isValidTransfer) {
      destination.deposit(amount)
    } else {
      console.error(`No fue posible realizar la transferencia solicitada, favor de revisar información ingresada`)
    }
  }
}