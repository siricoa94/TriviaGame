$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
})
$(document).on("click",".answer-button",function(e){
    game.clicked(e);

})
$(document).on("click","#reset",function(){
    game.reset();
})
var questions = [{
    question: "What River did George Washington Cross?",
    answers: ["the delaware","The Nile","The Passaic","The Tibris"],
    correctAnswer: "the delaware",
},
{
    question: "How many sides does the great pyramid of Giza have?",
    answers: ["four","six","eight","ten"],
    correctAnswer: "eight",
},
{
    question: "Which of these helps to fertilize the Amazon in South America",
    answers: ["deforestation","fire","farming","the sahara"],
    correctAnswer: "the sahara",
},
{
    question: "Walk ten miles south, ten miles west, and ten miles north."+"<br>"+
    "You end up in the same location that you started in, where are you?",
    answers: ["andy's house","the north pole","the equator","area 51"],
    correctAnswer: "the north pole",
}];

var game = {
    questions:questions,
    currentQuestion:0,
    counter: 30,
    correct:0,
    incorrect:0,
    unanswered: 0,
    countdown: function(){
        game.counter--;
        $("#timeLapse").html("time remaining: " + game.counter);
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
        $("#timeLapse").html("time remaining: " + game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeUp: function(){
        clearInterval(timer);
        game.unanswered++;
        $("#timeLapse").html("<h2>OUT OF TIME</h2>");
        $("#questionAnswer").html("<h3>The Correct Answer was: "+questions[game.currentQuestion].correctAnswer +"</h3>");
        if(game.currentQuestion==questions.length-1){
            setTimeout(game.results,3*1000);
        } else {
            setTimeout(game.nextQuestion,3*1000);
        }
    },
    results: function(){
        clearInterval(timer);
        $("#questionAnswer").html("ALL DONE!");
        $("#questionAnswer").append("Correct: "+game.correct);
        $("#questionAnswer").append("Incorrect: "+game.incorrect);
        $("#questionAnswer").append("Unanswered: "+game.unanswered);
        $("#questionAnswer").append("<button id='reset'>RESET</button>");

    },
    clicked:function(e){
        clearInterval(timer);
        var correctAnswerDisplay = questions[game.currentQuestion].correctAnswer
        var comparison = $(e.target).data("name")
        console.log(correctAnswerDisplay);
        console.log(comparison);
        console.log($(e.target).data("name"))
        if($(e.target).data("name")==questions[game.currentQuestion].correctAnswer)
        {
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
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct= 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

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