/*
    1. In method, this refers to owner object;
    2. Normally this refers to global object;
    3. In function this refers global object;
    4. In function, in strict mode, this is undefined;
    5. In an event, this refers to the element that received the event;
    6. call() and apply() can refer this to any object;
*/

const counter = {
    count: 0,
    next: function(){
        return ++this.count;
    },
};

counter.next(); // count = 1;
counter.next(); // count = 2;
counter.next(); // count = 3;
console.log(counter.next()); // count = 4;

let color = 'Red';

function show_color(){
    console.log('1. -> ', color);
    color = 'Green';
    function get_color(){
        console.log('2. ->',this.color);
    }
    get_color();  
}

let show_color_2 = function (){
    console.log('1. -> ', this.color);
    color = 'Green';
    function get_color(){
        console.log('2. ->', color);
    }
    get_color(); 
}

const show_color_3 = {
    basic_color: "Red",
    main_color : 'Green',
    all_color : function(){
        return color + " " + this.basic_color + " " + this.main_color;
    }
};

color_obj = show_color_3;

console.log(color_obj.all_color());

const MyObj = {
    a: 5,
    b: 6, 
    add: function add(){

    }
}

const person = {
    firstName: "john",
    lastName: "Doe",
    id: 5566,
    myFunction: function (name, nickname){
        console.log(this.firstName, name, nickname);
        return this.firstName + " " + this.lastName;
    },
    getFullName: function name() {
        return this.myFunction();
    }
};

const newObj = {
    firstName: "Rajib Hasan",
    lastName: 'Rakib',
    myFunction_2: function(){
        console.log(this.firstName);
    }
}
console.log(person.myFunction('Asha', 'Khan'));
console.log(person.myFunction.apply(newObj, ['Mia', 'kolija']));

console.log(person.myFunction.call(newObj, 'Eity', 'Maisha'));

console.log(person.getFullName());


function Person2(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;

  }
  
Person2.prototype.nationality = "English";
  
const myFather = new Person2("John", "Doe", 50, "blue");

var printPlayerNameFunction = function(obj){
obj.prinPlayerName = function () {
    console.log(this.name);
}
};

var sakib = {
name: 'Sakib',
age: 35,
};

var tamim = {
name: 'Tamim',
age: 36
}

printPlayerNameFunction(sakib);
printPlayerNameFunction(tamim);

sakib.prinPlayerName();
tamim.prinPlayerName();

// 
var Person3 = function(name, age){
    return {
        name: name,
        age: age,
        printName: function(){
            console.log(this.name);
        },
        father: {
            name: 'Mr. XXX',
            printName: function(){
                console.log(this.name);
            }
        }
    }
}



var sakib = Person3('Sakib', 35);
sakib.printName();
sakib.father.printName();

// new binding
function Person4(name, age){
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
}

var sakib = new Person4("sakib al hasan", 35);

// window binding
var PrintName = function(){
    console.log(this.name);
};

var sakib ={
    name: "Sakib",
};

PrintName();