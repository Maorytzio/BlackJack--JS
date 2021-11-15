//Age In Days:
function ageInDays() {
  var birthYear = prompt("What year were you born?");
  var days = (2021 - birthYear) * 365;
  var h1 = document.createElement("h1");
  var textAnswer = document.createTextNode("You are: " + days + " days old");
  h1.setAttribute("id", "ageInDays");
  h1.appendChild(textAnswer);
  document.getElementById("flex-box-result").appendChild(h1);
}

function reset() {
  document.getElementById("ageInDays").remove();
}

//Cat Generator:

function generateCat() {
  var image = document.createElement("img");
  image.classList.add("magic-cat");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp";

  var div = document.getElementById("flex-cat-gen");
  div.appendChild(image);
}

//rps:A

function rpsGame(yourChoice) {
  var humanChoice, botChoice;

  humanChoice = yourChoice.id;
  botChoice = numberToChoice(randomNum());
  console.log("bot", botChoice);

  var results = decideWinner(humanChoice, botChoice);
  console.log(results);

  var message = finalMessage(results);
  console.log(message);

  rpsFrontEnd(humanChoice, botChoice, message);
}

// renders result to user
function rpsFrontEnd(humanImg, botImg, finalMessage) {
  var imagesDB = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  //remove all images, so there is nothing visible
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  var humanDiv = document.createElement("div");
  var botDiv = document.createElement("div");
  var messageDiv = document.createElement("div");

  humanDiv.innerHTML =
    "<img src='" +
    imagesDB[humanImg] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(18, 51, 236, 0.657);'>";

  botDiv.innerHTML =
    "<img src='" +
    imagesDB[botImg] +
    "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38,24 ,1);'>";

  messageDiv.innerHTML =
    "<h2 style='color:" +
    finalMessage["color"] +
    "; font-size:50px; padding:30px; style='text-shadow: 2px 2px 5px black;'>" +
    finalMessage["message"] +
    "</h1>";

  document.getElementById("flex-box-rps-div").appendChild(humanDiv);
  document.getElementById("flex-box-rps-div").appendChild(messageDiv);
  document.getElementById("flex-box-rps-div").appendChild(botDiv);
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) return { message: "You Lost!", color: "red" };
  if (yourScore === 0.5) return { message: "Tie", color: "yellow" };
  if (yourScore === 1) return { message: "You Won!!!", color: "green" };
}

function decideWinner(yourChoice, computerChoice) {
  // score map
  var rpsObj = {
    rock: { rock: 0.5, paper: 0, scissors: 1 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { rock: 0, paper: 1, scissors: 0.5 },
  };
  var yourScore = rpsObj[yourChoice][computerChoice];
  var computerScore = rpsObj[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function randomNum() {
  return Math.floor(Math.random() * 3); //random number: 0 | 1 | 2
}

function numberToChoice(num) {
  return ["rock", "paper", "scissors"][num];
}

//---------------Challenge 4: Buttons And Colors --------------

var allButtons = document.getElementsByTagName("button");

var copyAllButtons = []; // save buttons color
for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}

console.log("allButtons:", copyAllButtons);

function buttonColorChange(btnSelection) {
  if (btnSelection.value === "red") btnRed();
  if (btnSelection.value === "green") btnGreen();
  if (btnSelection.value === "random") btnRandom();
  if (btnSelection.value === "reset") btnReset();
  if (btnSelection.value === "grey") btnGrey();
}

function btnRandom() {
  clearBtnColors();
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.add(randomColor());
  }
}

function btnReset() {
  clearBtnColors();
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}

function btnRed() {
  clearBtnColors();
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.add("btn-danger");
  }
}

function btnGreen() {
  clearBtnColors();
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.add("btn-success");
  }
}

function btnGrey() {
  clearBtnColors();
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.add('btn-secondary');
  }
}

function clearBtnColors() {
  for (let i = 0; i < allButtons.length; i++)
    allButtons[i].classList.remove(allButtons[i].classList[1]);
}

function randomColor() {
  let randomNum = Math.floor(Math.random() * allButtons.length);
  return copyAllButtons[randomNum];
}
