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
Ahora, vanos a crear otra clase que pueda usarse como clase principal de una cuenta, la llamaremos `Account`. Esta clase tendrá la misma estructura que la clase `SavingAccount` presentada con anterioridad. Ahora vamos a trabajar únicamente con la clase `Account` para asignar cuentas a los clientes y hacer las operaciones correspondientes que tiene la clase `Account`.  

<br>

---
### Identificar tipos de clases

Aunque lo anterior es correcto, no es la forma más óptima de realizar nuestro código, puede ser que lo más recomendable sea crear una clase que contenga las características principales y comunes para que posteriormente se *copien* o *hereden* a nuevas clases, pero que estas nuevas clases puedan agregar sus propias características.  

Vamos a suponer que para los retiros realizados en la cuenta corriente (`CheckingAccount`) se debe aplicar una comisión del 5% sobre el monto retirado, por lo tanto en nuestra clase `Account` podemos agregar una validación para verificar si la cuenta creada es cuenta corriente (`CheckingAccount`) y aplicar la comisión sobre el retiro:
```js
// ...
constructor(type, customer, balance, number, branch) {
  this.type = type
  // ...
}
// ...
withdrawal(amount) {
  if(this.#balance >= amount) {
    if(this.type === "Checking") {
      console.log(`Retiro de $${amount} de la cuenta de ${this.#customer.name}`)
      this.#balance -= amount * 1.05
      return this.#balance
    }
  } else {
    console.error(`ERROR!!! El saldo disponible (${this.#balance}) supera el monto de retiro (${amount})`)
    return false
  }
}
// ...
```
Ahora, se nos solicita que si la cuenta es de ahorro (`SavingAccount`), la comisión por aplicar sobre retiros es del 2%, por lo que aplicariamos una segunda validación a nuestra clase `Account`, quedando de la siguiente manera:
```js
// ...
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
// ...
```
Si por la razón que sea, existe un error de sintaxis al definir el tipo de cuenta, es decir, si en lugar de colocar `"Saving"` se coloca `"Savings"` (aplicable tambien a la cuenta corriente \[`CheckingAccount`]), por supuesto que esto va a resultar en un error, debido a que el dato ingresado difiere a lo que se definió en la validación del tipo de cuenta. Puedes ver los archivos trabajados hasta este punto [aquí](./starting/)

**Herencia**  

Debido a los posibles errores de sintaxis que podemos tener al utilizar datos que se ingresen de forma manual, entonces podemos hacer uso de las características de la *Herencia* en la POO. Este concepto puede relacionarse con el mundo real, es decir, si consideramos que un hijo *hereda* ciertas características de sus padres (porque son hereditarias), pero que al mismo tiempo, tiene características propias que lo definen como un individuo único, entonces podemos pasar esta comparación a la POO, donde una clase *padre* hereda ciertas características a una clase *hija*, pero esta clase hija, puede tener características que la hagan a su vez única.  

Siguiendo con nuestra práctica, podemos establecer a `Account` como la clase *padre*, de la cual las clases `CheckingAccount` y `SavingAccount` *heredaran* todos sus atributos y métodos, para lo que se tiene que hacer uso de las directivas `extends` y `super()` de la siguiente manera:
```js
// CheckingAccount.js
import { Account } from "./Account.js"

export class CheckingAccount extends Account{

  static accountNumbers = 0

  constructor(customer, number, branch) {
    super(customer, number, branch, 0)
    CheckingAccount.accountNumbers++
  }
}

// SavingAccount.js
import { Account } from "./Account.js";

export class SavingAccount extends Account{
  constructor(customer, number, branch, balance) {
    super(customer, number, branch, balance)
  }
}
```
Como se puede inferir, `extends` hace que la clase *herede* todos los atributos y métodos de `Account`. Por su parte, es necesario hacer uso de ladirectiva `super()` para definir en el constructor de la clase *hija*, los valores necesarios que se solicitan en la clase padre `Account`. Lo anterior ayuda a modularizar de forma más eficiente y legible la utilización de clases *principales* y como las clases secundarias heredan las características de estas clases *padre*.  

Ahora bien, si retomamos las condiciones dadas para el cobro de comisión del 5% para la cuenta corriente (`CheckingAccount`) y 2% para la cuenta de ahorros (`SavingAccount`), podemos hacer dos cosas:  
#### Sobreescritura de métodos
Utilizar la *sobreescritura* del método `withdrawal()` de la clase padre `Account` en cada una de las clases *hijas* para poder realizar la acción de un retiro aplicando un 5% y 2% de incremento según sea el caso, esto puede aplicarse de la siguiente manera:
```js
// CheckingAccount.js
// ...
withdrawal(amount) {
  if(this.#balance >= (amount * 1.05)) {
    console.log(`Retiro de $${amount} de la cuenta de ${this.#customer.name}`)
    this.#balance -= amount * 1.05
    return this.#balance
  } else {
    console.error(`ERROR!!! El saldo disponible (${this.#balance}) supera el monto de retiro (${amount})`)
    return false
  }
}
// ...

