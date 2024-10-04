// decorators ts5 --> 00:00

// function Component(constructor: Function) {
//   console.log("Component decorator called");
//   constructor.prototype.uniqueId = Date.now();
//   constructor.prototype.insertInDom = () => {
//     console.log("Inserting the component in DOM");
//   };
// }

// @Component
// class ProfileComponent {}

///////////////////////////////////////////////////////

// ارسال پارامتر به دکاریتور ts5 --> 10:08

// type ComponentOptions = {
//   selctor: string;
// };

// function Component(options: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Component decorator called");
//     constructor.prototype.options = options;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDom = () => {
//       console.log("Inserting the component in DOM");
//     };
//   };
// }
// @Component({ selctor: "#profile_img" })
// class ProfileComponent {}

/////////////////////////////////////////////////////////////////////////

// ترکیب دکاریتور ts5 --> 10:08

// type ComponentOptions = {
//   selctor: string;
// };

// function Component(options: ComponentOptions) {
//   return (constructor: Function) => {
//     console.log("Component decorator called");
//     constructor.prototype.options = options;
//     constructor.prototype.uniqueId = Date.now();
//     constructor.prototype.insertInDom = () => {
//       console.log("Inserting the component in DOM");
//     };
//   };
// }

// function Pipe(constructor: Function) {
//   console.log("Pipe decorator called");
//   constructor.prototype.pipe = true;
// }
// @Pipe
// @Component({ selctor: "#profile_img" })
// class ProfileComponent {}

///////////////////////////////////////////////////////////////////////////////

// method decorator ts5 --> 17:07

// function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
//   const original = descriptor.value as Function;
//   descriptor.value = function (...args: any) {
//     console.log("before");
//     original.call(this, ...args);
//     console.log("after");
//   };
// }
// class Person {
//   @Log
//   say(msg: string) {
//     console.log(`Person says ` + msg);
//   }
// }
// let person = new Person();
// person.say("hello");

/////////////////////////////////////////////////////////////////////////

// accessor decorator ts5 --> 27:44
// accessor = getter & setter

// function Capitalize(
//   target: any,
//   methodName: string,
//   desceriptor: PropertyDescriptor
// ) {
//   const original = desceriptor.get;
//   desceriptor.get = function () {
//     const result = original?.call(this);
//     return typeof result === "string" ? result.toLocaleUpperCase() : result;
//   };
// }

// class Person {
//   constructor(public firstName: string, public lastName: string) {}
//   @Capitalize
//   get fullName() {
//     return `${this.firstName} ${this.lastName}`;
//   }
// }
// let person = new Person("reza", "zarei");
// console.log(person.fullName);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// property decorator ts5 --> 36:04

// function MinLength(length: number) {
//   return (target: any, propertyName: string) => {
//     let value: string;

//     const descriptor: PropertyDescriptor = {
//       get() {
//         return value;
//       },
//       set(newValue: string) {
//         if (newValue.length < length) {
//           throw new Error(
//             `${propertyName} should have at least ${length} characters`
//           );
//         }
//         value = newValue;
//       },
//     };

//     // Define the getter and setter for the property on the prototype
//     Object.defineProperty(target, propertyName, descriptor);
//   };
// }

// class User {
//   @MinLength(4)
//   password: string;

//   constructor(password: string) {
//     this.password = password;
//   }
// }

// // Creating a User instance with an invalid password
// let user1 = new User("34");  // This will throw an error and stop the script execution

// // This won't be reached if the above line throws an error
// let user2 = new User("12345");
// console.log(user2.password);  // This works fine

/////////////////////////////////////////////////////////////////////////////////////////////////

// parameter decorator ts5 --> 43:49

