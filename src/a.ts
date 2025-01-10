// const x: number=1;
// console.log(x);

// function greet(firstName:string,lastName:string,age:number){
//     console.log("hello " +firstName);
// }

// greet("world","",12);
// type inference

// function sum(num1:number,num2:number):number{
//     return num1+num2;
// }
// const val=sum(1,3);
// console.log(val);


// function age(age:number):boolean{
    // if(age>18){
    //     return true;
    // }else{
    //     return false;
    // }
// }
// let x=age(18);
// console.log(x);

// function sum(num1:number,num2:number):number{
//     return num1+num2;
// }


// function runAfter1S(fn: ()=>void){
//     setTimeout(fn,300);
// }
// runAfter1S(function(){
//     console.log("hi there");
// })



// interface User {
//     firstName:string;
//     lastName:string;
//     age:number;
//     email?:string;
// }
// function isLegal(User:User){
//     if(User.age>18){
//         return true;
//     }else{
//         return false;
//     }
// }
// function greet(User:User){
//     console.log("hello " +User.firstName);
// }
// isLegal({
//     firstName:"navneet",
//     lastName:"pathak",
//     age:20
// })

// interface Person {
//     name: string,
//     age?: number,
//     great(phrase: string): void;
// }

// class Compony implements Person {
//     name: string;
//     age: number;

//     constructor(n: string, a: number) {
//         this.name = n;
//         this.age = a;
//     }

//     great(phrase: string): void {
//         console.log(`${phrase} ${this.name}`);
//     }
// }

// const b = new Compony("navneet", 22);

// console.log(b.name); // Output: navneet


// array

// enum Direction{
//     up,//0
//     down,//1
//     left,//2
//     right//3
// }

// function doSomething(keypress: Direction){
//     if(keypress==Direction.up){

//     }
// }
// doSomething(Direction.up);
// doSomething(Direction.down);
// doSomething(Direction.left);
// doSomething(Direction.right);

// console.log(Direction.down);
// console.log(Direction.up);
// console.log(Direction.left);
// console.log(Direction.right);



// generics

// function identity<T>(arg:T):T{
//     return arg;
// }
// let output=identity<string>("myString");
// let output2=identity<number>(123);
// output.toUpperCase();
// console.log(output);

// interface User{
//     name:String,
//     age:number
// }


// function sumOfAge(user1:User,user2:User){
//     return user1.age+user2.age
// }

// const result=sumOfAge({
//       name:"navneet",
//       age:20,
// },{
//     name:"pathak",
//     age:21,
// })
// console.log(result);



// interface User{
//     name:String,
//     age:number,
//     email:string,
//     password:string
// }
// type Update=Pick<User, 'age' | 'name' >
// type updateValue= Partial<Update>
// function updateUser(update:updateValue){

// }


// interface User{
//     name:String,
//     age:number,
//     readonly email:string,
//     readonly password:string
// }
// type Update=Pick<User, 'age' | 'name' >
// type updateValue= Partial<Update>
// function updateUser(update:updateValue){

// }


// interface User {
//     id: string;
//     name: string;
//   }
  
//   type Users = Record<string, User>;
  
//   const users: Users = {
//     'abc123': { id: 'abc123', name: 'John Doe' },
//     'xyz789': { id: 'xyz789', name: 'Jane Doe' },
//   };
  
//   console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }


interface User {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }