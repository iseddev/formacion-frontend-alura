# Herencia e Interfaces en la POO

## Proyecto base

En esta preparación, se tomará en cuenta un proyecto enfocado en la utilidad de un banco, que llamaremos *Banco Popular*, el cuál implementará ciertas actividades entres sus clientes y las cuentas de estos clientes mediante el uso de JavaScript y el paradigma de la Programación Orientada a Objetos (POO).  

Este proyecto está basado en el que se realizó en la preparación JavaScript: Introducción a la POO, a la que se puede acceder desde [aquí](../../02_JavaScript/02_04_IntroduccionPOO/).  

### Creación de la clase `SavingAccount`

Vamos a crear la clase `SavingAccount` para agregar un nuevo tipo de cuenta disponible para los clientes del banco. Esto puede quedar de la siguiente forma:
```js
export class SavingAccount {
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
```
Aunque esto es correcto, no es la forma más óptima de realizar nuestro código, puede ser que lo más recomendable sea crear una clase que contenga las características principales y comunes para que posteriormente se *copien* o *hereden* a nuevas clases, pero que estas nuevas clases puedan agregar sus propias características.