/* TYPE ANNOTATIONS */
var firstName = "Thuc Hi";
var price = 100;
var isShown = false;
var product;
product = {
    id: 100,
    name: "Nordic Coder"
};
var fileList;
fileList = ["hello-world.ts", "hello-world.js"];
var Employee = {
    id: 123456,
    name: "Hi Tran",
    sayHi: function () { return "Hello"; }
};
var student = {
    firstName: "David"
};
var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.firstName = "";
        this.lastName = "";
        this.sayHi = function () { return "Hello, this is " + _this.firstName + " " + _this.lastName; };
    }
    return Person;
}());
var person1 = new Person();
person1.firstName = "David";
person1.lastName = "Nagrosst";
console.log(person1.sayHi());
