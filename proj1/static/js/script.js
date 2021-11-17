//--------------------------------------------------------- Age In Days:
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

//------------------------------------------------------- Cat Generator:

function generateCat() {
  var image = document.createElement("img");
  image.classList.add("magic-cat");
  image.src =
    "http://thecatapi.com/api/images/get?format=src&type=gif&timestamp";

  var div = document.getElementById("flex-cat-gen");
  div.appendChild(image);
}

//-------------------------------------------------------rps:A

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

//---------------------------------------------- Challenge 4: Buttons And Colors --------------

var allButtons = document.getElementsByTagName("button");

var copyAllButtons = []; // save buttons color
for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}

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
    allButtons[i].classList.add("btn-secondary");
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

//----------------------------------------------- Challenge 5: BalckJack --------------

// Blackjack "DB"
let blackjackGame = {
  you: {
    div: "#your-box",
    scoreSpan: "#your-blackjack-result",
    score: 0,
  },

  dealer: {
    div: "#dealer-box",
    scoreSpan: "#dealer-blackjack-result",
    score: 0,
  },

  cards: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],

  cardsMap: {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10,
    A: [1, 11],
  },

  wins: 0,
  losses: 0, // table data
  draws: 0,

  isStand: false,
  turnOver: false,
};

const YOU = blackjackGame["you"];
const DEALER = blackjackGame["dealer"];
const CardsMap = blackjackGame["cardsMap"];

//sounds
const hitSound = new Audio("static/sounds/swish.m4a");
const winSound = new Audio("static/sounds/cash.mp3");
const loseSound = new Audio("static/sounds/aww.mp3");

// Event listeners - triger a function when a button is cilcked
document
  .querySelector("#blackjack-hit-button")
  .addEventListener("click", blackjackHit); //this will triger blackjaclhit() onClick
document
  .querySelector("#blackjack-deal-button")
  .addEventListener("click", blackjackDeal); //this will triger blackjacDeal() onClick

document
  .querySelector("#blackjack-stand-button")
  .addEventListener("click", blackjackStand);

function blackjackHit() {
  if (blackjackGame["isStand"] === false) {
    let card = randomCard();
    showCard(YOU, card);
    updateScore(YOU, card);
    showScore(YOU);
  }
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function blackjackStand() {
  blackjackGame["isStand"] = true;
  while (DEALER["score"] < 16 && blackjackGame["isStand"] === true) {
    let card = randomCard();
    showCard(DEALER, card);
    updateScore(DEALER, card);
    showScore(DEALER);
    await sleep(1000);
  }

  blackjackGame["turnOver"] = true;
  let winner = computeWinner();
  showResult(winner);
  // blackjackGame["isStand"] = false;
}

function blackjackDeal() {
  if (blackjackGame["turnOver"] === true) {
    blackjackClearAll();
    blackjackGame["isStand"] = false;
    blackjackGame["turnOver"] = false;
  }
}

function blackjackClearAll() {
  clearCards();
  clearScore();
}

function showScore(activePlayer) {
  if (activePlayer["score"] <= 21) {
    document.querySelector(activePlayer["scoreSpan"]).textContent =
      activePlayer["score"];
  } else {
    document.querySelector(activePlayer["scoreSpan"]).textContent = "Bust!";
    document.querySelector(activePlayer["scoreSpan"]).style.color = "red";
  }
}

function updateScore(activePlayer, card) {
  if (card === "A") {
    if (activePlayer["score"] + CardsMap[card][1] <= 21) {
      activePlayer["score"] += CardsMap[card][1];
    } else activePlayer["score"] += CardsMap[card][0];
  } else activePlayer["score"] += CardsMap[card];
}

function randomCard() {
  let cards = blackjackGame["cards"];
  return cards[Math.floor(Math.random() * 13)];
}

function showCard(activeplayer, card) {
  if (activeplayer["score"] <= 21) {
    let cardImage = document.createElement("img");
    cardImage.src = `static/images/${card}.png`; // string templating technique
    document.querySelector(activeplayer["div"]).appendChild(cardImage);
    hitSound.play();
  }
}

function clearScore() {
  YOU["score"] = 0;
  document.querySelector(YOU["scoreSpan"]).textContent = 0;
  document.querySelector(YOU["scoreSpan"]).style.color = "white";

  DEALER["score"] = 0;
  document.querySelector(DEALER["scoreSpan"]).textContent = 0;
  document.querySelector(DEALER["scoreSpan"]).style.color = "white";

  document.querySelector("#blackjack-result").textContent = "Let's Play";
  document.querySelector("#blackjack-result").style.color = "white";
}

function clearCards() {
  let yourImages = document.querySelector("#your-box").querySelectorAll("img");
  let dealerImages = document
    .querySelector("#dealer-box")
    .querySelectorAll("img");

  for (let i = 0; i < yourImages.length; i++) {
    yourImages[i].remove();
  }

  for (let i = 0; i < dealerImages.length; i++) {
    dealerImages[i].remove();
  }
}

function computeWinner() {
  let winner;

  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      console.log("You Won!!!");
      winner = YOU;
      blackjackGame["wins"]++;
    } else if (YOU["score"] < DEALER["score"]) {
      console.log("You Lost!");
      winner = DEALER;
      blackjackGame["losses"]++;
    } else if (DEALER["score"] === YOU["score"]) {
      console.log("It`s a Draw!");
      blackjackGame["draws"]++;
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    console.log("You Lost!");
    winner = DEALER;
    blackjackGame["losses"]++;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    console.log("It`s a Draw!");
    blackjackGame["draws"]++;
  }

  return winner;
}

function showResult(winner) {
  let color, msg;

  if (blackjackGame["turnOver"] === true) {
    if (winner === YOU) {
      document.querySelector("#wins").textContent = blackjackGame["wins"];
      color = "#32f402";
      msg = "You Won!!!";
      winSound.play();
    } else if (winner === DEALER) {
      document.querySelector("#losses").textContent = blackjackGame["losses"];
      color = "red";
      msg = "You Lost!";
      loseSound.play();
    } else {
      document.querySelector("#draws").textContent = blackjackGame["draws"];
      color = "yellow";
      msg = "It's a Draw!@#?";
    }

    document.querySelector("#blackjack-result").textContent = msg;
    document.querySelector("#blackjack-result").style.color = color;
  }
}
