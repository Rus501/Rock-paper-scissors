const rock = document.querySelector('.rock');
rock.addEventListener('click', playRound);

const paper = document.querySelector('.paper');
paper.addEventListener('click', playRound);

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', playRound);

const rock2 = document.querySelector('.rock2');
const paper2 = document.querySelector('.paper2');
const scissors2 = document.querySelector('.scissors2');

const score = document.querySelector('.score');

const resultText = document.querySelector('.result-text');
resultText.innerHTML = 'Go on - make a choice! First to reach 5 points wins.'

const gameResult = document.querySelector('.game-result');

//randomizing computer's choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//initializing some variables
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

//playing 1 round
function playRound(playerSelection, computerSelection) {
	playerSelection = this.className;
	computerSelection = computerPlay();

      //highlight computer's choice
      rock2.classList.remove('chosen');
      paper2.classList.remove('chosen');
      scissors2.classList.remove('chosen');
      if (computerSelection === 'rock') {
            rock2.classList.add('chosen');
      } else if (computerSelection === 'paper') {
            paper2.classList.add('chosen');
      } else if (computerSelection === 'scissors') {
            scissors2.classList.add('chosen');
      }

	//some basic rock paper scissors rules
	let win = (playerSelection === 'rock' && computerSelection === 'scissors') || 
		    (playerSelection === 'paper' && computerSelection === 'rock') || 
		    (playerSelection === 'scissors' && computerSelection === 'paper');

	let lose = (playerSelection === 'rock' && computerSelection === 'paper') || 
		     (playerSelection === 'paper' && computerSelection === 'scissors') || 
		     (playerSelection === 'scissors' && computerSelection === 'rock');

	if (win) {
		playerScore++;
            score.innerHTML = `${playerScore} - ${computerScore}`;
		resultText.innerHTML = `You win! ${playerSelection} beat(s) ${computerSelection}.`;
	} else if (lose) {
		computerScore++;
            score.innerHTML = `${playerScore} - ${computerScore}`;
		resultText.innerHTML = `You lost. ${playerSelection} lose(s) to ${computerSelection}.`;
	} else {
		playerScore++;
		computerScore++;
            score.innerHTML = `${playerScore} - ${computerScore}`;
		resultText.innerHTML = `It's a tie. ${playerSelection} vs ${computerSelection}`;
	}

      if (gameResult.innerHTML > '') {
            return gameResult.innerHTML = '';
      }

      if (playerScore === 5 && computerScore < 5) {
            return gameResult.innerHTML = `Congratulations! You've won the game!<br>
                                           You can still continue playing for fun`; 
      } else if (playerScore < 5 && computerScore === 5) {
            return gameResult.innerHTML = `Unfortunate! You've lost the game!<br>
                                           You can still continue playing for fun`;
      } else if (playerScore === 5 && computerScore === 5) {
            return gameResult.innerHTML = `It's a tie!<br>
                                           You can still continue playing for fun`;
      }
}
//console.log(gameResult.innerHTML > '');