const d = document

// Crear ícono trash
const handlingDeleteTask = () => {
  const $i = d.createElement("i")
  $i.classList.add("fas", "fa-trash-alt", "trashIcon",  "icon")

  // Escuchar el evento click en este ícono para cambiar clases
  $i.addEventListener("click", deleteTask)

  return $i
}

// Eliminar tarea
const deleteTask = e => {
  // Capturamos al elemento padre del ícono
  const parent = e.target.parentElement
  parent.remove()
}

export default handlingDeleteTask