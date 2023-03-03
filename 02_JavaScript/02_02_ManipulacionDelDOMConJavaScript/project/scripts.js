const d = document

// Capturar el elemento "button" que tiene la clase ".btnCreate"
const btnCreate = d.querySelector(".btnCreate")
console.log(btnCreate)

// Una mejor alternativa es por medio de los "data attributes"
const dataFormBtn = d.querySelector("[data-form-btn]")
console.log(dataFormBtn)

// Crear una función que ejecute las operaciones para crear una tarea

const createTask = e => {
  
  // Al utilizar un elemento "button" propios de los formularios y hacer click sobre el, podremos observar que la página se actualiza por el comportamiento que tiene este elemento "button" de los formularios, para "prevenir" o detener este comportamiento, podemos hacer uso del método ".preventDefault()", el cuál ayudara a detener el comportamiento del "button" que tiene por defecto
  e.preventDefault()

  // Ahora debemos "capturar" el contenido del "input" en donde el usuario escribe la tarea requerida, para ello haremos uso del data-attribute asignado al input en cuestión:
  const dataFormInput = d.querySelector("[data-form-input]")
  console.log(dataFormInput)

  // Ahora asignamos a una variable el contenido (texto) que el usuario escribió:
  let taskContent = dataFormInput.value
  console.log(taskContent)

  // Ahora "limpiamos" el contenido del input, o más bien, cambiamos el contenido por un string vacío
  dataFormInput.value = ""

  // Capturamos el elemento "li" para poder agreagar la tarea escrita por el usuario a la lista de tareas
  const taskList = d.querySelector("[data-task-list]")
  console.log(taskList)

  // Creamos el elemento "li" para poder agreagar la tarea escrita por el usuario a la lista de tareas
  const taskItem = d.createElement("li")
  // Agregamos la clase que dará los estilos requeridos
  taskItem.classList.add("card")
  console.log(taskItem)

  // Definimos el "template" o plantilla de cada elemento li que se irá agregando a la lista de tareas
  const templateTask = `
    <div>
      ${checkIcon()}
      <span class="task">${taskContent}</span>
    </div>
    <i class="fas fa-trash-alt trashIcon icon"></i>
  `
  console.log(templateTask)

  // Agregamos al nodo de nuestro li la estructura con la tarea generada
  taskItem.innerHTML = templateTask
  
  // Agregamos cada tarea creada por el usuario al elemento ul
  taskList.appendChild(taskItem)

  // Otros métodos para la manipulación de nodos
  // .insertBefore(parent, child)
  // .replaceChild(oldChild, newChild)
  // .removeChild(child)
}

// Inicializar un "listener" que esté "escuchando" un evento, en este caso, necesitamos escuchar el momento en que el usuario haga "click" sobre el botón para crear una nueva tarea, esto lo logramos con el método/función .addEventListener(), de la siguiente forma:
dataFormBtn.addEventListener("click", createTask)

// Fucnión para el manejo del estado de las tareas para manipular si estan on o finalizadas
const checkIcon = () => {
  // Creación del elemento i para el manejo del ícono de "check"
  const $i = d.createElement("i")
  // Agregar las clases correspondientes
  $i.classList.add("far", "fa-check-square", "icon")

  // Devolvemos el elemento creado
  return $i
}

// La ejecución de éste código no nos mostrará de forma correcta los elementos creados hasta el momento, debido a que es necesario crear y añadir los elementos de forma dínámica y agregarlos dentro de la esructura HTML, Para eso, trabajeramos en un archivo nuevo, que llamaremos: tasks.js