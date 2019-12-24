// let
let myName = 'Fabrizio';
myName = 'Mark';

// const
const myFood = 'Apple';
// myFood = 'Honey';  -> error

// arrow function
function printMyName(name) {
    console.log(name);
}
printMyName(myName);

const printMyFood = (food) => {
    console.log(food);
}
printMyFood(myFood);

const printMyNameC = (name, age) => {
    console.log(name, age);
}
printMyNameC(myName, 23);

const multiply = number => number * 2; //inline
console.log(multiply(2));

// exports & imports
const person = {
    name: 'Fabrizio'
};
// export default person;
// import person from './es6JsRefresher.js';

// classes
class Human {
    gender = 'male';
    printGender = () => {
        console.log(this.gender);
    }
}
class Person extends Human {
    name = 'Fabrizio';
    printMyName = () => {
        console.log(this.name);
    }
}

const personC = new Person();
personC.printMyName();
personC.printGender();

// spread and REST operators
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4];
console.log(newNumbers); // [1, 2, 3, 4];

const people = {
    name: 'Zoe'
};
const newPeople = {
    ...people,
    age: 20
};

const filter = (...args) => {
    return args.filter(el => el === 1);
}
console.log(filter(1, 2, 3));

// destructuring
const numbersC = [1, 2, 3];
[num1, num2] = numbersC;
console.log(num1, num2); // 1 2

// reference and primitive types 
const n = 1;
const num3 = numbersC;
console.log(num3);

const p = {
    name: 'Fabrizio'
};
const secondPerson = {
    ...p
};

person.name = 'John';

console.log(secondPerson);

// array functions
const nums = [1, 2, 3];
const doubleNumArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);