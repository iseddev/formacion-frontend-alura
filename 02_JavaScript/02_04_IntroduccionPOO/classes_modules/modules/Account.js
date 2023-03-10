export class Account {
  customer
  number
  #balance // Definimos que balance es un atributo privado
  branch

  constructor() {
    this.customer = null
    this.number = ""
    this.#balance = 0
    this.branch = ""
  }

  withdrawal(amount) {
    console.log(`Retiro de $${amount} desde la cuenta de ${this.customer.name}`)
    if(this.#balance >= amount) {
      this.#balance -= amount
      return this.#balance
    } else {
      console.error(`ERROR!!! El saldo disponible (${this.#balance}) supera el monto de retiro (${amount})`)
      return false
    }
  }

  deposit(amount) {
    console.log(`Deposito de $${amount} a la cuenta de ${this.customer.name}`)
    amount > 0
      ? this.#balance += amount
      : console.error(`ERROR!!! ${amount} NO es válido, ingresa un importe válido`)
    return this.#balance
  }

  showBalance() {
    return `El balance actual en la cuenta de ${this.customer.name} es: $${this.#balance}`
  }

  transferFunds(amount, destinationAccount) {
    const isValidTransfer = this.withdrawal(amount)
    if(isValidTransfer) {
      destinationAccount.deposit(amount)
    } else {
      console.error(`No fue posible realizar la transferencia solicitada, favor de revisar información ingresada`)
    }
  }
}