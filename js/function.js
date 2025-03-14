// functions are block of code that are used to do some specific task whenever it's invoked

/* function myFunction() {
  let userName = prompt("Enter the username below :");

  if (userName == "ranga") {
    console.log("Your username is", userName);
  } else {
    alert("Please enter a valied username");
  }
}

myFunction();*/

// FUNCTION WITH PARAMETER

/* const countVowel = (word) => {
  let count = 0;
  if (
    word.includes("a") ||
    word.includes("e") ||
    word.includes("i") ||
    word.includes("o") ||
    word.includes("u")
  ) {
    count++;
    console.log(`${word} contains vowel, ${count}`);
  } else {
    console.log(`${word} doesn't contain any vowel, ${count}`);
  }
}
countVowel('hello');*/

/* let submit = document.getElementById("submit");

submit.addEventListener(
  "click",
  (findVowels = (word) => {
    let count = 0;

    if (
      word.includes("a") ||
      word.includes("e") ||
      word.includes("i") ||
      word.includes("o") ||
      word.includes("u")
    ) {
      count++;
      console.log(word, count);
    } else {
      console.log(`There is no vowel`);
    }
  })
);*/

/* 
const countVowels = (word) => {
  const vowelMatches = word.match(/[aeiouAEIOU]/g);
  return vowelMatches ? vowelMatches.length : 0;
};

console.log(countVowels("function")); // Output: 2
console.log(countVowels("hello")); // Output: 0
console.log(countVowels("AEIOUaeiou")); //output: 10 */

// function to sum two numbers

/*function sumTwoNum(a, b) {
    let sum = a + b;
    return sum;
}
let sum = sumTwoNum(224, 3568);*/

/* const mulTwoNum = (a,b) => {
    let mul = a * b;
    return mul;
}

let mul = mulTwoNum(20, 30);
console.log(mul);*/

/* // count vowels in a string with function keyword
let count= 0;

let vowels = "aeiouAEIOU";
function countVowels(word) {
    for (let i = 0; i < word.length; i++) {
        if (vowels.includes(word[i])) {
            count++;
            console.log(word[i]);
        }
    }
}

countVowels('rangU');
console.log(count);*/

/*// count vowels in a string with arrow function

let count = 0;
const findVowels = (word) => {
    let vowels = "aeiouAEIOU";
    for (let char of word) {
        if (vowels.includes(char)) {
            console.log(char);
            count++;
        }
    }
}
findVowels("nanu");
console.log(count);

const countVowels = (word) => {
    let vowels = "aeiouAEIOU";
    for (char of vowels) {
        if (word.includes(char)) {
            console.log(char);
            count++;
        }
    }
}
countVowels("tuna fish")
console.log(count);*/

/* //rest & spread operator [...variable]

const calCartPrice = (num2, num3, ...num1) => {
  return num1;
};
//console.log(calCartPrice(100, 200, 300, 400, 5000, 600));

const user = {
  username: "musfika",
  age: 21,
};
const handleObject = (anyObj) => {
  //console.log(`Username is ${anyObj.username} and age is ${anyObj.age}`);
};
handleObject(user);

let fruits = ["litchi", "watermelon", "orange", "grapes", "coconut"];
const handleArray = (anyArr) => {
  // for (let i = 0; i < fruits.length; i++) {
  //   console.log(`My favorite fruit is : ${fruits[i]}`);
  // }
  console.log(`My favorite fruits are : ${fruits}`);
  return anyArr;
};
handleArray(fruits); */

/* const myFuncOne = () => {
  const user = "ranga";

  const myFuncTwo = () => {
    const website = "github";
    console.log(website);
    //console.log(user); // this is inside the myFuncOne(), so this will run
  }
  myFuncTwo();

  //console.log(website); // this is inside the myFuncTwo() scope, so this won't run
  //console.log(user);
}
myFuncOne()*/

/*if (true) {
  const user = "ranga";

  if (true) {
    const website = "github";
    //console.log(website);
    //console.log(user);
  }
  //console.log(website);
}
//console.log(user); */

/* // expression and hoisting

console.log(addOne(1));

function addOne(num) {
  let sum = num + 1;
  //console.log(sum);
  return sum;
}
// addOne(1)
// let sum = addOne(2);
// console.log(sum);

// console.log(addTwo(1));
// addTwo(1); // there will be error because of hoisting

const addTwo = function(num) {
  return num + 2;
}
addTwo(1);*/

/* // callback function

function printHello(good, pussy, a, b){
  let sum = a + b;
  // console.log(sum);
  good();
  pussy();
}

printHello(printGoodbye,printPussy, 2,3);

function printGoodbye(){
  // console.log("goodbye");
}

function printPussy(){
  // console.log("pussy");
}

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

sum(printSum,2,3);

function printSum(result) {
  // console.log(result);
}

function firstAction() {
  console.log("this is first action");
}

setTimeout(firstAction, 3000); //4th

function secondAction() {
  console.log("this is second action");
}

firstAction(); // 1st
secondAction(); // 2nd
firstAction();// 3rd 

setTimeout(function addTwoNum(a, b, num) {
  // console.log(a + b);
  return a + b;
}, 3000);

function addThreeNum(a, b, c) {
  return a + b + c;
}
// console.log(addThreeNum(1, 2, 3));

function log(value) {
  console.log(value);
}

function sumOfnum(a,b, num) {
  let sum = a + b;
  num(sum);
}
sumOfnum(2,3, log); */



