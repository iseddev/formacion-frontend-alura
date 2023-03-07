const d = document

// Capturamos el input de tipo date un data-attribute
const inputDate = d.querySelector("[data-input-date]")

// Creamos un listener para cuando el foco ya no se encuentre en el input
inputDate.addEventListener("blur", e => {
  validateBirth(e.target)
})

const validateBirth = (inputDate) => {

  // Obtenemos el contenido/valor del input y generamos un formato de fecha para su validación
  const userBirthDate = new Date(inputDate.value)
  let message = ""
  
  // Validamos si la fecha ingresada por el usuario corresponde a un usuario mayor o igual a 18 años
  const isOlder = isValidAge(userBirthDate)
  
  if(isOlder === undefined) {
    message = "Debes ingresar una fecha menor a la actual"
  } else if(!isOlder) {
    message = "Para poder registrarte, debes tener al menos 18 años"
  }
 
  inputDate.setCustomValidity(message)
}

const isValidAge = (userBirthDate) => {

  // Creamos una variable que almacene la fecha actual
  const currentDate = new Date()
  
  // Establecemos una nueva fecha que simule la fecha de nacimiento del usuario más 18 años
  const increasedBirthDate = new Date(
    userBirthDate.getUTCFullYear() + 18,
    userBirthDate.getUTCMonth(),
    userBirthDate.getUTCDate()
  )

  // Definimos la edad del usuario con el DÍA actual ingresado en el input, ya que debido a la zana horaria, este puede cambiar
  const currentBirthDate = new Date(
    userBirthDate.getUTCFullYear(),
    userBirthDate.getUTCMonth(),
    userBirthDate.getUTCDate()
  )

  if(currentDate - currentBirthDate >= 0) {
    return currentDate - increasedBirthDate >= 0
  }
}