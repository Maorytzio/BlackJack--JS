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
  var div = document.getElementById("flex-cat-gen");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp";
  div.appendChild(image);
}

//rps:

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
    "; font-size:50px; padding:30px; style='text-shadow: 2px 2px 5px black'>" +
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
  return Math.floor(Math.random() * 3);
}

function numberToChoice(num) {
  return ["rock", "paper", "scissors"][num];
}
