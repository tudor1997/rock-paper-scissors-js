const computer = document.querySelector('.computer');
const user = document.querySelector('.user');
const pick = document.querySelectorAll('.pick');
const result = document.querySelector('.result');
const resetBtn = document.querySelector('.reset');

let scoreUserCount = 0;
let scoreComputerCount = 0;
// User
const userRock = document.querySelector('.user .rock')
const userPaper = document.querySelector('.user .paper');
const userScissor = document.querySelector('.user .scissors');
const userScore = document.querySelector('.title .user-score');
// Computer
const computerRock = document.querySelector('.computer .rock');
const computerPaper = document.querySelector('.computer .paper');
const computerScissor = document.querySelector('.computer .scissors');
const computerScore = document.querySelector('.title .computer-score');

userScore.innerHTML = scoreUserCount;
computerScore.innerHTML = scoreComputerCount;

const choice = ['rock','paper','scissors'];

function game(userChoice) {
   const computerChoice = getComputerChoice()
   
    if(userChoice === 'rock') {
        userRock.classList.add('highlight');
        userPaper.classList.remove('highlight');
        userScissor.classList.remove('highlight');
    }
    if(userChoice === 'paper') {
        userPaper.classList.add('highlight');
        userRock.classList.remove('highlight');
        userScissor.classList.remove('highlight');
    }
    if(userChoice === 'scissors') {
        userScissor.classList.add('highlight');
        userPaper.classList.remove('highlight');
        userRock.classList.remove('highlight');
    }
    gameChoices(userChoice, computerChoice);
}

function main () {
    userRock.addEventListener('click', () => {
        game(choice[0]);
    })
    userPaper.addEventListener('click', () => {
        game(choice[1]);
    })
    userScissor.addEventListener('click', () => {
        game(choice[2]);
    })
}

main()

function getComputerChoice (){ 
    const index =  Math.floor(Math.random() * choice.length);
    if(choice[index] === 'rock'){
        computerRock.classList.add('highlight');
        computerPaper.classList.remove('highlight');
        computerScissor.classList.remove('highlight');
        return 'rock'
    }
    if(choice[index] === 'paper'){
        computerPaper.classList.add('highlight');
        computerRock.classList.remove('highlight');
        computerScissor.classList.remove('highlight');
        return 'paper'
    }
    if(choice[index] === 'scissors'){
        computerScissor.classList.add('highlight');
        computerPaper.classList.remove('highlight');
        computerRock.classList.remove('highlight');
        return 'scissors'
    }
}


function gameChoices(userChoice, computerChoice) {

    switch(userChoice + computerChoice) {
        case "paperrock":
        case "scissorspaper":
        case "rockscissors":
            result.innerHTML = "Congrats! You won!";
            scoreUserCount +=  1;
            userScore.innerHTML = scoreUserCount;
            if( scoreUserCount + 1){
                userScore.classList.add('highlight-score');
                computerScore.classList.remove('highlight-score');
            }
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            result.innerHTML = "You lose!";
            scoreComputerCount += 1;
            computerScore.innerHTML = scoreComputerCount;
            if(scoreComputerCount + 1){
                userScore.classList.remove('highlight-score');
                computerScore.classList.add('highlight-score');
            }
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result.innerHTML = "Oh, it's a draw..."
            userScore.classList.remove('highlight-score');
            computerScore.classList.remove('highlight-score');
            break;
    }
}

resetBtn.addEventListener("click", () => {
    pick.forEach(item => {
        item.classList.remove('highlight')
        result.innerHTML = '';
        scoreUserCount = 0;
        scoreComputerCount = 0;
        userScore.innerHTML = scoreUserCount;
        computerScore.innerHTML = scoreComputerCount;
        userScore.classList.remove('highlight-score');
        computerScore.classList.remove('highlight-score');
    })
})