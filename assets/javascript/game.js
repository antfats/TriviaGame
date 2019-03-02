$(document).ready(function () {
    //Questions here!
    var questions = [{
        question: 'What does the < h1 > tag do in html',

        answers:
        {
            choiceA: "Capitalizes everything ",
            choiceB: "Formats the text ",
            choiceC: "Makes everything inside a header ",
            choiceD: "Nothing ",

        }

    }, {
        question: "How do I call a function in javascript",

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

        // for loop to append all questions 


        for (var currentQuestion = 0; currentQuestion < questions.length; currentQuestion++) {
            function display() {

                var choicesOne = questions[currentQuestion].answers;


                answerOne = $("<p class='choices'>");
                questionDiv = $("<p class='questions'>" + (answerOne));

                questionDiv.append(questions[currentQuestion].question)

                answerOne.append(questions[currentQuestion].answers);
                console.log(choicesOne);
                $("#questionDiv").append(questionDiv);
                $("#answerDiv").append(answerOne);


                function checkAnswer(answer) {
                    if (this.click === questions[currentQuestion].answers[2]) {
                        alert("Woo! That was right");
                        wins++;
                    }
                    else if (this.click === questions[currentQuestion].answers[0]) {
                        alert("Nice!");
                        wins++
                    }
                    else if (this.click === questions[currentQuestion].answers[0]) {
                        alert("Nice!");
                        wins++

                    }
                    else if (this.click === questions[currentQuestion].answers[3]) {
                        alert("Nice!");
                        wins++;
                    }
                    $(".choices").click(function () {


                    });
                }
                var questionOne = questions[currentQuestion].question;
            }
            display();

        }
    });
})