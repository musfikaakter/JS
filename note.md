<structure of for loop :

for (initialization; condition; increment/decrement) {
  // Code to be executed repeatedly
}

<structure of while loop :

initialization;
while (condition) {
  // Code to be executed repeatedly
   increment / decrement;
}

<structure of for-of loop : [doesn't have index access directly]

for (let i of str/arr/obj) {
  // Code to be executed repeatedly
}

<DOM TREE :

1. text node
2. comment node
3. element node ❤️

*** innerHTML => access all the plain text inside an element and it's elements/ tags
*** innerText => access all the text inside an element, and all the text of it's elements/ tags
*** textContent => access all the text inside an element including hidden elements/ tags


<Regex 
let vowels = /[aeiou]/gim;


<regular functions can be invoked anywhere from a js folder. It work's perfectly.>

function addOne(num) {
  let sum = num + 1;
  return sum;
}
console.log(addOne(1));

<expressions [functions] can't be invoked anywhere, not even before it's declaration because of hoisting. expression(functions) means that a function that is stored in a variable.>

const addTwo = function(num) {
  return num + 2;
}
addTwo(1);


<spread operator [...] is used in array, object, function invoce to spread out the elements.>

<rest operator [...] is used in function parameter to take multiple arguments and store them in a array.>


<callback functions :

When you poop you use tissue[toilet paper]. So using tissue after pooing is like callback function. Because pooping is a task and so is using tisse. They are diffrent task but you only use tisse right after pooping, not before pooping. So using tisse is like callback function to pooping. 😎 Here is the code :

function poop(clean) { <!-- clean is a parameter -->
  console.log("I am done pooping now I need to wash.")
  clean(); <!-- now we defined clean as a callback function. it will take any arguement at the time of poop function invocation -->
}

function tisse() {
  console.log("Here is tissue. Clean yourself!")
}
<!-- let's call the poop function -->
poop(tisse); <!-- we took tissue function as an arguement. so tisse is a callback function -->
