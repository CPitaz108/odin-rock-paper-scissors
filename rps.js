//document.getElementById("rps-container").textContent = "RPS Works"

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