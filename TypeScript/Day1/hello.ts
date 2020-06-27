/* TYPE ANNOTATIONS */
const firstName: string = "Thuc Hi";
const price: number = 100;
const isShown: boolean = false;

let product: {id : number, name: string};
product = {
    id: 100,
    name: "Nordic Coder"
};

let fileList: string[];
fileList = ["hello-world.ts", "hello-world.js"];

/* INTERFACES */
interface IEmployee {
    id: number
    name: string
    sayHi: () => string 
}

const Employee: IEmployee = {
    id: 123456,
    name: "Hi Tran",
    sayHi: () => "Hello"
}

/* OPTIONAL */
interface IStudent {
    firstName: string
    lastName?:string
}

const student:IStudent = {
    firstName: "David"
}

/* CLASS */
interface IPerson {
    firstName: string
    lastName: string
    sayHi: () => string
}

class Person implements IPerson {
    firstName =  "";
    lastName =  "";
    sayHi = () => `Hello, this is ${this.firstName} ${this.lastName}`;
}

const person1 = new Person();
person1.firstName = "David";
person1.lastName = "Nagrosst";
console.log(person1.sayHi());