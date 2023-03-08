const customerName = "Israel"
const customerId = "17652037"
const custonerAccount = "19237493649"
const customerBalance = 1000

console.log(customerName)

// Aplicando POO - Clases
class Customer {
  name = "";
  dni = "";
  account = "";
  withdrawal = function() {
    console.log("Withdrawing money from bank account")
  }
  deposit =  function() {
    console.log("Depositing money to bank account")
  }
  balance = 0;
}

// Instanciar (referenciar a) a la clase `Customer`
const customerOne = new Customer()
// Definiendo los valores para cada una de las propiedades del objeto
customerOne.name = "John"
customerOne.dni = "17652037"
customerOne.account = "19237493649"
customerOne.balance = 1000
console.log(customerOne)

const customerTwo = new Customer()
customerTwo.name = "Doe"
customerTwo.dni = "92864128"
customerTwo.account = "81741092537"
customerTwo.balance = 8000
console.log(customerTwo)