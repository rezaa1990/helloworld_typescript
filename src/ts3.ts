// class ts3 --> 12:59

// class Account {
//   id: number;
//   name: string;
//   balance: number;
//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this.balance = balance;
//   }
//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("invalid amount");
//     }
//     this.balance += amount;
//   }
// }

// let account = new Account(1,"reza",0);
// account.deposit(100);
// console.log(account.balance);
// console.log(account);
// console.log(typeof account);
// console.log(account instanceof Account);

//////////////////////////////////////////////////////

// modifier ts3 --> 25:30

// class Account {
//   readonly id: number;
//   name: string;
//   nickname?: string;
//   private _balance: number;
//   constructor(id: number, name: string, balance: number) {
//     this.id = id;
//     this.name = name;
//     this._balance = balance;
//   }
//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("invalid amount");
//     }
//     this._balance += amount;
//   }
//   getBalance():number{
//     return this._balance
//   }
//   private calculateTax(){

//   }
// }

// let account = new Account(1, "reza", 0);
// console.log(account._balance); //private
// console.log(account.getBalance());

////////////////////////////////////////////////////////////////////

// parameter's property ts3 --> 35:52

// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public name: string,
//     private _balance: number
//   ) {}
//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("invalid amount");
//     }
//     this._balance += amount;
//   }
//   getBalance(): number {
//     return this._balance;
//   }
//   private calculateTax() {}
// }

// let account = new Account(1, "reza", 0);

//////////////////////////////////////////////////////////

// getter & setter ts3 --> 40:03

// class Account {
//   nickname?: string;

//   constructor(
//     public readonly id: number,
//     public name: string,
//     private _balance: number
//   ) {}
//   deposit(amount: number): void {
//     if (amount <= 0) {
//       throw new Error("invalid amount");
//     }
//     this._balance += amount;
//   }
//   get balance(): number {
//     return this._balance;
//   }
//   set balance(value: number) {
//     if (value <= 0) {
//       throw new Error("invalid value");
//     }
//     this._balance = value;
//   }
// private calculateTax() {}
// }

// let account = new Account(1, "reza", 0);
// console.log(account.balance); //get
// account.balance = 122; //set
// console.log(account.balance);

//////////////////////////////////////////////////////////////

// dynamic propperty ts3 --> 40:03

// class SeatAssignment {
//   [seatNumber: string]: string; // index signiture propperty
// }

// let seats = new SeatAssignment();
// seats.A1 = "ali";
// seats["A2"] = "hosein";
// seats.A3 = "reza";

////////////////////////////////////////////////////////////

// static members ts3 --> 51:08

// class Ride {
//   private static _activeRides: number = 0; //static = ersbari nemishavad va marbut be class ast.
//   start() {
//     Ride._activeRides++;
//   }
//   stop() {
//     Ride._activeRides--;
//   }

//   static get activeRides() {
//     return Ride._activeRides;
//   }
// }
// let ride1 = new Ride();
// ride1.start();

// let ride2 = new Ride();
// ride2.start();
// ride2.start();

// console.log(Ride.activeRides);

//////////////////////////////////////////////////////////

// verasat  ts3 --> 1:00:48

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   walk() {
//     console.log("walking");
//   }

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
//   takeTest() {
//     console.log("taking a test");
//   }
// }

// let student = new Student(1, "reza", "zarei");

////////////////////////////////////////////////////////////////////////////

// override method  ts3 --> 1:12:21

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   walk() {
//     console.log("walking");
//   }

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
//   takeTest() {
//     console.log("taking a test");
//   }
// }
// class Teacher extends Person {
//   override get fullName() {
//     return "professor" + " " +super.fullName;
//   }
// }

// let teacher = new Teacher("reza", "zarei");
// console.log(teacher.fullName);

//////////////////////////////////////////////////////////////////////////

// chand rikhti(polymorphism)  ts3 --> 1:19:02

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   walk() {
//     console.log("walking");
//   }

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
//   takeTest() {
//     console.log("taking a test");
//   }
// }
// class Teacher extends Person {
//   override get fullName() {
//     return "professor" + " " + super.fullName;
//   }
// }

// class Pincipal extends Person {
//   override get fullName(): string {
//     return "Principal" + " " + super.fullName;
//   }
// }

// function printNames(people: Person[]) {
//   for (let person of people) {
//     console.log(person.fullName);
//   }
// }

// printNames([
//   new Student(1, "reza", "zarei"),
//   new Teacher("reza", "zarei"),
//   new Pincipal("reza", "azimi"),
// ]);

////////////////////////////////////////////////////////////////////

// protected ts3 --> 1:25:11

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   protected walk() {
//     console.log("walking");
//   }

//   get fullName() {
//     return this.firstName + " " + this.lastName;
//   }
// }

// class Student extends Person {
//   constructor(public studentId: number, firstName: string, lastName: string) {
//     super(firstName, lastName);
//   }
//   takeTest() {
//     console.log("taking a test");
//   }
// }

// class Teacher extends Person {
//   override get fullName() {
//     return "professor" + " " + super.fullName;
//   }
// }

/////////////////////////////////////////////////////////////////////////////////////////////

// entezaa ts3 --> 1:27:30

// abstract class Shape {
//   constructor(public color: string) {}
//   abstract render(): void;
// }

// class Circle extends Shape {
//   constructor(public radious: number, color: string) {
//     super(color);
//   }
//   override render(): void {
//     console.log("Rendering a circle ...");
//   }
// }

////////////////////////////////////////////////////////////////////////////////////////////

// interface ts3 --> 1:33:14

// interface shekle yek object ra moshakhas mikonad

interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {}
  removeEvent(): void {}
}
/////////////////////////////////////////////////////////////////////////////