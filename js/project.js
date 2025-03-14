/* // number creases

let count = 0;
const result = document.getElementById('countLabel');

// increase

document.getElementById('increase-btn').addEventListener('click', function(){
    count++;
    result.textContent = count;
});

// reset

document.getElementById('reset-btn').addEventListener('click', function(){
    count = 0;
    result.textContent = count;
});

// decrease

document.getElementById('decrease-btn').addEventListener('click', function(){
    count--;
    result.textContent = count;
});*/

/* // random number generator

let max = 6;
let min = 1;
let randomNum = document.getElementById('random-number');

document.getElementById('num-generator').addEventListener('click', function(){
    randomNum.textContent = Math.floor(Math.random() *
    max) + min;
});

document.getElementById('num-reset').addEventListener('click', function(){
    randomNum.textContent = '0';
});

/* // checked function

const studentAccount = document.getElementById("studentAccount");
const personalAccount = document.getElementById("personalAccount");
const visa = document.getElementById("visa");
const mastercard = document.getElementById("mastercard");
const crypto = document.getElementById("crypto");
const terms = document.getElementById('terms');
const submit = document.getElementById("submit");
const account = document.getElementById("account");
const payment = document.getElementById("payment");

submit.addEventListener("click", function () {
  if (studentAccount.checked) {
    account.textContent = `You created a student account`;
  } else if (personalAccount.checked){
    account.textContent = `You created a personal account`;
  } else {
    account.textContent = `You didn't choose any account type`;
  }

  // payment

  if (visa.checked) {
    payment.textContent = `You are paying with visa`
  } else if (mastercard.checked) {
    payment.textContent = `You are paying with mastercard`;
  } else if (crypto.checked) {
    payment.textContent = `You are paying with crypto`;
  } else {
    payment.textContent = `You didn't choose any payment method`;
  }
});*/

/* // calculate sum of numbers

let startInput = document.getElementById("startInput").value;
startInput = Number(startInput);
let endInput = document.getElementById("endInput").value;
endInput = Number(endInput);
let result = document.getElementById("result");

document.getElementById("calculate").addEventListener(
  "click",
  (calculate = () => {
    let sum = 0;
    for (let i = startInput; i <= endInput; i++) {
      if (startInput !== String(startInput) && endInput !== String(endInput)) {
        sum = sum + i;
        result.textContent = sum;
    }
}
console.log(sum);
})
);
calculate(); */

/* // number guessing game

let gameNumber = 6;
let input = prompt("Guess a number");
input = Number(input);

while (input != gameNumber) {
  input = prompt("Wrong number BITCH. Guess again");
}
alert(`Congratulations! You are the winner.`);*/

/* // create username

let fullName = prompt(`Enter your fullname :`);
fullName = fullName.trim().toLowerCase().replaceAll(" ", "");

//let userName = `@${fullName}${fullName.length}`;
let userName = "@".concat(fullName).concat(fullName.length);

let result = document.getElementById("userName");
result.textContent = userName; */

/* // convert Temperature ~~

let submit = document.getElementById("submit");

submit.addEventListener("click", function () {
  let toFahrenheit = document.querySelector("#toFahrenheit");
  let toCelcius = document.querySelector("#toCelcius");
  let temperature = document.querySelector("#temperature").value;
  temperature = Number(temperature);
  let tempResult; 

  let showResult = document.querySelector("#showResult");

  if (toFahrenheit.checked) {
    tempResult = temperature * (9 / 5) + 32;
    tempResult = Number(tempResult.toFixed(2));
    showResult.textContent = `${tempResult}°F`;
  } else if (toCelcius.checked) {
    tempResult = (temperature - 32) * (5 / 9);
    tempResult = Number(tempResult.toFixed(2));
    showResult.textContent = `${tempResult}°C`;
  } else {
    alert(`Please enter a number and select a conversion`);
  }

  document.getElementById("reset").addEventListener("click", function() {
    tempResult = 0;
    showResult.textContent = tempResult;
    console.log(tempResult);
  });
}); */

/* // find vowels with regular expression

let sentence = document.querySelector("#getSentence").value;
let submit = document.querySelector("#submit");

submit.addEventListener("click", countVowels = () => {
  const vowels = /[aeiou]/gi;
  let count = 0;
  let display = document.querySelector("#display");
  let vowelList = []; // create an empty array to store vowels later
  
  for (let char of sentence) {
    if (char.match(vowels)) {
      // char = char.replaceAll(``, ",");
      vowelList.push(char);
      count++;
    }
  }

  display.textContent = vowelList.join(", "); // make a separator in that array (default is comma though)
  document.querySelector("#result").textContent = `The sentence has ${count} vowels`;
}) */

/* // show dice number

function rollDice() {
  const diceNumber = document.getElementById("diceNumber").value;
  let result = document.getElementById("result");
  let display = document.getElementById("display");
  
  result.textContent = diceNumber;
  display.innerHTML = `<img src="./assets/dice ${diceNumber}.png" alt="dice ${diceNumber}">`
} */

/* // dice rolling 


document.getElementById("roll").addEventListener('click', diceRoller = () => {

  let countDice = document.getElementById("countDice").value;
  let diceResult = document.getElementById("diceResult");
  let displayImage = document.getElementById("displayImage");

  let diceHolder = []; // array that will hold the number of dices
  let imageHolder = []; // array that will hold images for those dices

  // loop through every number of dices shown in the input and store it in diceHolder
  for (let i = 0; i < countDice; i++) {
    let value = Math.floor(Math.random() * 6) + 1;
    diceHolder.push(value);
    imageHolder.push(`<img src="./assets/dice ${value}.png" alt="dice ${value}">`);
  }
  
  diceResult.innerText = diceHolder.join(", ");  
  displayImage.innerHTML = imageHolder.join("");

})*/

/* // make a function to find vowels without any loops

const sentence = document.querySelector("#getSentence").value;
const submit = document.querySelector("#submit");

submit.addEventListener('click', countVowels = () => {
  const vowels = /[aeiou]/gi;
  let vowelMatches = sentence.match(vowels);
  console.log(vowelMatches);

  let result = document.querySelector("#result");
  result.textContent = `The sentence has ${vowelMatches.length} vowels`;
  let display = document.querySelector("#display");
  display.textContent = vowelMatches.join(', ');
})*/

