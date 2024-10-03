// generics(generic classes) ts3 --> 00:00

// class KeyValuePair<k, v> {
//   constructor(public key: k, public value: v) {}
// }

// let kv = new KeyValuePair<number, string>(1, "2");

////////////////////////////////////////////////////////

// generics(generic functions & methods) ts3 --> 09:53

// function wrapInArray<T>(value: T) {
//   return [value];
// }

//----------------------------------------------------

// class ArrayUtils {
//   wrapInArray<T>(value: T) {
//     return [value];
//   }
// }
// let utils = new ArrayUtils();
// utils.wrapInArray<string>("");

/////////////////////////////////////////////////////////////////////

// generics(generic interface) ts3 --> 14:08

// interface Result<T> {
//   data: T | null;
//   error: string | null;
// }

// interface User {
//   username: string;
// }

// interface Product {
//   title: string;
// }
// function fetch<T>(url: string): Result<T> {
//   return { data: null, error: null };
// }

// fetch<User>("url");
// fetch<Product>("url");

///////////////////////////////////////////////////////////////

// generics اعمال محدودیت ts3 --> 22:01

// interface Person {
//   name: string;
// }
// class Ps {
//   constructor(public name: string) {}
// }
// function echo<T extends number | string>(value: T): T {
//   return value;
// }
// echo(1);

// function echo1<T extends { name: string }>(value: T): T {
//   return value;
// }
// echo1({ name: "reza" });

// function echo2<T extends Person>(value: T) {
//   return value;
// }

// function echo3<T extends Ps>(value: T) {
//   return value;
// }

//////////////////////////////////////////////////////////////

// وراثت در کلاسهای جنریک ts3 --> 27:16

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   private _object: T[] = [];
//   add(obj: T): void {
//     this._object.push(obj);
//   }
// }

// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }
// let store = new CompressibleStore<Product>(); // سناریو اول

//------------------------------------------------------------------------------------

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objecst: T[] = [];
//   add(obj: T): void {
//     this._objecst.push(obj);
//   }
// }

// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// class SearchableStore<T extends { name: string }> extends Store<T> { // سناریو دوم استفاده از محدودیت
//   find(name: string): T | undefined {
//     return this._objecst.find((obj) => obj.name === name);
//   }
// }
//  let m = new SearchableStore();
//  m.find("reza");

//--------------------------------------------------------------------------------------------

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objecst: T[] = [];
//   add(obj: T): void {
//     this._objecst.push(obj);
//   }
// }

// class CompressibleStore<T> extends Store<T> {
//   compress() {}
// }

// class ProductStore extends Store<Product> {         // سناریو سوم
//   filterByCategory(category: string): Product[] {
//     return [];
//   }
// }

// let m = new ProductStore();
// m.filterByCategory("p1");

/////////////////////////////////////////////////////////////////////////////////////////

// keyof ts3 --> 41:48

// interface Product {
//   name: string;
//   price: number;
// }

// class Store<T> {
//   protected _objecst: T[] = [];
//   add(obj: T): void {
//     this._objecst.push(obj);
//   }
//   find(property: keyof T, value: unknown): T | undefined {        // برای اینکه با ایندکس سیگنیچر(استفاده داینامیک از آبجکتها) اشتباه نشود از کی آف استفاده میکنیم. که یعنی یکی از کلیدهای تی
//     return this._objecst.find((obj) => obj[property] === value);
//   }
// }

// let store = new Store<Product>();
// store.add({ name: "a", price: 1 });
// store.find("name", "a");
// store.find("price", 1);

///////////////////////////////////////////////////////////////////////////////////////

// typemapping ts3 --> 41:48

// interface Product {
//   name: string;
//   price: number;
// }

// type OnlyRead<T> = {
//   readonly [k in keyof T]: T[k];
// };

// type Optional<T> = {
//   [k in keyof T]?: T[k];
// };

// type Nullable<T> = {
//   [k in keyof T]?: T[k] | null;
// };

// let product: OnlyRead<Product> = {
//   name: "a",
//   price: 1,
// };

/////////////////////////////////////////////////////////////////////
