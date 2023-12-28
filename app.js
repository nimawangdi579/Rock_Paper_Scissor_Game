let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  // console.log("Game was draw");
  msg.innerText = "Game was Draw, pLay again.";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    // console.log("You win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Win!. Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    // console.log("You lose!");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);

  //   Generate Computer Choice
  const compChoice = genCompChoice();
  // console.log("computer choice = ", compChoice);
  if (userChoice === compChoice) {
    // Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissor" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  //   console.log(choices);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    // console.log("Choice was Selected", userChoice);
    playGame(userChoice);
  });
});
