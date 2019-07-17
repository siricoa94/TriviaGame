$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
})
$(document).on("click",".answer-button",function(e){
    game.clicked(e);

})
var questions = [{
    question: "What River did George Washington Cross?",
    answers: ["the delaware","The Nile","The Passaic","The Tibris"],
    correctAnswer: "the delaware",
},
{
    question: "What River did George Washington Cross?",
    answers: ["The Delaware"],
    correctAnswer: "The Delaware",
},
{
    question: "What River did George Washington Cross?",
    answers: ["The Delaware"],
    correctAnswer: "The Delaware",
},
{
    question: "What River did George Washington Cross?",
    answers: ["The Delaware"],
    correctAnswer: "The Delaware",
}];

var game = {
    questions:questions,
    currentQuestion:0,
    counter: 30,
    correct:0,
    incorrect:0,
    countdown: function(){
        game.counter--;
        $("#timeLapse").html(game.counter);
        if(game.counter<=0){
            console.log("Time up!")
            game.timeUp();
        }

    },
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);
        $("#questionAnswer").html("<h2>"+questions[game.currentQuestion].question+"</h2>");
        for(var i=0; i<questions[game.currentQuestion].answers.length;i++){
            $("#questionAnswer").append('<button class="answer-button" id="button' 
            + i + '"data-name"'+questions[game.currentQuestion].answers[i]+'">'+questions[game.
                currentQuestion].answers[i]+'</button>');
        }

    },
    nextQuestion: function(){
        game.counter = 30;
        $("#timeLapse").html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeUp: function(){
        clearInterval(timer);
        $("#timeLapse").html("<h2>OUT OF TIME</h2>");
        $("#questionAnswer").append("<h3>The Correct Answer was: "+questions.game.currentQuestion.correctAnswer +"</h3>");

    },
    results: function(){

    },
    clicked:function(e){
        clearInterval(timer);
        if($(e.target).data("name")==questions[game.currentQuestion].
        correctAnswer){
            game.answeredCorrectly();

        } else {
            game.answeredIncorrectly();
        }

    },
    answeredCorrectly: function(){
        console.log("GOOD JOB!");
        clearInterval(timer);
        game.correct++;
        $("#questionAnswer").html("<h2>GOOD JOB</h2>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }

    },
    answeredIncorrectly: function(){
        console.log("TRY AGAIN");
        clearInterval(timer);
        game.incorrect++;
        $("#questionAnswer").html("<h2>WRONG</h2>");
        $("#questionAnswer").append("<h3>The Correct Answer was: "+questions[game.currentQuestion].correctAnswer +"</h3>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }

    },
    reset: function(){

    },

}
































// $(document).ready(function () { 

//     var timerNumber = 5;
//     var intervalId = 0;
//     var string="";
//     var delay = 1000;

//     var questionArray = [
//         {
//             question: "What river is George Washington known for crossing?",
//             answerOne: "The Potomec",
//             answerTwo: "River Thames",
//             answerThree: "The Nile",
//             answerFour: "The Delaware"
//         },
//             {
//                 question: "What did Abraham Lincoln apparently grow up in?",
//                 answerOne: "A penthouse overlooking central park",
//                 answerTwo: "A cave",
//                 answerThree: "On a farm",
//                 answerFour: "In a log cabin"
//         }
//     ]
//     var correctAnswerObject = {
//         questionOne: "answerFour",
//         questionTwo: "answerFour"
//     }
//     console.log(questionArray);

        

//     $("#question").text("Start")
//     $("#question").on("click" , function () {
//         for(i = 0; i < questionArray.length; i++){
//             console.log(questionArray[i])

//         }
    
    
    
    
    
    
    
    

//     })   
// })
    // console.log(questionArray);
    // $("#question").text(questionArray[0].question);
    // $("#answerOne").text(questionArray[0].answerOne);
    // $("#answerTwo").text(questionArray[0].answerTwo);
    // $("#answerThree").text(questionArray[0].answerThree);
    // $("#answerFour").text(questionArray[0].answerFour);