var score = 0;

//if right answer is chosen add 1 to score and give feedback "correct"
//then move on to next question
function choseCorrect() {
    score++;
    document.getElementById("scoreValue").innerHTML = score;
    document.getElementById("feedback").innerHTML = "correct"
    nextQuestion();
}

//if wrong answer is chosen display hints/feedback below answer 
function choseWrong() {
    document.getElementById("feedback").innerHTML = "look up at the sky again"
}

//probably cycle through a list of questions in a json
function nextQuestion() {

}
