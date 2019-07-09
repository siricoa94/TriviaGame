$(document).ready(function () { 
    var timerNumber = 5;
    var intervalId;
    var string="";

    var questionObject = {
        questionOne:
        {
            question: "What river is George Washington known for crossing?",
            answerOne: "The Potomec",
            answerTwo: "River Thames",
            answerThree: "The Nile",
            answerFour: "The Delaware"
        },
        questionTwo: {
                question: "What did Abraham Lincoln apparently grow up in?",
                answerOne: "A penthouse overlooking central park",
                answerTwo: "A cave",
                answerThree: "On a farm",
                answerFour: "In a log cabin"
        }
    }
    var correctAnswerObject = {
        questionOne: "answerFour",
        questionTwo: "answerFour"
    }
$("#question").text("Start")
$("#question").on("click" , function () {

    function runObj(obj){
        
        for (var key in obj) {
  

            for (var key2 in obj[key]) {
                $("#" + key2).text(obj[key][key2])
                // implement on click function for answers.
                if(key2 != "question"){ // if the key is an answer 
                    $("#" + key2).on("click", function(){
                        if(correctAnswerObject[key] == key2) {
                            $("#question").text("Good job! you selected the right answer: " + obj[key][key2]);
                        }
            
                    
                
                    

                    })

                }

                console.log("key 1 and key 2: " + obj[key][key2])
            }
            // pause loop, wait for answer to question, get to click. timer?
        }
    }

    runObj(questionObject)
})
//         // for(var questionz in questionObject){
//         //     string += questionObject;
//         //     console.log(string);
//         // }
//     $("#questionAsk").text("Start")
//     $("#questionAsk").on("click" , function () {
//         $("#questionAsk").text(questionObject.questionOne.georgeQuestion)
//         $("#questionAnswerSlotOne").text(questionObject.questionOne.georgeWrongAnswerOne)
//         $("#questionAnswerSlotOne").on("click" , function () {
//             stop();
//             $("#timeLapse").html("Time Remaining: "+ timerNumber);
//             $("#questionAsk").text("Sorry, you selected the wrong answer, the correct answer was "+questionObject.questionOne.georgeRightAnswer);
//         })
//         run();
//         $("#questionAnswerSlotTwo").text(questionObject.questionOne.georgeWrongAnswerThree)
//         $("#questionAnswerSlotTwo").on("click" , function () {
//             stop();
//             $("#timeLapse").html("Time Remaining: "+ timerNumber);
//             $("#questionAsk").text("Sorry, you selected the wrong answer, the correct answer was "+ questionObject.questionOne.georgeRightAnswer);
//         })
//         run();
//         $("#questionAnswerSlotThree").text(questionObject.questionOne.georgeRightAnswer)
//         $("#questionAnswerSlotThree").on("click" , function () {
//             stop();
//             $("#timeLapse").html("Time Remaining: "+ timerNumber);
//             $("#questionAsk").text("Good job! you selected the right answer: " + questionObject.questionOne.georgeRightAnswer);
//         })
//         run();
//         $("#questionAnswerSlotFour").text(questionObject.questionOne.georgeWrongAnswerTwo)
//         $("#questionAnswerSlotFour").on("click" , function () {
//             stop();
//             $("#timeLapse").html("Time Remaining: "+ timerNumber);
//             $("#questionAsk").text("Sorry, you selected the wrong answer, the correct answer was "+ questionObject.questionOne.georgeRightAnswer);
//         })
//         run();



//         function run() {
//             clearInterval(intervalId);
//             intervalId = setInterval(decrement, 1000);
//           }
      
//           function decrement() {
      
//             timerNumber--;
      
//             $("#timeLapse").html("Time Remaining: " + timerNumber);
      
//             if (timerNumber === 0) {
//                 stop();
//                 $("#timeLapse").html("Time Remaining: "+ timerNumber);
//                 $("#questionAsk").text("Sorry, you ran out of time, the correct answer was "+questionObject.questionOne.georgeWashington.georgeRightAnswer);
                
              
//             }
//             run();
//           }
//           run();
//     })

// // Function created to stop timer interval from counting down to be called upon above.
//     function stop() {

//         clearInterval(intervalId);
//       }
    
    
})