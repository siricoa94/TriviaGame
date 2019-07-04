$(document).ready(function () {
    var questionObject = {
        questionOne: {
          georgeWashington:{
              georgeQuestion: "What river is George Washington known for crossing?",
              georgeWrongAnswerOne: "The Potomec",
              georgeWrongAnserTwo: "River Thames",
              georgeWrongAnswerThree: "The Nile",
              georgeRightAnswer: "The Delaware"
          }
        },
        // questionTwo:{
        //   type: "home",
        //   number: "212 555-1234"
        // }
    }
    $("#questionAsk").text("Start")
    ($("#questionAsk").on("click" , function () {
        $("#questionAsk").text("testquestion")
    }))
})