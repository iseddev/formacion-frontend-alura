# Validación de formualrios con JavaScript

---
## 01 - Tipos de *input*

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
## 02 - Validar datos (expresiones regulares - regex)

Ahora que ya sabemos que dentro de un documento HTML existe una estructura jerárquica de todos los elementos que lo componen, vamos a ver como podemos acceder a ellos mediante el uso de JavaScript y validar que la información ingresada cumpla con determinados requisitos para asegurar la calidad de los datos ingresados.  

Por ejemplo, para el caso de las contraseñas, podemos crear un *patrón* definido para que el usuario ingrese sólo caractéres especificados. Para ello haremos uso de las ***expresiones regulares*** también conocidads como *regex* (de *regular expressions*). En el ejemplo de este tema, utilizaremos la siguiente expresión regular:  
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

