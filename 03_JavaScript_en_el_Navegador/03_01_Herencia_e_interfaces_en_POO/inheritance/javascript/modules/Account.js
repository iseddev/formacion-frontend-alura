export class Account {
  #customer
  #balance

  constructor(customer, number, branch, balance) {
    this.#customer = customer
    this.number = number
    this.branch = branch
    this.#balance = balance
  }

  withdrawal(amount, fee) {
    _withdrawal(amount, 0)
  }
  
  _withdrawal(amount, fee) {
    amount *= fee / 100 + 1
    if(this.#balance >= amount) {
      console.log(`Retiro de $${amount} de la cuenta de ${this.#customer.name}`)
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