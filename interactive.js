let userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
    console.log(user);
    console.log(computer);
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}


function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // sub means subscript
    const smallUserWorld = "user".fontsize(3).sub();
    const smallCompWorld = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld} beats ${convertToWord(computerChoice)}${smallCompWorld}. You Win!`;
}


function lose(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    // sub means subscript
    const smallUserWorld = "user".fontsize(3).sub();
    const smallCompWorld = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld} loses to ${convertToWord(computerChoice)}${smallCompWorld}. You Lost...!`;
}

function draw(userChoice, computerChoice) {
    // userScore++;
    // userScore_span.innerHTML = userScore;
    // computerScore_span.innerHTML = computerScore;
    // sub means subscript
    const smallUserWorld = "user".fontsize(3).sub();
    const smallCompWorld = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWorld} draw ${convertToWord(computerChoice)}${smallCompWorld}. Its a draw...!`;
}



function lose() {

}

function draw() {
    console.log("draww")
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;

    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game("r");
    })

    paper_div.addEventListener('click', function () {
        game("p");
    })

    scissors_div.addEventListener('click', function () {
        game("s");
    })

}


main();
