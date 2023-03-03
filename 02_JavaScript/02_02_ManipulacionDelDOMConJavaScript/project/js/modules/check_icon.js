const d = document

// Crear ícono check
const createCheckIcon = () => {
  const $i = d.createElement("i")
  $i.classList.add("far", "fa-check-square", "icon")
  
  // Escuchar el evento click en este ícono para cambiar clases
  $i.addEventListener("click", updateCheckIcon)

  return $i
}

// Actualizar clases del elemento i
const updateCheckIcon = e => {
  // Almacenar el ícono de check "clickeado"
  const checkIcon = e.target
  
  // Añadir/Remover clases
  checkIcon.classList.toggle("far")
  checkIcon.classList.toggle("fas")
  checkIcon.classList.toggle("completeIcon")
}

export default createCheckIcon