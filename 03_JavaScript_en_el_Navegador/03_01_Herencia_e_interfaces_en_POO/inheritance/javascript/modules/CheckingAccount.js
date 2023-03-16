import { Account } from "./Account.js"

export class CheckingAccount extends Account{

  static accountNumbers = 0

  constructor(customer, number, branch) {
    super(customer, number, branch, 0)
    CheckingAccount.accountNumbers++
  }

  withdrawal(amount) {
    super._withdrawal(amount, 5)
  }
}