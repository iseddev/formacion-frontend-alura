
// IIEF
import createCheckIcon from "./modules/check_icon.js"
import createTrashIcon from "./modules/trash_icon.js"

const d = document

// Capturar botón para agregar tarea
const formBtn = d.querySelector("[data-form-btn]")

// Función para agregar una tarea a la lista
const createTask = e => {

  // Cancelamos el comportamiento por defecto
  e.preventDefault()

  // Capturamos el elemento "input" con el texto escrito
  const formInput = d.querySelector("[data-form-input]")

  // Almacenamos el texto contenido en el input
  let inputContent = formInput.value

  // Limpiamos el contenido del input
  formInput.value = ""

  // Capturamos el elemento "ul" que contendrá las tareas
  const taskList = d.querySelector("[data-task-list]")

  // Esta es la estructura que tenemos que genarar:
  /*
    <li class="card" data-task>
      <div>
        <i class="far fa-check-square icon"></i>
        <span class="task">Hacer curso de DOM</span>
      </div>
      <i class="fas fa-trash-alt trashIcon icon"></i>
    </li>
  */

  // Creamos el elemento "li"
  const $li = d.createElement("li")
  // Agregamos la(s) clase(s) necesaria(s)
  $li.classList.add("card")
  
  // Creamos el elemento "div"
  const $div = d.createElement("div")
  
  // Crear ícono check
  const checkIcon = createCheckIcon()
  
  // Crear elemento span
  const $span = createSpan()

  // Crear ícono trash
  const trashIcon = createTrashIcon()


  // Agregamos el contenido del input al $span
  $span.innerHTML = inputContent

  // Agregamos cada elemento al $div
  $div.appendChild(checkIcon)
  $div.appendChild($span)

  // Agregamos el $div al $li
  $li.appendChild($div)
  
  // Agregamos el $iTrash al $li
  $li.appendChild(trashIcon)

  // Agregamos el elemento $li al taskList
  taskList.appendChild($li)
}

// Crear elemento span
const createSpan = () => {
  const $span = d.createElement("span")
  $span.classList.add("task")
  return $span
}

formBtn.addEventListener("click", createTask)