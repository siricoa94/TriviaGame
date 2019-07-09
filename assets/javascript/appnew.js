$(document).ready(function(){
    var question = ["What river did George Washington Famoulsy Cross?","What did Abraham Lincoln grow up in?","How many battles did Andrew Jackson participate in?","Who played chess against Benjamin Franklin in a bathtub?"]
    var option1 = ["1"]
    var option2 = ["1"]
    var option3 = ["1"]
    var option4 = ["1"]
    var correct = ["Correct!","Correct!","Correct!","Correct!"]
    var incorrect = ["Incorrect!","Incorrect!","Incorrect!","Incorrect!"]
    var questionNumber = 0;
    questionNumber ++;
    var score = 0;
    score ++; 
    $("#questionAsk").text("Start")
    $("#questionAsk").on("click" , function () {
        for(i = 0; i < question.length; i++){
            $("#questionAsk").text(question[i])
            $("#questionAnswerSlotOne").text(questionObject.questionOne.georgeWashington.georgeWrongAnswerOne)


        }

    })

})