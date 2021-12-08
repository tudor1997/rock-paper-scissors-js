const computer = document.querySelector('.computer');
const user = document.querySelector('.user');
const pick = document.querySelectorAll('.pick');
const result = document.querySelector('.result');
const resetBtn = document.querySelector('.reset');

const userRock = document.querySelector('.user .rock')
const userPaper = document.querySelector('.user .paper');
const userScissor = document.querySelector('.user .scissors');

const computerRock = document.querySelector('.computer .rock');
const computerPaper = document.querySelector('.computer .paper');
const computerScissor = document.querySelector('.computer .scissors');

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
        case "rockpaper":
        case "paperrock":
        case "scissorspaper":
            result.innerHTML = "Congrats! You win!";
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            result.innerHTML = "You lose!";
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            result.innerHTML = "Oh, it's a draw..."
            break;
    }
}

resetBtn.addEventListener("click", () => {
    pick.forEach(item => {
        item.classList.remove('highlight')
        result.innerHTML = '';
    })
})