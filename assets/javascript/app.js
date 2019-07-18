// on click function for the start button to load the first question and remove the start button
$("#start").on("click", function(){
    $("#start").remove();
    game.loadQuestion();
})
// on click function for the answer button to run game.clicked(e) "e" being the target of the click.
$(document).on("click",".answer-button",function(e){
    game.clicked(e);

})
// resets the game on click of the reset button
$(document).on("click","#reset",function(){
    game.reset();
})
// a variable named questions which is an array that contains objects. some of which also contain arrays.
var questions = [{
    question: "What River did George Washington Cross?",
    answers: ["the Delaware","The Nile","The Passaic","The Tibris"],
    correctAnswer: "the Delaware",
},
{
    question: "How many sides does the great pyramid of Giza have?",
    answers: ["Four","Six","Eight","Ten"],
    correctAnswer: "Eight",
},
{
    question: "Which of these helps to fertilize the Amazon in South America",
    answers: ["Deforestation","Fire","Farming","The Sahara"],
    correctAnswer: "The Sahara",
},
{
    question: "About how many nuclear detonation tests have occured since 1945? ",
    answers: ["100","1000","2000","10,000"],
    correctAnswer: "2000",
},
{
    question: "about how many times does lightning strike the earth a second? and it never strikes the same spot twice?",
    answers: ["1","10","50","100"],
    correctAnswer: "100",
},
{
    question: "What color is the only type of fresh water Dolphin?",
    answers: ["Green","Blue","Red","Pink"],
    correctAnswer: "Pink",
},
{
    question: "What month did the Romans hate the most",
    answers: ["February","March","June","December"],
    correctAnswer: "February",
},
{
    question: "What is the most popular street name in America",
    answers: ["Main","2nd","Park Ave","Washington"],
    correctAnswer: "Main",
},
{
    question: "What point in the sky never moves",
    answers: ["The north star","The sun","The moon","The sky itself"],
    correctAnswer: "The north star",
},
{
    question: "Walk ten miles south, ten miles west, and ten miles north."+"<br>"+
    "You end up in the same location that you started in, where are you?",
    answers: ["Andy's house","The north pole","The equator","Area 51"],
    correctAnswer: "The north pole",
}];
// the variable game holds all the function values and game functions.
var game = {
    questions:questions,
    currentQuestion:0,
    counter: 30,
    correct:0,
    incorrect:0,
    unanswered: 0,
    // countdown function to decriment time.
    countdown: function(){
        game.counter--;
        $("#timeLapse").html("time remaining: " + game.counter);
        if(game.counter<=0){
            console.log("Time up!")
            game.timeUp();
        }

    },
    // function that loads questions and sets time decriment from 30 down by a second interval
    loadQuestion: function(){
        timer = setInterval(game.countdown, 1000);

        $("#questionAnswer").html("<h2>"+questions[game.currentQuestion].question+"</h2>");
        for(var i=0; i<questions[game.currentQuestion].answers.length;i++){
            $("#questionAnswer").append("<br>"+"</br>"+'<button class="answer-button" id="button' 
            + i + '"data-name="'+questions[game.currentQuestion].answers[i]+'">'+questions[game.
                currentQuestion].answers[i]+'</button>');
        }

    },
    // resets game counter and loads next question
    nextQuestion: function(){
        game.counter = 30;
        $("#timeLapse").html("time remaining: " + game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    // clears time interval and incriments the game unanswered score, then displays out of time to user
    // also displays correct answer for user, if the user never answers.
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
    // displays the results at the end of the game, also includes a reset button
    results: function(){
        clearInterval(timer);
        $("#questionAnswer").html("ALL DONE!");
        $("#questionAnswer").append("<br>"+"</br>"+"Correct: "+game.correct);
        $("#questionAnswer").append("<br>"+"</br>"+"Incorrect: "+game.incorrect);
        $("#questionAnswer").append("<br>"+"</br>"+"Unanswered: "+game.unanswered);
        $("#questionAnswer").append("<br>"+"</br>"+"<button id='reset'>RESET</button>");

    },
    // comparison statement that comares the clicked answer to the correct answer.
    // also includes if else statement which runs the function depending on if the 
    // user is correct or not
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
    // if the user answered correctly, this function is run.
    // This function displays good job on the page, incriments the right score
    // and also sets timeout before moving onto the next question.
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
     // if the user answered incorrectly, this function is run.
    // This function displays good job on the page, incriments the wrong score
    // and also sets timeout before moving onto the next question.
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
    // resets all the values for the player to play a new round
    reset: function(){
        game.currentQuestion = 0;
        game.counter = 30;
        game.correct= 0;
        game.incorrect = 0;
        game.unanswered = 0;
        game.loadQuestion();

    },

}