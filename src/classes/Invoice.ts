import { HasFormatter } from "../interfaces/hasformatter.js";
export class Invoice implements HasFormatter {
  constructor(
    public client: string,
    readonly detail: string,
    readonly amount: number
  ) {}
  format() {
    return `${this.client} owes $${this.amount} for ${this.detail}`;
  }
}
