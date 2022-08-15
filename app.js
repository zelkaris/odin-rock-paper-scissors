// score initializers, global
let computerScore = 0;
let playerScore = 0;

// set counters back to 0
function resetScore() {
    computerScore = 0;
    playerScore = 0;
}

// Your game is going to play against a computer
// so begin with a function called computerPlay
// that will randomly return either 'ROCK', 'PAPER', or 'SCISSORS'.
function computerPlay() {
    const rps = ["ROCK", "PAPER", "SCISSORS"];
    let rng = Math.floor(Math.random() * 3);

    return rps[rng];
}

// Write a function that plays a single round of Rock Paper Scissors.
// The funciton should take two parameters, playerSelection and computerSelection
// then declares a string that declares the winner of the round
function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();

    // plays a round of RPS and returns the result
    if (playerSelection == computerSelection) {
        let result = `You TIE! You both chose ${playerSelection}.`;
        document.querySelector('.result').textContent = result;
        // return [result, playerScore, computerScore];
    } else if (
        (playerSelection == 'ROCK' && computerSelection == 'PAPER') ||
        (playerSelection == 'PAPER' && computerSelection == 'SCISSORS') ||
        (playerSelection == 'SCISSORS' && computerSelection == 'ROCK')
        ) {
            let result = `You LOSE! ${computerSelection} beats ${playerSelection}.`;
            computerScore += 1;
            document.querySelector('.result').textContent = result;
            // return [result, playerScore, computerScore];
        } else {
            let result = `You WIN! ${playerSelection} beats ${computerSelection}.`
            playerScore += 1;
            // console.log(`result: ${result}, playerScore: ${playerScore}, computerScore: ${computerScore}`);
            document.querySelector('.result').textContent = result;
            // return [result, playerScore, computerScore];
        }

    if (computerScore == 5 || playerScore == 5) {
        if (computerScore > playerScore) {
            document.querySelector('.score').textContent = "You LOSE!  The Computer scored 5 first!"
        }
        if (playerScore > computerScore) {
            document.querySelector('.score').textContent = "You WIN!  You scored 5 first!"
        }
    }
}

// play the game (playRound()) and determine a winner
// function game() {
//     let userInput = prompt('Choose: Rock, Paper, or Scissors?').toUpperCase();


//     // check if user input is valid
//     if (userInput == "ROCK" || userInput == "PAPER" || userInput == "SCISSORS") {
// 		// play 5 rounds of RPS, display the outcome of each round
// 		for (let i = 0; i < 5; i++) {
// 			console.log(playRound(userInput)[0]);
// 		}
//         console.log(playRound(userInput)[0]);

//         // compare scores and console.log outcome
//         if (playerScore > computerScore) {
//             console.log(`You're the WINNER! You outscored the opponent ${playerScore} to ${computerScore}.`);
//         } else if (playerScore < computerScore) {
//             console.log(`Oh no, you've LOST! The computer outscored you ${computerScore} to ${playerScore}.`);
//         } else {
//             console.log(`It's a DRAW! You both scored ${playerScore}.`);
//         }
// 	} else {
//         console.log('Invalid user input, try again...');
//         game();
//     }
    
//     // reset the both scores to 0 before playing another round
//     resetScore();
// }

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id.toUpperCase());
    })
})