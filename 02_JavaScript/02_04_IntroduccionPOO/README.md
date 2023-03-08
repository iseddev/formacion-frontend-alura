# Introduccióna la Orientación de Objetos

Para este tema, se llevará a cabo una práctica de simulación de una aplicación bancaria que gestiones cuentas, considerando que se manejaran datos proios de un cliente de banco y que con estos datos se realizaran la codificación necesaria par ala gestión de información básica de nuestra app.

---
## 01 - Repetición del código

Partiremos de datos básicos de cada cliente del banco: nombre, id, cuenta y saldo. Para lo que vamos a crear una variable para cada uno de estos datos por cada cliente, pudiendo quedar de la siguiente forma para el primer cliente:
```js
const customerName = "John"
const customerDNI = "17652037"
const custonerAccount = "19237493649"
const customerBalance = 1000
const customerRfc = "AAAA0000000A0"
```
Para el segundo cliente podríamos tener lo siguiente:
```js
const customerName2 = "Doe"
const customerDNI2 = "92864128"
const custonerAccount2 = "81741092537"
const customerBalance2 = 8000
const customerRfc2 = "BBBB0000000B0"
```
Y así sucesivamente para los clientes subsecuentes. De cierta manera es algo sencillo de manejar, pero en un ambiente real, la cantidad de clientes es muy numeroso y estar declarando por cada cliente diferentes variables comienza a ser muy tardado y poco eficiente para nuestra aplicación.  

Pero existe un forma más eficiente de solucionar este proceso. Hacer uso de ***clases***, que en el mundo de la programación se trata de asimilar este concepto con la abstracción de los objetos en el mundo real, por ejemplo: un auto puede ser *abstraído* como una *clase* en un programa, este puede tener *caractéristicas* o *atributos/propiedades* y *funcionalidades* o *métodos*. Específicamente en la programación se hace referencia a *propiedades* y *métodos*. Por lo que, podemos decir que una clase en programación, es una estructura de datos que contiene *propiedades* y *métodos* haciendo referencia lo más cercanamente posible a un objeto del mundo real.  

Para hacer  más eficiente el código anterior, crearemos una *clase* que sirva como modelo o plantilla para generar los clientes (***objetos***) necesarios y agregarles la información requerida. Una de las maneras de hacer esto en JavaScript es mediante el uso de la instrucción `class` y aplicando el formato *UpperCamelCase* (comenzar con mayúscula) definimos el nombre de nuestra *clase*.  

### Creando nuestra primera clase (***class***)

Siguiendo con nuestro ejemplo, vamos a crear nuestra clase (plantilla o modelo), que posteriormente vamos a poder utilizar para la creación de los clientes (objetos) registrados en nuestra app, esta sería la estructura básica para crear nuestra *clase*:
```js
class Customer {
  name = "";
  dni = "";
  account = "";
  withdrawal = function() {
    console.log("Withdrawing money from bank account")
  }
  deposit =  function() {
    console.log("Depositing money to bank account")
  }
  balance = 0;
  rfc = "";
}
```
Muy bien, ya hemos creado nuestra primera *clase*. Al ser un modelo a seguir, no es necesario que sus *atributos* tenga valores definidos, pero es recomendable asignarle valores que den una referencia al tipo de dato a autilizar, esto es, al observar la definición de `name = ""` estamos estableciendo que name es de tipo `string` y con `balance = 0`, estamos definciendo que `balance` es de tipo `number`. Ahora vamos a instanciar un nuevo cliente con la clase `Customer` (crear un *objeto* a partir de esta *clase*) para que apartir de esto, le podamos asignar los valores necesarios a cada propiedad/atributo y tener un nuevo objeto con sus propios valores por cada atributo. Esto es lo que tendríamos que hacer en JavaScript para crear un cliente nuevo de nuestra app a partir de la clase modelo `Customer`:
```js
const customerOne = new Customer()
```
Ahora vamos asignarle los valores a las propiedades correspondientes para que `customerOne` tenga todos sus atributos (con sus valores) debidamente creados:
```js
customerOne.name = "John"
customerOne.dni = "17652037"
customerOne.account = "19237493649"
customerOne.balance = 1000
customerOne.rfc = "AAAA0000000A0"
```
Entonces, para el segundo cliente podemos hacer lo siguiente:

```js
const customerTwo = new Customer()
customerTwo.name = "Doe"
customerTwo.dni = "92864128"
customerTwo.account = "81741092537"
customerTwo.balance = 8000
customerTwo.rfc = "BBBB0000000B0"
```
Y así sucesivamente podemos crear los clientes que necesitemos.
<br>

---
## 02 - Agregando métodos

