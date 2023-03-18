export class Account {
  #customer
  #balance

  constructor(customer, number, branch, balance) {
    if(this.constructor === Account) {
      throw new Error("Ne se debe instanciar directamente de la claase principal 'Account', crea una nueva clase mediante 'extends' en su lugar...")
    }
    this.#customer = customer
    this.number = number
    this.branch = branch
    this.#balance = balance
  }

  withdrawal(amount, fee) {
    // this._withdrawal(amount, 0)
    throw new Error("Es necesario implementar el método 'witdrawal' directamente en el objeto creado y definir el porcentaje de comisión aplicable al tipo de cuenta...")
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