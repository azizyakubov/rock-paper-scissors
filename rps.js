let playerScore = 0;
let computerScore = 0;
let playerScoreSpan = document.getElementById("player-score");
let computerScoreSpan = document.getElementById("computer-score");
let scoreDiv = document.querySelector(".score");
let resultDiv = document.getElementById("result-message");
const Rock = document.getElementById("rock");
const Paper = document.getElementById("paper");
const Scissors = document.getElementById("scissors");

Rock.addEventListener('click', function(){
  console.log("Dwaayyyyynnee");
  askPlayer("Rock");
})

Paper.addEventListener('click', function(){
  console.log("Cashh monnney!");
  askPlayer("Paper");
})

Scissors.addEventListener('click', function(){
  console.log("scissor me timbers!");
  askPlayer("Scissors");
})


function computerSelect(){
var arr = ['Rock', 'Paper', 'Scissors'];
  return arr[Math.floor(Math.random()*arr.length)];
};

function askPlayer(playerChoice){
  let computerChoice = computerSelect();
  if (playerChoice===computerChoice){
    draw(playerChoice, computerChoice);
  } else if (
    (playerChoice==="Rock" && computerChoice==="Scissors")||
    (playerChoice==="Paper" && computerChoice==="Rock")||
    (playerChoice==="Scissors" && computerChoice==="Paper"))
    {
    win(playerChoice, computerChoice);
  } else {
    lose(playerChoice, computerChoice);
  }
};

function win(player, computer){
  playerScore++;
  playerScoreSpan.innerHTML = playerScore;
  resultDiv.textContent="You won this round! Your "+ player +" beats computer's "+ computer +"!";

}
function lose(player, computer){
  computerScore++;
  computerScoreSpan.innerHTML = computerScore;
  resultDiv.textContent="You lost this round! "+ computer +" beats your " + player+ "!!!!!";
}
function draw(player, computer){
  resultDiv.textContent= "It's a draw. You both chose " + player ;
}
