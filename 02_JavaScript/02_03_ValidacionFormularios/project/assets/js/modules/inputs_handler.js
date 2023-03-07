import { validateBirth } from "./validate_birth.js"
import { setErrorMessage } from "./error_message.js"

const signupInputs = {
  birth: input => validateBirth(input),
}

export const inputsHandler = input => {

  const inputType = input.dataset.signup

  if(signupInputs[inputType]) {
    signupInputs[inputType](input)
  }

  if(input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid")
    input.parentElement.querySelector(".input-message-error").innerHTML = ""
    if(inputType === "birth") { validateBirth(input) }
  } else {
    input.parentElement.classList.add("input-container--invalid")
    input.parentElement.querySelector(".input-message-error").innerHTML = setErrorMessage(inputType, input)
  }
}