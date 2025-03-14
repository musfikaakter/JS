////// for loop => repeat code limited amount of time

/* for (let i = 1; i <= 10; i++) {

  if (i == 6) {
      break; // will break the loop if this condition is fullfilled [continue; will skip this condition and continue the loop]
  } else {
      console.log(i);
  }
} */

/* sum all the odd number between 1-100
let sum = 0;
for (let number = 1; number <= 100; number++) {
sum = sum + number;
}
console.log(sum); */

/* for (let i = 1; i <= 10; i++) {
  console.log(`Table of ${i} is :`);
  for (let x = 1; x <= 10; x++) {
    console.log(`${i} x ${x} = ${i * x}`);
  }
} */

// loop througn an array

/* let playlist = ['ek mutho swapno', 'swapno jeno', 'tumi amar jibon sathi', 'mon bebagi', 'jiboner cheye boro', 'birds of feather'];
playlist.sort();


for (let i = 0; i < playlist.length; i++) {
  document.getElementById("playlist").innerHTML += `<p>${playlist[i]}<p/>`;
} */

// loop through an string

/*let submit = document.getElementById("submit");
submit.addEventListener("click", function () {
  let vowels = "aeiouAEIOU";
  let sentence = document.getElementById("wordInput").value;
  sentence = sentence.trim();

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && vowels.includes(sentence[i])) {
      document.querySelector(".display").innerHTML = sentence[i];
      console.log(sentence[i]);
    }
  }
});*/

////// while loop => repeats some code limited amount of time

// array
//let gfs = ["jerin", "vipu", "nuru"];

// while (i < gfs.length) {
//   //console.log(gfs[i]);
//   i = i + 1;
// }

/* let user = '@musfikaakter';

console.log(user.length);
let i = 0;
while (i < user.length) {
  console.log(user[i]);
  i++;
} */

//// do while loop =>

/*i = 0;
do {
  //console.log(i);
  i++;
} while (i <= 5);*/

/*loop through an array

let fruits = ["ranga", "ranga", "ranga", "ranga", "ranga"];

fruits = fruits.sort();

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);

  for (let j = 0; j < fruits[i].length; j++) {
    console.log(fruits[i][i]);
  }
}*/

/////// for of loop [loops through string and array]

/*let str = [
  "litchi",
  "grapes",
  "date",
  "watermelon",
  "papaya",
  "apple",
  "orange",
];
let length = 0;

for (let val of str) {
  console.log(val);
  length++;
}

console.log(length);*/

////// for in loops [for objects]

/*let student = {
  name : 'Musfika Akter',
  age : 21,
  gpa : 5,
  isPass : true
}

//console.log(student);

for (let key in student) {
  console.log(`Key = ${key} and value = ${student[key]}`);
}*/

/* // print sum of all the number from 0 to 100
let end = 100;
let sum = 0;

let i = 1;
while (i <= end) {
  if (i % 2 == 0) {
    sum = sum + i;
    //console.log(sum);
  }
  i++;
}*/
