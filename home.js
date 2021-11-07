// var age = prompt("Whats your age?");

//document.getElementById("someText").innerHTML = age;

// numbers

// var num = 5.7;
// console.log((num/10).toFixed(2));
// console.log((5.7 / 10).toFixed(2) === "0.57");

// var min = parseFloat("5").toFixed(2);
// var max = parseFloat("10").toFixed(2);
// var value = parseFloat("7").toFixed(2);

// console.log(min, max, value);

// console.log(value > min); // OK.
// console.log(parseFloat(value) < parseFloat(max)); // ---- false ??????

// var userName = prompt("Please enter your name");

// function hello(userName) {
//   return (document.getElementById("someText").innerHTML =
//     "hello there, " + userName);
// }

// function add() {

//   if (arguments.length) {
//     var sum = 0;
//     for (let num of arguments)
//       sum += num;
//     return sum;

//   }

//   return 0;
// }

// hello(userName);

// document.getElementById("add").innerHTML = add();

//Data types
// let fruit = "banana,apple,grapes,orange";
// console.log(fruit.split(','));

// let fruits = ['banana', 'apple', 'orange', 'pinaple'];
// fruits = new Array('mango', 'rasberry', 'lemon');

// for (let i = 0; i < fruits.length; i++)
//    console.log(fruits[i]);

// console.log(fruits.toString(), fruits.push('balckberries'));
// console.log(fruits[fruits.length - 1]);
// fruits[fruits.length] = "new fruit";
// console.log(fruits);

// let numbers = [9, 5, 6, 2, 1, 4, 7, 8, 3];
// console.log("a-b",numbers.sort((a, b) => a - b)); // sort ascending
// console.log("b-a",numbers.sort((a, b) => b - a)); // sort descending

let student = {
  first: "Maor",
  last: "Beeri",
  age: 28,
  height: 1.77,

  studentInfo: function () {
    
    return this.first + ' ' + this.last + ' ' + this.age;
  } ,
};

console.log(student.studentInfo());
