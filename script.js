let score = 0;
let questionNumber = 0;
let firstTry = true;
let flip1 = Math.floor(Math.random() * 4) + 1;
let flip2 = Math.floor(Math.random() * 4) + 1;
while (flip1 == flip2) {
    flip2 = Math.floor(Math.random() * 4) + 1
}
let flip3 = Math.floor(Math.random() * 4) + 1;
while (flip3 == flip1 || flip3 == flip2) {
    flip3 = Math.floor(Math.random() * 4) + 1;
}
let flip4 = 10 - (flip1 + flip2 + flip3)
console.log(flip1 + " " + flip2 + " " + flip3 + " " + flip4)

window.onload = function () {
    this.setup();
}

function setup() {
    document.getElementById("question").innerText = questionList[0].prompt;
    document.getElementById("choice" + flip1).innerText = questionList[0].correctAnswer
    document.getElementById("choice" + flip2).innerText = questionList[0].wrongAnswer1
    document.getElementById("choice" + flip3).innerText = questionList[0].wrongAnswer2
    document.getElementById("choice" + flip4).innerText = questionList[0].wrongAnswer3
}

function evalAnswer(choice) {
    if (choice === flip1) {
        choseCorrect();
    } else {
        choseWrong();
    }
}

function choseCorrect() {
    if (firstTry == true) {
        score++;
    }
    questionNumber++;
    firstTry = true;
    document.getElementById("scoreValue").innerText = score;
    document.getElementById("feedback").innerText = "good job!"
    nextQuestion();
}

//if wrong answer is chosen display hints/feedback below answer 
function choseWrong() {
    document.getElementById("feedback").innerText = questionList[questionNumber].feedback;
    firstTry = false;
}

//cycles through questions
function nextQuestion() {


    console.log("question #" + (questionNumber + 1));

    //randomly assign choice number to answer
    randomizeAnswers();
    console.log(flip1 + " " + flip2 + " " + flip3 + " " + flip4)

    switch (questionNumber) {
        case 0:
        case 1:
        case 2:

            document.getElementById("question").innerText = questionList[questionNumber].prompt;
            document.getElementById("choice" + flip1).innerText = questionList[questionNumber].correctAnswer
            document.getElementById("choice" + flip2).innerText = questionList[questionNumber].wrongAnswer1
            document.getElementById("choice" + flip3).innerText = questionList[questionNumber].wrongAnswer2
            document.getElementById("choice" + flip4).innerText = questionList[questionNumber].wrongAnswer3

            break;


        //when finished     
        default:
            console.log("finished")
            //displayScore();
    }
}

function randomizeAnswers() {
    flip1 = Math.floor(Math.random() * 4) + 1;
    flip2 = Math.floor(Math.random() * 4) + 1;
    while (flip1 == flip2) {
        flip2 = Math.floor(Math.random() * 4) + 1
    }
    flip3 = Math.floor(Math.random() * 4) + 1;
    while (flip3 == flip1 || flip3 == flip2) {
        flip3 = Math.floor(Math.random() * 4) + 1;
    }
    flip4 = 10 - (flip1 + flip2 + flip3)
}

//only redirects so far
function displayScore() {
    window.location.replace("final_score_page.html")
    window.onload = function () {
        document.getElementById("finalScore").innerText = "Your final score is " + score
    }

}

document.getElementById("choice1").addEventListener("click", function () {
    evalAnswer(1);
});
document.getElementById("choice2").addEventListener("click", function () {
    evalAnswer(2);
});
document.getElementById("choice3").addEventListener("click", function () {
    evalAnswer(3);
});
document.getElementById("choice4").addEventListener("click", function () {
    evalAnswer(4);
});

