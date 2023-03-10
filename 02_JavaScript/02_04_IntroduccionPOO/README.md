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

### Métodos de clase interactivos (retornando valores)

Hatas el momento, los métodos que hemos definidio en nuestra clase `Account` realizan su trabajo pero no devuelven nada, es decir, no sabemos lo que está ocurriendo. Para solucionar este comportamiento, podemos establecer instrucciones que al momento del llamado y ejecución de un método, este nos devuleva un valor, el cual puede diferir de programa en programa. Para nuestro caso, vamos a establecer que cada vez que se realice un depósito o retiro exitos, muestre el saldo final después de cada operación:
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
<br>

---
## 03 - Modularizando el código

### Exportación e importación de módulos

Generalmente cuando ocupamos las *clases* para la POO, implementamos el uso de *módulos* para tener una estructura de archivo mejor organizada. Para ejemplificar este proceso, vamos a crear los archivos `Customer.js` y `Account.js`. Si lo observas, los nombres de los archivos son iguales a el nombre de las clases que creamos, siguiendo el mismo estándar de la estructura *UpperCamelCase*. Por otro lado, es recomendable (mas no obligatorio) ubicar estos archivos dentro de una carpeta que haga referencia a los archivos que contiene, una alternativa: `modules`  

Ahora bien, cada uno de estos archivos que hemos creado, les solemos llamar *módulos*. Para su utilización es necesario el uso de *importaciones* y *exporaciones* de estos módulos para su utilización. Puedes revisar la estructura de archivos [aquí](./classes_modules/).  

En cada archivo o módulo creado, debemos establecer que la las clases definidas van a ser *exportadas* para su uso desde el exterior, para ello hacemos uso de la siguiente estructura en cada archivo:
```js
export class Customer {
  // ...
}
```
y
```js
export class Account {
  // ...
}
```
Ahora que ya tenemos creados nuestros *módulos* y hemos especificado en cada archivo que serán exportados para uso esterno, vamos a *importarlos*. Vamos a hacerlo de la siguiente forma:
```js
import { Customer } from "./modules/Customer.js"
import { Account } from "./modules/Account.js"
```
Es importante considerar que la *ruta* de nuestros módulos a importar es *relativa* a nuestro archivo donde estamos haciendo la importación, en este caso `index.js`, por ello es que se utiliza la notación `./path_to_module`, ya que `./` hace referencia a la ruta en la que se encuentra el archivo principal (index.js) y `path_to_module` es la ruta para acceder al módulo requerido. También notar que dentro de los paréntesis se coloca el nombre exacto con el que hemos creado nuestra clase, esto para mantener un estándar de buenas prácticas.  

Ya que hemos importado correctamente nuestros *módulos* (clases), ahora podemos utilizar cada uno de sus atributos y métodos de acuerdo a nuestras necesidades. Pero ...  

Pero, debido a que el uso de módulos (hasta estos momentos) no está estandarizado para su implementación en todos los navegadores, es necesario que se defina en la etiqueta `script` de nuestro archivo HTML la propiedad `type="module"` para hacerle saber a nuestro documento HTML que el archivo JS referecniado es un *módulo* (module).  

Para el caso de la implementación mediante `Node`, se debe espcificar en el archivo `package.json` de nuestro proyecto, el atributo: `"type":"module"`  

### Referenciación entre clases

De acuerdo a la práctica que estamos realizando, ya definimos módulos por separado para `Customer` y para `Account`, pero nos hace falta hacer una referencia entre estos dos módulos, es decir, hacer relación entre cada cliente y una cuenta. Para ello, podemos definir dentro del módulo `Account` una propiedad que haga referencia a un cliente (`Customer`), por lo que vamos a crear el atributo `customer` y agregarlo al constructor de la siguiente manera:
```js
constructor() {
  this.customer = null
  // ...
}
```
Observa que al atributo `this.customer` se le asigna el valor de `null`, esto para indicarle a JavaScript que este atributo va a ser un tipo de dato complejo, específicamente un objeto.  

### Agregar métodos interactivos

Para este caso, vamos a simular que de una cuenta se realizará la transferencia a otra cuenta, para ello crearemos un nuevo método que llamaremos `transferFunds`. La estrcutura básica queda como sigue:
```js
transferFunds(amount, destination) {
  this.withdrawal(amount)
  destination.deposit(amount)
}
```
Como reto, puedes agregar la lógica para validar que se haga el depósito a la cuenta destino sólo si la cuenta de retiro tiene el saldo suficiente para realizar la operación de transferencia.  

### Parámetros por valor y por referencia

Dentro de los métodos que definimos en nuestra clase `Account`, podemo notar que (excepto `showBalance()`) reciben parametros. Cuando se hace la invocación/llamada a estos métodos, lo que esta sucediendo, es que al pasar los parámetros en la invocación, si se *pasa* un valor primitivo, lo que en realidad se está utilizando, son los valores asignados a dichos parámetros, es decir se está haciendo un "*paso por valor*". Pero cuando estamos pasando como valor un tipo de dato "*complejo*" (un array, un objeto), lo que se está utilizando es la referencia a ese dato, lo que se conoce como "*paso por referencia*".  

