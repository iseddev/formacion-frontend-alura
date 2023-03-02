# Manipulación del DOM con JavaScript

---
## 01 - Imprimir/mostrar en pantalla
```javascript
console.log("Hello world!!!")
```
<br>

---
## 02 - Restricciones para nombrar variables

* NO deben comenzar con un número => `4users`, `01_test`, `7days`, etc., son opciones incorrectas.
* Pueden iniciar con un *guión bajo* `_` => `_pruebaInicial`, `_temporal`, etc.
* Evitar el uso de caracteres especiales => `díaHábil` (*acentos*), `año` (*ñ*), etc., son opciones no recomendadas
* Utilizar la metodología lowerCamelCase => primera palabra en minúscula y las subsecuentes inician con mayúscula: `cantidadUsuarios`, `boletosAvion`, `montoImpuestoLocal`, etc.
* No dejar espacios en blanco => `cantidad Usuarios`, `boletosAvion`, etc., son opciones incorrectas.
* No se deben utilizar palabras *reservadas* propias del lenguaje, por ejemplo:
  > `abstract`, `boolean`, `break`, `byte`, `case`, `else`, `import`, etc.
* Altamente recomendable usar idioma inglés => `userQuantity`, `flyTickets`, `totalLocalTax`, etc.
* La variable debe tener sentido con la función para la que fue dreada, es decir:
  > La variable `a` no dice nada por si sola, pero `idCustomer` nos da mejor panorama, ya que podemos inferir que esta variable almacena el *identificador de un cliente*

#### **Nota**
JavaScript es un lenguaje "*case sensitive*", lo que significa que el nombre asignado a una variable **no** será la misma si alguno de sus caracteres difiere en solamente uno de ellos, en este caso, si nos referimos a letras mayúsculas y minúsculas, por ejemplo:
  `holaMundo` NO es lo mismo a `HolaMundo`  
  `holaMundo` NO es lo mismo a `HOLAMUNDO`  
  `holaMundo` NO es lo mismo a `holamundo`  
  `holaMundo` SI es lo mismo a `holaMundo`  

Es por eso, que al momento de hacer uso de una variable, se tiene que utilizar la misma estructura de caracteres empleada para su declaración.  
<br><br>

---
## 03 - Declarando variables / *buenas prácticas*

### Declarando variables con la palabra reservada `var`

```js
var nombreEmpleado = "José Pérez"
var NombreEmpleado = "Pedro Ramírez"

console.log(nombreEmpleado) // José Pérez
console.log(NombreEmpleado) // Pedro Ramírez
```

### Declarando variables con la palabra reservada `let`
```js
let puestoEmpleado = "Frontend Developer"
let edadEmpleado = 38

console.log(puestoEmpleado) // Frontend Developer
console.log(edadEmpleado) // 38
```
### Declarando variables con la palabra reservada `const`
```js
const PI = 3.14159
let IVA = 0.16

console.log(PI) // 3.14159
console.log(IVA) // 0.16
```
<br>

---
## 04 - Tipos de datos

### *Primitivos*

1. `string` => Contenidas dentro de comillas simples (`' '`) o comillas dobles (`" "`), por ejemplo: `'a', "Hello World", "Hello 'World'", 'Hello "World"'`
     > `let userName = "John Doe"`

2. `number` => Valor númerico ya sea positivo o negativo y/o entero o decimal ("`float`"), por ejemplo: `2, 6, -1, 0.4, -3.16`, etc.
      > `let itemPrice = 234.56`

3. `boolean` => Conocidos como valores lógicos, sólo pueden tener dos posibles valores: `true` o `false`
      > `let isValid = true`

4. `undefined` => Representación de un valor *ausente*, `undefined` se refiere específicamente a una variable que se declaró, pero no se le asignó ningun valor.
      > ```let myVar // no se le asigna valor a myVar```  
      > ```console.log(myVar) // undefined```

5. `null` => Representación de un valor *ausente*, `null` se refiere específicamente a una variable que se declaró y se le asignó el valor *null* (de forma intencional) por las propias características del programa.
      > ```let myVar = null // se le asigna valor null a myVar```  
      > ```console.log(myVar) // null```

6. `NaN` => Hace referencia a un valor que se está utilizando como `number` pero el tipo de dato es otro o cuando se realizan operaciones entre un tipo de dato `number` y otro tipo de dato diferente.
      > ```let operation = "hola" * 3.14159 // se realiza una operación con tipo de dato number y string```  
      > ```console.log(operation) // NaN```

#### **Nota**
Para validar el tipo de dtao de una variable o el resultado de una operación, se puede hacer uso de la función `typeof()` de la siguiente manera:
```js
let num = 1234
console.log(num) // 1234
console.log(typeof(num)) // number

let num1 = 23
let num2 = 54
let sum = num1 + num2
console.log(sum) // 77
console.log(typeof(sum)) // number
```
<br>

