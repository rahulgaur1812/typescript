export class Payments {
    constructor(recepient, detail, amount) {
        this.recepient = recepient;
        this.detail = detail;
        this.amount = amount;
    }
    format() {
        return `${this.recepient} owes $${this.amount} for ${this.detail}`;
    }
}
