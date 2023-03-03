import handlingCheckTask from "./modules/check_icon.js"
import handlingDeleteTask from "./modules/trash_icon.js"
import createSpan from "./modules/create_span.js"

const d = document

const formBtn = d.querySelector("[data-form-btn]")

const manageTask = e => {

  e.preventDefault()

  const formInput = d.querySelector("[data-form-input]")
  const $ul = d.querySelector("[data-task-ul]")

  const $li = d.createElement("li")
  const $div = d.createElement("div")
  const checkIcon = handlingCheckTask()
  const deleteIcon = handlingDeleteTask()
  const $span = createSpan()
  
  let inputContent = formInput.value
  formInput.value = ""
  
  $li.classList.add("card")
  $span.innerHTML = inputContent

  $div.appendChild(checkIcon)
  $div.appendChild($span)
  $li.appendChild($div)
  $li.appendChild(deleteIcon)
  $ul.appendChild($li)
}

formBtn.addEventListener("click", manageTask)