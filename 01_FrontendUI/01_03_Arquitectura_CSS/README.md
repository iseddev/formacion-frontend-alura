# Arquitectura CSS: descomplicando los problemas ✍

### Curso enfocado en el desarrollo de conocimientos y habilidades para el manejo de estándares en la organización de los archivos de estilización CSS dentro de un proyecto de desarrollo web.

Curso práctico donde se aplicaran los conceptos de mejores prácticas para la creación y mantenibilidad de archivos de estilo CSS.

## Conceptos básicos

* **Arquitectura CSS** - Metodología que se enfoca en la estructura de un proyecto
* **Objetivos** - Implementar buenas prácticas para la organización de ficheros (carpetas) y archivos CSS en conjunto con metodologías de implementación de nomenclaturas o **metodologías** de *clases* CSS para mantener un orden bien estructurado y estandarizado para que su posterior modificación sea lo más rápida y eficientemente posible.

## Estructura de una buena arquitectura CSS

* **Predecible:** Las reglas definidas deben *hacer* lo que se espera. Al añadir o actualizar una regla, no se deben tener comportammientos inesperados en el proyecto.
* **Reutilizable:** Las reglas definidas deben ser *abstractas*, y *desacopladas* del resto de reglas. Esto ayuda a crear *componentes* individuales de forma más rápida y sencilla.
* **Mantenible:** El código generado se debe poder *refactorizar* o modificarse en puntos específicos sin la necesidad de alterar el código completo existente.
* **Escalable:** No debe haber imáctos negativos a medida que el código crece, es decir, debe ser lo más fácil posible la aplicación de actualizaciones o mejoras a nuestro código.

## Metodologías CSS (de "clases") *más populares*

* OOCSS - *Object-Oriented CSS*
* SMACSS - *Scalable and Modular Architecture for CSS*
* BEM - *Block - Element - Modifier*
* ITCSS - *Inverted Triangle CSS*
* ACSS - *Atomic design CSS*

## Metodologías CSS utilizadas en esta formación:

###**BEM -> Bloque/Elemento/Modificador**
El objetivo es "dividir" la estructura HTML en bloques independientes mediante la implementación de clases CSS.  
La nomenclatura sugerida es la siguiente:
* **Bloque** => Elemento superior que define un "*componente*" individual que por sí mismo tiene un significado dentro de la estructura de maquetado HTML, por ejemplo, si definimos la clase `card`, obsevamos claramente que dicha clase hace referencia a un elemento que tiene la característica específica de ser una "tarjeta" por sí sola.
* **Elemento** => Es una parte que deriva del *bloque* al que pertenece y que no puede usarse por separado, por ejemplo, podemos tener el elemento "*image*" del *bloque* "*card*", que definido en una clase CSS, quedaría de la siguiente manera: `card__image`
* **Modificador** => Elemento que define una característica, estado o comportamiento específico ya sea de un *bloque* o de un *elemento*, por ejemplo, si tendremos 2 tipos de texto en nuestra *card*, podemos hacer lo siguiente en nuestro CSS: `card__text--big` y/o `card__text--small`