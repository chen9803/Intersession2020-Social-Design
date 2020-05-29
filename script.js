var score = 0;
var questionNumber = 0;
//var questionList = JSON.parse({"questions":[{"prompt":"What color is the sky"
//},
//{"prompt":"What is 4+7?"}]});
//if right answer is chosen add 1 to score and give feedback "correct"
//then move on to next question
function choseCorrect() {
    score++;
    document.getElementById("scoreValue").innerHTML = score;
    document.getElementById("feedback").innerHTML = "good job!"
    nextQuestion();
}

//if wrong answer is chosen display hints/feedback below answer 
//fix later to work with pulling from json
function choseWrong() {
    document.getElementById("feedback").innerHTML = "look up at the sky again"
}

//probably cycle through a list of questions in a json
function nextQuestion() {
    questionNumber++;
    console.log("question #" + (questionNumber + 1));
    
    switch (questionNumber){
        case 0:
            document.getElementById("question").innerHTML = "What color is the sky?" 
            
        case 1:
            document.getElementById("question").innerHTML = "What is 4+7?"
            //randomizeAnswers();
            document.getElementById("correctAnswer").innerHTML = "11"
            document.getElementById("wrongAnswer").innerHTML = "14"
            break;
        case 2:
            document.getElementById("question").innerHTML = "What year is it?"
            //randomizeAnswers();
            document.getElementById("correctAnswer").innerHTML = "2020"
            document.getElementById("wrongAnswer").innerHTML = "1982"
            break;
             //document.getElementById("question").innerHTML = questionList[questionNumber].prompt;

        //blanks out when finished     
        default:
            console.log("finished")
            document.body.style.visibility = "hidden";
            }
}
//will try implementing answer numbering system in order to id swap 
function randomizeAnswers() {
    var flip = Math.floor(Math.random() * 2) + 1;
    console.log(flip)
    if (flip == 1) {
        
        document.getElementById("correctanswer").id = "wrongAnswer";
        document.getElementById("wrongAnswer").id = "correctAnswer";
        
    }
}
