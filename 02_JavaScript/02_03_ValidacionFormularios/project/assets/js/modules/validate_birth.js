export const validateBirth = (input) => {

  const userBirth = new Date(input.value)
  const isValidAge = isLegalAge(userBirth)
  
  let message = ""

  if(isValidAge === undefined) {
    input.parentElement.classList.add("input-container--invalid")
    message = "La fecha ingresada es mayor a la actual, verifica los datos ingresados"
  } else if(!isValidAge) {
    input.parentElement.classList.add("input-container--invalid")
    message = "Para poder registrarte, debes tener al menos 18 años"
  }

  input.parentElement.querySelector(".input-message-error").innerHTML = message
  // input.setCustomValidity(message)
}

const isLegalAge = (userBirth) => {

  const currentDate = new Date()

  const increasedBirthDate = new Date(
    userBirth.getUTCFullYear() + 18,
    userBirth.getUTCMonth(),
    userBirth.getUTCDate()
  )

  const currentBirthDate = new Date(
    userBirth.getUTCFullYear(),
    userBirth.getUTCMonth(),
    userBirth.getUTCDate()
  )

  if(currentDate - currentBirthDate >= 0)
    return currentDate - increasedBirthDate >= 0
}