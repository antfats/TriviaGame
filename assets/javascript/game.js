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
    var running = false;
    var intervalId;
    var counter = 0;
    var timeLeft = 30;
    var timer = $("#time");
    // timer
    function timeIt() {
        counter++;
        timer.html(timeLeft - counter);
    }
    function intervalFunction() {
        setInterval(timeIt, 1000);

    }
    var wins = 0;
    var losses = 0;

    //Starts the clock, as well as starts the for loop that puts the game on the screen
    $("#button").click(function () {

        intervalFunction();
        if (running = false) {
            running = true;
        }
        else if (timeLeft === 0) {
            running = false;
            clearInterval;
            alert("Times up!");
        }
        $("#button").attr("disabled", "disabled");
        // for loop to append all questions 

        function checkAnswer(answer) {

            var cAnswerOne = questions[0].answers.choiceA;
            var cAnswerTwo = questions[1].answers.choiceB;
            var cAnswerThree = questions[2].answers.choiceC;
            var cAnswerFour = questions[3].answers.choiceD;

            if (cAnswerOne) {
                alert("Woo! That was right");
                wins++;
            }
            if (cAnswerTwo) {
                alert("Woo! That was right");
                wins++;
            }
            if (cAnswerThree) {
                alert("Woo! That was right");
                wins++;
            }
            if (cAnswerFour) {
                alert("Woo! That was right");
                wins++;
            }

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








            checkAnswer();

        }
        $("#answerDiv").click(function () {
            console.log(this.Answers)

        });

        for (var currentQuestion = 0; currentQuestion < 1; currentQuestion++) {

            display();

        }
    });
})