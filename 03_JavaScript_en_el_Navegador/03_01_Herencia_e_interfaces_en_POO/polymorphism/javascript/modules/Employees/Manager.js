import { Employee } from "./Employee.js";

export class Manager extends Employee {
  constructor(name, dni, salary) {
    super(name, dni, salary)
  }

  showBonus() {
    const bonus = 5
    return super._showBonus(bonus)
  }
}