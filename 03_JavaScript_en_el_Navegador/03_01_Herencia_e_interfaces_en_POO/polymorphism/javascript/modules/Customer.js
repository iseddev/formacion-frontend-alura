export class Customer {
  name
  dni
  rfc
  #password
  isAuthenticable

  constructor(name, dni, rfc) {
    this.name = name
    this.dni = dni
    this.rfc = rfc
    this.#password = null
  }

  set setPassword(password) {
    this.#password = password
  }

  // get getPassword() {
  //   return this.#password
  // }
  
  /*isAuthenticable(password) {
    // Se implementa una lógica diferente para ver el funcionaminto de las interfaces
    // return false
    return true
  }
  */
}