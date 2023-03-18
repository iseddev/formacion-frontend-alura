export class Autentication {
  static checkPassword (User, password) {
    // return User.getPassword === password
    if("isAuthenticable" in User && User.isAuthenticable instanceof Function)
      return User.isAuthenticable(password)
    else
      return false
  }
}