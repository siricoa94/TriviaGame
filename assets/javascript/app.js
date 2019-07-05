$(document).ready(function () { 
    var timerNumber = 30;
    var intervalId;

    var questionObject = {
        questionOne: {
          georgeWashington:{
              georgeQuestion: "What river is George Washington known for crossing?",
              georgeWrongAnswerOne: "The Potomec",
              georgeWrongAnswerTwo: "River Thames",
              georgeWrongAnswerThree: "The Nile",
              georgeRightAnswer: "The Delaware"
          }
        },
        questionTwo: {
            abrahamLincoln:{
                abrahamQuestion: "What did Abraham Lincoln apparently grow up in?",
                abrahamWrongAnswerOne: "A penthouse overlooking central park",
                abrahamWrongAnswerTwo: "A cave",
                abrahamWrongAnswerThree: "On a farm",
                abrahamRightAnswer: "In a log cabin"
            }
        }
        // questionTwo:{
        //   type: "home",
        //   number: "212 555-1234"
        // }
    }
    $("#questionAsk").text("Start")
    $("#questionAsk").on("click" , function () {
        //timer() {wait this many seconds then change the page}
        $("#questionAsk").text(questionObject.questionOne.georgeWashington.georgeQuestion)
        $("#questionAnswerSlotOne").text(questionObject.questionOne.georgeWashington.georgeWrongAnswerOne)
        $("#questionAnswerSlotOne").on("click" , function () {
            //timer.stop()
        })
        $("#questionAnswerSlotTwo").text(questionObject.questionOne.georgeWashington.georgeWrongAnswerThree)
        $("#questionAnswerSlotThree").text(questionObject.questionOne.georgeWashington.georgeRightAnswer)
        $("#questionAnswerSlotFour").text(questionObject.questionOne.georgeWashington.georgeWrongAnswerTwo)
        //timer() {wait this many seconds then change the page}
        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
          }
      
          function decrement() {
      
            timerNumber--;
      
            $("#timeLapse").html("Time Remaining: " + timerNumber);
      
            if (timerNumber === 0) {
                stop();
                $("#questionAsk").text("Sorry, you ran out of time, the correct answer was "+questionObject.questionOne.georgeWashington.georgeRightAnswer);
                
              
            }
          }
          run();
    })
    // if(){}
    
})