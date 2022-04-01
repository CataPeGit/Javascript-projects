const computer_display = document.getElementByID('computer-choice');
const user_choice_display = document.getElementByID('user-choice');
const result_display = document.getElementByID('result');
let user_choice;
let computer_choice;
let result;

const possible_choices = document.querySelectorAll('button');

possible_choices.forEach(possible_choices => possible_choices.addEventListener('click', (e) => {
	user_choice = e.target.id
	user_choice_display.innerHTML = user_choice
	
	generate_computer_choice()


}))

function generate_computer_choice() {
	const nrandom = Math.floor(Math.random() * possible_choices.length) + 1;
	
	if (nrandom === 1) {
		computer_choice = 'rock';
	}
	if (nrandom === 2) {
		computer_choice = 'paper';
	}
	if (nrandom === 3) {
		computer_choice = 'scissors';
	}

	computer_display.innerHTML = computer_choice;
}

function getResult() {
	if( computer_choice === userChoice) { 
		result = 'Draw!'
	}
	if( computer_choice === 'rock' && computer_choice === 'scissors') { 
		result = 'You lost!'
	}
	if( computer_choice === 'rock' && computer_choice === 'paper') { 
		result = 'You win!'
	}
	if( computer_choice === 'paper' && computer_choice === "rock") { 
		result = 'You lost!'
	}
	if( computer_choice === 'paper' && computer_choice === "scissors") { 
		result = 'You win!'
	}
	if( computer_choice === 'scissors' && computer_choice === "rock") { 
		result = 'You win!'
	}
	if( computer_choice === 'scissors' && computer_choice === "paper") { 
		result = 'You lost!'
	}
	result_display.innerHTML = result;
}

















