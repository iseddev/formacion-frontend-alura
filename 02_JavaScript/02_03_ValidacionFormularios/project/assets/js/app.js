const d = document

import { inputsHandler } from "./modules/inputs_handler.js"

const inputs = d.querySelectorAll("input")

inputs.forEach(input => {
  input.addEventListener("blur", e => {
    inputsHandler(e.target)
  })
})