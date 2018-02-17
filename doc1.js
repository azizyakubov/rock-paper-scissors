//only used for console.log gaming

function computerSelect(){
var arr = ['Rock', 'Paper', 'Scissors'];
  return arr[Math.floor(Math.random()*arr.length)];
};

function askPlayer(){
  playerInput = prompt("Rock, Paper,or Scissors?");
  playerInput = playerInput.toLowerCase();
  playerChoice = playerInput.charAt(0).toUpperCase()+ playerInput.slice(1);
  return playerChoice;
  }

function playRound(computerChoice, playerChoice){
  computerChoice = computerSelect();
  playerChoice = askPlayer();
  console.log("The computer selected " + computerChoice);
  console.log("You selected " + playerChoice);
  if (playerChoice===computerChoice){
    console.log("It's a draw. You chose " + playerChoice + " and the computer chose " + computerChoice +".");
  } else if (
    (playerChoice==="Rock" && computerChoice==="Scissors")||
    (playerChoice==="Paper" && computerChoice==="Rock")||
    (playerChoice==="Scissors" && computerChoice==="Paper"))
    {console.log("You won! "+ playerChoice +" beats "+ computerChoice +"!");
  } else {
    console.log("You lost bitch! "+ computerChoice +" beats your shitty ass " + playerChoice+ "!!!!!");
  }
}
playRound();
