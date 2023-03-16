import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payments } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/hasformatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice("Docone", "TV", 200);
// docTwo = new Payments("Doctwo", "Refrigerator", 100);

// let doc: HasFormatter[] = [];
// doc.push(docOne);
// doc.push(docTwo);

// console.log(doc);
// interface Isperson {
//   name: string;
//   age: number;
//   speak(a: string): void;
//   spend(a: number): number;
// }
// const me: Isperson = {
//   name: "rahul",
//   age: 32,
//   speak(text: string): void {
//     console.log(text);
//   },
//   spend(number: number): number {
//     return number;
//   },
// };

// const greetPerson = (person: Isperson) => {
//   console.log("hello " + person.name);
// };
// let x = greetPerson(me);
// console.log(x);
// const invOne = new Invoice("Rahul", "Iphone", 200);
// const invtwo = new Invoice("Sudha", "Iwatch", 500);
// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invtwo);
// invoices.forEach((inv) => {
//   inv.client = "something else";
//   console.log(inv.amount, inv.client, inv.detail, inv.format());
// });

//list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;

  //tuples
  let values: [string, string, number] = [
    tofrom.value,
    details.value,
    amount.valueAsNumber,
  ];
  if (type.value === "invoice") {
    doc = new Invoice(...values);
  } else doc = new Payments(...values);

  //console.log(doc);
  list.render(doc, type.value, "end");
});
//enums
enum CardinalDirection {
  East = 1,
  West,
  North,
  south,
}
let currentDirection = CardinalDirection.West;
console.log(currentDirection);

//tuples
