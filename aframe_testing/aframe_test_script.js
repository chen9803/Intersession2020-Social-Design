let score = 0;
let final_score;
let questionNumber = 0;
let firstTry = true;

//randomizes which answer corresponds to which choice
let answer1 = Math.floor(Math.random() * 4) + 1;
let answer2 = Math.floor(Math.random() * 4) + 1;
while (answer1 == answer2) {
    answer2 = Math.floor(Math.random() * 4) + 1
}
let answer3 = Math.floor(Math.random() * 4) + 1;
while (answer3 == answer1 || answer3 == answer2) {
    answer3 = Math.floor(Math.random() * 4) + 1;
}
let answer4 = 10 - (answer1 + answer2 + answer3)
console.log(answer1 + " " + answer2 + " " + answer3 + " " + answer4)

//if user finds answer1 then call choseCorrect, calls choseWrong if not answer1
function evalAnswer(choice) {
    if (questionNumber < questionList.length) {
        if (choice === answer1) {
            choseCorrect();
        } else {
            choseWrong();
        }
    }   
}

//only adds to score on first try
//advances question number and calls nextQuestion
function choseCorrect() {
    if (firstTry == true) {
        score++;
    }
    questionNumber++;
    firstTry = true;
    document.querySelector("#feedback").setAttribute("text", "value", "Correct!")
    document.querySelector("#scoreValue").setAttribute("text", "value", "Score: " + score);    
    console.log("correct")
    nextQuestion();
}

//if wrong answer is chosen display hints/feedback below answer 
function choseWrong() {
    //document.getElementById("feedback").innerText = questionList[questionNumber].feedback;
    firstTry = false;
    document.querySelector("#feedback").setAttribute("text", "value", 'Try again')
    console.log("incorrect")
}

//cycles through questions in array and updates answer numbers
function nextQuestion() {
    randomizeAnswers();
    //console.log(answer1 + " " + answer2 + " " + answer3 + " " + answer4)

    switch (questionNumber) {
        case 0:
        case 1:
        case 2:
            console.log("question #" + (questionNumber + 1));
            document.querySelector("#question").setAttribute("text", "value", questionList[questionNumber].prompt);
            document.querySelector("#choice" + answer1).setAttribute("text", "value", questionList[questionNumber].correctAnswer);
            document.querySelector("#choice" + answer2).setAttribute("text", "value", questionList[questionNumber].wrongAnswer1);
            document.querySelector("#choice" + answer3).setAttribute("text", "value", questionList[questionNumber].wrongAnswer2);
            document.querySelector("#choice" + answer4).setAttribute("text", "value", questionList[questionNumber].wrongAnswer3);
            break;

        //when finished with quiz   
        default:
            console.log("finished")
            final_score = score;
            document.querySelector("#scoreValue").setAttribute("text", "value", "Score: " + final_score);
            document.querySelector("#question").setAttribute("text", "value", "");

            document.querySelector("#choice" + answer1).setAttribute("text", "value", "");
            document.querySelector("#choice" + answer1).setAttribute("material", "opacity", "0");

            document.querySelector("#choice" + answer2).setAttribute("text", "value", "");
            document.querySelector("#choice" + answer2).setAttribute("material", "opacity", "0");

            document.querySelector("#choice" + answer3).setAttribute("text", "value", "");
            document.querySelector("#choice" + answer3).setAttribute("material", "opacity", "0");

            document.querySelector("#choice" + answer4).setAttribute("text", "value", "");
            document.querySelector("#choice" + answer4).setAttribute("material", "opacity", "0");

            document.querySelector("#feedback").setAttribute("text", "value", "Your grade is " + (final_score / questionNumber) * 100 + "%");
            document.querySelector("#feedback").setAttribute("text", "align", "center");
            document.querySelector("#feedback").setAttribute("position", "0 1.5 -3");
    }
}

//randomizes answer numbers
function randomizeAnswers() {
    answer1 = Math.floor(Math.random() * 4) + 1;
    answer2 = Math.floor(Math.random() * 4) + 1;
    while (answer1 == answer2) {
        answer2 = Math.floor(Math.random() * 4) + 1
    }
    answer3 = Math.floor(Math.random() * 4) + 1;
    while (answer3 == answer1 || answer3 == answer2) {
        answer3 = Math.floor(Math.random() * 4) + 1;
    }
    answer4 = 10 - (answer1 + answer2 + answer3)
}
