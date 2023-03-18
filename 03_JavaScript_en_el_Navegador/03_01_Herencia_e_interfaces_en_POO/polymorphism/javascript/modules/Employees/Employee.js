export class Employee {
  #name
  #dni
  #salary
  #password

  constructor(name, dni, salary) {
    this.#name = name
    this.#dni = dni
    this.#salary = salary
    this.#password = null
  }

  showBonus(bonus) {
    return this.#salary
  }

  _showBonus(bonus) {
    return this.#salary + (this.#salary * bonus / 100)
  }

  set setPassword(password) {
    this.#password = password
  }

  // get getPassword() {
  //   return this.#password
  // }
  
  isAuthenticable(password) {
    return password === this.#password
  }
}