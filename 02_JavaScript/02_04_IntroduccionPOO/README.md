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
```
Para el segundo cliente podríamos tener lo siguiente:
```js
const customerName2 = "Doe"
const customerDNI2 = "92864128"
const custonerAccount2 = "81741092537"
const customerBalance2 = 8000
```
Y así sucesivamente para los clientes subsecuentes. De cierta manera es algo sencillo de manejar, pero en un ambiente real, la cantidad de clientes es muy numeroso y estar declarando por cada cliente diferentes variables comienza a ser muy tardado y poco eficiente para nuestra aplicación.  

Pero existe un forma más eficiente de solucionar este proceso. Hacer uso de ***clases***, que en el mundo de la programación se trata de asimilar este concepto con la abstracción de los objetos en el mundo real, por ejemplo: un auto puede ser *abstraído* como una *clase* en un programa, este puede tener *caractéristicas* o *atributos/propiedades* y *funcionalidades* o *métodos*. Específicamente en la programación se hace referencia a *propiedades* y *métodos*. Por lo que, podemos decir que una clase en programación, es una estructura de datos que contiene *propiedades* y *métodos* haciendo referencia lo más cercanamente posible a un objeto del mundo real.  

Para hacer  más eficiente el código anterior, crearemos una *clase* que sirva como modelo o plantilla para generar los clientes (***objetos***) necesarios y agregarles la información requerida. Una de las maneras de hacer esto en JavaScript es mediante el uso de la instrucción `class` y aplicando el formato *UpperCamelCase* (comenzar con mayúscula) definimos el nombre de nuestra *clase*.  

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
}
```
Muy bien, ya hemos creado nuestra primera *clase*. Al ser un modelo a seguir, no es necesario que sus *atributos* tenga valores definidos, pero es recomendable asignarle valores que den una referencia al tipo de dato a autilizar, esto es, al observar la definición de `name = ""` estamos estableciendo que name es de tipo `string` y con `balance = 0`, estamos definciendo que `balance` es de tipo `nmber`. Ahora vamos a instanciar un nuevo cliente con la clase `Customer` (crear un *objeto* a partir de esta *clase*) para que apartir de esto, le podamos asignar los valores necesarios a cada propiedad/atributo y tener un nuevo objeto con sus propios valores por cada atributo. Esto es lo que tendríamos que hacer en JavaScript para crear un cliente nuevo de nuestra app a partir de la clase modelo `Customer`:
```js
const customerOne = new Customer()
```
Ahora vamos asignarle los valores a las propiedades correspondientes para que `customerOne` tenga todos sus atributos (con sus valores) debidamente creados:
```js
customerOne.name = "John"
customerOne.dni = "17652037"
customerOne.account = "19237493649"
customerOne.balance = 1000
```
Entonces, para el segundo cliente podemos hacer lo siguiente:

```js
const customerTwo = new Customer()
customerOne.name = "Doe"
customerOne.dni = "92864128"
customerOne.account = "81741092537"
customerOne.balance = 8000
```
Y así sucesivamente podemos crear los clientes que necesitemos.
<br>

---
## 02 - Agregando métodos

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