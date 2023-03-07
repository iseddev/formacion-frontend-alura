# Validación de formularios con JavaScript

---
## 01 - Tipos de *input* y algunas validaciones

En la gran mayoría de casos, al crear un formulario en HTML, vamos a requerir que el usuario ingrese información, por lo que haremos uso del elemento `input`. Este elemento tiene varias opciones para que HTML defina un *formato* específico a la información que el usuario está ingresando. Por ejemplo, para un texto simple (como puede ser nombre de usuario, nombre de empresa, etc) definimos el *input* como tipo `text` (*type* por defecto), esto lo podemos ver a continuación:
```html
<input type="text">
```
Lo anterior creará un elemento *input* de tipo *texto* para que el usuario ingrese la información solicitada.  

Ahora bien, si queremos que el usuario ingrese su *email*, lo mas adecuado es utilizar un *input* de tipo *email*, y lo podemos crear de la siguiente forma:
```html
<input type="email">
```
Y si necesitamos que el usuario ingrese su contraseña, podemos hacer uso de la siguiente estructura:
```html
<input type="password">
```
En HTML existen diversos valores para el atributo *input*, para una introducción más detallada a `type` (y algunos otros más), visita la documentación de MDN en el siguiente [enlace](https://developer.mozilla.org/es/docs/Web/HTML/Element/input#attr-type)  

Ahora bien, en diversas ocasiones, será necesario que el usuario ingrese información mínima requerida (u obligatoria), por lo que podemos hacer uso del atributo `required` directamente en cada input que así lo necesite. Para el caso anterior, tendríamos lo siguiente:
```html
<input type="password" required>
```
El atributo `required` es un valor *boolean*, es decir, o es `true` o es `false`, por defecto, `required` es `false`, por lo que tenemos que definir este atributo en el input en cuestión y esto forzará (obligará) al usuario a no dejar vacio dicho campo (no es necesario: `required="true"`, con: `required`, es suficiente)  
<br>

---
## 02 - Validar datos

Ahora que ya sabemos que dentro de un documento HTML existe una estructura jerárquica de todos los elementos que lo componen, vamos a ver como podemos acceder a ellos mediante el uso de JavaScript y validar que la información ingresada cumpla con determinados requisitos para asegurar la calidad de los datos ingresados.  
<br>

---
### **Validación de un `input` tipo `password`** (expresiones regulares - regex)

Para el caso de las contraseñas, podemos crear un *patrón* para que el usuario ingrese sólo caractéres especificos. Para ello haremos uso de las ***expresiones regulares*** también conocidads como *regex* (de *regular expressions*). En el ejemplo de este tema, utilizaremos la siguiente expresión regular:  
```
^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$
```
Con lo anterior, estamos especificando lo siguiente:
1. Con `^...$` estamos definiendo, donde empieza la expresión regular (`^`) y donde termina (`$`)
2. Con `(?=.*[a-z])` estamos definiendo una regla donde:  
   `?=` quiere decir que vamos a aceptar caracteres  
   `.` establece que los caracteres ingresados no sean saltos de línea (o *enter*)  
   `*` define que debe de ingresarse al menos 1 caracter del siguiente conjunto de caracteres: `[a-z]`, es decir desde la `a` hasta la `z` minúsculas
3. `(?=.*[A-Z])` aplica la misma lógica que en el punto 2, pero desde la `A` hasta la `Z` mayúsculas
4. `(?=.*[0-9])` aplica la misma lógica que en el punto 2, pero para números del `0` al `9`
5. `(?!.*[ !@#$%^&*_=+-])` indica que:  
   `?!.` no se aceptaran saltos de línea (*enter*)
   `*[ !@#$%^&*_=+-]` no se aceptaran caracteres como el *espacio en blanco* (` `), símbolo de admiración (`!`), símbolo de `@`, el símbolo `#` y así sucesivamente.
6. `.{6,12}` indica que las reglas antecesoras, se cumplan con una longitud mínima de 6 caracteres y máximo 12.

En general, esta regla define que la contraseña a ingresar debe contener al menos: *1 letra minúscula, 1 letra mayúscula, 1 número y una cantidad desde 6 hasta 12 caracteres*. Ahora bien, para poder indicarle a nuestro `input` de registro del password que tiene que aplicar estas reglas en los datos que ingrese el usuario, vamos a hacer uso de la propiedad `pattern` de nuestro `input`, colocando el patrón que hayamos definido previamente. En nuestro ejemplo quedaría de la siguiente forma:
```html
<input type="password" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*[ !@#$%^&*_=+-]).{6,12}$" title="Contraseña debe contener de 6 a 12 dígitos y SÓLO letras y/o números">
```
Si pruebas este simple ejemplo, verás como si ingresas longitudes de caracteres inferiores a 6 o más de 12, y/o algún caracter dentro del patron, se mostrará un mensaje de error, el cual incluirá el texto definido en el atributo `title`.  

Puedes profundizar un poco más sobre los patrones más utilizados de *expresiones regulares* el siguiente [enlace](https://regexr.com/)  
<br>

---
### **Validación de un `input` tipo `date`** con JavaScript

Siguiendo con el ejemplo de nuestro tema, vamos a validar que la fecha ingresada sea menor o igual a la fecha actual y que se determine si el usuario es mayor de edad, en este caso consideraremos que a partir de 18 años el usuario es mayor de edad. Ahora es turno de ver en acción a JavaScript, donde podremos definir nuestra lógica y validar la regla anterior (usuario debe tenr por lo menos 18 años).  

Lo primero es considerar que haremos uso del *Objeto `Date`*, el cual será utilizado para el manejo de fechas (también se puede usar para el manejo de tiempos => hh:mm:ss:ms). Recordemos que el `input` utilizado es de tipo `date`, por lo que lo primero a considerar es que tenemos que tener acceso y almacenar en una variable el contenido que el usuario haya ingresado, para eso podemos hacerlo siguiente:

```js
const inputDate = document.querySelector("[data-input-date]")
const userBirthDate = new Date(inputDate.value)
const increasedBirthDate = new Date(
  userBirthDate.getUTCFullYear() + 18,
  userBirthDate.getUTCMonth(),
  userBirthDate.getUTCDate()
)
const currentDate = new Date()
let errorMessage = ""
const isOlder = currentDate - increasedDirthDate >= 0
if(!isOlder) {
  errorMessage = "Para poder registrarte, debes tener al menos 18 años"
}
inputDate.setCustomValidity(errorMessage)
```

1. Capturamos el input de tipo date que tiene el data-attribute: `data-input-date`
2. Generamos un formato de fecha mediante la instanciación del objeto Date, que le pasamos como argumento el contenido/valor del input previamente capturado
3. Creamos un nuevo formato de fecha, agregándole 18 al año ingresado por el usuario con la finalidad de comparar con la fecha actual
4. Creamos y almacenamos en `currentDate` la fecha actual
5. Definimos una variable para establecer un mensaje de error en caso de que la edad del usuario no sea 18+ años, inicialmente *vacío*
6. Validamos si la diferencia de la fecha actual con la fecha del usuario de nacimiento incrementada en 18 es mayor o igual a cero, si es así, quiere decir que el usuario tiene 18+ años, por lo contrario, el usuario no tienen 18+ años
7. Validamos si el usuario es mayor de edad o no, en caso de que el usuario *no sea mayor de edad*, definimos el mensaje que se mostrará en pantalla indicando este detalle
8. Asignamos un mensaje personalizado al input en cuestión mediante el método `.setCustomValidity(message)`  

En los archivos de la práctica, podrás ver como se aplica este proceso de una forma diferente con un `listener`, además de validar que el usuario no ingrese fechas mayores a la fecha actual, puedes revisar los archivos de la práctica [aquí](./project/)  
<br>

---
### **Mensajes personalizados**

Al momento de que un usario ingresa una información no válida en un `input` dependiendo de las restricciones que hayamos establecido, el nevagador mostrará un pequeño "*pop-up*" o mensaje temporal indicando de forma general el error detectado. La presentación de este mensaje puede variar entre navegadores, tanto en el propio mensajo como en la presentación o diseño, por ello, en la mayoria de ocasiones vamos a necesitar definir mensajes propios o personalizados para mostrar a nuestros usuarios en caso de que algún dato no cumpla con las restricciones definidas. Esto lo podemos ver en los dos ejercicios anteriores, donde establecimos un mensaje persnalizado que le indicaciones más precisas al usuario acerca de los errores encontrados en la información ingresada.  

Para poder aplicar nuestros propios mensajes y estilos de presentación en un mensaje de error en nuestros inputs, podemos hacer uso de CSS y la lógica de programación denámica de JavaScript.  

Pero antes de eso, vamos a ver una forma de determinar si un input tiene o no información válida. Para ello hay que realizar los siguientes pasos:
1. Teniendo abierto tu navegador y posicionado en la pestaña en la aplicación de tu formulario en ejecución, pon el foco (*haz click*) en alguno de los input que tengas, sin mover el cursor del input seleccionado haz click derecho y en el menu contextual elige la opción `inspeccionar`, esto abrirá el inspector de elementos "*posicionado*" el input *seleccionado*
2. Ahora haz click sobre la pestaña de `Console` o `Consola` del inspector de elementos, ejecuta lo siguiente en la consola: `$0`. Esto *capturará* el input mediante JavaScript
3. En la misma consola, ahora ejecuta: `$0.validity`, esto dará como resultado el desplige de la información del objeto `ValidityState`, el cual contiene algunas propiedades del input seleccionado. Si despligas la información podrás ver cada una de las propiedades y valores del objeto `ValidityState` del input seleccioando. Las propiedades sobre las que nos interesa trabajar es sobre: `valid` y `valueMissing`, ambos son datos *booleanos* (en realidad todas las propiedades), que por sí mismo nos indican si el input tiene información válida (`valid`) o si el campo está vacío (`valueMissing`)
4. Siguiendo con el ejemplo de esta práctica, vamos a trabajar sobre los inputs para saber si no estan vacíos o si la información ene ellos es válida y/o cumple con alguna restricción previamente definida.  

Para una mejor distribución y legibildiad de código, se crearon archivos separados y se exportaron e importaron en los archivos necesarios haciendo uso de los *moódulos* de JavaScript. Esto lo puedes ver en el directorio de la prática de este tema [aquí](./project/).