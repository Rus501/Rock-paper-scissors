const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const rock2 = document.querySelector('.rock2');
const paper2 = document.querySelector('.paper2');
const scissors2 = document.querySelector('.scissors2');
const score = document.querySelector('.score');
const resultText = document.querySelector('.result-text');
const gameResult = document.querySelector('.game-result');
const resetButton = document.querySelector('.reset');

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

rock.onclick = playRound;
paper.onclick = playRound;
scissors.onclick = playRound;
resetButton.onclick = reset;

//randomizing computer's choice
function computerPlay() {
    let choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

//playing one round
function playRound(playerSelection, computerSelection) {
      if (playerScore === 5 || computerScore === 5) {
            rock.classList.add('non-active');
            paper.classList.add('non-active');
            scissors.classList.add('non-active');
            rock2.classList.remove('chosen');
            paper2.classList.remove('chosen');
            scissors2.classList.remove('chosen');
            return;
      }

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
            score.innerHTML = `Current score: ${playerScore} - ${computerScore}`;
		resultText.innerHTML = `You win! ${playerSelection} beat(s) ${computerSelection}.`;
	} else if (lose) {
		computerScore++;
            score.innerHTML = `Current score: ${playerScore} - ${computerScore}`;
		resultText.innerHTML = `You lost. ${playerSelection} lose(s) to ${computerSelection}.`;
	} else {
		//playerScore++;
		//computerScore++;
            score.innerHTML = `Current score: ${playerScore} - ${computerScore}`;
		resultText.innerHTML = `It's a tie. ${playerSelection} vs ${computerSelection}`;
	}

      /*if (gameResult.innerHTML > '') {
            return gameResult.innerHTML = '';
      }*/

      if (playerScore === 5 && computerScore < 5) {
            gameResult.innerHTML = `Congratulations! You've won the game!`;
      } else if (playerScore < 5 && computerScore === 5) {
            gameResult.innerHTML = `Unfortunate! You've lost the game!`;
      } else if (playerScore === 5 && computerScore === 5) {
            gameResult.innerHTML = `It's a tie!`;
      }
}

function reset() {
      resetButton.classList.add('reset-pressed');
      resetButton.onanimationend = () => resetButton.classList.remove('reset-pressed');
      playerScore = 0;
      computerScore = 0;
      resultText.innerHTML = 'Go on - make a choice! First to reach 5 points wins.';
      score.innerHTML = 'Current score: 0 - 0';
      gameResult.innerHTML = '&nbsp;';
      rock.classList.remove('non-active');
      paper.classList.remove('non-active');
      scissors.classList.remove('non-active');
      rock2.classList.remove('chosen');
      paper2.classList.remove('chosen');
      scissors2.classList.remove('chosen');
}