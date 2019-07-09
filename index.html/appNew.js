const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge")
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const scoreContainer = document.getElementById("scoreContainer");
const progress = document.getElementById("progress");
const scoreContainer = document.getElementbyId("scoreContainer")

let questions = [
    {
        question: "George Washington",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "A"
    },
    {
        question: "Abraham Lincoln",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    },
    {
        question: "Abraham qq Lincoln",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    },
    {
        question: "Abraham www Lincoln",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    },
    {
        question: "Abraham rrrr Lincoln",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    },
    {
        question: "Abraham ssss Lincoln",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    },
    {
        question: "Abraham eeee Lincoln",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    },
    {
        question: "Abraham ggg Lincoln",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    },
    {
        question: "Abraham Washington",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    },
    {
        question: "George Lincoln",
        choiceA: "wrong",
        choiceB: "right",
        choiceC: "wrong",
        ChoiceD: "wrong",
        correct : "B"
    }
]
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex];
    question.innerHTML = "<p>" + q.question+ "</p>";
    choiceA.innerHTML = q.ChoiceA;
    choiceB.innerHTML = q.ChoiceB;
    choiceC.innerHTML = q.ChoiceC;
    choiceD.innerHTML = q.ChoiceD;
}

start.style.display = "none";
renderQuestion();
quiz.style.display = "block";

function progressRender(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id=" + gIndex + "></div>";
    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor="green"; 
}
function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor="red"; 
}

const questionTime =10;
const gaugeWidth =150;
let count = 0;
const gaugeProgressUnit = gaugeWidth/questionTime;

function counterRender(){
    if (count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = gaugeProgressUnit * count + "px" ;
        count++;
    }
    else{
        count = 0;
        answerIsWrong();
        if(runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            questionRender();
        }
        else{
            clearInterval(TIMER);
            scoreRender();
        }
    }
}
let score = 0;
function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct == answer){
        score++;
        answerIsCorrect();
    }
    else{
        miss++;
        answerIsWrong();
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        questionRender();
    }
    else{
        clearInterval(TIMER);
        scoreRender();
    }
}
const start = document.getElementById("Start");

start.addEventListener("click", startQuiz);

let TIMER;

function startQuiz() {
    start.style.display="none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}
let count = 30;
let TIMER = setInterval(counterRender,1000);