import { HasFormatter } from "../interfaces/hasformatter.js";
export class Payments implements HasFormatter {
  constructor(
    public recepient: string,
    readonly detail: string,
    readonly amount: number
  ) {}
  format() {
    return `${this.recepient} owes $${this.amount} for ${this.detail}`;
  }
}
