// type alias ts2 --> 00:00

// type Employee = {
//   readonly id: number;
//   name: string;
//   retire: (date: Date) => void;
// };

// let employee: Employee = {
//   id: 1,
//   name: "reza",
//   retire: (date: Date) => {
//     console.log(date);
//   },
// };

/////////////////////////////////////////////

// union types ts2 --> 05:10

// function kgToLbs(weight: number | string): number {
//   if (typeof weight === "number") return weight * 2.2; //narrowing
//   else return parseInt(weight) * 2.2;
// }

///////////////////////////////////////////////

// intersection types ts2 -->10:38

// type Deaggable = {
//   drag: () => void;
// };

// type Resizeable = {
//   resize: () => void;
// };

// type UIWidget = Deaggable & Resizeable;

// let textBox: UIWidget = {
//   drag: () => {},
//   resize: () => {},
// };

////////////////////////////////////////////////////

// literal types ts2 -->16:00

// type quantity = 50 | 100 | 333;
// let quantity: quantity = 333;

// type metric = "cm" | "inch";
// let metric: metric = "cm";

///////////////////////////////////////////////////

// nullable types ts2 -->19:19

// function greet(name: string | null | undefined) {
//   if (name) console.log(name.toUpperCase());
//   else console.log("invalid argument");
// }
// greet(null);
// greet(undefined);

///////////////////////////////////////////////////////

// optional chain ts2 -->24:51

// type Customer = {
//   biirthday?: Date;
// };

// function getCustomer(id: number): Customer | null | undefined {
//   return id === 0 ? null : { biirthday: new Date() };
// }

// let customer = getCustomer(0);
// console.log(customer?.biirthday?.getFullYear);

///////////////////////////////////////////////////////////////

// nullish operator ts2 --> 38:28

// let speed: number | null = null;

// let ride = {
//   speed: speed ?? 30,
// };

////////////////////////////////////////////////////////

// type assertion ts2 --> 42:36

// let phone = document.getElementById("phone") as HTMLInputElement;
// let phone1 = <HTMLInputElement> document.getElementById("phone");

///////////////////////////////////////////////////////////////////

//unknown ts2 --> 46:31

// function render(document: unknown){
//   if (typeof document === "string") {
//     console.log(document);
//   }
// }

////////////////////////////////////////////////////////////////////

//never ts2 --> 50:22

// function processEvent():never{
//   while (true) {}
// }
// processEvent();
// console.log("heyyy");

//////////////////////////////////////////////////////////
