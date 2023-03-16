export class Account {
  #customer
  #balance

  constructor(type, customer, balance, number, branch) {
    this.type = type
    this.number = number
    this.branch = branch
    this.#customer = customer
    this.#balance = balance
  }

  withdrawal(amount) {
    if(this.#balance >= amount) {
      if(this.type === "Checking") {
        console.log(`Retiro de $${amount} de la cuenta corriente de ${this.#customer.name}`)
        this.#balance -= amount * 1.05
        return this.#balance
      } else if(this.type === "Saving") {
        console.log(`Retiro de $${amount} de la cuenta de ahorros de ${this.#customer.name}`)
        this.#balance -= amount * 1.02
        return this.#balance
      } else {
        console.error(`ERROR!!! El tipo de cuenta no es válido`)
      }
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