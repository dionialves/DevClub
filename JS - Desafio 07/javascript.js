rockHumanPlayer = document.getElementById('rock-human-player');
paperHumanPlayer = document.getElementById('paper-human-player');
scissorsPlayer = document.getElementById('scissors-human-player');


const generateComputerDecision = () => {
    options = ['rock', 'paper', 'scissors'];
    decision = options[Math.round(Math.random() * (2 - 0) + 0)];
    return decision;
}

const play = (humanChoice) => {
    computerChoice = generateComputerDecision()

    if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
        (humanChoice === 'paper' && computerChoice === 'rock') || 
        (humanChoice === 'scissors' && computerChoice === 'paper')){

            console.log(`${humanChoice} vs ${computerChoice} - Visitante Ganhou`)

        }else if (humanChoice === computerChoice){
            console.log(`${humanChoice} vs ${computerChoice} - Empate`)
        }else{
            console.log(`${humanChoice} vs ${computerChoice} - Dioni Alves Ganhou`)
        }
}

rockHumanPlayer.addEventListener('click', () => play('rock'));
paperHumanPlayer.addEventListener('click', () => play('paper'));
scissorsPlayer.addEventListener('click', () => play('scissors'));