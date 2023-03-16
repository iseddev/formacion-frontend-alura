import { Account } from "./Account.js";

export class SavingAccount extends Account{
  constructor(customer, number, branch, balance) {
    super(customer, number, branch, balance)
  }

  withdrawal(amount) {
    super._withdrawal(amount, 2)
  }
}