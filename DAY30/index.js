class  student{
    constructor(){

    }
    method1() {
        console.log("hello")
    };
    method2() {};
    method3() {}

}

const a = new student();
const b = new student();
console.log(a)
console.log(b)

console.log(a === b)

class Car {
    constructor(model) {
        this.model = model;
        this.country = "Bangladesh"
        console.log("yes")

    }
    printThis() {
        console.log(this)
    }

    printModel() {
        console.log(this.model);
    }
}


const bmwCar = new Car("BMW")
bmwCar.printModel();
bmwCar.name = "john";
bmwCar.country = "";
console.log(bmwCar);
bmwCar.printThis();

console.log(typeof Car) // function

// class as Expression

const makeUser = function() {
    //
}

makeUser();

const Employee = class {
    welcome(){
        console.log("hello Employee");
    }
}

const emp = new Employee();
emp.welcome();


// Named class ..........................................

const Dept = class Department {
    welcome() {
        console.log("Welcome to Department")
    }
}

const d = new Dept();


// Base class ..........................................
class person {
    //private field
    #secretCode;

    // static property
    static species = "Homo sapiens";

    //Constructor 
    constructor(name,age){
        this.nam = name; // public property
        this.boyos = age;
        this.#secretCode = Math.floor(Math.random() *1000); // private
        console.log(this.nam)
    }
}

const p1 = new person("pranti", 24);
console.log(p1);
console.log(this.nam)


// constructor function....................................

function Person(firstName,lastName,age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.age = age

}

const pranti = new Person("Tanjila ", "Afsana Pranti", 24)
pranti.countryName = "Bangladesh";
console.log(pranti)

const farin = new Person("Tasnim", "Tabassum", 18)
console.log(farin)


// Class Fields...........................................

class Phone {
    brand = "Apple";

    make() {
        console.log(this.br);
    }
}

//console.log(Phone)

const myPhone = new Phone();
myPhone.make();
//console.log(myPhone)


console.log(this)


// .........................Getters and Setters.........................

class Animal {
    constructor(name){
        this.name = name;

    }

    get nam(){
        return this._name;
    }

    set name(value){
        if(! value){
            console.warn("A name is mandatory!");
            return;
        }

        if (value.length < 2) {
            console.warn("The name must be of 2 or more characters!")
            return;
        }
        this._name = value

    }
}

const animal = new Animal("Tiger");
console.log(animal.nam)

animal.name = "A";
console.log(animal.nam)

//...........................Static Properties.....................

class myClass {
    static staticMethod() {
        console.log(this);
    }
}

myClass.staticMethod()


class User {
    constructor(name,email) {
        this.name  = name;
        this.email = email;
    }

    greet() {
        console.log(`hi i am ${this.name}`)
    }

    // static utility method
    
    static isValidEmail(email) {

        //very basic check
        return email.includes("@") && email.includes(".")
    }

    // static factory method
    static  creatGuest(){
        return new User("Guest", "guest@email.com")
    }
}


const user = new User("Tapas", "tapas@email.com")

user.greet();

// static mathod invoke using class name
user.isValidEmail("sfhskdf")