const d = document

// Crear elemento span
const createSpan = () => {
  const $span = d.createElement("span")
  $span.classList.add("task")
  return $span
}

export default createSpan