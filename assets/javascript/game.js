$(document).ready(function () {
    //Questions here!
    
    var questions = [{
        question: 'What does the < h1 > tag do in html?',

        answers:
        {
            choiceA: "Capitalizes everything ",
            choiceB: "Formats the text ",
            choiceC: "Makes everything inside a header ",
            choiceD: "Nothing ",

        }

    }, {
        question: "How do I call a function in javascript?",

        answers: {
            choiceA: "functionname(); ",
            choiceB: "functionname.call(); ",
            choiceC: "call $('functionname') ",
            choiceD: "functionname; ",
        }
    }, {
        question: "How do we call an element with jquery?",

        answers: {
            choiceA: "$(#elementName) ",
            choiceB: "Formats the text ",
            choiceC: "Makes everything inside a header ",
            choiceD: "Nothing ",
        }


    }, {
        question: "What method converts a string into a value?",
        answers: {
            choiceA: ".stringToInt ",
            choiceB: ".int ",
            choiceC: ".append ",
            choiceD: ".parseInt ",
        }
    }
    ]

    //timer
    var interval;
    var running = false;
    var counter = 0;
    var timeLeft = 30;
    var timer = $("#time");
    // timer
    function timeIt() {
        counter++;
        timer.html(timeLeft - counter);
    }
    function intervalFunction() {
       var interval = setInterval(timeIt, 1000);
    if (timeLeft === 0) {
        running = false;
        clearInterval(interval);
        alert("Times up!");
        $("#questionDiv").empty();
        $("#questionTwo").empty();
        $("#questionThree").empty();
        $("#questionFour").empty();
        $("#answerDiv").empty();
        $("#answerTwo").empty();
        $("#answerThree").empty();
        $("#answerFour").empty();
        $("#emptyDiv").empty();
    }
    var wins = 0;
    var losses = 0;
}
    //Starts the clock, as well as starts the for loop that puts the game on the screen
    $("#button").click(function () {
        running = true;
        intervalFunction();
        $("#button").attr("disabled", "disabled");

        function checkAnswer(answer) {

            var cAnswerOne = questions[0].answers.choiceA;
            var cAnswerTwo = questions[1].answers.choiceB;
            var cAnswerThree = questions[2].answers.choiceC;
            var cAnswerFour = questions[3].answers.choiceD;
            //if the correct answer is equal to the answer of which the player selected then increase wins
            //I wasnt sure how to get the answers to be functiona

            // if (cAnswerOne) {

            //     wins++;
            // }
            // if (cAnswerTwo) {

            //     wins++;
            // }
            // if (cAnswerThree) {

            //     wins++;
            // }
            // if (cAnswerFour) {

            //     wins++;
            // }

        }

        function display() {
            var cAnswerOne = questions[0].answers.choiceA;
            var cAnswerTwo = questions[1].answers.choiceB;
            var cAnswerThree = questions[2].answers.choiceC;
            var cAnswerFour = questions[3].answers.choiceD;

            var choicesOne = questions[currentQuestion].answers;

            //creating question div's
            questionDiv = $("<p class='questions'>");
            questionTwo = $("<p class='questions'>");
            questionThree = $("<p class='questions'>");
            questionFour = $("<p class='questions'>");

            //appending the question to the question divs
            questionDiv.append(questions[0].question)
            questionTwo.append(questions[1].question)
            questionThree.append(questions[2].question)
            questionFour.append(questions[3].question)

            //creating buttons for the answers
            answerBtn = $("<button class='questions'>");
            answerBtnTwo = $("<button class='questions'>");
            answerBtnThree = $("<button class='questions'>");
            answerBtnFour = $("<button class='questions'>");




            //apending all of the questions/answers in order
            $("#questionDiv").append(questionDiv);

            $("#answerDiv").append(cAnswerTwo + " | " + cAnswerTwo + " | " + cAnswerThree + " | " + cAnswerFour)

            $("#questionTwo").append(questionTwo);

            $("#answerTwo").append(cAnswerTwo + " | " + cAnswerTwo + " | " + cAnswerThree + " | " + cAnswerFour)

            $("#questionThree").append(questionThree);

            $("#answerThree").append(cAnswerThree + " | " + cAnswerTwo + " | " + cAnswerThree + " | " + cAnswerFour)

            $("#questionFour").append(questionFour);

            $("#answerFour").append(cAnswerFour + " | " + cAnswerTwo + " | " + cAnswerThree + " | " + cAnswerFour)




            // I Know alot of the code above could most definetly could be refined and put into a loop for each question and answer, but this is what i got to work. 

            checkAnswer();

        }



        $("#button").click(function () {
            $(this).animate({ backgroundColor: 'yellow' }, 1000);
        }, function () {
            $(this).animate({ backgroundColor: '#333' }, 1000);
        });





        $("#button").click(function () {
            $("#button").animate({ right: slow });
        });


        $("#answerDiv").click(function () {
            console.log(this.Answers)

        });

        for (var currentQuestion = 0; currentQuestion < 1; currentQuestion++) {

            display();

        }
    });
})