---
## 05 - *Template Strings*

Esta característica habilita el uso de expresiones incrustadas, con lo que es posible utilizar adenas de caracteres de más de una línea, y funcionalidades de interpolación de cadenas de caracteres. Para hacer uso de esta funcionalidad, se debe encerrar dentro de *comillas invertidas* o *backticks* (***``***) la expresión que se requiere utilizar adicional a que el valor de la variable a *unir* debe ir dentro de *llaves* (***{ }***) precedido por un signo de moneda, es decir: <code>${varName}</code>.  

La clave en este caso es la **interpolación**, que es la "fusión" o "unión" dinámica de los valores de variables dentro de una cadena de texto, por ejemplo:
```js
let firstName = "John"
let lastName = "Doe"
let message = `Welcome ${firsName} ${lastName} to our JS course!!!`

console.log(message) // Welcome John Doe to our JS course!!!

console.log(`${firstName} ${lastName} is active!!!`) // John Doe is active!!!
```

## 06 - Debuging en VS Code

El *debugging* o *depuración* en VS Code lo podemos utilizar mediante la herramienta integrada por defecto en la barra lateral izquierda en nuestro editor de código.  

También es posible activar la visualización de la barra de depuración con el comando `CTRL+SHIFT+D` en Windows.  

Para ejecutar la depuración de nuestro código (en este caso, código JS), basta con tener activa la ventana de nuestro código a depurar y hacer click en el boton de la barra lateral izquierda que indica: `Run and Debug`.  

En la primera ejecución, el editor de código solicitará seleccioanr el depurador o *debugger* a utilizar, por lo que seleccionaremos `NodeJS`.  

Una vez seleccionado el debugger a utilizar, se abrirá la terminal integrada en el editor y se posicionará en la pestaña `DEBUG CONSOLE`, donde podremos ver el resultado de la ejecución de nuestro código.  

Una de las grandes ventajas de utilizar un *debugger*, es que nos permite ejecutar un fragmento de código paso a paso, arrojando el resultado obtenido de cada ejecución. Para ello, tenemos la posibilidad de seleccionar a partir de que punto el depurador debe detenerse y esperar a que se le indique que puede seguir con el siguiente proceso. Esto se logra si posicionamos nuestro cursor al lado izquierdo de donde estan numeradas las líneas de código de nuestro programa, con lo que podremos ver que *aparece* un punto rojo, indicando que a partir de esa línea de código, la ejecución se pausará hasta recibir la indicación de continuar.  

Una vez seleccionado el *punto de control* donde queremos iniciar a depurar nuestro código, el punto se pondrá de un color más intenso. Ahora hacemos click nuevamente sobre el botón de `Run and Debug` y la ejecución de nuestro código comenzará y se detendrá en el punto que hayamos indicado previamente.  

Podremos ver que en dentro de nuestro código y en el punto de control seleccionado, aparecerá una especie de ícono que apunta hacia la derecha, esto nos indica donde está posicionado el debugger. Ahora, si posicionamos nuestro cursor sobre esa línea de código, se nos mostrará una ventana con los datos que se tienen en ese punto de ejecución.  

Una vez hecho lo anterior, se habilitará una pequeña barra en la parte superior de nuestro editor de código con 6 íconos que nos ayudaran a relizar las acciones siguientes:  

   1. Continue (F5) - Procederá a realizar paso a paso las ejecuciones restantes arrojando resultados donde el código así deba hacerlo.
   2. Step Over (F10) - Realizará la misma acción que el proceso anterior, con la diferencia de que se llevará a cabo la ejecución de nuestro programa línea  alínea de código de acuerdo con la lógica establecida, mostrando en la `DEBUG CONSOLE` que línea de código es la que está arrojando el resultado esperado.
   3. Step Into (F11) - Este control nos ayuda a entrar a una función o bloque de código en específico.
   4. Step Out (Shift+F11) - Nos ayuda a salir de una función o bloque de código.
   5. Restart (Ctrl+Shift+F5) - Como su nombre lo indica, reinicia la ejecución del depurador, posicionandose en el punto de control establecido con anterioridad
   6. Stop (Shift+F5) - Detendrá la ejecuciónd e depuración.

Podemos ser más específicos e indicarle a nuestro debugger que nos muestre la información de un dato en especial en ese momento de ejecución: Para ello, nos dirijimos a la barra lateral izquierda y en la "*sub pestaña*" `WATCH`, hacemos click sobre el símbolo de `+` que aparece si nos posicionamos sobre esta pestaña. Ahora basta con ingresar el nombre de dato al que queremos acceder y pulsar `ENTER` para que nos muestre el valor que se tiene de dicho dato en ese preciso momento de ejecución.
