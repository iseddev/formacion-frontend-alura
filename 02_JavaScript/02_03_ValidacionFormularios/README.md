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
El atributo `required` es un valor *boolean*, es decir, o es `true` o es `false`, por defecto, `required` es `false`, por lo que tenemos que definir este atributo en el input en cuestión y esto forzará (obligará) al usuario a no dejar vació dicho campo (no es necesario: `required="true"`, sólo: `required`, es suficiente)
<br>
