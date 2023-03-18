import { Employee } from "./Employee.js";

export class Director extends Employee {
  constructor(name, dni, salary) {
    super(name, dni, salary)
  }

  showBonus() {
    const bonus = 10
    return super._showBonus(bonus)
  }
}