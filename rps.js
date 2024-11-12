//document.getElementById("rps-container").textContent = "RPS Works"

//Randomly return Rock, Paper, or Scissors
function getComputerChoice(){
  //Gets a random number between 0, 1, and 2
  const choice = Math.floor(Math.random() * 3);
  //Switch statement based on the result, returns the raw string depending on choice
  switch(choice){
    case 0:
      return "Rock"
      break;
    case 1: 
      return "Paper"
      break;
    case 2:
      return "Scissors"
      break
    default:
      return "N/A"
  }
}