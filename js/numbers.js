/* // accept user input

let userName;

document.getElementById('submit').addEventListener('click', function() {
    userName = document.getElementById('myInput').value;
    document.getElementById('h1').innerHTML = `Welcome ${userName}`;
    console.log(userName);
    document.body.style.background = 'blue';
    document.body.style.color = 'white';
}); */

/* // convertion of datatypes

let x = '';
let y = '';
let z = '';

x = Number(x);
y = String(y);
z = Boolean(z);

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);

let cats = '30';

let dogs = 20;

animal = Number(cats) + dogs;
console.log(animal);

let userName;

document.getElementById('submit').addEventListener('click', function(){
    userName = document.getElementById('myInput').value;

    if(userName = !isNaN(Number(userName)) && Boolean(userName)){
        alert(`Please enter a valied username`);
    } else if(userName === String(userName)){
        alert(`Welcome ${userName}`);
    }
    console.log(userName, typeof userName);
}); */

/* let radius = prompt(`Enter the radius of a circle :`);
radius = Number(radius);
console.log(`Here, pi = ${PI}; radius = ${radius}`);

let circumference = 2 * PI * radius;
console.log(circumference);

const PI = 3.1416;

document.getElementById("submit").addEventListener("click", function () {
  let radius = document.getElementById("myInput").value;
  radius = Number(radius);
  const circumference = 2 * PI * radius;
  document.getElementById('h3').textContent = circumference + 'cm';
  console.log(circumference, typeof circumference);
}); */

// let x = -2.19;
// let y = 4;
// let z;

// z = Math.round(x); // rounds
// z = Math.floor(x); // rounds down
// z = Math.ceil(x); // rounds up
// z = Math.trunc(x); // eliminate decimal portion
// z = Math.pow(x, y); //power
// z = Math.sqrt(x); // square
// z = Math.log(x); // log
// z = Math.abs(x); // absolute
// let maxNum = Math.max(x, y, z);
// let minNum = Math.min(x, y, z);
// console.log(z);

// if else statements

// let watermelon = 20;

// if (watermelon >= 100) {
//   console.log(`Are you showing off your money bitch?`);
// } else if (watermelon >= 50) {
//   console.log(`Congratulation! You can start your own watermelon juice shop`);
// } else if (watermelon <= 0) {
//   console.log(`bitch`);
// } else {
//   console.log(`You don't have enough watermelon`);
// }

// ternary operator

// let age = 19;

// age >= 18 ? console.log('You are an adult BTICH') : console.log('You are a minor');

// let message =age >= 18? `You are an adult BTICH` : `You are a little baby`;
// console.log(message);

// let purchase = 90;

// let discount = purchase >= 100 ? 10 : 0;
// let total = purchase - (purchase * (discount/100));

// console.log(discount);
// console.log(total);

// switch

// let day = 1;
// let today;
// switch (true) {
//   case day == 1:
//     today = 'Friday';
//     break;
//   case day == 2:
//     today = 'Saturday'
//     break;
//   case day == 3:
//     today = 'Sunday'
//     break;
//   case day == 4:
//     today = 'Monday';
//     break;
//   case day == 5:
//     today = 'Tuesday';
//     break;
//   case day == 6:
//     today = 'Wednesday';
//     break;
//   case day == 7:
//     today = 'Thrusday';
//     break;
//   default:
//     today = `This is not a day`;
// }
// console.log(`Today is ${today}`);

// let score = 80;
// let grade;

// switch (true) {
//   case score >= 80:
//     grade = "A+";
//     break;
//   case score >= 70:
//     grade = "A";
//     break;
//   case score >= 60:
//     grade = "A-";
//     break;
//   case score >= 50:
//     grade = "B";
//     break;
//   case score >= 40:
//     grade = "C";
//     break;
//   case score >= 33:
//     grade = "D";
//     break;
//   default:
//     grade = "F";
// }

// console.log(grade);

