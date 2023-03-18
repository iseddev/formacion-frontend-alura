import { Account } from "./Account.js";

export class PayrollAccount extends Account {
  constructor(customer, number, branch, balance) {
    super(customer, number, branch, balance)
  }

  // Comentar este me´todo para ver el funcionamiento de la instrucción "throw new Error()"
  withdrawal(amount) {
    super._withdrawal(amount, 3)
  }
}