// SavingAccount
withdrawal(amount) {
  if(this.#balance >= (amount * 1.02)) {
    console.log(`Retiro de $${amount} de la cuenta de ${this.#customer.name}`)
    this.#balance -= amount * 1.02
    return this.#balance
  } else {
    console.error(`ERROR!!! El saldo disponible (${this.#balance}) supera el monto de retiro (${amount})`)
    return false
  }
}
```
Lo anterior pudiera parecer correcto, pero al ejecutar el método `withdrawal()` en cada una de las clases correspondientes, nos arrojará un error, esto debido a que en la clase *padre* `Account`, se definieron como un atributos privados: `#balance` y `#customer`. Por lo que esta idea no es la más adecuada, pero si no hubiese atributos privados, esto puede ser una buena alternativa.

#### Invocación del método *padre* y agregar nuevas funcionalidades

Para esta opción, lo que se hace es invocar al métdo padre mediante la directiva `super()` y se agregan las funcionalidades necesarias para que no haya conflictos con los atributos privados, esto es:
```js
// CheckingAccount.js
// ...
withdrawal(amount) {
  amount *= 1.05
  super.withdrawal(amount)
}
// ...

// SavingAccount
withdrawal(amount) {
  amount *= 1.02
  super.withdrawal(amount)
}
```
Pero aún podemos mejorar un poco más nuestro código, si le agregamos un parámetro más al método `withdrawal()` de la clase `Account`para el manejo de la comisión por retiro, esto puede quedar de la siguiente forma:
```js
// Account.js
withdrawal(amount, fee) {
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
// CheckingAccount.js
// ...
withdrawal(amount) {
  super.withdrawal(amount, 5)
}
// ...

// SavingAccount
withdrawal(amount) {
  super.withdrawal(amount, 2)
}
```
Hasta este momento, todo esta funcionando bien, pero existe la posibilidad de implementar los llamados *métodos privados*, que aunque JavaScript no tiene (hasta la fecha de esta edición) estríctamente definido una nomenclatura para establecer esto, se utuliza por convención generalizada la utilización del *guión bajo* como inicial de un método que se considerará como un método privado, no por JavaScript, sino por los programadores que han adoptado esta sintaxis para tener una refrencia de que se está haciendo la implementación de un método privado.  
 Entonces, para ejemplificar lo anterior, vamos a crear el método `_withdrawal()`, el cuál funcionará como unmétodo privado y se conservará el método `withdrawal()` que se ha venido manejando. Esto con la finalidad de que si necesitaramos incluir una comisión por retiro, se utilice el método privado, pero en caso de que el retiro no tenga ninguna comisión, utilizar entonces el método *no privado*, esto es:
 ```js
// Account.js
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
// CheckingAccount.js
// ...
withdrawal(amount) {
  super._withdrawal(amount, 5)
}
// ...

// SavingAccount
withdrawal(amount) {
  super._withdrawal(amount, 2)
}
```

### Clases **abstractas**

En el entorno de la POO, existe el concepto de *encapsulación* (también conocido como *abstracción*), que se enfoca en la *protección* de una clase para limitar el acceso y uso externo. Por ejemplo, siguiendo con nuestra práctica, podemos tener acceso a la clase *base/principal* `Account`, lo que no se debería permitir, ya que esta clase tiene por objetivo ser un *molde* general y cualquier modificación que se requierea realizar, debería aplicarse únicamente desde las los objetos creados a partir de la *extención* (uso de la directiva `extends`) de esta clase base y de esta forma limitar (no permitir) la instanciación directa a la clase `Account`, con esto sólo estará permitido realizar modificaciones en las clases `CheckingAccount` y `SavingAccount`, y no se podría instanciar directamente a la clase principal `Account` y por ende no se podrían acceder a sus atributos y métodos para modificarlos, este proceso de *protección* es conocido *encapsulamiento*.  

Ahora vamos a proceder a *encapsular* a nuestra clase principal para que no pueda ser accesada directamente desde el exterior y que solamente sea *extendida* a otras clases secundarias, esto lo podemos lograr mediante el uso de la instrucción `throw new Error()` de la siguiente forma:
```js
// Account.js
// ...
constructor(customer, number, branch, balance) {
  if(this.constructor === Account) {
    throw new Error("Ne se debe instanciar directamente de la claase principal 'Account', crea una nueva clase mediante 'extends' en su lugar...")
  }
  this.#customer = customer
  this.number = number
  this.branch = branch
  this.#balance = balance
}
// ...
```

### Métodos **abstractos** de clases

Al igual que podemos proteger una clase principal de ser instanciada directamente, tambien podemos restringir el uso de métodos, aplicando la misma lógica de hacer uso de la instrucción `throw new Error()`, por lo que tendríamos algo como lo siguiente:
```js
// Account.js
// ...
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
// ...

// PayrollAccount.js
// ...
withdrawal(amount) {
  super._withdrawal(amount, 3)
}
// ...
```