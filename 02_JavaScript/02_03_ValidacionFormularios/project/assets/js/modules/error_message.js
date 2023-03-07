const validityErrors = [
  "valueMissing",
  "typeMismatch",
  "patternMismatch",
  "customError",
]

const errorMessages = {
  name: {
    valueMissing: "Campo requerido, ingresa tu nombre",
  },
  email: {
    valueMissing: "Campo requerido, ingresa tu correo electrónico",
    typeMismatch: "Formato de correo electrónico inválido",
  },
  password: {
    valueMissing: "Campo requerido, ingresa tu contraseña",
    patternMismatch: "La contraseña debe ser: 6-12 caracteres; por lo menos tener 1 letra minúscula, 1 letra mayúscula y 1 número",
  },
  birth: {
    valueMissing: "Campo requerido, ingresa tu fecha de nacimiento",
    // customError: "Registro válido sólo si tienes 18 años o más",
  },
  // phone: "temp",
  // address: "temp",
  // city: "temp",
  // state: "temp",
}

export const setErrorMessage = (inputType, input) => {
  let message = ""

  validityErrors.forEach(error => {
    if(input.validity[error]) {
      message = errorMessages[inputType][error]
    }
  })

  return message
}