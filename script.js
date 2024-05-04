let round = 1;
let pScore = 0;
let cScore = 0;
let numberOfRounds = 0;

function start() {

    newNumberOfRounds = prompt("enter number of rounds:");
    if(!isNaN(newNumberOfRounds)){
        numberOfRounds = parseInt(newNumberOfRounds);
        if (numberOfRounds <= 0){
            alert("Input an answer that is more than 0")
            start();
        }
    }
    else{
        alert("Input integer")
        start();
    }

    if (!isNaN(numberOfRounds)) {
        play();
    }
    else {
        alert("Input integer")
        start();
    }

}

function play() {



    let newPick = prompt("Round: " + round + "\n 1. Scissor \n 2. Rock \n 3.Paper");
    let pick = 0;
    
    if(!isNaN(newPick)){
        pick = parseInt(newPick);
    }
    else {
        alert("Please pick from 1, 2, or 3");
        play();
    }

    if (pick === 1 || pick === 2 || pick === 3) {
        playPick(pick);
    }
    else {
        alert("Please pick from 1, 2, or 3");
        play();
    }

}

function playPick(pick) {

    let computerPick = Math.floor((Math.random() * 3) + 1);
    let playerWordPick = "";
    let computerWordPick = "";

    switch (pick) {
        case 1:
            playerWordPick = "Scissor";
            break;
        case 2:
            playerWordPick = "Rock";
            break;
        case 3:
            playerWordPick = "Paper";
            break;
    }
    switch (computerPick) {
        case 1:
            computerWordPick = "Scissor";
            break;
        case 2:
            computerWordPick = "Rock";
            break;
        case 3:
            computerWordPick = "Paper";
            break;
    }

    if (pick == 1) {
        if (computerPick == 3) {
            //win
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Win");
            pScore++;
        } else if (computerPick == pick) {
            //tie
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Tie");
        } else {
            //lose
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Lose");
            cScore++
        }
    } else if (pick == 2) {
        if (computerPick == 1) {
            //win
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Win");
            pScore++;
        } else if (computerPick == pick) {
            //tie
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Tie");
        } else {
            //lose
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Lose");
            cScore++
        }
    } else if (pick == 3) {
        if (computerPick == 2) {
            //win
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Win");
            pScore++;
        } else if (computerPick == pick) {
            //tie
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Tie");
        } else {
            //lose
            alert("Computer: " + computerWordPick + "\n Player: " + playerWordPick + "\n Lose");
            cScore++
        }
    }

    if (numberOfRounds == round) {

        scoreboard();

    } else {
        round++;
        play();
    }
}

function scoreboard(){

    let result = "";
    if(pScore == cScore){
        result = " ITS A TIE";
    }
    else if (pScore > cScore){
        result = "YOU WIN";
    }
    else if (pScore < cScore){
        result = "YOU LOSE"
    }
    alert("Score \n player:" + pScore + "\n computer: " + cScore + "\n" + result);
    gameOver();

}

function gameOver() {

   

    let playAgain = 0;
    
    let newPlayAgain = prompt("Play again? \n 1. Yes \n 2. No");

    if(!isNaN(newPlayAgain)){
        playAgain = parseInt(newPlayAgain);
    }
    else{
        alert("Please pick from 1 or 2");
        gameOver();
    }


    if (playAgain == 1) {
        round = 1;
        pScore = 0;
        cScore = 0;
        numberOfRounds = 0;
        start();
    }
    else if (playAgain == 2) {
        exit();
    }
    else {
        alert("Please pick a valid answer");
        gameOver();
    }
}
function exit(){
    die("Thanks");

}