/* let number = prompt("Enter a number :");

console.log(`Your entered number is ${number}`);

if (number % 5 === 0) {
  console.log(`Your entered number is multiple of 5`);
} else {
  console.log(`Your entered number is NOT multiple of 5`);
}*/

/* //string method

let userName = 'ranga is cool';
let phoneNumber = '123-456-789'

// phoneNumber = phoneNumber.replaceAll('4', '0');
phoneNumber = phoneNumber.padEnd(20, '0');
console.log(phoneNumber);

slicing

let fullName = "MusfikaRanga Akter";
let firstName = fullName.slice(0, 7);
let lastName = fullName.slice(-5);

let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);

let email = 'musfika@gmail.com';

let userName = email.slice(0, email.indexOf('@'));
let domain = email.slice(email.indexOf('.'))

console.log(userName);
console.log(domain); */

// method chaining

// let userName = prompt('Enter your name :');

// userName = userName.trim().charAt(0).toUpperCase() + userName.slice(1).toLowerCase();

// console.log(userName);

//function

// console.log(null == 0);
// console.log(null <= 0);
// console.log(null < 0);

/* let gameName = new String('dragondarkTHEME is 0 my favorite theme');
let game = /[aeiou]/ig;
console.log(gameName);

let user = '@musfikaakter'

// console.log(gameName[2]);
console.log(gameName.split()); */

/* let age = new Number(99.52);

console.log(age);

console.log(Math.valueOf()); */

// date and time

// let myDate = new Date(2024, 3, 11, 23, 20);

/* let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); */

// let myDate = new Date();
// let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(Math.floor(myDate.getTime() / 1000));

/* let newDate = new Date();

console.log(newDate);

newDate.toLocaleString("default", {
    year : "numeric",
    month : "2-digit",
    weekday : "long"
}); */

/* // DOM BASICS

//console.dir(document.body);

let button = document.getElementById("myId");
//console.log(button);

//let heading = document.getElementsByClassName("myClass");
//console.log(heading);
//console.dir(heading);

let text = document.getElementsByTagName("p");
//console.log(text);

let elements = document.querySelectorAll("p");
//console.log(elements);

let allClass = document.querySelectorAll(".myClass");
//console.log(allClass);

let myId = document.querySelector("#myId");
//console.log(myId);

let div = document.querySelector("div");
//console.log(div);

//div.innerHTML = "<div>I love vipu</div><p>it's not allways pandemic that kills people, some are plandemic
// </p>";
//div.innerText = "tuija aicho gho";

//practice set :

let heading = document.querySelector("#heading");
heading.innerText = `${heading.innerText} from Apna College students`;

let i = 1;
let boxes = document.querySelectorAll(".box");
for (let box of boxes) {
    box.innerText = `I love JS ${i}`;
    console.log(box);
    i++;
}

// console.log(boxes[0].innerText = "Hello!");
// console.log(boxes[1].innerText = "I am learNing JS");
// console.log(boxes[2].innerText = "I love Vipu"); */

// DOM MANIPULATION

/* // regex [regular expression]

var countVowels = (sentence) => {
  const vowels = /[aeiou]/gi;
  let count = 0;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i].match(vowels)) {
      console.log(sentence[i]);
      count++;
    }
  }
  console.log(count);
};
countVowels("aeiouAEIOU"); // WILL RETURN 10

// countVowels("i love JS and also vowels. i made this function it will find vowels in any sentence."); */

/* // spread operators [...]

let userName = "musfika akter";
userName = [...userName].join("😎");
//console.log(typeof userName, userName);

let fruits = ["litchi", "orange", "banana", "coconut"].join("😎"); // join() method converts to everything string
//console.log(typeof fruits, fruits);

let food = [...fruits];
//console.log(typeof food, food); */

/* // rest parameter [...]

const myFunc = (...values) => {
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    //console.log(values[i]);
    count = count + values[i];
  }

  console.log(`Your total is ${count} tk 😊`);
  return values;
};

let result = myFunc(12, 23, 34, 45, 56, 67, 78, 89, 90);
//console.log(typeof result, result); */




