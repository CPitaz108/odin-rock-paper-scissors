//document.getElementById("rps-container").textContent = "RPS Works"

//Global Variables
let [humanScore, globalScore] = [0, 0]

//Randomly return Rock, Paper, or Scissors
function getComputerChoice(){
  //Gets a random number between 0, 1, and 2
  const choice = Math.floor(Math.random() * 3);
  //Switch statement based on the result, returns the raw string depending on choice.
  
  /*Made the values all upper case to utilize the toUpperCase method rather than writing a slicing/indexing function
  to capitalize the first letter only. I think this would also make the choice stand out more during a game*/
  switch(choice){
    case 0:
      return "ROCK"
      break;
    case 1: 
      return "PAPER"
      break;
    case 2:
      return "SCISSORS"
      break
    default:
      return "N/A"
  }
}

//Gets the human choice for rock, paper, or scissors
function getHumanChoice(){
  //Sets empty variable for the result and an acceptable options array 
  let choice = ""
  const options = ["ROCK", "PAPER", "SCISSORS"]
  /*Checks if the choice has been made, or if the choice didn't exist in the options array and returns
    specific messages to the user depending on the situation*/
  while(choice == "" || !options.includes(choice.toUpperCase())){
    if(choice != ""){
      choice = prompt("Check your spelling and try again.\nEnter Rock, Paper, or Scissors");
    }else{
      choice = prompt("Enter Rock, Paper, or Scissors")
    }
  }
  //Returns the accepted value in upper case
  return choice.toUpperCase();
}

function playRound(humanChoice, computerChoice){
  //It was already made case insensitive in the collection of upper-case data
  /*Was going to go with simple if statements and catch-all equal parameter statements, but since there are only 9
    possible values I figured I would add a specific message for each*/
  switch(humanChoice){
    case "ROCK":
      switch(computerChoice){
        case "ROCK":
          console.log(`You Tied! Your ${humanChoice} doesn't beat their ${computerChoice}!`)
          return;
        case "PAPER":
          console.log(`You Lose! Your ${humanChoice} was covered by their ${computerChoice}!`)
          return;
        case "SCISSORS":
          console.log(`You Win! Your ${humanChoice} smashed their ${computerChoice}!`)
          return;
      }
    case "PAPER":
      switch(computerChoice){
        case "ROCK":
          console.log(`You Win! Your ${humanChoice} covered up their ${computerChoice}!`)
          return;
        case "PAPER":
          console.log(`You Tied! Your ${humanChoice} doesn't beat their ${computerChoice}!`)
          return;
        case "SCISSORS":
          console.log(`You Lose! Your ${humanChoice} was sliced by their ${computerChoice}!`)
          return;
      }
    case "SCISSORS":
      switch(computerChoice){
        case "ROCK":
          console.log(`You Lose! Your ${humanChoice} were crushed by their ${computerChoice}!`)
          return;
        case "PAPER":
          console.log(`You Win! Your ${humanChoice} sliced through their ${computerChoice}!`)
          return;
        case "SCISSORS":
          console.log(`You Tied! Your ${humanChoice} smashed their ${computerChoice}!`)
          return;
      }
      default:
        return "Input Not Recognized, Try Again"
  }
}

