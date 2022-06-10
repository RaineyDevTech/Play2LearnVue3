let output;
let questions = new Array();
let timeLeft;
let i = 0;
let correctAnswers = 0;
let interval;


//function to hid login form and display register form
function swapLog() {
    document.getElementById('loginform').style.display = 'none';
    document.getElementById('registerform').style.display = 'block';
}

//function to hide register form and display login
function swapReg() {
    document.getElementById('registerform').style.display = 'none';
    document.getElementById('loginform').style.display = 'block';
}

//function to hide rules and display game board
function gameswap() {
    clr();
    getOption();
    stopTimer(interval);
    timeLeft = 30;
    document.getElementById("mathgame").style.display = 'none';
    document.getElementById("gameboard").style.display = "block";
}

//function that displays value
function dis(val) {
    document.getElementById("result").focus();
    document.getElementById("result").value += val;
}

//function that clears the display
function clr() {
    document.getElementById("result").value = "";
    document.getElementById("result").focus();
}

//function to read in select menu option
function getOption() {
    selectElement = document.querySelector('#operation');
    output = selectElement.value;
    chooseQuestions(output);
}

//function to choose questions for different operators
function chooseQuestions(output) {

    switch (output) {

        case "addition":
            questions.push(["5+3", "8"]);
            questions.push(["2+2", "4"]);
            questions.push(["1+1", "2"]);
            questions.push(["8+2", "10"]);
            questions.push(["3+3", "6"]);
            questions.push(["4+4", "8"]);
            questions.push(["2+3", "5"]);
            questions.push(["1+4", "5"]);
            questions.push(["5+4", "9"]);
            questions.push(["6+6", "12"]);
            questions.push(["2+9", "11"]);
            questions.push(["3+6", "9"]);
            break;

        case "multiplication":
            questions.push(["1x1", "1"]);
            questions.push(["2x4", "8"]);
            questions.push(["3x3", "9"]);
            questions.push(["2x5", "10"]);
            questions.push(["3x4", "12"]);
            questions.push(["4x4", "16"]);
            questions.push(["2x3", "6"]);
            questions.push(["1x4", "4"]);
            questions.push(["5x4", "20"]);
            questions.push(["6x6", "36"]);
            questions.push(["2x9", "18"]);
            questions.push(["3x6", "18"]);
            break;

        case "subtraction":
            questions.push(["1-1", "0"]);
            questions.push(["4-2", "2"]);
            questions.push(["3-2", "1"]);
            questions.push(["5-2", "3"]);
            questions.push(["7-4", "3"]);
            questions.push(["4-1", "3"]);
            questions.push(["8-6", "2"]);
            questions.push(["6-2", "4"]);
            questions.push(["9-4", "5"]);
            questions.push(["7-4", "3"]);
            questions.push(["9-8", "1"]);
            questions.push(["8-2", "6"]);
            break;

        case "division":
            questions.push(["1/1", "1"]);
            questions.push(["4/2", "2"]);
            questions.push(["9/3", "3"]);
            questions.push(["10/2", "5"]);
            questions.push(["8/4", "2"]);
            questions.push(["4/1", "4"]);
            questions.push(["10/2", "5"]);
            questions.push(["6/2", "3"]);
            questions.push(["12/4", "3"]);
            questions.push(["15/3", "5"]);
            questions.push(["14/2", "7"]);
            questions.push(["18/6", "3"]);
            break;

        default:
            break;
    }
}




//function to stop/reset timer 
function stopTimer(interval) {
    clearInterval(interval);
    //alert("stopping Timer");
}

//function to check game answers
function checkAnswer(answer, result) {
    const msg = document.getElementById('message');

     if (answer === result) {
        correctAnswers = correctAnswers + 1;
        score.innerHTML = 'Your Score ' + correctAnswers;
        return true;
    }
    if (timeLeft == 0) {
        document.getElementById('gametime').innerHTML = "game over ";
        stopGame(correctAnswers);
        //stopTimer(interval);
    }
    timeLeft -= .1;
    //timeLeft = parseFloat(timeLeft.toFixed(1));
    timeLeft = parseInt(timeLeft);
    msg.innerHTML = timeLeft + ' seconds';
    return false;
}

//function to start and run game
document.getElementById("go").addEventListener('click', function() {
    document.getElementById("operationOption").innerHTML = output.charAt(0).toUpperCase() + output.slice(1);
    document.getElementById('quizquestion').innerHTML = questions[i][i];
    let answer = questions[i][i + 1];
    const entryField = document.getElementById('result');
    window.addEventListener('keypress', function() {
        document.getElementById("result").focus();
    });

    entryField.addEventListener('focus', function() {
        interval = setInterval(function() {
            const result = checkAnswer(answer, entryField.value);
            if (result) {
                i = i + 1;
                document.getElementById('quizquestion').innerHTML = questions[i][0];
                answer = questions[i][1];
                clr();
                if(timeLeft <1){
                    //alert("stop this effin timer");
                    clearInterval(interval)};
            }
        }, 1250);
        
    });

});

//function to stop the game and display score option to play again
function stopGame(correctAnswers) {
    document.getElementById("gamename").innerHTML = output.charAt(0).toUpperCase() + output.slice(1);
    document.getElementById("finalscore").innerHTML = correctAnswers;
    document.getElementById("gameboard").style.display = 'none';
    document.getElementById("gameover").style.display = 'block';
    document.getElementById("mathgame").style.display = 'none';
}

//function to restart game
function playAgain() {
    //stopTimer();
    i = 0;
    correctAnswers = 0;
    score.innerHTML = 'Your Score ' + correctAnswers;
    timeLeft = 1500;
    questions.length = 0;

    document.getElementById("gameboard").style.display = 'none';
    document.getElementById("gameover").style.display = 'none';
    document.getElementById("mathgame").style.display = 'block';
}