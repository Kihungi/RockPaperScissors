let userScore = 0
let compScore = 0
const userScore_span = document.getElementById("user-score")
const compScore_span = document.getElementById("comp-score")
const scoreBoard_div = document.querySelector('.score-board')
const result_p = document.getElementById('result')
const rock_div = document.getElementById('r')
const paper_div = document.getElementById('p')
const scissors_div = document.getElementById('s')

function getComputerChoice() {
    const choices = ['r', 'p', 's']
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

function convertToWord(letter) {
    if (letter == 'r') {
        return 'Rock';
    } else if (letter == 'p') {
        return 'Paper'
    } else { return 'Scissors' }
}

function win(user, computer) {
    userScore++;
    const user_div = document.getElementById(user);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = 'user'.fontsize(2).sup();
    const smallCompWord = 'comp'.fontsize(2).sup();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord} beats ${convertToWord(computer)}${smallCompWord}. You win`;
    user_div.classList.add('green-glow')
    setTimeout(function() { user_div.classList.remove('green-glow') }, 500)
}

function lose(user, computer) {
    compScore++;
    const user_div = document.getElementById(user);
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const smallUserWord = 'user'.fontsize(2).sup();
    const smallCompWord = 'comp'.fontsize(2).sup();
    result_p.innerHTML = `${convertToWord(computer)}${smallCompWord} beats ${convertToWord(user)}${smallUserWord}. You lose`;
    user_div.classList.add('red-glow')
    setTimeout(() => user_div.classList.remove('red-glow'), 500)
}


function draw(user, computer) {
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    const user_div = document.getElementById(user);
    result_p.innerHTML = `It's a draw`;
    user_div.classList.add('grey-glow');
    setTimeout(function() { user_div.classList.remove('grey-glow') }, 500)
}


function game(userChoice) {
    const compChoice = getComputerChoice()
    switch (userChoice + compChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, compChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, compChoice)
            break
        case 'rr':
        case 'ss':
        case 'pp':
            draw(userChoice, compChoice)
            break
    }

}

function main() {
    rock_div.addEventListener('click', function() {
        game('r')
    })
    paper_div.addEventListener('click', () => game('p'));
    scissors_div.addEventListener('click', function() {
        game('s')
    })

}


main();