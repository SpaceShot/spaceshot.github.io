console.clear();

console.log("Hello !!!!!");

// this is a comment
// this let statement set x to 0
let x = 0; // x is now zero

if (x > 2) {
  console.log("it was greater!!");
} else {
  console.log("it was not greater!!");
}

function sum(x, y) {
  let answer = x + y;
  return answer;
}

let result = sum(7, 73);
console.log(result);

let result2 = sum(55, 56);
console.log(result2);

let mybutton = document.getElementById("pressmebutton");

mybutton.addEventListener("click", sayhi);

function sayhi() {
  let greeter = document.getElementById("greeting");
  greeter.innerText = "Hello!!";
}