En ocasiones, nos puede suceder que por una u otra razón, definimos atributos y/o métodos que no corresponden a la naturaleza de la clase creada, por ejemplo, siguiendo con nuestro ejercicio, podemos observar que tanto `account` como `balance` ***NO*** son apropiedades *naturales* ni los métodos `withdrawal` y `deposit` de la clase `Customer`, sino que más bien, estarían mejor definidas un una nueva clase que podríamos llamar `Account`, por lo que haciedno estas modificaciones tendíamos lo siguiente:
```js
class Customer {
  name = "";
  dni = "";
  rfc = "";
}

class Account {
  number = "";
  balance = 0;
  branch = "";
  withdrawal(amount) {
    console.log("Withdrawing money from bank account")
    this.balance -= amount
  }
  deposit(amount) {
    console.log("Depositing money to bank account")
    this.balance += amount
  }
}
```
Por lo que las asignaciones de los valores a los atributos quedaría de la siguiente manera:
```js
const customerOne = new Customer()
customerOne.name = "John"
customerOne.dni = "17652037"
customerOne.rfc = "AAAA0000000A0"

const customerTwo = new Customer()
customerTwo.name = "Doe"
customerTwo.dni = "92864128"
customerTwo.rfc = "BBBB0000000B0"
```
Ahora podemos crear los nuevos objetos instanciados a la clase `Account` y asignar los valores de sus respectivos atributos:
```js
const accountOne = new Account()
accountOne.number = "19237493649"
accountOne.balance = 1000
accountOne.branch = "CDMX"

const accountTwo = new Account()
accountTwo.number = "81741092537"
accountTwo.balance = 8000
accountTwo.branch = "Guadalajara"
```
Para ver el comportamiento de los métodos `withdrawal()` y `deposit()` de la clase `Account`, puedes implementar lo siguiente:
```js
console.log(accountOne.balance)
accountOne.deposit(750)
console.log(accountOne.balance)

console.log(accountTwo.balance)
accountTwo.withdrawal(1200)
console.log(accountTwo.balance)
```
### Constructor de una clase

Regresando a la clase `Customer`, observamos que asignamos directamente a cada propiedad un valor, aunque sean `strings` vacíos o valor igual a `0`, lo más adecuado es definir un `constructor` a la clase donde se definan los valores iniciales que tendrán por defecto los atributos que así consideremos necesarios al momento de ser instanciados por un nuevo objeto. Por lo que al aplicar este proceso, la clase `Customer` y `Account` quedarían de la siguiente forma:
```js
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
  balance
  branch

  constructor() {
    this.number = ""
    this.balance = 0
    this.branch = ""
  }

  withdrawal(amount) {
    console.log("Withdrawing money from bank account")
    this.balance -= amount
  }
  deposit(amount) {
    console.log("Depositing money to bank account")
    this.balance += amount
  }
}
```
### Aplicando lógica en los métodos

Considerando restricciones lógicas, un cliente no puede retirar más dinero del que tiene en su cuenta, por lo que es necesario aplicar esta restricción dentro del método `withdrawal()` de la clase `Account`. Esta lógica la podemos observar en el siguiente ejemplo (Recuerda que no hay soluciones únicas, puedes tratar de implementar tu propia solución):
```js
withdrawal(amount) {
  console.log(`Withdrawing ${amount} from bank account`)
  this.balance >= amount
    ? this.balance -= amount
    : console.error(`ERROR!!! El saldo disponible (${this.balance}) supera el monto de retiro (${amount})`)
}
``` 
Para el caso de los depósitos, la únca validación que haremos por el momento es que no se acepten montos negativos, por lo que nuestra lógica puede quedar como sigue:
```js
deposit(amount) {
  console.log(`Depositing ${amount} to bank account`)
  amount > 0
    ? this.balance += amount
    : console.error(`ERROR!!! ${amount} NO es válido, ingresa un importe válido`)
}
```
### Atributos privados (encapsulamiento)

En la mayoría de lenguajes de programación, para el paradigma de POO, se define la implementación de privacidad de atributos de clases, es decir, que unicamente la clase en la que están definidos pueda tener acceso a ellos y solamente la clase puede manipularlos. JavaScript (hasta el momento de edición de esta información) no cuenta con una estandarización para esta implementación. Aunque actualmente se está estudiando la posibilidad de implementar una convención para establecer de forma nativa esta característica de la POO.  

Hoy en día está en prueba una propuesta de restricción que hace uso del símbolo `#`, el cual ayuda a definir que un atributo es "*privado*" (*private*) y sólamente puede ser accesado y manipulado desde dentro de la propia clase y no se permite su acceso desde el exterior de la propia clase. A esto se le conoce también como *encapsulamiento*  

Aplicando esta propuesta de prueba, vammos a definir que el el atributo `balance` será de acceso *privado*, por lo que la única manera de tener acceso a este atributo, será por medio de los métodos `deposit` y `withdrawal`, esto quedaría así:
```js
class Account {
  // ...
  #balance // Definimos que balance es un atributo privado
  // ...

  withdrawal(amount) {
    console.log(`Withdrawing ${amount} from bank account`)
    this.#balance >= amount
      ? this.#balance -= amount
      : console.error(`ERROR!!! El saldo disponible (${this.#balance}) supera el monto de retiro (${amount})`)
  }
  deposit(amount) {
    console.log(`Depositing ${amount} to bank account`)
    amount > 0
      ? this.#balance += amount
      : console.error(`ERROR!!! ${amount} NO es válido, ingresa un importe válido`)
  }
}
```
Para un estudio más acertado, puedes acceder a la documentaciond de MDN [aquí](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes/Private_class_fields).

### Métods de clase interactivos (retornando valores)

Hatas el momento, los métodos que hemos definidio en nuestra clase `Account` realizan su trabajo pero no devuelven nada, es decir, no sabemos lo que está ocurriendo. Para solucionar este comportamiento, podemos establecer instrucciones que al momento del llamado y ejecución de un método, este nos devuleva un valor, el cual puede diferir de programa en programa. Para nuestro caso, vamos a establecer que cada vez que se realice un depósito o retiro exitos, muestre el saldo final después de cada operación:
````js
class Account {
  // ...
  #balance // Definimos que balance es un atributo privado
  // ...

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
```
...  
<br>

---
## 03 - Modularizando el código

...  
<br>

---
## 04 - Accediendo a atributos privados

...  
<br>

---
## 05 - Consturctore y atributos estáticos

...  