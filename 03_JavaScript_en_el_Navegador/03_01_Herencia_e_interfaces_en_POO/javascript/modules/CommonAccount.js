export class CommonAccount {
  #customer
  #balance

  constructor(customer, balance, number, branch) {
    this.number = number
    this.branch = branch
    this.#customer = customer
    this.#balance = balance
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