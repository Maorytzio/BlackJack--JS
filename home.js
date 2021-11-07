// var age = prompt("Whats your age?");

//document.getElementById("someText").innerHTML = age;

// numbers

// var num = 5.7;
// console.log((num/10).toFixed(2));
// console.log((num/10).toFixed(2) == 0.57);

console.clear();

var min = parseFloat("5").toFixed(2);
var max = parseFloat("10").toFixed(2);
var value = parseFloat("7").toFixed(2);

console.log(min, max, value);

console.log(value > min); // OK.
console.log(parseFloat(value) < parseFloat(max)); // ---- false ??????

var userName = prompt("Please enter your name");

function hello(userName) {
  return (document.getElementById("someText").innerHTML =
    "hello there, " + userName);
}

function add() {

  if (arguments.length) {
    var sum = 0;
    for (let num of arguments)
      sum += num;
    return sum;
   
  }

  return 0;
}

hello(userName);

document.getElementById("add").innerHTML = add();