De nuestra práctica, si observamos los métodos `withdrawal()` y `deposit()`, los parámetros utilizados estan siendo pasados "*por valor*", pero para el caso del método `transferFunds()`, recibe dos parámetros, uno primitivo (paso por valor) y uno "*complejo*", en este caso, haciendo uso del "*paso por referencia*", ya que el dato referecniado es un *objeto*.  

Para visualizar un poco mejor esto, podemos hacer referencia a que cada variable declarada es como crear una *caja*, a la que se le asigna una etiqueta (nombre de la variable) y a dicha variable se le asigna un valor, que se guardará "*dentro*" de dicha caja. Ahora bien, si el valor asignado a la variable es de tipo primitivo y es utilizado en algún punto de nuestro programa, lo que hace JavaScript es acceder al "*valor almacenado dentro de la caja*" (paso por valor). Pero si el tipo de dato almacenado en la variable es "*complejo*", al hacer invocado un valor dentro de dicha variable, lo que hace JavaScript es "*pasar la caja entera*" (paso por referencia) para acceder al valor solicitado.  

Lo anterior puede tener sus ventajas y desventajas. Por ejemplo, veamos el método `transferFunds()`, que recibe como segundo parámetro un objeto (la cuenta de destino). Como ya se detalló anteriormente, este método recibirá el objeto completo, por lo que si no se tiene cuidado, dentro del métod `transferFunds()` podemos realizar modificaciones no deseadas a dicho objeto, por ejemplo: si se añade la siguiente línea de código `destinationAccount.city = "California"`, sucederá que se añadirá la propiedad `city` con el valor `California` al objeto pasado como parámetro. Esto muy seguramente será algo que no queremos que pase, por lo que es altamente recomendable poner especial atención en este comportamiento de los tipos de dtaos en los parámetros utilizados.

Para el caso del "*paso por valor*", tomaremos el ejemplo anterior, y para el parámetro `amount`, si le asignamos un nuevo valor a `amuont` dentro del propio método, esto **no** resultará en la reasignación de dicho valor al parámetro original.  

<br>

---
## 04 - Accediendo a atributos privados  

### Valores `null` y `undefined`

* `null` Hace referencia al *uso* de una variable pero que no se ha definido previamente.
* `undefined` Se refiere a la definición de una variable, pero que tiene un valor *nulo*, no establecido.

Lo anterior puede utilizarse de forma correcta para definir variables que inicialmente no sabemos o no se nos ha especificado el valor que se le asignará, por lo que se recomienda hacer uso de la palabra reservada `null` y de esta forma declarar nuestra variable, pero con un valor `null`, evitando así el uso de variables no definidas y tener errores por ello en nuestro código.  

### Establecer (`set`) y obtener (`get`) valores de atributos privados  

Como ya hemos visto, la definición de atributos privados de una clase, ayuda a restringir el acceso a dicho aributo desde el exterior de la clase. Para nuestro ejemplo de práctica, definimos como privado el atributo `balance` y para poder tener acceso a este atributo, definimos dos métodos (`withdrawal()` y `deposit()`) para poder modificarlo. Esto se puede hacer de forma sencilla debido a que el valor asignado a este taributo es de tipo primitivo y puede ser ya sea un `number` o `float`. Pero para el caso de tipo de datos compuestos, existen las palabras reservadas `set` y `get`, las cuales nos ayudaran a acceder a estos parámetros privados y establecerles un valor o acceder a un determinado valor.  

Siguiendo con el ejemplo de nuestra práctica, la estructura de la clase `Account` quedaría de la siguiente forma:
```js
export class Account {
  #customer
  // ...

  set setCustomer(obj) {
    this.#customer = obj
  }

  get getCustomer () {
    return this.#customer
  }

  // ...
}
```
La implementacion de `set` y `get` nos puede ser de mucha utilidad, ya que como se detalló en secciones anteriores, cuando un método recibie como parámetro un objeto, este puede ser modificado intencionalmente o no, por lo que mediante el uso de `set`, podemos establecer determinadas restricciones que evaluen ciertos criterios para permitir que se asigne o no un valor al atributo en cuestión. Para ver esto un poco más a detalle, definiremos una restrcción al `set` que previamente definimos:
```js
set setCustomer(obj) {
  if(obj instanceof Customer) {
    this.#customer = obj
  } else {
    console.error("El valor asignado no es válido, revisa los datos ingresados...")
  }
}
```
La aplicación de los ajercicios de `set` y `get` los puedes revisar desde [aquí](./set_and_get/)  

<br>

---
## 05 - Constructores y atributos estáticos

...  