//document.getElementById("rps-container").textContent = "RPS Works"

//Global Variables
let [humanScore, computerScore] = [0, 0]

//Game function, added a rounds parameter
function playGame(rounds){
  humanScore = 0;
  computerScore = 0;
  
  function playRound(humanChoice, computerChoice){
    //It was already made case insensitive in the collection of upper-case data
    /*Was going to go with simple if statements and catch-all equal parameter statements, but since there are only 9
      possible values I figured I would add a specific message for each*/
    switch(humanChoice){
      case "ROCK":
        switch(computerChoice){
          //Used returns instead of breaks, they would be required on every line anyway. Would probably switch to a single
          //score return if I were worried about size/conciseness
          case "ROCK":
            console.log(`You Tied! Your ${humanChoice} doesn't beat their ${computerChoice}!`)
            return `You: ${humanScore}\nComputer: ${computerScore}`;
          case "PAPER":
            console.log(`You Lose! Your ${humanChoice} was covered by their ${computerChoice}!`)
            computerScore++;
            return `You: ${humanScore}\nComputer: ${computerScore}`;
          case "SCISSORS":
            console.log(`You Win! Your ${humanChoice} smashed their ${computerChoice}!`)
            humanScore++;
            return `You: ${humanScore}\nComputer: ${computerScore}`;
        }
      case "PAPER":
        switch(computerChoice){
          case "ROCK":
            console.log(`You Win! Your ${humanChoice} covered up their ${computerChoice}!`)
            humanScore++;
            return `You: ${humanScore}\nComputer: ${computerScore}`;
          case "PAPER":
            console.log(`You Tied! Your ${humanChoice} doesn't beat their ${computerChoice}!`)
            return `You: ${humanScore}\nComputer: ${computerScore}`;
          case "SCISSORS":
            console.log(`You Lose! Your ${humanChoice} was sliced by their ${computerChoice}!`)
            computerScore++;
            return `You: ${humanScore}\nComputer: ${computerScore}`;
        }
      case "SCISSORS":
        switch(computerChoice){
          case "ROCK":
            console.log(`You Lose! Your ${humanChoice} were crushed by their ${computerChoice}!`)
            computerScore++;
            return `You: ${humanScore}\nComputer: ${computerScore}`;
          case "PAPER":
            console.log(`You Win! Your ${humanChoice} sliced through their ${computerChoice}!`)
            humanScore++;
            return `You: ${humanScore}\nComputer: ${computerScore}`;
          case "SCISSORS":
            console.log(`You Tied! Your ${humanChoice} smashed their ${computerChoice}!`)
            return `You: ${humanScore}\nComputer: ${computerScore}`;
        }
        default:
          return "Input Not Recognized, Try Again"
    }
  }

  function printResult(humanScore, computerScore){
    console.log(`Game Over!\nResults:\nYou: ${humanScore}\nComputer: ${computerScore}`)
    if(humanScore > computerScore){
      console.log("You Won, Congratulations!")
    }else if(humanScore < computerScore){
      console.log("You Lost, Sorry!")
    }else{
      console.log("You Tied!")
    }
  }

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

  function tiebreak(){
    let tie = prompt("Would you like to play a tie-breaker?\nEnter 'Yes' or 'No'")
    const options = ["y", "yes", "no", "n"]
    while(tie != null && !options.includes(tie.toLowerCase())){
      tie = prompt("Would you like to play a tie-breaker?\nEnter 'Yes' or 'No'")
    }
    if(tie == null){
      //If the user clicks cancel at this point, take that as a "No Tiebreaker" and still show them their final score
      return;
    }
    if(tie == "y" || tie == "yes"){
      /*This violates the DRY Principle, but based on the way the input is phrased in the question they want two separate functions
        to return to two separate variables for the selections, and then each is passed to the playRound function as a parameter. 
        
        Because of this, I can't encapsulate the selections into a function as doing so would only save a line compared to doing it this way,
        and wouldn't really make the code more readable in the longrun. If I were to do this myself I would get both choices simultaneously,
        and assign the values to an array and pass in the single array object's two indexes as our parameters*/
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      if(humanSelection == "EXIT" || computerSelection == "EXIT"){
        console.log("Exiting...");
        return;
      }
      console.log(playRound(humanSelection, computerSelection))
    }
    if(humanScore == computerScore){
      tiebreak();
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
      if(choice == null){
        return "EXIT"
      }
    }
    //Returns the accepted value in upper case
    return choice.toUpperCase();
  }

  //Play a specific number of rounds
  for(let i = 0; i < rounds; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if(humanSelection == "EXIT" || computerSelection == "EXIT"){
      console.log("Exiting...");
      return;
    }
    /*Because play round requires the two parameters, I can't gather the parameters within the round itself. 
      I would likely move the humanSelection/computerSelection into the playRound function as a helper function since I 
      reuse it in the tiebreaker*/
    console.log(playRound(humanSelection, computerSelection))
  }

  //If there is an even number of rounds and it is tied:
  if(computerScore == humanScore){
    tiebreak()
  }
  printResult(humanScore, computerScore)
}

