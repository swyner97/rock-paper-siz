let wins = 0;
let loses = 0;
let draws = 0;

let randomOption = ['rock', 'paper', 'scissors'];

let gameLogic = () => {
    let userChoice = window.prompt('Select rock, paper or scissors');
    console.log(userChoice);

    let randomIndex = Math.floor(Math.random() * randomOption.length);
    console.log(randomOption[randomIndex]);

    let cpuChoice = randomOption[randomIndex];

    alert(`The CPU chose: ${cpuChoice}`);

    if (userChoice === cpuChoice) {
        alert("it's a draw!")
        draws++
    } else if (
        (userChoice === randomOption[0] && cpuChoice === randomOption[1]) ||
        (userChoice === randomOption[1] && cpuChoice === randomOption[2]) || (userChoice === randomOption[2] && cpuCHoice === randomOption[0])
    ) {
        alert("CPU wins!")
        loses++
    } else {
        alert("You win!")
        wins++
    }
    alert(`wins: ${wins} \n loses: ${loses}`)

    let playAgain = confirm('play again?')

    if (playAgain) {
        gameLogic();
    }
};

gameLogic();